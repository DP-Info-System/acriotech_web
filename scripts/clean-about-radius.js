const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/about-us/page.tsx');
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(/borderRadius:\s*'2px'/g, "borderRadius: '12px'");
code = code.replace(/(<span key=\{t\}[^>]*?)borderRadius:\s*'12px'/g, "$1borderRadius: '6px'");
code = code.replace(/(padding:\s*'0\.85rem 1\.75rem'[^>]*?)borderRadius:\s*'12px'/g, "$1borderRadius: '8px'");

fs.writeFileSync(filePath, code, 'utf8');
console.log('about-us standardized cleanly');

