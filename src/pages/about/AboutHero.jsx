import React from 'react';
import { Link } from 'react-router-dom'; 
import { ChevronRight, Home, Globe2 } from 'lucide-react'; 

const AboutHero = () => {
  return (
    <div className="w-full bg-slate-50/50 border-b border-slate-100 py-8 mb-12">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-2">
        
        {/* --- LEFT SIDE: Profile Style Title --- */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 shrink-0">
            <Globe2 className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              About <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
              Corporate Profile & Global Legacy
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: Clean Breadcrumb --- */}
        <nav className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm">
          <Link to="/" className="text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={12} className="text-slate-300" />
          <span className="text-blue-600">About IndoSurgicals</span>
        </nav>
      </div>
    </div>
  );
};

export default AboutHero;