import React, { useState } from 'react';

const InfantCareEquipment = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Infant Radiant Warmer", img: "https://www.indosurgicals.com/images/categories/infant-radiant-warmer.jpg", link: "/infant-radiant-warmer" },
    { title: "Infant Incubators", img: "https://www.indosurgicals.com/images/categories/infant-incubators.jpg", link: "/infant-incubators" },
    { title: "Resuscitation Unit", img: "https://www.indosurgicals.com/images/categories/resuscitation-unit.jpg", link: "/resuscitation-unit" },
    { title: "Oxygen Hoods & Accessories", img: "https://www.indosurgicals.com/images/categories/oxygen-hoods.jpg", link: "/oxygen-hoods-accessories" },
    { title: "Phototherapy Unit", img: "https://www.indosurgicals.com/images/categories/phototherapy-unit.jpg", link: "/phototherapy-unit" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Infant Care Equipment
        </h1>

        <div className="relative mb-12">
          <div 
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1200px]' : 'max-h-48'}`}
          >
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>IndoSurgicals Private Limited, a renowned name in the medical industry, proudly presents its comprehensive range of <strong>Infant Care Equipment</strong>. As one of the <strong>largest and most trusted manufacturers</strong> of high-quality infant care products, we ensure that each piece of equipment meets the stringent standards required in healthcare settings. Our product range includes <strong>Infant Radiant Warmers</strong>, <strong>Infant Incubators</strong>, <strong>Resuscitation Units</strong>, <strong>Oxygen Hoods</strong>, and <strong>Phototherapy Units</strong>. These essential tools are meticulously designed to provide the best care for newborns, making them indispensable in hospitals, clinics, and neonatal care centers.</p>
              
              <p>Our <strong>Infant Radiant Warmers</strong> and <strong>Infant Incubators</strong> are top-of-the-line devices, ensuring optimal thermal regulation for newborns. These products are widely used by <strong>pediatricians and neonatologists</strong> to provide a stable environment for infants who require specialized care. IndoSurgicals is recognized as a <strong>top manufacturer and supplier</strong> of these vital instruments, delivering <strong>best quality</strong> equipment that healthcare professionals trust.</p>
              
              <p>In the critical moments of neonatal care, our <strong>Resuscitation Units</strong> stand out as reliable and efficient tools, assisting <strong>doctors and nurses</strong> in emergency situations. Similarly, our <strong>Oxygen Hoods</strong> ensure that infants receive the precise oxygen levels needed for their delicate systems. These products underscore our commitment to being a <strong>top dealer and trusted supplier</strong> of <strong>top quality</strong> infant care equipment globally.</p>
              
              <p>For the treatment of neonatal jaundice, our <strong>Phototherapy Units</strong> are the preferred choice among <strong>healthcare providers</strong>. These units offer effective and safe phototherapy, reducing bilirubin levels efficiently. As a <strong>top brand and one of the largest manufacturers</strong> of phototherapy units, IndoSurgicals ensures that every product is reliable and durable. Our extensive distribution network ensures that we supply our <strong>Infant Care Equipment</strong> to numerous countries worldwide, supporting healthcare professionals in their vital work.</p>
              
              <p>Trust IndoSurgicals, the leader in Infant Care Equipment, for all your neonatal care needs. Please send your Infant Care Equipment requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 hover:tracking-widest"
            style={{ color: colors.brandBlue, borderColor: colors.brandBlue }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

        <div className="mb-8 font-black text-xl border-l-4 pl-4" style={{ color: colors.skyDark, borderColor: colors.emerald }}>
          Find here your product under below listed categories
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

export default InfantCareEquipment;