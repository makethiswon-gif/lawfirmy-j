import os
import re
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

BASE_URL = "https://lawfirmjunghoon.kr"
BOARD_URL = f"{BASE_URL}/bbs/board.php"
IMAGE_DIR = r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\public\images\columns"
OUTPUT_FILE = r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\src\data\columns.ts"

os.makedirs(IMAGE_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
}

articles = []
page = 1

while True:
    print(f"Fetching list page {page}...")
    res = requests.get(f"{BOARD_URL}?bo_table=board2&page={page}", headers=headers, verify=False)
    res.encoding = 'utf-8'
    soup = BeautifulSoup(res.text, 'html.parser')
    
    links = soup.select("td.td_subject a")
    valid_links = [l for l in links if 'wr_id=' in l.get('href', '')]
    
    if not valid_links:
        break
        
    for link in valid_links:
        href = link.get('href')
        full_url = urljoin(BASE_URL, href.replace('..', ''))
        
        match = re.search(r'wr_id=(\d+)', href)
        if not match:
            continue
        wr_id = match.group(1)
        
        if any(a['id'] == wr_id for a in articles):
            continue
            
        print(f"Fetching article {wr_id}...")
        a_res = requests.get(full_url, headers=headers, verify=False)
        a_res.encoding = 'utf-8'
        a_soup = BeautifulSoup(a_res.text, 'html.parser')
        
        title_el = a_soup.select_one("#bo_v_title")
        title = title_el.text.strip() if title_el else link.text.strip()
        
        info_el = a_soup.select_one("#bo_v_info")
        date_text = ""
        if info_el:
            date_match = re.search(r'\d{2}-\d{2}-\d{2} \d{2}:\d{2}', info_el.text)
            if date_match:
                date_text = "20" + date_match.group(0).split(' ')[0]
        if not date_text:
            date_td = link.find_parent('tr').select_one('.td_datetime')
            date_text = date_td.text.strip() if date_td else "2022-01-01"
            if len(date_text) == 8:
                 date_text = "20" + date_text
        
        con_el = a_soup.select_one("#bo_v_con")
        if not con_el:
            continue
        
        images = con_el.select("img")
        for img in images:
            img_src = img.get('src')
            if not img_src: continue
            
            img_full_url = urljoin(BASE_URL, img_src)
            img_filename = os.path.basename(urlparse(img_full_url).path)
            if not img_filename:
                img_filename = f"image_{wr_id}.jpg"
                
            img_path = os.path.join(IMAGE_DIR, img_filename)
            
            try:
                img_data = requests.get(img_full_url, headers=headers, verify=False).content
                with open(img_path, 'wb') as f:
                    f.write(img_data)
                
                img['src'] = f"/images/columns/{img_filename}"
            except Exception as e:
                print(f"Failed to download image: {e}")
                
        for tag in con_el(['style', 'script', 'iframe']):
            tag.decompose()
        
        html_content = str(con_el)
        html_content = re.sub(r' (id|class)="[^"]*"', '', html_content)
        
        articles.append({
            "id": wr_id,
            "title": title,
            "date": date_text,
            "content": html_content
        })
        
    page += 1

print(f"Total articles scraped: {len(articles)}")

ts_content = "export const columns = [\n"
for a in articles:
    ts_content += f"  {{\n    id: {json.dumps(a['id'], ensure_ascii=False)},\n    title: {json.dumps(a['title'], ensure_ascii=False)},\n    date: {json.dumps(a['date'], ensure_ascii=False)},\n    content: {json.dumps(a['content'], ensure_ascii=False)}\n  }},\n"
ts_content += "];\n"

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Written to {OUTPUT_FILE}")
