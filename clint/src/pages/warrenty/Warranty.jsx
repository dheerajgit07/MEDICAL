import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import ProductCategories from '../about/ProductCategories';
import Footer from '../../components/home/Footer';

const Warranty = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    buyer_name: '', company_name: '', address: '', email_id: '', phone_number: '',
    serial_number: '', product_name: '', purchase_date: '', delivery_date: '',
    purchase_platform: 'MedDeal.in', order_id: '', platform_other: ''
  });

  const productList = [
    "7-Silvery Stethoscope (2 Year Warranty)", "8-Silvery II-SS Stethoscope (5 Year Warranty)",
    "9-Silvery III Stethoscope (5 Year Warranty)", "10-Silvery III-SS Stethoscope (5 Year Warranty)",
    "11-IndoSurgicals Dulcet Black Stethoscope", "12-Indosurgicals Dulcet Neonatal Dual Head Stethoscope",
    "13-IndoSurgicals X-Ray View Box, LED, General Quality, Single Film", "14-Queen Square Pattern Hammer",
    "15-Tuning Fork Set of 3 (128 Hz, 256 Hz, 512 Hz)", "19-Small Vaccine Carrier, Capacity 0.80 Litres",
    "22-LED Laryngoscope Set, Adult, Macintosh Type", "31-Lead Apron (Velcro Type) 0.35mm, BARC Certified",
    "34-IndoSurgicals Dulcet Black-II Stethoscope"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40 pb-20">
      
      {/* --- BREADCRUMB HEADER (Outside the flex container for full width) --- */}
      <div className="bg-slate-50 border-b border-slate-100 mb-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">
              Warranty <span className="text-blue-600">Registration</span>
            </h1>
          </div>
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1.5" to="/home">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Warranty</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- SIDEBAR PANEL --- */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-28">
              
            </div>
          </aside>

          {/* --- MAIN WARRANTY FORM PANEL --- */}
          <main className="w-full lg:w-3/4">
            <div className="border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-100/50 bg-white">
              
              {/* Header Content */}
              <div className="p-8 md:p-12 bg-[#fcfdfe] border-b border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-[#1a365d] uppercase tracking-tighter mb-6 leading-tight">
                  IndoSurgicals Standard <br className="hidden md:block"/> Warranty Program
                </h2>
                <div className="space-y-4 text-slate-500 text-[13px] leading-relaxed font-medium">
                  <p>Welcome to the official registration portal. Please ensure all details match your purchase invoice to avoid registration delays.</p>
                  <div className="bg-amber-50 text-amber-700 p-5 rounded-2xl border border-amber-100 flex gap-3 items-start">
                    <span className="font-bold text-lg leading-none">!</span>
                    <p className="font-bold">Important: This service is strictly for Indian Buyers. International clients should contact their local dealer.</p>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <form className="p-8 md:p-12 space-y-12">
                
                {/* SECTION 1: BUYER */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">01. Buyer Information</h5>
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Buyer Full Name</span>
                      <input name="buyer_name" onChange={handleChange} placeholder="Enter name" className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all font-semibold text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</span>
                      <input name="phone_number" onChange={handleChange} placeholder="10-digit mobile number" className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all font-semibold text-slate-700" />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: PRODUCT */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">02. Product Information</h5>
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2 space-y-2">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Product</span>
                      <select name="product_name" onChange={handleChange} className="w-full p-4 border border-slate-200 rounded-2xl bg-slate-50 focus:bg-white outline-none cursor-pointer font-semibold text-slate-700 appearance-none">
                        <option value="">Choose your product from the list</option>
                        {productList.map((prod, i) => (
                          <option key={i} value={prod}>{prod}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* --- NAVIGATION BUTTONS --- */}
                <div className="pt-8 flex flex-col md:flex-row items-center gap-5">
                  <button 
                    type="button" 
                    onClick={() => alert('Registration details captured!')} 
                    className="w-full md:w-auto px-16 py-5 bg-[#1a365d] text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl shadow-blue-100 hover:bg-blue-800 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Submit Registration
                  </button>

                  <button 
                    type="button" 
                    onClick={() => navigate('/')} 
                    className="w-full md:w-auto px-12 py-5 border-2 border-slate-100 text-slate-400 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-slate-50 hover:text-slate-600 transition-all flex items-center justify-center gap-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    Back to Home
                  </button>
                </div>
                

              </form>
            </div>
          </main>
        </div>
      </div>
      

      
    </div>
    
  );
};

export default Warranty;