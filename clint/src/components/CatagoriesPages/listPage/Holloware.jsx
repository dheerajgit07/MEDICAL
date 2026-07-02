import React, { useState } from 'react';

const HospitalHolloware = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Kidney Tray", img: "https://www.indosurgicals.com/images/categories/kidney-tray.jpg", link: "/kidney-tray" },
    { title: "Instrument Tray", img: "https://www.indosurgicals.com/images/categories/instrument-tray.jpg", link: "/instrument-tray" },
    { title: "Catheter Instrument Tray", img: "https://www.indosurgicals.com/images/categories/catheter-instrument-tray.jpg", link: "/catheter-instrument-tray" },
    { title: "Bed Pan and Urinal", img: "https://www.indosurgicals.com/images/categories/bed-pan-urinal.jpg", link: "/bed-pan-and-urinal" },
    { title: "Douche Can", img: "https://www.indosurgicals.com/images/categories/douche-can.jpg", link: "/douche-can" },
    { title: "Bowl & Basin", img: "https://www.indosurgicals.com/images/categories/bowl-basin.jpg", link: "/bowl-basin" },
    { title: "Dressing Drum", img: "https://www.indosurgicals.com/images/categories/dressing-drum.jpg", link: "/dressing-drum" },
    { title: "Thermometer & Forceps Jar", img: "https://www.indosurgicals.com/images/categories/thermometer-and-forceps-jars.jpg", link: "/thermometer-forceps-jar" },
    { title: "Feeding Cup", img: "https://www.indosurgicals.com/images/categories/feeding-cup.jpg", link: "/feeding-cup" },
    { title: "Gallipot", img: "https://www.indosurgicals.com/images/categories/gallipot.jpg", link: "/gallipot" },
    { title: "Sputum Mug", img: "https://www.indosurgicals.com/images/categories/sputum-mug.jpg", link: "/sputum-mug" },
    { title: "Dressing Jar", img: "https://www.indosurgicals.com/images/categories/dressing-jar.jpg", link: "/dressing-jar" },
    { title: "Bucket", img: "https://www.indosurgicals.com/images/categories/bucket.jpg", link: "/bucket" },
    { title: "Waste Bin", img: "https://www.indosurgicals.com/images/categories/waste-bin.jpg", link: "/waste-bin" },
    { title: "Cidex Tray", img: "https://www.indosurgicals.com/images/categories/cidex-tray.jpg", link: "/cidex-tray" },
    { title: "Wire Mesh Surgical Instrument Tray", img: "https://www.indosurgicals.com/images/categories/wire-mesh-instrument-tray.jpg", link: "/wire-mesh-surgical-instrument-tray" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="relative rounded-[2rem] overflow-hidden mb-12 shadow-2xl border-b-8 border-emerald-500 bg-indigo-900">
          <img 
            src="https://www.indosurgicals.com/images/categories/banner/hospital-holloware-in-india.jpg" 
            alt="Hospital Holloware Banner" 
            className="w-full h-auto object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent flex items-end p-8 md:p-12">
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
              Hospital <span className="text-emerald-400">Holloware</span>
            </h1>
          </div>
        </div>

        {/* Brand/Product Description */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-indigo-50 shadow-sm mb-16 relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-10 -mt-10"></div>
          
          <div className={`relative transition-all duration-700 overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-44'}`}>
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
              Medical-Grade Stainless Steel Excellence
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Welcome to <strong>IndoSurgicals Private Limited</strong>, the global leader in premium hospital holloware. 
              We utilize high-quality <strong>medical-grade stainless steel</strong> to ensure maximum hygiene, safety, and durability. 
              Our products are finished with smooth edges to guarantee patient comfort and structural integrity.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our comprehensive selection includes essential items such as kidney trays, dressing drums, Cidex trays, and urinals. 
              Each product is meticulously crafted to exceed international healthcare standards, making us the trusted choice 
              for medical institutions worldwide.
            </p>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 px-8 py-3 bg-indigo-900 text-emerald-400 font-black rounded-xl hover:bg-indigo-800 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            {isExpanded ? 'LESS INFO ↑' : 'DISCOVER MORE ↓'}
          </button>
        </section>

        {/* Product Grid Container */}
        <div className="flex items-baseline justify-between mb-10 border-b-2 border-indigo-100 pb-4">
          <h3 className="text-2xl font-black text-indigo-900 tracking-tight uppercase">Essential Categories</h3>
          <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-4 py-1 rounded-full">
            {categories.length} Items Available
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl border border-indigo-50 shadow-md hover:shadow-indigo-200/50 hover:border-emerald-500 transition-all duration-500 flex flex-col"
             href={item.link}>
              <div className="p-6 bg-slate-50/50 flex items-center justify-center h-56 rounded-t-2xl overflow-hidden group-hover:bg-white transition-colors">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                />
              </div>
              <div className="p-5 border-t border-indigo-50 text-center flex-grow flex items-center justify-center">
                <h4 className="font-bold text-indigo-900 group-hover:text-emerald-600 transition-colors text-sm md:text-base leading-tight">
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {/* Email Inquiry Footer */}
        <div className="mt-24 bg-indigo-900 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Need a <span className="text-emerald-400">Bulk Quote?</span>
            </h2>
            <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
              Send your specific holloware requirements and quantities to receive our best CIF/C&F pricing within 24 hours.
            </p>
            <a 
              href="mailto:info@indosurgicals.com" 
              className="inline-block bg-emerald-500 text-indigo-900 font-black px-12 py-5 rounded-2xl text-xl hover:bg-emerald-400 hover:-translate-y-2 transition-all shadow-xl uppercase tracking-wider"
            >
              info@indosurgicals.com
            </a>
          </div>
          
          {/* Subtle Abstract Background */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full -ml-24 -mt-24 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-20 -mb-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HospitalHolloware;