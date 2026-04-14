import React from 'react';

const CategoryBrief = () => {
  const categories = [
    { 
      name: "Diagnostic Equipments", 
      desc: "Precision monitoring tools",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 8.5-8.5"/><path d="M2.5 4.5 5.5 1.5l15.8 15.8c.4.4.7.9.7 1.4v2.8c0 .8-.7 1.5-1.5 1.5h-2.8c-.5 0-1-.3-1.4-.7Z"/><path d="m14 17 6.5-6.5"/></svg>
    },
    { 
      name: "Surgical Instruments", 
      desc: "High-grade theater tools",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M8.12 15.88 12 12"/><path d="M20 20 8.12 8.12"/></svg>
    },
    { 
      name: "Hospital Furniture", 
      desc: "Ergonomic ward solutions",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 11h18"/><path d="M2 17h18"/><path d="M22 4v16"/></svg>
    },
    { 
      name: "X-Ray Supplies", 
      desc: "Imaging accessories",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
    },
    { 
      name: "Dental Instruments", 
      desc: "Specialized oral care",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11c0 5 4 9 8 9s8-4 8-9c0-3.5-3-6-3-6H7s-3 2.5-3 6Z"/><path d="M8 3v4"/><path d="M16 3v4"/></svg>
    },
    { 
      name: "Physiotherapy", 
      desc: "Rehabilitation aids",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/><path d="M12 9v12"/></svg>
    },
    { 
      name: "Lab & Research", 
      desc: "Advanced lab solutions",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"/><path d="M8 22h8"/><path d="M7 11V3h10v8"/><path d="M5 11h14l-2 7H7l-2-7Z"/></svg>
    },
    { 
      name: "Medical Disposables", 
      desc: "Hygiene & protection",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><path d="m3 10 2 11h14l2-11H3Z"/></svg>
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">
              Global Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized <span className="text-slate-400">Product Range</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed border-l-2 border-blue-600 pl-4">
            Providing high-precision medical instruments and hospital infrastructure solutions across 50+ countries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              {/* Subtle background decoration */}
              <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-blue-50 transition-colors duration-300 transform scale-150">
                {cat.icon}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {cat.icon}
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {cat.name}
                </h3>
                <p className="text-[12px] text-slate-400 font-medium">
                  {cat.desc}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Explore <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-400 text-sm tracking-widest uppercase mb-2">Extended Catalog</p>
            <h4 className="text-white text-xl font-bold">Discover our full range of 2,500+ surgical products</h4>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
              View All Categories
            </button>
          </div>
          {/* Subtle glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[120px]"></div>
        </div>

      </div>
    </section>
  );
};

export default CategoryBrief;