import React, { useState } from 'react';

const OTEquipment = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "OT Lights", img: "https://www.indosurgicals.com/images/categories/ot-lights.jpg", link: "/ot-lights" },
    { title: "OT Tables", img: "https://www.indosurgicals.com/images/categories/ot-tables.jpg", link: "/ot-tables" },
    { title: "Examination Lights", img: "https://www.indosurgicals.com/images/categories/examination-lights.jpg", link: "/examination-lights" },
    { title: "Electrosurgical Unit and Accessories", img: "https://www.indosurgicals.com/images/categories/electrosurgical-unit.jpg", link: "/electrosurgical-unit-and-accessories" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          OT Equipment
        </h1>

        <img 
          src="https://www.indosurgicals.com/images/categories/banner/ot-lights-tables-in-india.jpg" 
          alt="OT Equipment" 
          className="w-full rounded-3xl mb-12 shadow-lg transition-transform duration-700 hover:scale-[1.01]"
        />

        <div className="relative mb-12">
          <div 
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-48'}`}
          >
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Private Limited, the largest and most trusted <strong>manufacturer, supplier, and exporter of premium-quality OT Equipment</strong>. Our extensive product range includes <strong>OT Lights</strong>, <strong>OT Tables</strong>, <strong>Examination Lights</strong>, and <strong>Electrosurgical Units</strong>.</p>
              
              <p>At IndoSurgicals, we take immense pride in offering the best quality OT Equipment available in the market. Our <strong>OT Lights provide exceptional illumination</strong>, ensuring optimal visibility during surgical procedures. The <strong>OT Tables are designed for maximum versatility</strong>, comfort, and precision, catering to the unique needs of healthcare professionals.</p>
              
              <p>Our <strong>Examination Lights offer bright and focused illumination</strong>, making them ideal for clinical examinations and minor procedures. The <strong>Electrosurgical Units deliver precise and controlled energy output</strong>, facilitating various surgical techniques with utmost safety and efficiency.</p>
              
              <p>IndoSurgicals Private Limited is committed to delivering excellence in quality, reliability, and customer satisfaction. We understand the <strong>critical role of OT Equipment in healthcare settings and strive to provide top-of-the-line solutions</strong>.</p>
              
              <p>Choose IndoSurgicals for superior quality OT Equipment that meets the highest industry standards. Experience the difference with our reliable, durable, and technologically advanced products that enhance surgical outcomes.</p>
              
              <p>Trust IndoSurgicals, the leader in OT Equipment, for all your surgical needs.</p>
              
              <p>Please send your OT Equipment requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 hover:tracking-widest hover:opacity-80"
            style={{ color: colors.brandBlue, borderColor: colors.brandBlue }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

        <div className="mb-8 font-black text-xl border-l-4 pl-4" style={{ color: colors.skyDark, borderColor: colors.emerald }}>
          Find here your product under below listed categories
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
             href={item.link}>
              <div className="p-4 flex items-center justify-center h-48 bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110" 
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

export default OTEquipment;