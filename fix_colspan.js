const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    let f = path.join(dir, file);
    if (fs.statSync(f).isDirectory()) walk(f);
    else if (f.endsWith('page.tsx')) {
      let c = fs.readFileSync(f, 'utf8');
      c = c.replace(/colSpan="([^"]*)"/g, 'colSpan={$1}');
      c = c.replace(/rowSpan="([^"]*)"/g, 'rowSpan={$1}');
      c = c.replace(/cellSpacing="([^"]*)"/g, 'cellSpacing={$1}');
      c = c.replace(/cellPadding="([^"]*)"/g, 'cellPadding={$1}');
      fs.writeFileSync(f, c);
    }
  });
}
walk('src/app');
console.log('Cleaned table props types');
