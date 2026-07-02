import React, { useState } from 'react';

const WasteManagement = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Defining the updated color system
  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)", // Primary Blue
    skyDark: "oklch(29.3% 0.066 243.157)",   // Dark Sky Blue (Text/BGs)
    emerald: "oklch(76.8% 0.178 163.221)"    // Emerald Accent
  };

  const categories = [
    { title: "Sharp Container for Hospitals", img: "https://www.indosurgicals.com/images/categories/sharp-container.jpg", link: "/sharp-container-for-hospitals" },
    { title: "Manual Needle Destroyer", img: "https://www.indosurgicals.com/images/categories/manual-needle-destroyer.jpg", link: "/manual-needle-destroyer" },
    { title: "Cardboard Safety Boxes", img: "https://www.indosurgicals.com/images/categories/cardboard-safety-boxes.jpg", link: "/cardboard-safety-boxes" },
    { title: "Waste Bins", img: "https://www.indosurgicals.com/images/categories/waste-bins.jpg", link: "/waste-bins" },
    { title: "Waste Segregation Trolleys (SS)", img: "https://www.indosurgicals.com/images/categories/waste-segregation-trolleys-ss.jpg", link: "/waste-segregation-trolleys-ss" },
    { title: "Waste Segregation Trolleys (MS)", img: "https://www.indosurgicals.com/images/categories/waste-segregation-trolleys-ms.jpg", link: "/waste-segregation-trolleys-ms" },
    { title: "Wringer Mopping Trolleys", img: "https://www.indosurgicals.com/images/categories/wringer-mopping-trolleys.jpg", link: "/wringer-mopping-trolleys" },
    { title: "Liquid Waste Treatment System", img: "https://www.indosurgicals.com/images/categories/liquid-waste-treatment-system.jpg", link: "/liquid-waste-treatment-system" },
    { title: "Linen Trolley", img: "https://www.indosurgicals.com/images/categories/linen-trolley.jpg", link: "/linen-trolley" },
    { title: "Utility Trolley", img: "https://www.indosurgicals.com/images/categories/utility-trolley.jpg", link: "/utility-trolley" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Dark Sky & Brand Blue */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="border-l-8 border-emerald-500 pl-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight" style={{ color: colors.skyDark }}>
              Waste <span style={{ color: colors.brandBlue }}>Management</span>
            </h1>
            <p className="mt-2 font-bold uppercase tracking-widest text-sm" style={{ color: colors.brandBlue }}>
              Safety • Hygiene • Global Export
            </p>
          </div>
          <div className="p-6 rounded-2xl text-white shadow-xl" style={{ backgroundColor: colors.skyDark }}>
            <p className="text-xs uppercase text-emerald-400 font-black mb-1">Inquiry Support</p>
            <a href="mailto:info@indosurgicals.com" className="text-lg font-bold hover:text-emerald-400 transition-colors">
              info@indosurgicals.com
            </a>
          </div>
        </div>

        {/* Content Card with Sky Dark Background */}
        <section className="rounded-[2.5rem] p-8 md:p-12 text-white mb-16 relative shadow-2xl overflow-hidden" style={{ backgroundColor: colors.skyDark }}>
          <div className={`transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[1200px]' : 'max-h-48'}`}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.emerald }}>
              World-Class Infection Control Solutions
            </h2>
            <div className="space-y-4 text-lg text-slate-200 leading-relaxed">
              <p>
                <strong>IndoSurgicals Private Limited</strong> is proud to offer an essential selection of Hospital Waste Management Products. As a leading manufacturer and exporter, we address the critical needs of waste management globally.
              </p>
              <p>
                Our range features <strong>Sharp Containers</strong>, <strong>Needle Destroyers</strong>, and <strong>Waste Segregation Trolleys</strong> designed for high-risk clinical environments.
              </p>
            </div>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t" style={{ backgroundImage: `linear-gradient(to top, ${colors.skyDark}, transparent)` }}></div>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 px-8 py-2 font-black rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: colors.brandBlue, color: 'white' }}
          >
            {isExpanded ? 'LESS ↑' : 'MORE INFO ↓'}
          </button>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
             href={item.link}>
              <div className="p-8 bg-slate-50 flex items-center justify-center h-52 group-hover:bg-white transition-colors duration-500">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                />
              </div>
              <div className="p-5 flex-grow flex items-center justify-center text-center bg-white">
                <h4 className="font-bold transition-colors text-sm leading-snug" style={{ color: colors.skyDark }}>
                  {item.title}
                </h4>
              </div>
              <div className="h-1.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>

        {/* Brand-Aligned Footer */}
        <div className="mt-20 bg-white border-4 p-12 rounded-[3rem] text-center shadow-xl" style={{ borderColor: colors.skyDark }}>
          <h2 className="text-3xl font-black mb-4" style={{ color: colors.skyDark }}>
            Secure Your <span style={{ color: colors.brandBlue }}>Medical Facility</span>
          </h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Contact us for premium bulk pricing on ISO-certified waste management tools.
          </p>
          <a 
            href="mailto:info@indosurgicals.com" 
            className="inline-block px-12 py-4 rounded-2xl text-xl font-black text-white hover:opacity-90 transition-all"
            style={{ backgroundColor: colors.brandBlue }}
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;