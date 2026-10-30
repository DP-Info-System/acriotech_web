const fs = require('fs');
const path = require('path');

// 1. Process page.tsx
const pagePath = path.join(__dirname, '../src/app/page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

// Fix Point 6: Card 01 SVG clipping & text overlap
pageCode = pageCode.replace(
  /<div style=\{\{\s*position:\s*'absolute',\s*top:\s*15,\s*right:\s*25,\s*width:\s*'180px',\s*height:\s*'140px'[\s\S]*?<\/svg>\s*<\/div>/,
  `<div style={{ position: 'absolute', top: 20, right: 28, width: '160px', height: '120px', opacity: activeCapability === 0 ? 0.28 : 0.08, pointerEvents: 'none' }} className="transition-opacity duration-300">
                <svg width="100%" height="100%" viewBox="0 0 180 140" fill="none" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
                  <circle cx="40" cy="40" r="12" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="140" cy="40" r="12" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="90" cy="100" r="14" stroke="#93C5FD" strokeWidth="1.5" />
                  <path d="M52 40 L128 40" stroke="#4B61B8" strokeWidth="1.5" />
                  <path d="M48 50 L80 90" stroke="#4B61B8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M132 50 L100 90" stroke="#4B61B8" strokeWidth="1.5" />
                  <circle cx="90" cy="40" r="3" fill="#60A5FA" />
                  <circle cx="90" cy="100" r="4" fill="#38BDF8" />
                </svg>
              </div>`
);

// Card 01 text collision prevention
pageCode = pageCode.replace(
  /maxWidth:\s*'520px'/g,
  "maxWidth: 'min(520px, calc(100% - 130px))'"
);

// Fix Point 6: Card 02 SVG clipping
pageCode = pageCode.replace(
  /<div style=\{\{\s*position:\s*'absolute',\s*top:\s*15,\s*right:\s*20,\s*width:\s*'130px',\s*height:\s*'110px'[\s\S]*?<\/svg>\s*<\/div>/,
  `<div style={{ position: 'absolute', top: 20, right: 28, width: '130px', height: '110px', opacity: activeCapability === 1 ? 0.28 : 0.08, pointerEvents: 'none' }} className="transition-opacity duration-300">
                <svg width="100%" height="100%" viewBox="0 0 130 110" fill="none" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
                  <rect x="10" y="10" width="30" height="24" rx="4" stroke="#4B61B8" strokeWidth="1.5" />
                  <rect x="70" y="10" width="40" height="24" rx="4" stroke="#2563EB" strokeWidth="1.5" />
                  <rect x="40" y="65" width="45" height="24" rx="4" stroke="#38BDF8" strokeWidth="1.5" />
                  <path d="M40 22 L70 22" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
                  <path d="M25 34 L50 65" stroke="#475569" strokeWidth="1.5" />
                  <path d="M90 34 L75 65" stroke="#475569" strokeWidth="1.5" />
                </svg>
              </div>`
);

// Standardize border-radius in page.tsx
// 1. All Capability Cards (01-05) -> 12px
pageCode = pageCode.replace(
  /(background:\s*activeCapability\s*===\s*\d\s*\?\s*['"]#0F172A['"]\s*:\s*['"]#FFFFFF['"],\s*)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '12px'"
);

// 2. Capability tags -> 6px
pageCode = pageCode.replace(
  /(border:\s*activeCapability\s*===\s*0\s*\?\s*['"]1px solid rgba\(56, 189, 248, 0\.3\)['"]\s*:\s*['"]1px solid #E2E8F0['"],\s*)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '6px'"
);

// 3. Icon boxes -> 8px
pageCode = pageCode.replace(
  /width:\s*['"]40px['"],\s*height:\s*['"]40px['"],\s*borderRadius:\s*['"]2px['"]/g,
  "width: '40px', height: '40px', borderRadius: '8px'"
);

// 4. Hero Metric boxes (12+ Years, 80+ Systems, etc.) -> 12px
pageCode = pageCode.replace(
  /(background:\s*'rgba\(255,255,255,0\.03\)',\s*border:\s*'1px solid rgba\(255,255,255,0\.08\)',\s*padding:\s*'1\.25rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '12px'"
);

// 5. Hero Eyebrow badge -> 6px
pageCode = pageCode.replace(
  /(display:\s*'inline-flex',\s*alignItems:\s*'center',\s*gap:\s*'0\.75rem',\s*background:\s*'rgba\(75, 97, 184, 0\.08\)',\s*border:\s*'1px solid rgba\(75, 97, 184, 0\.2\)',\s*padding:\s*'0\.4rem 0\.9rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '6px'"
);
pageCode = pageCode.replace(
  /(display:\s*'flex',\s*gap:\s*'0\.35rem',\s*background:\s*'rgba\(255,255,255,0\.05\)',\s*padding:\s*'0\.25rem 0\.5rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '6px'"
);

// 6. Case Study Cards -> 12px, sub-metric boxes -> 8px, tags -> 6px
pageCode = pageCode.replace(
  /(padding:\s*'2\.5rem',\s*border:\s*'1px solid #E2E8F0',\s*background:\s*'#FFFFFF',\s*boxShadow:\s*'0 10px 30px -10px rgba\(15,23,42,0\.05\)',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '12px'"
);
pageCode = pageCode.replace(
  /(padding:\s*'1rem',\s*background:\s*'rgba\(255,255,255,0\.03\)',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '8px'"
);
pageCode = pageCode.replace(
  /(fontSize:\s*'0\.75rem',\s*padding:\s*'0\.2rem 0\.6rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '6px'"
);

// 7. General remaining 2px cards in page.tsx
pageCode = pageCode.replace(
  /(padding:\s*['"][^'"]*?['"],\s*background:\s*['"][^'"]*?['"],\s*border:\s*['"][^'"]*?['"],\s*)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '12px'"
);
pageCode = pageCode.replace(
  /(background:\s*['"][^'"]*?['"],\s*border:\s*['"][^'"]*?['"],\s*padding:\s*['"][^'"]*?['"],\s*)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '12px'"
);

fs.writeFileSync(pagePath, pageCode, 'utf8');
console.log('page.tsx successfully updated');

// 2. Process solutions/page.tsx
const solPath = path.join(__dirname, '../src/app/solutions/page.tsx');
let solCode = fs.readFileSync(solPath, 'utf8');

// Cards -> 12px
solCode = solCode.replace(
  /(background:\s*isActive\s*\?\s*['"]#0B132B['"]\s*:\s*['"]#FFFFFF['"],[\s\S]*?)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '12px'"
);
// Engagement model cards -> 12px
solCode = solCode.replace(
  /(padding:\s*'2\.5rem 2rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '12px'"
);
// Badges -> 6px
solCode = solCode.replace(
  /(className="card-badge"[\s\S]*?)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '6px'"
);
// Tags -> 6px
solCode = solCode.replace(
  /(className="card-tag"[\s\S]*?)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '6px'"
);
// Icon squares -> 6px
solCode = solCode.replace(
  /width:\s*'28px',\s*height:\s*'28px',\s*borderRadius:\s*'2px'/g,
  "width: '28px', height: '28px', borderRadius: '6px'"
);
// Buttons -> 8px
solCode = solCode.replace(
  /(padding:\s*'0\.95rem 1\.8rem',[\s\S]*?)borderRadius:\s*'2px'/g,
  "$1borderRadius: '8px'"
);
solCode = solCode.replace(
  /(padding:\s*'0\.85rem 1\.8rem',[\s\S]*?)borderRadius:\s*'2px'/g,
  "$1borderRadius: '8px'"
);
solCode = solCode.replace(
  /(padding:\s*'0\.8rem 1\.8rem',[\s\S]*?)borderRadius:\s*'2px'/g,
  "$1borderRadius: '8px'"
);

fs.writeFileSync(solPath, solCode, 'utf8');
console.log('solutions/page.tsx successfully updated');

// 3. Process services/page.tsx
const svcPath = path.join(__dirname, '../src/app/services/page.tsx');
let svcCode = fs.readFileSync(svcPath, 'utf8');

// Cards -> 12px
svcCode = svcCode.replace(
  /(background:\s*isActive\s*\?\s*['"]#0B132B['"]\s*:\s*['"]#FFFFFF['"],[\s\S]*?)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '12px'"
);
// Badges -> 6px
svcCode = svcCode.replace(
  /(className="card-badge"[\s\S]*?)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '6px'"
);
// Tags -> 6px
svcCode = svcCode.replace(
  /(className="card-tag"[\s\S]*?)borderRadius:\s*['"]2px['"]/g,
  "$1borderRadius: '6px'"
);
// Buttons -> 8px
svcCode = svcCode.replace(
  /(padding:\s*'0\.9rem 1\.8rem',[\s\S]*?)borderRadius:\s*'2px'/g,
  "$1borderRadius: '8px'"
);
// Domain number badge -> 6px
svcCode = svcCode.replace(
  /(padding:\s*'0\.15rem 0\.55rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '6px'"
);
// Eyebrow badge -> 6px
svcCode = svcCode.replace(
  /(padding:\s*'0\.35rem 0\.85rem',\s*)borderRadius:\s*'2px'/g,
  "$1borderRadius: '6px'"
);

fs.writeFileSync(svcPath, svcCode, 'utf8');
console.log('services/page.tsx successfully updated');

// 4. In NavBar.tsx, ensure MenuSchematicVisual never clips
const navPath = path.join(__dirname, '../src/components/NavBar.tsx');
let navCode = fs.readFileSync(navPath, 'utf8');

navCode = navCode.replace(
  /<svg width="100%" height="90" viewBox="0 0 200 90" fill="none" style=\{\{ margin: '0\.75rem 0' \}\}>/g,
  '<svg width="100%" height="90" viewBox="0 0 200 90" fill="none" preserveAspectRatio="xMidYMid meet" style={{ margin: "0.75rem 0", overflow: "visible" }}>'
);

fs.writeFileSync(navPath, navCode, 'utf8');
console.log('NavBar.tsx schematic SVGs unclipped');
