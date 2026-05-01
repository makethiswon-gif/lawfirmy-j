const fs = require('fs');
const path = require('path');
const https = require('https');

// Define mapping of co_id to Next.js routes
const routeMap = {
  // 카라소개
  'sub1_1': 'about',
  'sub1_2': 'about/lawyer', // Need to handle sub-routes, but user wanted query params? Or sub-folders?
  'sub1_3': 'about/special',
  'sub1_4': 'about/location',
  // 이혼
  'sub2_1': 'divorce',
  'sub2_2': 'divorce/litigation',
  'sub2_3': 'divorce/property',
  'sub2_4': 'divorce/common-law',
  'sub2_5': 'divorce/international',
  // 상속
  'sub3_1': 'inheritance',
  'sub3_2': 'inheritance/legitime',
  'sub3_3': 'inheritance/will',
  'sub3_4': 'inheritance/renunciation',
  'sub3_5': 'inheritance/qualified',
  // 기타 소송
  'sub4_1': 'other',
  'sub4_2': 'other/child-support',
  'sub4_3': 'other/domestic-violence',
  'sub4_4': 'other/annulment',
  'sub4_5': 'other/damages'
};

const BASE_URL = 'https://www.calla-law.com/bbs/content.php?co_id=';
const OUT_DIR = path.join(__dirname, 'src', 'app');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractContainerHtml(html) {
  // Find <div id="container"> and extract its inner HTML
  // Simple regex extraction since we know the structure
  const startIndex = html.indexOf('<div id="container">');
  if (startIndex === -1) return null;
  
  let openDivs = 0;
  let endIndex = -1;
  
  for (let i = startIndex; i < html.length; i++) {
    if (html.substr(i, 4) === '<div') openDivs++;
    else if (html.substr(i, 5) === '</div') {
      openDivs--;
      if (openDivs === 0) {
        endIndex = i + 6;
        break;
      }
    }
  }
  
  if (endIndex === -1) return null;
  return html.substring(startIndex, endIndex);
}

function convertHtmlToJsx(html) {
  // Convert basic HTML to JSX
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/<img([^>]*)>/g, '<img$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<input([^>]*)>/g, '<input$1 />')
    .replace(/&nbsp;/g, '&#160;')
    .replace(/style="([^"]*)"/g, (match, styleString) => {
      // Basic inline style conversion
      const styleObj = {};
      styleString.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const [key, value] = rule.split(':');
        if (key && value) {
          const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          styleObj[camelKey] = value.trim();
        }
      });
      return `style={${JSON.stringify(styleObj)}}`;
    });
    
  return jsx;
}

async function main() {
  console.log('Starting subpage extraction...');
  
  for (const [co_id, route] of Object.entries(routeMap)) {
    console.log(`Processing ${co_id} -> ${route}`);
    try {
      const html = await fetchHtml(BASE_URL + co_id);
      const containerHtml = extractContainerHtml(html);
      
      if (!containerHtml) {
        console.error(`Could not extract container for ${co_id}`);
        continue;
      }
      
      const jsx = convertHtmlToJsx(containerHtml);
      
      // Fix image paths
      // Original: src="http://www.calla-law.com/data/editor/..."
      // Or: src="/img/sub/..."
      // For now, we will leave them pointing to the absolute URL or public directory
      const fixedJsx = jsx.replace(/src="\/(img|data)/g, 'src="http://www.calla-law.com/$1');
      
      const componentCode = `
import React from 'react';

export default function Subpage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#fff' }}>
      ${fixedJsx}
    </div>
  );
}
`;
      const routeDir = path.join(OUT_DIR, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(routeDir, 'page.tsx'), componentCode);
      console.log(`Successfully created ${route}/page.tsx`);
      
    } catch (err) {
      console.error(`Error processing ${co_id}:`, err);
    }
  }
  
  console.log('Extraction complete!');
}

main();
