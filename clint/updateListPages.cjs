const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
const listPageDir = path.join(__dirname, 'src', 'components', 'CatagoriesPages', 'listPage');

// Read App.jsx and extract all routes
const appJsxCode = fs.readFileSync(appJsxPath, 'utf8');
const routeRegex = /<Route\s+path=["']([^"']+)["']\s+element=\{<([A-Za-z0-9]+)\s*\/>\}\s*\/>/g;
const routes = [];
let match;
while ((match = routeRegex.exec(appJsxCode)) !== null) {
  routes.push({ path: match[1], component: match[2] });
}

// Helper to convert title to potential component name
function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Custom manual mappings for tricky titles if needed
const customMaps = {
    // We can add exceptions here if PascalCase derivation fails
    'ECG Machines': 'ECGMachineECGPaperRolls',
    'Reflex Hammers': 'MedicalReflexHammers'
};

const mapTitleToRoute = (title) => {
    let compName;
    if (customMaps[title]) {
        compName = customMaps[title];
    } else {
        compName = toPascalCase(title);
        // Sometimes uppercase is preserved differently, let's try case-insensitive component search
    }
    
    let matchedRoute = routes.find(r => r.component.toLowerCase() === compName.toLowerCase());
    if (matchedRoute) return matchedRoute.path;

    // Fallback: convert title to kebab-case directly and see if route exists
    let kebab = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    matchedRoute = routes.find(r => r.path === `/${kebab}` || r.path === kebab);
    if (matchedRoute) return matchedRoute.path;

    // Last resort fallback
    return `/${kebab}`;
};

const files = fs.readdirSync(listPageDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(listPageDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    let originalCode = code;

    // 1. Add 'link' property to categories if missing
    // Regex matches `{ title: "...", img: "..." }` handling different spacing and optional trailing commas
    const categoryItemRegex = /{\s*title:\s*(["'])(.*?)\1,\s*img:\s*(["'])(.*?)\3\s*}/g;
    
    code = code.replace(categoryItemRegex, (match, q1, title, q2, img) => {
        let route = mapTitleToRoute(title);
        if (!route.startsWith('/')) route = '/' + route;
        return `{ title: "${title}", img: "${img}", link: "${route}" }`;
    });

    // 2. Change the <div> wrapper in the map to <a> wrapper
    // Find the map block
    const mapMatch = code.match(/\{categories\.map\(\s*\(\s*[a-zA-Z0-9_]+\s*,\s*index\s*\)\s*=>\s*\(\s*/);
    if (mapMatch) {
       // Check if there's a div key={index} right after
       const mapIndex = code.indexOf(mapMatch[0]);
       const afterMap = code.slice(mapIndex + mapMatch[0].length);
       
       // Match first <div> tag with key={...}
       const divRegex = /<div([^>]*?key=\{index\}[^>]*?)>/;
       const divMatch = afterMap.match(divRegex);
       
       if (divMatch) {
           // We found the wrapping div. Let's replace it with <a href={item.link}>
           // Wait, is it already an <a> tag?
           // The Xray.jsx is already an <a>, Digno.jsx is already an <a>.
           // We only replace if it's a <div>.
           const divStr = divMatch[0];
           const replacementStr = `<a${divMatch[1]} href={item.link}>`;
           
           code = code.replace(divStr, replacementStr);
           
           // We also need to replace the CLOSING </div> corresponding to this div with </a>.
           // This is tricky with regex, simpler string processing is better.
           // We can just find the matching closing div by counting open/close tags
           
           // Look for the end of the map callback: `))` or `)}`
           // Let's replace the last </div> before the end of map `))} `
           // Usually the block ends with `</div>\n        ))}` or similar
           // A safer bet: find where the replacement happened, then scan forward counting div tags
           const startIdx = code.indexOf(replacementStr);
           if (startIdx !== -1) {
               let ptr = startIdx + replacementStr.length;
               let depth = 1; // we opened an <a>, we act like we are tracking this matching element
               // actually we expect depth to reach 0 when we hit the closing tag
               // but the code still has <div> and </div>
               
               while (depth > 0 && ptr < code.length) {
                   const nextOpen = code.indexOf('<div', ptr);
                   const nextClose = code.indexOf('</div', ptr);
                   
                   if (nextClose === -1) break;
                   
                   // Compare which comes first
                   if (nextOpen !== -1 && nextOpen < nextClose) {
                       depth++;
                       ptr = nextOpen + 4;
                   } else {
                       depth--;
                       if (depth === 0) {
                           // This is the matching </div>!
                           code = code.slice(0, nextClose) + '</a>' + code.slice(nextClose + 6);
                       }
                       ptr = nextClose + 6;
                   }
               }
           }
       }
    }

    if (originalCode !== code) {
        fs.writeFileSync(filePath, code);
        console.log(`Updated ${file}`);
    }
});

console.log("Transformation complete.");
