const fs = require('fs');
const path = require('path');

// 1. Get all valid routes from App.jsx
const appContent = fs.readFileSync('src/App.jsx', 'utf8');
const routeRegex = /path="([^"]+)"/g;
const validPaths = [];
let match;
while ((match = routeRegex.exec(appContent)) !== null) {
  validPaths.push(match[1]);
}

console.log(`Found ${validPaths.length} valid routes in App.jsx`);

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const listDir = 'src/components/CatagoriesPages/listPage';
const files = fs.readdirSync(listDir);

files.forEach(file => {
  if (!file.endsWith('.jsx')) return;
  
  const filePath = path.join(listDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find categories array
  // It looks like: const categories = [ { title: "...", link: "..." }, ... ];
  // OR product array etc.
  
  const categoriesRegex = /categories\s*=\s*\[([\s\S]*?)\];/;
  const categoriesMatch = content.match(categoriesRegex);
  
  if (categoriesMatch) {
    let arrayContent = categoriesMatch[1];
    
    // Split into individual objects
    const itemRegex = /\{([^}]+)\}/g;
    let itemMatch;
    let newArrayContent = arrayContent;
    
    while ((itemMatch = itemRegex.exec(arrayContent)) !== null) {
      const originalItem = itemMatch[0];
      const itemBody = itemMatch[1];
      
      // Extract title/name
      const titleMatch = itemBody.match(/(?:title|name):\s*['"]([^'"]+)['"]/);
      if (titleMatch) {
        const title = titleMatch[1];
        const slug = '/' + slugify(title);
        
        // Find best match in validPaths
        let bestPath = null;
        
        // Exact match?
        if (validPaths.includes(slug)) {
          bestPath = slug;
        } else {
          // Partial match? (e.g. /stethoscopes matches /diagnostic-equipments/stethoscopes if I had levels, but I don't)
          // Let's try to see if any valid path STARTS with our slug or vice versa
          bestPath = validPaths.find(p => p === slug || p.startsWith(slug + '-') || slug.startsWith(p + '-'));
          
          if (!bestPath) {
             // Try to find if the slug is a SUBSET of any valid path
             bestPath = validPaths.find(p => p.includes(slug) || slug.includes(p));
          }
        }
        
        if (bestPath && bestPath !== '/') {
           console.log(`Matching: "${title}" -> ${bestPath}`);
           const updatedItem = originalItem.replace(/link:\s*['"][^'"]*['"]/, `link: "${bestPath}"`);
           newArrayContent = newArrayContent.replace(originalItem, updatedItem);
        }
      }
    }
    
    content = content.replace(categoriesMatch[1], newArrayContent);
    fs.writeFileSync(filePath, content);
  }
});

console.log('Finished updating list pages with valid routes.');
