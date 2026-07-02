import React, { useState } from 'react';

const ProductCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter logic for professional search
  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-full">
      <div className="border border-slate-200 rounded-3xl overflow-hidden sticky top-32 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        
        {/* --- Header Section --- */}
        <div className="bg-slate-900 p-6">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-white font-bold text-[12px] tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span>
              Departments
            </h5>
            <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-1 rounded">
              {filteredCategories.length} Items
            </span>
          </div>

          {/* Professional Search Input */}
          <div className="relative group">
            <input 
              type="text"
              placeholder="Search category..."
              className="w-full bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-600 transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3 top-2.5 text-slate-500 group-focus-within:text-blue-500 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>

        {/* --- Categories Scroll Area --- */}
        <ul className="max-h-[75vh] overflow-y-auto bg-white custom-scrollbar divide-y divide-slate-50">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((item, index) => (
              <li key={index} className="group/item relative">
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="flex items-center justify-between px-6 py-4 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    {/* Subtle numbering for professional touch */}
                    <span className="text-[9px] font-mono text-slate-300 group-hover/item:text-blue-300 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="tracking-tight">{item}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </a>
                
                {/* Active Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 scale-y-0 group-hover/item:scale-y-100 transition-transform origin-top duration-300"></div>
              </li>
            ))
          ) : (
            <div className="p-10 text-center">
              <p className="text-xs text-slate-400 italic">No category found matching your search.</p>
            </div>
          )}
        </ul>

        {/* --- Action Footer --- */}
        <div className="p-5 bg-slate-50 border-t border-slate-100">
          <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
            Download Full Catalog (PDF)
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProductCategories;