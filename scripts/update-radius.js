const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/globals.css');
let css = fs.readFileSync(filePath, 'utf8');

// Replace .card
css = css.replace(
  /(\.card\s*\{[^}]*?border-radius:\s*)var\(--radius-sm,\s*8px\);/s,
  '$1var(--radius-md, 12px);'
);

// Replace .capabilities-card
css = css.replace(
  /(\.capabilities-card\s*\{[^}]*?border-radius:\s*)var\(--radius-sm,\s*8px\);/s,
  '$1var(--radius-md, 12px);'
);

// Replace .interactive-card
css = css.replace(
  /(\.interactive-card\s*\{[^}]*?border-radius:\s*)2px\s*!important;/g,
  '$1var(--radius-md, 12px) !important;'
);

// Replace .card-badge
css = css.replace(
  /(\.card-badge\s*\{[^}]*?border-radius:\s*)2px\s*!important;/g,
  '$1var(--radius-xs, 6px) !important;'
);

// Replace .card-tag
css = css.replace(
  /(\.card-tag\s*\{[^}]*?border-radius:\s*)2px\s*!important;/g,
  '$1var(--radius-xs, 6px) !important;'
);

// Replace .interactive-card:hover .card-badge
css = css.replace(
  /(\.interactive-card:hover\s*\.card-badge[^{]*\{[^}]*?border-radius:\s*)2px\s*!important;/g,
  '$1var(--radius-xs, 6px) !important;'
);

// Replace .interactive-card:hover .card-tag
css = css.replace(
  /(\.interactive-card:hover\s*\.card-tag[^{]*\{[^}]*?border-radius:\s*)2px\s*!important;/g,
  '$1var(--radius-xs, 6px) !important;'
);

// Replace button, input, select, textarea
css = css.replace(
  /button,\s*input,\s*select,\s*textarea\s*\{\s*border-radius:\s*2px\s*!important;\s*\}/g,
  'button, input, select, textarea {\n  border-radius: var(--radius-sm, 8px);\n}'
);

// Replace .rounded-full... override with standardized Tailwind mappings
css = css.replace(
  /\.rounded-full,\s*\.rounded-2xl,\s*\.rounded-xl,\s*\.rounded-lg,\s*\.rounded-md\s*\{\s*border-radius:\s*2px\s*!important;\s*\}/g,
  `/* Restored Standard Radius Utilities */
.rounded-xs { border-radius: var(--radius-xs, 6px) !important; }
.rounded-sm { border-radius: var(--radius-sm, 8px) !important; }
.rounded-md { border-radius: var(--radius-sm, 8px) !important; }
.rounded-lg { border-radius: var(--radius-md, 12px) !important; }
.rounded-xl { border-radius: var(--radius-lg, 16px) !important; }
.rounded-2xl { border-radius: 20px !important; }
.rounded-full { border-radius: 9999px !important; }`
);

fs.writeFileSync(filePath, css, 'utf8');
console.log('Successfully updated globals.css with 2026 border radius tokens');

