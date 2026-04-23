import requests
from bs4 import BeautifulSoup

url = "https://lawfirmjunghoon.kr/bbs/board.php?bo_table=board2"
response = requests.get(url, verify=False)
response.encoding = 'utf-8'
soup = BeautifulSoup(response.text, 'html.parser')

# Get total number of pages if pagination exists
pagination = soup.select(".pg_page")
pages = 1
if pagination:
    pages = int(pagination[-1].text.strip())

total_articles = []
for page in range(1, pages + 1):
    p_url = f"{url}&page={page}"
    res = requests.get(p_url, verify=False)
    res.encoding = 'utf-8'
    p_soup = BeautifulSoup(res.text, 'html.parser')
    
    links = p_soup.select("td.td_subject a")
    for link in links:
        href = link.get('href')
        title = link.text.strip()
        # ignore generic links
        if 'wr_id=' in href:
            total_articles.append({"title": title, "url": href})

print(f"Total articles found: {len(total_articles)}")
for article in total_articles[:5]:
    print(f"{article['title']} - {article['url']}")
