#!/bin/bash

# Folder structure banana shuru karte hain
mkdir -p public/images public/docs
mkdir -p src/assets/styles src/assets/fonts
mkdir -p src/components/common src/components/layout src/components/cards
mkdir -p src/features/auth src/features/shop src/features/cart src/features/admin
mkdir -p src/pages/product
mkdir -p src/context src/hooks src/services src/utils

# Basic placeholder files create karte hain
touch src/assets/styles/globals.css
touch src/components/layout/Navbar.jsx
touch src/components/layout/Footer.jsx
touch src/components/cards/ProductCard.jsx
touch src/pages/index.js
touch src/pages/shop.js
touch src/pages/product/[id].js
touch src/context/CartContext.js
touch src/services/api.js
touch .env
touch tailwind.config.js

echo "✅ Medical Website Structure Created Successfully!"