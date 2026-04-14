import React, { useState } from 'react';

const Digo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Stethoscopes", img: "https://www.indosurgicals.com/images/categories/stethoscopes.jpg", link: "#" },
    { title: "Laryngoscopes", img: "https://www.indosurgicals.com/images/categories/laryngoscopes.jpg", link: "#" },
    { title: "BP Monitors", img: "https://www.indosurgicals.com/images/categories/sphygmomanometers.jpg", link: "#" },
    { title: "Reflex Hammers", img: "https://www.indosurgicals.com/images/categories/medical-hammers.jpg", link: "#" },
    { title: "ECG Machines", img: "https://www.indosurgicals.com/images/categories/ecg-machine.jpg", link: "#" },
    { title: "Pulse Oximeter", img: "https://www.indosurgicals.com/images/categories/pulse-oximeter.jpg", link: "#" },
    { title: "Nebulizers", img: "https://www.indosurgicals.com/images/categories/nebulizer.jpg", link: "#" },
    { title: "Otoscopes", img: "https://www.indosurgicals.com/images/categories/otoscopes.jpg", link: "#" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Diagnostic Equipments</h1>
      
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img 
          src="https://www.indosurgicals.com/images/categories/banner/diagnostic-equipments-products-in-india.jpg" 
          alt="Diagnostic Banner" 
          className="w-full object-cover"
        />
      </div>

      {/* Description with "Read More" Toggle */}
      <div className="relative">
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px]' : 'max-h-32'}`}>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Welcome to <strong>IndoSurgicals Private Limited</strong>, the largest and most trusted manufacturer, supplier, and exporter of top-quality Diagnostic Equipments.</p>
            <p>Our extensive product range covers a wide array of essential medical devices, ensuring that healthcare professionals have access to the best tools for accurate diagnostics. Among our offerings are high-quality Stethoscopes, BP Monitors, ECG Machines, Fetal Dopplers, and more.</p>
            <p>At IndoSurgicals, we prioritize quality and reliability. We adhere to stringent manufacturing standards and conduct rigorous quality checks to ensure every piece exceeds industry expectations.</p>
            <p className="bg-blue-50 p-4 border-l-4 border-blue-500 italic">
              Please send your Diagnostic Equipment requirement with quantity at <strong>info@indosurgicals.com</strong> for best CIF/C&F prices.
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-600 font-bold hover:text-blue-800 transition-colors"
        >
          {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
        </button>
      </div>

      <hr className="my-10 border-gray-200" />

      {/* Category Section (Responsive Grid/Slider) */}
      <h2 className="text-2xl font-semibold mb-8 text-center">Find products by category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <a 
            key={index} 
            href={item.link}
            className="group flex flex-col items-center p-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all transform hover:-translate-y-1"
          >
            <div className="w-full h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-center font-medium text-gray-700 group-hover:text-blue-600">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Digo;