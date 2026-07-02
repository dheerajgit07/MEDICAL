import React, { useState } from 'react';

const ColdChainEquipment = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Vaccine Carrier Box", img: "https://www.indosurgicals.com/images/categories/vaccine-carrier-box.jpg", link: "/vaccine-carrier-box" },
    { title: "Cold Box", img: "https://www.indosurgicals.com/images/categories/cold-box.jpg", link: "/cold-box" },
    { title: "Ice Pack", img: "https://www.indosurgicals.com/images/categories/ice-pack.jpg", link: "/ice-pack" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Title */}
        <header className="mb-10">
          <h1 className="text-4xl font-black text-blue-900 mb-6 tracking-tight">
            Cold Chain Equipment
          </h1>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://www.indosurgicals.com/images/categories/banner/cold-chain-equipment.jpg" 
              alt="Cold Chain Equipment Banner" 
              className="w-full h-auto"
            />
          </div>
        </header>

        {/* Info Section */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100 mb-12">
          <div className={`relative overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[1200px]' : 'max-h-40'}`}>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>IndoSurgicals Pvt. Ltd.</strong> is an ISO 9001-certified leader in manufacturing <strong>Cold Chain Equipment</strong>. 
              We provide high-quality Vaccine Carrier Boxes, Cold Boxes, and Ice Packs designed to keep life-saving vaccines safe.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Temperature control is critical. Our <strong>CFC-free equipment</strong> ensures a safe temperature range ($-3$ to $+10$ °C), 
              protecting heat-sensitive vaccines and biopharmaceuticals even in the most challenging climates or remote areas.
            </p>

            <div className="bg-blue-900 text-white p-6 rounded-2xl">
              <p className="text-center font-medium">
                Request a quote for your bulk requirements: 
                <a href="mailto:info@indosurgicals.com" className="underline ml-2 hover:text-blue-200 transition-colors">
                  info@indosurgicals.com
                </a>
              </p>
            </div>
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 px-6 py-2 bg-blue-100 text-blue-700 font-bold rounded-full hover:bg-blue-200 transition-all"
          >
            {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </section>

        {/* Product Grid */}
        <div className="text-center mb-10">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full">
            Product Categories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-blue-200/50 hover:-translate-y-3 transition-all duration-300 flex flex-col items-center"
             href={item.link}>
              <div className="w-full h-56 flex items-center justify-center bg-slate-50 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ColdChainEquipment;