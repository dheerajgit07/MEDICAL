import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const products = [
    "Diagnostic Equipments", "Hospital Scrubs & Linens", "Lab Coat", 
    "X-Ray Supplies", "Anaesthesia Equipments", "Autoclave & Sterilizer",
    "Surgical Instruments", "Hospital Furniture", "Infant Care Equipment",
    "Laboratory Plasticware", "OT Equipment", "Physiotherapy Products",
    "Dental Instruments", "Orthopedic Instruments", "Medical Disposable"
  ];

  return (
    <div className="w-full bg-[#1a365d] border-t-[5px] border-blue-500 sticky top-0 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center">
          
          {/* --- HOME --- */}
          <li>
            <Link 
              to="/home" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10"
            >
              Home
            </Link>
          </li>

          {/* --- ABOUT US --- */}
          <li>
            <Link 
              to="/aboutus" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10"
            >
              About Us
            </Link>
          </li>

          {/* --- PRODUCTS DROPDOWN --- */}
          <li className="relative group border-r border-white/10">
          <Link 
    to="/products" 
    className="px-6 py-3.5 flex items-center text-[11px] font-black text-white group-hover:bg-blue-600 transition-all tracking-widest uppercase outline-none no-underline decoration-0"
  >
    PRODUCTS 
    <svg 
      className="ml-2 w-2.5 h-2.5 fill-current opacity-60 group-hover:rotate-180 transition-transform" 
      viewBox="0 0 20 20"
    >
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </Link>
            
            <div className="absolute left-0 w-[300px] bg-white shadow-2xl border-t-4 border-blue-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
                {products.map((item, index) => (
                  <Link 
                    key={index}
                    to={`/products#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center px-6 py-3 text-[11px] font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-b border-slate-100 transition-colors"
                  >
                    <span className="mr-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* --- QUALITY (Mapped to your new Quality.jsx) --- */}
          <li>
            <Link 
              to="/quality" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10 whitespace-nowrap"
            >
              Quality
            </Link>
          </li>

          {/* --- ENQUIRY FORM (Mapped to your new Cart.jsx) --- */}
          <li>
            <Link 
              to="/enquiry-cart" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10 whitespace-nowrap"
            >
              Enquiry Form
            </Link>
          </li>

          {/* --- WARRANTY --- */}
          <li>
            <Link 
              to="/warranty" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10 whitespace-nowrap"
            >
              Warranty
            </Link>
          </li>

          {/* --- EXHIBITION --- */}
          <li>
            <Link 
              to="/exhibition" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10 whitespace-nowrap"
            >
              Exhibition
            </Link>
          </li>

          {/* --- CONTACT US --- */}
          <li>
            <Link 
              to="/contactus" 
              className="px-5 py-3.5 block text-[11px] font-black text-white hover:bg-blue-600 transition-all tracking-widest uppercase border-r border-white/10 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default CategoryNav;