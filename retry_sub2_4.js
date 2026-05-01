const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://www.calla-law.com/bbs/content.php?co_id=sub2_4';
const OUT_DIR = path.join(__dirname, 'src', 'app', 'divorce', 'common-law');

https.get(BASE_URL, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const startIndex = data.indexOf('<div id="container">');
    let openDivs = 0, endIndex = -1;
    for (let i = startIndex; i < data.length; i++) {
      if (data.substr(i, 4) === '<div') openDivs++;
      else if (data.substr(i, 5) === '</div') {
        openDivs--;
        if (openDivs === 0) { endIndex = i + 6; break; }
      }
    }
    const html = data.substring(startIndex, endIndex);
    const jsx = html.replace(/class=/g, 'className=').replace(/<img([^>]*)>/g, '<img$1 />').replace(/<br>/g, '<br />').replace(/src="\/(img|data)/g, 'src="http://www.calla-law.com/$1');
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, {recursive: true});
    fs.writeFileSync(path.join(OUT_DIR, 'page.tsx'), `import React from 'react';\nexport default function Subpage() { return <div style={{paddingTop:'100px',minHeight:'100vh',backgroundColor:'#fff'}}>${jsx}</div>; }`);
    console.log('sub2_4 success');
  });
});
