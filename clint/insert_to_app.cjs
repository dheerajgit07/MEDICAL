const fs = require('fs');

let appContent = fs.readFileSync('src/App.jsx', 'utf8');

const imports = fs.readFileSync('generated_imports.txt', 'utf8');
const routes = fs.readFileSync('generated_routes.txt', 'utf8');

// remove any carriage returns
const cleanImports = imports.replace(/\r/g, '');
const cleanRoutes = routes.replace(/\r/g, '');

const importInsertMarker = "import { CartProvider } from './context/CartContext.jsx';";
appContent = appContent.replace(importInsertMarker, cleanImports + '\n\n' + importInsertMarker);

const routeInsertMarker = '<Route path="/rehab-products" element={<OrthopaedicAids />} />';
appContent = appContent.replace(routeInsertMarker, routeInsertMarker + '\n              ' + cleanRoutes.split('\n').join('\n              '));

fs.writeFileSync('src/App.jsx', appContent);
console.log('App.jsx updated with generated imports and routes.');
