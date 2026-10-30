const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/NavBar.tsx');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Header main pill container
code = code.replace(
  /borderRadius:\s*'2px',\s*display:\s*'flex',\s*justifyContent:\s*'space-between',\s*alignItems:\s*'center',\s*zIndex:\s*2/g,
  "borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2"
);

// 2. Active nav hover pill
code = code.replace(
  /background:\s*'rgba\(75,\s*97,\s*184,\s*0\.05\)',\s*borderRadius:\s*'2px'/g,
  "background: 'rgba(75, 97, 184, 0.05)', borderRadius: '6px'"
);

// 3. Mega menu dropdown panel
code = code.replace(
  /backgroundColor:\s*'#ffffff',\s*background:\s*'#ffffff',\s*borderRadius:\s*'2px',\s*boxShadow:/g,
  "backgroundColor: '#ffffff', background: '#ffffff', borderRadius: '16px', boxShadow:"
);

// 4. Mega menu sublink items
code = code.replace(
  /border:\s*isHovered\s*\?\s*'1px solid rgba\(75, 97, 184, 0\.2\)'\s*:\s*'1px solid #F1F5F9',\s*borderRadius:\s*'2px',/g,
  "border: isHovered ? '1px solid rgba(75, 97, 184, 0.2)' : '1px solid #F1F5F9', borderRadius: '6px',"
);

// 5. Mobile CTA button
code = code.replace(
  /background:\s*'#0F172A',\s*color:\s*'#fff',\s*padding:\s*'1rem',\s*borderRadius:\s*'2px'/g,
  "background: '#0F172A', color: '#fff', padding: '1rem', borderRadius: '8px'"
);

// 6. Logo container
code = code.replace(
  /width:\s*'28px',\s*height:\s*'28px',\s*display:\s*'flex',\s*alignItems:\s*'center',\s*justifyContent:\s*'center',\s*borderRadius:\s*'2px'/g,
  "width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px'"
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated NavBar.tsx with rounded radius scale');

