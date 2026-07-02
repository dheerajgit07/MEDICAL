import React, { useState } from 'react';

const MiscellaneousProducts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Design System Colors
  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)", // Primary Blue
    skyDark: "oklch(29.3% 0.066 243.157)",   // Dark Sky Blue
    emerald: "oklch(76.8% 0.178 163.221)"    // Emerald Accent
  };

  const categories = [
    { title: "Fumigator & Fogger", img: "https://www.indosurgicals.com/images/categories/aerosol-disinfector.jpg", link: "/fumigator-fogger" },
    { title: "Emergency Blankets", img: "https://www.indosurgicals.com/images/categories/emergency-blankets.jpg", link: "/emergency-blankets" },
    { title: "Pneumatic Tourniquet", img: "https://www.indosurgicals.com/images/categories/pneumatic-tourniquet.jpg", link: "/pneumatic-tourniquet" },
    { title: "Bedsore Mattress", img: "https://www.indosurgicals.com/images/categories/bedsore-mattress.jpg", link: "/bedsore-mattress" },
    { title: "pH Test Strips", img: "https://www.indosurgicals.com/images/categories/ph-test-strips.jpg", link: "/ph-test-strips" },
    { title: "pH Buffer", img: "https://www.indosurgicals.com/images/categories/ph-buffer.jpg", link: "/ph-buffer" },
    { title: "Oxygen Concentrator", img: "https://www.indosurgicals.com/images/categories/oxygen-concentrator.jpg", link: "/oxygen-concentrator" },
    { title: "Examination Lamp", img: "https://www.indosurgicals.com/images/categories/examination-lamp.jpg", link: "/examination-lamp" },
    { title: "Medical Brushes", img: "https://www.indosurgicals.com/images/categories/nail-brushes.jpg", link: "/medical-brushes" },
    { title: "Kerosene Stove & Lanterns", img: "https://www.indosurgicals.com/images/categories/kerosene-stove-hurricane-lantern-petromax.jpg", link: "/kerosene-stove-lanterns" },
    { title: "Timer and Stop Watch", img: "https://www.indosurgicals.com/images/categories/timer-and-stop-watch.jpg", link: "/timer-and-stop-watch" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 pb-8" style={{ borderColor: colors.brandBlue }}>
          <div>
            <span className="text-emerald-600 font-black tracking-widest text-sm uppercase">Comprehensive Solutions</span>
            <h1 className="text-4xl md:text-6xl font-black mt-2" style={{ color: colors.skyDark }}>
              Miscellaneous <span style={{ color: colors.brandBlue }}>Products</span>
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-slate-400 font-bold">OT & Ward Equipment</p>
            <p className="text-lg font-black" style={{ color: colors.skyDark }}>Premium Quality Assured</p>
          </div>
        </header>

        {/* Content Section with Sky Dark Theme */}
        <section className="rounded-[3rem] p-10 md:p-14 text-white mb-16 relative shadow-2xl overflow-hidden" style={{ backgroundColor: colors.skyDark }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className={`transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-44'}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
               <span className="w-10 h-1 rounded-full" style={{ backgroundColor: colors.emerald }}></span>
               Your Reliable Healthcare Partner
            </h2>
            <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
              <p>
                Welcome to <strong>IndoSurgicals</strong>, the industry's most trusted manufacturer of OT Room and Hospital Ward equipment. 
                Our extensive lineup spans from <strong>Fumigators</strong> to <strong>Pneumatic Tourniquets</strong>, meticulously crafted to meet 
                global healthcare standards.
              </p>
              <p>
                We provide vital solutions such as <strong>Bedsore Mattresses</strong>, <strong>Oxygen Concentrators</strong>, and <strong>Examination Lamps</strong>. 
                Our commitment to smooth operations extends to practical tools like timers and stopwatches, ensuring your clinic 
                is fully equipped for any medical scenario.
              </p>
            </div>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t" style={{ backgroundImage: `linear-gradient(to top, ${colors.skyDark}, transparent)` }}></div>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 px-10 py-3 font-black rounded-xl transition-all hover:brightness-110 active:scale-95 shadow-lg"
            style={{ backgroundColor: colors.brandBlue, color: 'white' }}
          >
            {isExpanded ? 'READ LESS ↑' : 'EXPLORE DETAILS ↓'}
          </button>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
             href={item.link}>
              <div className="p-8 bg-slate-50 flex items-center justify-center h-60 group-hover:bg-white transition-colors duration-500">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                />
              </div>
              <div className="p-6 text-center border-t border-slate-50 flex-grow flex items-center justify-center">
                <h4 className="font-bold text-sm md:text-base leading-tight group-hover:text-emerald-600 transition-colors" style={{ color: colors.skyDark }}>
                  {item.title}
                </h4>
              </div>
              {/* Bottom accent bar using Brand Blue */}
              <div className="h-2 w-0 group-hover:w-full transition-all duration-500 self-center" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>

        {/* Footer Inquiry CTA */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-1 rounded-[3.5rem] bg-gradient-to-r blur opacity-25 group-hover:opacity-50 transition duration-1000" style={{ backgroundImage: `linear-gradient(to right, ${colors.brandBlue}, ${colors.emerald})` }}></div>
          <div className="relative bg-white border-2 p-12 rounded-[3.5rem] text-center" style={{ borderColor: colors.skyDark }}>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: colors.skyDark }}>
              Ready to <span style={{ color: colors.brandBlue }}>Upgrade Your Facility?</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto text-lg">
              Get premium CIF/C&F pricing for bulk orders. Our team is ready to support your medical equipment requirements.
            </p>
            <a 
              href="mailto:info@indosurgicals.com" 
              className="inline-flex items-center gap-3 px-14 py-5 rounded-2xl text-xl font-black text-white hover:-translate-y-2 transition-all shadow-2xl"
              style={{ backgroundColor: colors.brandBlue }}
            >
              Request a Quote
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MiscellaneousProducts;