import React, { useState } from 'react';

const LabCoatPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const products = [
    { title: "Female Lab Coat 28\"", img: "https://www.indosurgicals.com/images/categories/lab-coat-28.jpg", link: "/female-lab-coat-28" },
    { title: "Female Lab Coat 32\"", img: "https://www.indosurgicals.com/images/categories/lab-coat-32.jpg", link: "/female-lab-coat-32" },
    { title: "Female Lab Coat 35\"", img: "https://www.indosurgicals.com/images/categories/lab-coat-35.jpg", link: "/female-lab-coat-35" },
    { title: "Female Lab Coat 37\"", img: "https://www.indosurgicals.com/images/categories/lab-coat-37.jpg", link: "/female-lab-coat-37" },
    { title: "Unisex Lab Coat 30\"", img: "https://www.indosurgicals.com/images/categories/male-lab-coat-30.jpg", link: "/unisex-lab-coat-30" },
    { title: "Unisex Lab Coat 34\"", img: "https://www.indosurgicals.com/images/categories/male-lab-coat-34.jpg", link: "/unisex-lab-coat-34" },
    { title: "Unisex Lab Coat 37\"", img: "https://www.indosurgicals.com/images/categories/male-lab-coat-37.jpg", link: "/unisex-lab-coat-37" },
    { title: "Unisex Lab Coat 41\"", img: "https://www.indosurgicals.com/images/categories/male-lab-coat-41.jpg", link: "/unisex-lab-coat-41" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-800">
      {/* Header Section */}
      <header className="border-b-2 border-blue-600 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 pb-2">Lab Coat</h1>
      </header>

      {/* Description Section */}
      <section className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-40'}`}>
          <p className="mb-4">
            <strong>IndoSurgicals Private Limited</strong> is a trusted manufacturer of high-quality Lab Coats. 
            Designed for comfort and durability, these coats are perfect for hospitals, labs, and medical colleges. 
            They are used by doctors, nurses, researchers, and many other professionals.
          </p>
          <p className="mb-4">
            We offer various styles including half sleeve, full sleeve, and knit cuffs. You can choose from multiple closures 
            like buttons, snaps, or zippers. Our fabrics range from cotton to poly-blends with different weights (170 to 235 GSM) 
            to suit your needs.
          </p>
          <p className="mb-4">
            Sizes are available from <strong>XXS to XXXXL</strong>, ensuring a professional fit for everyone.
          </p>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-semibold hover:underline mt-2 focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>

        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500">
          <p className="text-sm">
            Please send your requirement with quantity to 
            <a href="mailto:info@indosurgicals.com" className="text-blue-700 font-bold ml-1">info@indosurgicals.com</a> 
            for CIF/C&F pricing.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <h2 className="text-xl font-bold mb-6 text-center uppercase tracking-wide border-b pb-2">
        Our Product Categories
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <a href={product.link} className="block">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabCoatPage;