import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Globe, ChevronRight, Home, ArrowLeft, Timer, History } from 'lucide-react';

const Exhibitions = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const exhibitions = [
    { title: "Medical Fair India (Delhi)", year: "2026", location: "New Delhi, India", status: "Upcoming" },
    { title: "MedicAll Expo (Mumbai)", year: "2025", location: "Mumbai, India", status: "Upcoming" },
    { title: "MedicAll Expo (Chennai)", year: "2025", location: "Chennai, India", status: "Upcoming" },
    { title: "Hasicon 2025", year: "2025", location: "India", status: "Upcoming" },
    { title: "MedicAll Expo (Hyderabad)", year: "2025", location: "Hyderabad, India", status: "Upcoming" },
    { title: "Medical Fair India (Delhi)", year: "2025", location: "New Delhi, India", status: "Upcoming" },
    { title: "Nepal Medical Show", year: "2025", location: "Kathmandu, Nepal", status: "Upcoming" },
    { title: "MedicAll (Delhi)", year: "2024", location: "New Delhi, India", status: "Past" },
    { title: "MedicAll (Chennai)", year: "2024", location: "Chennai, India", status: "Past" },
    { title: "Distributor Search India (Chennai)", year: "2024", location: "Chennai, India", status: "Past" },
    { title: "Medical Fair India (Mumbai)", year: "2024", location: "Mumbai, India", status: "Past" },
    { title: "MedicAll Expo (Delhi)", year: "2023", location: "New Delhi, India", status: "Past" },
    { title: "Medical Fair India (Delhi)", year: "2023", location: "New Delhi, India", status: "Past" },
    { title: "India Med Expo (Hyderabad)", year: "2022", location: "Hyderabad, India", status: "Past" },
    { title: "MedicAll Expo (Delhi)", year: "2022", location: "New Delhi, India", status: "Past" },
    { title: "Medical Fair India (Mumbai)", year: "2022", location: "Mumbai, India", status: "Past" },
    { title: "India Med Expo (Noida)", year: "2022", location: "Noida, India", status: "Past" },
    { title: "Nepal Medical Show", year: "2022", location: "Kathmandu, Nepal", status: "Past" },
    { title: "Medicall 27th Edition (Chennai)", year: "2021", location: "Chennai, India", status: "Past" },
    { title: "International AROGYA", year: "2019", location: "India", status: "Past" },
    { title: "Ayuryog Expo", year: "2019", location: "Noida, India", status: "Past" },
  ];

  const years = ['All', '2026', '2025', '2024', '2023', '2022'];
  
  const filteredExhibitions = activeTab === 'All' 
    ? exhibitions 
    : exhibitions.filter(ex => ex.year === activeTab);

  return (
    <div className="w-full animate-in fade-in duration-700 bg-white">
      
      {/* --- HEADER SECTION --- */}
      <div className="w-full border-b border-slate-100 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 shrink-0">
              <Globe className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                Global <span className="text-blue-600">Exhibitions</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
                Our Presence in Medical Excellence
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
            <Link to="/" className="text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-blue-600">Exhibitions</span>
          </nav>
        </div>
      </div>

      {/* --- FILTER TABS --- */}
      <div className="mt-12 flex flex-wrap items-center gap-3 bg-slate-50 p-2 rounded-3xl w-fit border border-slate-100">
        {years.map(year => (
          <button
            key={year}
            onClick={() => setActiveTab(year)}
            className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
              activeTab === year 
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200' 
              : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* --- EXHIBITION GRID --- */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {filteredExhibitions.map((ex, index) => (
          <div 
            key={index} 
            className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            {/* Status Indicator Badge */}
            <div className="flex justify-between items-start mb-6">
               <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${
                 ex.status === 'Upcoming' 
                 ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                 : 'bg-slate-50 text-slate-400 border border-slate-100'
               }`}>
                 {ex.status === 'Upcoming' ? <Timer size={10}/> : <History size={10}/>}
                 {ex.status}
               </div>
               <span className="text-[13px] font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                 #{index + 1}
               </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors min-h-[56px]">
                {ex.title}
              </h3>
              
              <div className="pt-4 border-t border-slate-50 space-y-3">
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-tight">
                  <Calendar size={14} className="text-blue-500" />
                  {ex.year}
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                  <MapPin size={14} className="text-slate-300" />
                  {ex.location}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* --- FOOTER ACTION --- */}
      <div className="mt-24 pt-12 border-t border-slate-50 flex flex-col items-center gap-6">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">IndoSurgicals Global Presence</p>
        <button 
          onClick={() => navigate('/home')}
          className="group flex items-center gap-4 px-10 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-100"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Portal
        </button>
      </div>
    </div>
  );
};

export default Exhibitions;