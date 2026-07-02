import React, { useState } from 'react';

const LaboratoryReagents = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Dehydrated Culture Media", img: "https://www.indosurgicals.com/images/categories/image-coming-soon.jpg", link: "/dehydrated-culture-media" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Laboratory Reagents & Fine Chemicals
        </h1>

        <div className="relative mb-12">
          <div 
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[2000px]' : 'max-h-48'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
              <div className="space-y-4">
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>Dehydrated Culture Media</h3>
                  <p>High quality dehydrated media designed for consistent manual mixing. Available in 100g and 500g quantities. Store at 2 to 8°C.</p>
                </section>
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>Laboratory Reagents</h3>
                  <p>Carefully controlled for high-defined quality across various chemical laboratory applications.</p>
                </section>
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>Analytical Reagents</h3>
                  <p>Essential for high-purity research work, featuring certificates of analysis for trace impurities.</p>
                </section>
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>HPLC Solvents</h3>
                  <p>Produced under clean room conditions with sophisticated distillation for batch-to-batch consistency.</p>
                </section>
              </div>
              <div className="space-y-4">
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>Biological Stains</h3>
                  <p>Available as powder or ready-to-use solutions for microbiology, histology, hematology, and cytology.</p>
                </section>
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>Concentrated Volumetric Solutions</h3>
                  <p>Highest accuracy solutions in concentrated form for laboratory dilution and immediate use.</p>
                </section>
                <section>
                  <h3 className="font-bold text-lg" style={{ color: colors.brandBlue }}>Fine Chemicals & Rare Earth Oxides</h3>
                  <p>Purified products and minerals specifically curated for advanced chemical laboratory settings.</p>
                </section>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 hover:tracking-widest"
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
              <div className="h-1.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaboratoryReagents;