import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  // URL Friendly Slug banane ke liye helper function
  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const categories = [
    {
      title: "Diagnostic Equipments",
      image: "images/categories/diagnostic-equipments.jpg",
      items: ["Stethoscopes", "Laryngoscopes", "BP Monitors", "Medical Hammers", "ECG Machine", "Fetal Doppler", "Pulse Oximeter", "Nebulizers"]
    },
    {
      title: "Hospital Scrubs & Linens",
      image: "images/categories/hospital-scrubs-linens.jpg",
      items: ["Hospital Scrubs", "Surgeon Gowns", "Hospital Uniforms", "Bed Sheets", "Identification Wristbands", "Drape Sheets"]
    },
    {
      title: "Lab Coat",
      image: "images/categories/lab-caot-apron.jpg",
      items: ["Female Lab Coat 28\"", "Female Lab Coat 32\"", "Unisex Lab Coat 30\"", "Unisex Lab Coat 34\"", "Unisex Lab Coat 37\""]
    },
    {
      title: "X-Ray Supplies",
      image: "images/categories/x-ray-supplies.jpg",
      items: ["Lead Aprons", "Thyroid Collars", "Lead Gloves", "Lead Goggles", "X-Ray View Box", "Lead Apron Racks"]
    },
    {
      title: "Anaesthesia Equipments",
      image: "images/categories/anaesthesia-equipments.jpg",
      items: ["Artificial Resuscitators", "Breathing Circuit", "Anesthesia Machine", "Face Masks", "CPR Mask", "Guedel Airways"]
    },
    {
      title: "Autoclave & Sterilizer",
      image: "images/categories/autoclave-sterilizer.jpg",
      items: ["Portable Autoclaves", "Vertical Autoclaves", "Dental Autoclaves", "Ultraviolet Chamber", "Instrument Sterilizer"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-16 px-4 md:px-12">
      {/* --- Section Header --- */}
      <div className="mb-16 text-left border-l-8 border-blue-600 pl-6">
        <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-2">
          High-Quality Medical & Surgical Solutions
        </p>
      </div>

      {/* --- Product Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            // Poore Card par click event add kiya hai
            onClick={() => navigate(`/${createSlug(cat.title)}`)}
            className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 flex flex-col cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-slate-200">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <h2 className="absolute bottom-6 left-8 text-2xl font-black text-white uppercase tracking-tight pr-4">
                {cat.title}
              </h2>
            </div>

            {/* List Container */}
            <div className="p-8 flex-grow">
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-3 group/item cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation(); // Card click ko rokne ke liye
                        navigate(`/${createSlug(item)}`);
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover/item:w-4 transition-all"></span>
                    <span className="text-slate-600 text-sm font-semibold group-hover/item:text-blue-600 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Footer */}
            <div className="px-8 pb-8">
              <button 
                className="w-full py-4 bg-slate-50 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all border border-slate-100 group-hover:border-blue-600"
                onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/${createSlug(cat.title)}`);
                }}
              >
                View All {cat.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Bottom CTA --- */}
      <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-black text-white uppercase mb-4">Can't find what you're looking for?</h3>
          <p className="text-slate-400 font-medium mb-8">Contact our sales team for customized surgical requirements.</p>
          <button 
            className="px-10 py-4 bg-blue-600 text-white text-xs font-black uppercase rounded-xl hover:bg-white hover:text-slate-900 transition-all"
            onClick={() => navigate('/contact')}
          >
            Inquiry Now
          </button>
        </div>
        {/* Background Decoration */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Products;