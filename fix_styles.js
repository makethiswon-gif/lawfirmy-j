const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    let f = path.join(dir, file);
    if (fs.statSync(f).isDirectory()) walk(f);
    else if (f.endsWith('page.tsx')) {
      let c = fs.readFileSync(f, 'utf8');
      c = c.replace(/style="([^"]*)"/g, (match, s) => {
        const obj = {};
        s.split(';').forEach(rule => {
          if(!rule.trim()) return;
          const [k, v] = rule.split(':');
          if(k && v) {
            const camel = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            obj[camel] = v.trim();
          }
        });
        return 'style={' + JSON.stringify(obj) + '}';
      });
      fs.writeFileSync(f, c);
    }
  });
}
walk('src/app');
console.log('Cleaned style props');
