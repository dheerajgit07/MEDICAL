import React, { useState } from 'react';

const SuctionMachines = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Suction Units - Electric", img: "https://www.indosurgicals.com/images/categories/suction-units-electric.jpg", link: "/suction-units-electric" },
    { title: "Portable Suction Machine", img: "https://www.indosurgicals.com/images/categories/portable-suction-units.jpg", link: "/portable-suction-machine" },
    { title: "Electric Cum Manual Suction Units", img: "https://www.indosurgicals.com/images/categories/suction-units-electric-cum-manual.jpg", link: "/electric-cum-manual-suction-units" },
    { title: "Suction Units Manual", img: "https://www.indosurgicals.com/images/categories/suction-units-manual.jpg", link: "/suction-units-manual" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8" style={{ color: colors.skyDark }}>
          Suction Machines & Units
        </h1>

        <div className="relative mb-12">
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-48'}`}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>IndoSurgicals Private Limited is a <strong>trusted and renowned manufacturer, supplier, and exporter of high-quality Suction Machines & Units</strong>. Our products are widely used in hospitals, clinics, and nursing homes worldwide, providing reliable suction solutions.</p>
              
              <p>Our product range includes <strong>Electric Suction Units</strong>, <strong>Portable Suction Units</strong>, <strong>Electric Cum Manual Suction Units</strong>, and <strong>Manual Suction Units</strong>. These machines are designed to effectively remove fluids and secretions from the body during medical procedures, ensuring patient comfort and safety.</p>
              
              <p>With our Electric Suction Units, you can benefit from <strong>powerful and efficient suction performance</strong>. Our Portable Suction Units offer the flexibility and convenience of mobility, enabling medical professionals to provide suction wherever it's needed. The Electric Cum Manual Suction Units provide versatility by offering both electric and manual operation options. Lastly, our Manual Suction Units are reliable and easy to use in emergency situations.</p>
              
              <p>Choose IndoSurgicals as your trusted supplier for <strong>Suction Machines & Units. Experience the superior quality, durability, and performance that our products offer</strong>. Trust us to provide you with the essential medical equipment needed for effective suction in healthcare facilities worldwide.</p>
              
              <p>Please send your Suction Machine requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2"
            style={{ color: colors.brandBlue, borderColor: colors.brandBlue }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

        <div className="mb-8 font-black text-xl" style={{ color: colors.skyDark }}>
          Find here your product under below listed categories
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a key={index} className="bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow" href={item.link}>
              <div className="p-4 flex items-center justify-center h-48">
                <img src={item.img} alt={item.title} className="max-h-full object-contain" />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h4 className="font-bold text-sm leading-tight" style={{ color: colors.skyDark }}>{item.title}</h4>
              </div>
              <div className="h-1.5 w-full" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuctionMachines;