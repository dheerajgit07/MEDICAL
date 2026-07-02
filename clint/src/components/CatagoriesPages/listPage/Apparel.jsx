import React, { useState } from 'react';

const MedicalApparel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Disposable Surgical Gown", img: "https://www.indosurgicals.com/images/categories/hospital-disposable-products.jpg", link: "/disposable-surgical-gown" },
    { title: "Disposable Surgical Scrubs", img: "https://www.indosurgicals.com/images/categories/disposable-surgical-scrubs.jpg", link: "/disposable-surgical-scrubs" },
    { title: "Disposable Beard Mask", img: "https://www.indosurgicals.com/images/categories/disposable-beard-mask.jpg", link: "/disposable-beard-mask" },
    { title: "Disposable Face Mask", img: "https://www.indosurgicals.com/images/categories/disposable-face-mask.jpg", link: "/disposable-face-mask" },
    { title: "Disposable Cap", img: "https://www.indosurgicals.com/images/categories/disposable-cap.jpg", link: "/disposable-cap" },
    { title: "Disposable Gloves", img: "https://www.indosurgicals.com/images/categories/disposable-gloves.jpg", link: "/disposable-gloves" },
    { title: "Disposable Shoe Covers", img: "https://www.indosurgicals.com/images/categories/shoe-and-boot-covers.jpg", link: "/disposable-shoe-covers" },
    { title: "Hospital Aprons", img: "https://www.indosurgicals.com/images/categories/hospital-aprons.jpg", link: "/hospital-aprons" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Disposable Medical Apparel & Drapes
        </h1>

        {/* Content & Read More Section */}
        <div className="relative mb-12">
          <div 
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1200px]' : 'max-h-40'}`}
          >
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Discover the range of <strong>Disposable Medical Apparel & Drapes</strong> at <strong>IndoSurgicals Private Limited</strong>, your trusted partner in healthcare safety. As a leading <strong>manufacturer</strong>, <strong>supplier</strong>, and <strong>exporter</strong>, we offer high-quality <strong>disposable wear</strong> for surgery centers, hospitals, and clinics globally.</p>
              
              <p>Our selection includes <strong>Disposable Gowns and Scrubs</strong>, <strong>Disposable Face Masks</strong> with superior filtration, <strong>Disposable Caps</strong> for full coverage, <strong>Disposable Gloves</strong> for sensitivity, <strong>Shoe & Boot Covers</strong> for cleanliness, <strong>Hospital Aprons</strong>, and <strong>Disposable Surgical Drapes</strong> to prevent contamination. Each product is designed with the highest standards of safety and hygiene in mind.</p>
              
              <p><strong>IndoSurgicals</strong> is known for innovation and quality, making us a top brand in the healthcare industry. Our commitment to excellence ensures that healthcare professionals have access to the best <strong>disposable medical apparel and drapes</strong>, contributing to infection prevention and enhanced patient care.</p>
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

        {/* Sub-category Title */}
        <div className="mb-8 font-black text-xl border-l-4 pl-4 uppercase tracking-tight" style={{ color: colors.skyDark, borderColor: colors.emerald }}>
          Find here your product under below listed categories
        </div>

        {/* Product Grid */}
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

export default MedicalApparel;