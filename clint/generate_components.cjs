const fs = require('fs');
const path = require('path');

const contentMd = fs.readFileSync('/Users/apple/.gemini/antigravity/brain/6fc4751c-b84a-4e54-922b-34fa41094814/.system_generated/steps/6/content.md', 'utf8');
const lines = contentMd.split('\n');

const categories = {};
let currentCategory = null;

// Find the start of the clean list
let startIndex = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('[Diagnostic Equipments](') && lines[i+1] && lines[i+1].startsWith('- [Stethoscopes](')) {
    startIndex = i;
    break;
  }
}

for (let i = startIndex; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  const catMatch = line.match(/^\[([^\]]+)\]\([^)]+\)$/);
  const subCatMatch = line.match(/^- \[([^\]]+)\]\([^)]+\)$/);

  if (catMatch && !catMatch[1].includes('›')) {
    currentCategory = catMatch[1];
    if (!categories[currentCategory]) {
      categories[currentCategory] = [];
    }
  } else if (subCatMatch && currentCategory) {
    categories[currentCategory].push(subCatMatch[1]);
  }
}

function toCamelCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
}

function toPascalCase(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function getRoutePath(str) {
  return '/' + str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const baseDir = path.join(__dirname, 'src/components/CatagoriesPages/Type');
let importsList = [];
let routesList = [];

for (const [catName, subCats] of Object.entries(categories)) {
  const catFolderName = toPascalCase(catName).substring(0, 50); 
  const dirPath = path.join(baseDir, catFolderName);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  for (const subCat of subCats) {
    const compName = toPascalCase(subCat);
    const filePath = path.join(dirPath, `${compName}.jsx`);
    
    const fileContent = `import React from 'react';

const ${compName} = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">${subCat.replace(/'/g, "&apos;")}</h1>
      <div className="bg-blue-50 p-8 rounded-2xl text-center">
        <p className="text-xl text-blue-800">Products for ${subCat.replace(/'/g, "&apos;")} will be listed here soon.</p>
        <p className="mt-4 text-gray-600 font-medium">Please contact us at info@indosurgicals.com for bulk inquiries.</p>
      </div>
    </div>
  );
};

export default ${compName};
`;
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, fileContent);
    }
    
    importsList.push(`import ${compName} from './components/CatagoriesPages/Type/${catFolderName}/${compName}.jsx';`);
    routesList.push(`<Route path="${getRoutePath(subCat)}" element={<${compName} />} />`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generated_imports.txt'), importsList.join('\n'));
fs.writeFileSync(path.join(__dirname, 'generated_routes.txt'), routesList.join('\n'));

console.log("Categories found:", Object.keys(categories).length);
console.log("Total subcategories:", importsList.length);
