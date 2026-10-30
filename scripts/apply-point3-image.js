const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, '../src/app/about-us/page.tsx');
let aboutCode = fs.readFileSync(aboutPath, 'utf8');

// 1. Replace empty office image with the approved developer team image
aboutCode = aboutCode.replace(
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
);

aboutCode = aboutCode.replace(
  'alt="Acriotech Engineering Studio"',
  'alt="Acriotech Senior Engineering Pod Collaborating with Laptops"'
);

// 2. Standardize all 2px radius on about-us cards & containers to modern 12px / 8px scale
aboutCode = aboutCode.replace(
  /(boxShadow:\s*'0 20px 40px rgba\(15,23,42,0\.12\)',\s*border:\s*'1px solid #CBD5E1',\s*height:\s*'340px',\s*position:\s*'relative'\s*\}\}>\s*<img)/,
  "$1"
);

// Containers in about-us
aboutCode = aboutCode.replace(
  /(style=\{\{\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '12px'"
);

aboutCode = aboutCode.replace(
  /(background:\s*'rgba\(255, 255, 255, 0\.04\)',\s*border:\s*'1px solid rgba\(255, 255, 255, 0\.08\)',\s*)borderRadius:\s*'12px'/g,
  "$1borderRadius: '8px'"
);

fs.writeFileSync(aboutPath, aboutCode, 'utf8');
console.log('Successfully updated about-us/page.tsx with approved Unsplash image and rounded styling');

