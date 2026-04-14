import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const CategoryLayout = () => {
  const { pathname } = useLocation();

  const categories = [
    { name: "Diagnostic Equipments", path: "/diagnostic-equipments" },
    { name: "Hospital Scrubs & Linens", path: "/scrubs-linens" },
    { name: "Lab Coat", path: "/lab-coat" },
    { name: "X-Ray Supplies", path: "/xray-supplies" },
    { name: "Anaesthesia Equipments", path: "/anaesthesia" },
    { name: "Autoclave & Sterilizer", path: "/autoclave" },
    { name: "Height & Weight Scales", path: "/scales" },
    { name: "Cold Chain Equipment", path: "/cold-chain" },
    { name: "Surgical Instruments", path: "/surgical-instruments" },
    { name: "Dental Instruments", path: "/dental-instruments" },
    { name: "Laparoscopy Instruments", path: "/laparoscopy" },
    { name: "Orthopedic Instruments", path: "/orthopedic-instruments" },
    { name: "Hospital Furniture", path: "/hospital-furniture" },
    { name: "Hospital Holloware", path: "/holloware" },
    { name: "Hospital Waste Management", path: "/waste-management" },
    { name: "Miscellaneous Medical Products", path: "/miscellaneous" },
    { name: "Laboratory Plasticware", path: "/lab-plasticware" },
    { name: "Obstetrics & Gynaecology", path: "/gynaecology" },
    { name: "Suction Machines & Units", path: "/suction-machines" },
    { name: "Health & Yoga Products", path: "/health-yoga" },
    { name: "OT Equipment", path: "/ot-equipment" },
    { name: "Infant Care Equipment", path: "/infant-care" },
    { name: "Medical Rubber Products", path: "/rubber-products" },
    { name: "Orthopaedic Aids & Rehab", path: "/rehab-products" },
    { name: "Laboratory Equipments", path: "/lab-equipments" },
    { name: "Medical Disposable", path: "/medical-disposable" },
    { name: "Physiotherapy Products", path: "/physiotherapy" },
    { name: "Laboratory Reagents", path: "/lab-reagents" },
    { name: "Disposable Medical Apparel", path: "/medical-apparel" }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* --- SIDEBAR: Fixed and Responsive --- */}
      <aside className="w-80 bg-white border-r border-slate-200 sticky top-0 h-screen flex flex-col z-40 shrink-0">
        
        {/* Sidebar Header */}
        <div className="p-6 bg-slate-900 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Catalog</p>
            <h2 className="text-white font-extrabold text-sm tracking-tight flex items-center gap-2">
              Browse Departments
            </h2>
          </div>
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Categories List */}
        <nav className="flex-1 overflow-y-auto custom-sidebar-scroll py-4 px-3 bg-white">
          <div className="space-y-1">
            {categories.map((cat, index) => {
              const isActive = pathname === cat.path;
              return (
                <Link
                  key={index}
                  to={cat.path}
                  className={`group relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                    ? 'bg-blue-50 text-blue-700 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.1)]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono w-5 ${isActive ? 'text-blue-600' : 'text-slate-300'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[13px] font-medium tracking-tight ${isActive ? 'font-bold' : ''}`}>
                      {cat.name}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full shadow-[2px_0_10px_rgba(59,130,246,0.4)]"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100">
          <button className="group w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-2xl text-[11px] font-bold text-slate-700 uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm">
            Full Catalog
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA: NO CUTTING FIX --- */}
      <main className="flex-1 min-w-0 bg-white flex flex-col">
        
        {/* 1. 'flex-1' ensures it takes all available width.
          2. Removed 'max-w-6xl' to let it stretch to the screen edge.
          3. 'p-4 md:p-8 lg:p-10' adds safe space so items don't touch the walls.
        */}
        <div className="flex-1 w-full p-4 md:p-8 lg:p-10">
           <Outlet />
        </div>
        
        {/* Full-width professional footer */}
        <footer className="w-full border-t border-slate-100 py-6 px-6 md:px-10 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] bg-white">
          <span>IndoSurgicals © 2026</span>
          <div className="flex gap-6">
            <Link to="/quality" className="hover:text-blue-600 transition-colors">Quality Standard</Link>
            <Link to="/warranty" className="hover:text-blue-600 transition-colors">Global Warranty</Link>
          </div>
        </footer>
      </main>

      <style>
        {`
          .custom-sidebar-scroll::-webkit-scrollbar { width: 5px; }
          .custom-sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
          .custom-sidebar-scroll::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 20px; }
          .custom-sidebar-scroll::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
        `}
      </style>
    </div>
  );
};

export default CategoryLayout;