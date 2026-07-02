import React, { useState } from 'react';

const HealthYogaProducts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Enema Kits", img: "https://www.indosurgicals.com/images/categories/enema-products.jpg", link: "/enema-kits" },
    { title: "Neti Pot", img: "https://www.indosurgicals.com/images/categories/jala-neti.jpg", link: "/neti-pot" },
    { title: "Neti Salt", img: "https://www.indosurgicals.com/images/categories/neti-salt.jpg", link: "/neti-salt" },
    { title: "Epsom Salt", img: "https://www.indosurgicals.com/images/categories/epsom-salt.jpg", link: "/epsom-salt" },
    { title: "Sitz Bath Tub", img: "https://www.indosurgicals.com/images/categories/sitz-bath-tub.jpg", link: "/sitz-bath-tub" },
    { title: "Enema Syringe & Douche Bulb", img: "https://www.indosurgicals.com/images/categories/enema-syringe-and-douche-bulb.jpg", link: "/enema-syringe-douche-bulb" },
    { title: "Enema Accessories", img: "https://www.indosurgicals.com/images/categories/enema-accessories.jpg", link: "/enema-accessories" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Health & Yoga Products
        </h1>

        <div className="relative mb-12">
          <div 
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-48'}`}
          >
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Private Limited, the <strong>largest and most trusted manufacturer, supplier, and exporter of high-quality Health & Yoga Products</strong>. Our products are widely used in naturopathy centers, ayurvedic hospitals, wellness centers, and for personal home use.</p>
              
              <p>Our extensive product range includes <strong>Enema Kits</strong>, <strong>Neti Pots</strong>, <strong>Neti Salts</strong>, <strong>Epsom Salts</strong>, <strong>Sitz Bath Tub</strong>, and a variety of <strong>Enema Accessories</strong>. Each product is meticulously designed to meet the highest quality standards and deliver exceptional results.</p>
              
              <p>Whether you're seeking natural healing solutions or personal well-being, our Health & Yoga Products provide the perfect balance of effectiveness and convenience. From <strong>detoxifying</strong> with Enema Kits to finding <strong>sinus relief</strong> with Neti Pots and Neti Salts, we offer a range of options to support your holistic lifestyle.</p>
              
              <p>At IndoSurgicals, we prioritize <strong>customer satisfaction</strong> and strive to provide the best quality products that <strong>promote health and wellness</strong>. Trust us for reliable, safe, and effective solutions for your <strong>naturopathy, ayurvedic, and personal health needs</strong>.</p>
              
              <p>Explore our product range today and experience the difference that IndoSurgicals <strong>Health & Yoga Products can make in your well-being</strong>. Contact us to find the perfect product for you.</p>
              
              <p>Please send your <strong>Health & Yoga Products</strong> requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 hover:tracking-[0.2em]"
            style={{ color: colors.brandBlue, borderColor: colors.brandBlue }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

        <div className="mb-8 font-black text-xl border-l-4 pl-4" style={{ color: colors.skyDark, borderColor: colors.emerald }}>
          Find here your product under below listed categories
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
             href={item.link}>
              <div className="p-4 flex items-center justify-center h-48 bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h4 className="font-bold text-sm leading-tight transition-colors duration-300 group-hover:text-emerald-600" style={{ color: colors.skyDark }}>
                  {item.title}
                </h4>
              </div>
              <div 
                className="h-1.5 w-0 group-hover:w-full transition-all duration-500 ease-in-out" 
                style={{ backgroundColor: colors.brandBlue }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthYogaProducts;