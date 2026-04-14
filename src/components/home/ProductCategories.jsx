import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();

  const categories = [
    "Diagnostic Equipments", "Hospital Scrubs & Linens", "Lab Coat", "X-Ray Supplies",
    "Anaesthesia Equipments", "Autoclave & Sterilizer", "Height & Weight Scales",
    "Cold Chain Equipment", "Surgical Instruments", "Dental Instruments",
    "Laparoscopy Instruments", "Orthopedic Instruments", "Hospital Furniture",
    "Hospital Holloware", "Hospital Waste Management Products", "Miscellaneous Medical Products",
    "Laboratory Plasticware", "Obstetrics & Gynaecology", "Suction Machines & Units",
    "Health & Yoga Products", "OT Equipment", "Infant Care Equipment",
    "Medical Rubber Products", "Orthopaedic Aids & Rehab Products", "Laboratory Equipments",
    "Medical Disposable", "Physiotherapy Products", "Laboratory Reagents & Fine Chemicals",
    "Disposable Medical Apparel & Drapes"
  ];

  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Is function se hum har item ka link decide karenge
  const getPath = (item) => {
    if (item === "Diagnostic Equipments") return "/diagnostic-equipments";
    if (item === "About Us") return "/aboutus";
    // Baaki sab ke liye ek default link (ya aap naye pages bana sakte hain)
    return `/category/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <aside className="w-full">
      <div className="border border-slate-200 rounded-[2rem] overflow-hidden sticky top-44 shadow-sm bg-white">
        
        {/* Header with Search */}
        <div className="bg-slate-900 p-6">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-white font-bold text-[11px] tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Departments
            </h5>
          </div>

          <div className="relative group">
            <input 
              type="text"
              placeholder="Quick search..."
              className="w-full bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3 top-2.5 text-slate-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>

        {/* Scrollable List */}
        <ul className="max-h-[60vh] overflow-y-auto bg-white divide-y divide-slate-50 custom-scrollbar">
          {filteredCategories.map((item, index) => {
            const path = getPath(item);
            const active = pathname === path;

            return (
              <li key={index} className="relative group">
                <Link 
                  to={path}
                  className={`flex items-center justify-between px-6 py-4 text-[13px] font-semibold transition-all ${
                    active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[9px] font-mono ${active ? 'text-blue-600' : 'text-slate-300'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </div>
                  <svg className={`w-4 h-4 transition-all ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
                {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>}
              </li>
            );
          })}
        </ul>

        {/* Catalog Button */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
          <button className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors">
            View Full Catalog PDF
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProductCategories;