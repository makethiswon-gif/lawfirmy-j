import urllib.request
from bs4 import BeautifulSoup
import re
import os

url = 'https://www.calla-law.com/bbs/content.php?co_id=sub1_1'
response = urllib.request.urlopen(url)
html = response.read().decode('euc-kr', errors='replace')

soup = BeautifulSoup(html, 'lxml')
content_div = soup.find('div', id='ctt_con')

if content_div:
    # Fix image URLs
    for img in content_div.find_all('img'):
        src = img.get('src', '')
        if src.startswith('/'):
            img['src'] = 'https://www.calla-law.com' + src
        elif not src.startswith('http'):
            img['src'] = 'https://www.calla-law.com/bbs/' + src
            
    # Convert classes to className
    content_html = str(content_div)
    content_html = content_html.replace('class=', 'className=')
    # Replace <br> with <br />
    content_html = re.sub(r'<br\s*>', '<br />', content_html)
    # Replace <img ...> with <img ... />
    content_html = re.sub(r'<img([^>]+?)(?<!/)>', r'<img\1 />', content_html)
    
    # Generate TSX
    tsx_content = f"""import React from 'react';
import inner from '../inner.module.css';

export default function AboutPage() {{
  return (
    <>
      <div className={{inner.pageHeader}} style={{backgroundImage: "url('/img/bg_sub1.jpg')"}}>
        <div className="container">
          <div className={{inner.breadcrumb}}>
            HOME <span>›</span> 카라소개 <span>›</span> <span>카라소개</span>
          </div>
          <h1 className={{inner.pageTitle}}>카라소개</h1>
        </div>
      </div>
      <div className={{inner.divider}} style={{ margin: 0 }}></div>

      <div className="sub-contentwr">
        {content_html}
      </div>
    </>
  );
}}
"""
    with open('test_about.tsx', 'w', encoding='utf-8') as f:
        f.write(tsx_content)
    print("test_about.tsx created successfully!")
else:
    print("Could not find ctt_con")
