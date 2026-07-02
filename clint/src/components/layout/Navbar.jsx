import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
        
        {/* 1. Text Logo Section (DIKOTA) */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2 group">
            {/* Ek chota square icon for professional look */}
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-100 group-hover:bg-blue-700 transition-all">
              <span className="text-white font-black text-xl">D</span>
            </div>
            {/* Main Text Logo */}
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-slate-800 uppercase">
                DIKOTA<span className="text-blue-600">.</span>
              </span>
              <span className="text-[9px] font-bold text-blue-600 tracking-[0.3em] uppercase">
                Medical
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Google Search Bar */}
        <div className="flex-grow max-w-2xl group">
          <form className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search for medical products, brands and more..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-5 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
            />
            <button className="absolute right-3 p-2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 13 13" fill="currentColor">
                <path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* 3. Right Section: Cart & Certificates */}
        <div className="flex items-center space-x-6">

          {/* Admin Portal */}
          <Link to="/admin" className="relative group flex flex-col items-center">
            <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 group-hover:bg-slate-800 transition-all duration-300">
               <ShieldCheck className="text-slate-600 group-hover:text-white w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-1 group-hover:text-slate-800 uppercase tracking-tighter">Admin</span>
          </Link>
          
          {/* Enquiry Cart */}
          <Link to="/enquiry-cart" className="relative group flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 transition-all duration-300">
               <span className="text-blue-600 group-hover:text-white text-xl">🛒</span>
               <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                 {itemCount}
               </div>
            </div>
            <span className="text-[10px] font-bold text-gray-500 mt-1 group-hover:text-blue-600 uppercase tracking-tighter">Enquiry</span>
          </Link>

          {/* Certificates */}
          <div className="hidden sm:flex items-center space-x-3 border-l border-gray-100 pl-6 text-center">
             <div className="flex flex-col">
                <div className="flex space-x-1 justify-center">
                  <span className="bg-gray-100 text-[10px] font-black px-1 rounded">CE</span>
                  <span className="bg-gray-100 text-[10px] font-black px-1 rounded">ISO</span>
                </div>
                <span className="text-[8px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Quality Certified</span>
             </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;