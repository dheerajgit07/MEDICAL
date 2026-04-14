import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, User, Phone, Building2, Mail, MapPin, MessageSquare, Package, Hash, Home, ChevronRight, CheckCircle } from 'lucide-react';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    product: '', quantity: '', name: '', phone: '',
    company: '', email: '', address: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("🚀 Thank you! Your enquiry has been sent successfully.");
  };

  return (
    <div className="w-full animate-in fade-in duration-700 bg-white">
      
      {/* --- HEADER SECTION --- */}
      <div className="w-full border-b border-slate-100 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200 shrink-0">
              <Send className="text-blue-400" size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                Bulk <span className="text-blue-600">Enquiry</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
                Get custom quotes for medical supplies
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
            <Link to="/" className="text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} className="text-slate-300" />
            <span className="text-blue-600">Enquiry Form</span>
          </nav>
        </div>
      </div>

      {/* --- FORM CONTENT GRID --- */}
      <div className="mt-12 grid grid-cols-1 xl:grid-cols-12 gap-12">
        
        {/* LEFT: FORM (8 Columns) */}
        <div className="xl:col-span-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Product Info */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Package className="text-blue-600" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">Product Requirement</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Product Name *</label>
                  <input name="product" required onChange={handleChange} className="w-full bg-white px-5 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-sm font-medium" placeholder="E.g. Surgical Instruments" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Quantity *</label>
                  <div className="relative">
                    <Hash className="absolute left-4 top-4 text-slate-300" size={18} />
                    <input name="quantity" required onChange={handleChange} className="w-full bg-white pl-12 pr-5 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-sm font-medium" placeholder="500 Units" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Contact Info */}
            <div className="bg-white p-2 md:p-4 space-y-6">
               <div className="flex items-center gap-3 mb-2">
                <User className="text-blue-600" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">Contact Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Full Name *</label>
                  <input name="name" required onChange={handleChange} className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 text-slate-300" size={18} />
                    <input name="phone" required onChange={handleChange} className="w-full bg-slate-50 pl-12 pr-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-slate-300" size={18} />
                    <input name="email" type="email" required onChange={handleChange} className="w-full bg-slate-50 pl-12 pr-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium" placeholder="mail@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Company / Hospital</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-4 text-slate-300" size={18} />
                    <input name="company" onChange={handleChange} className="w-full bg-slate-50 pl-12 pr-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium" placeholder="Organization Name" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Delivery Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 text-slate-300" size={18} />
                    <textarea name="address" required onChange={handleChange} rows="2" className="w-full bg-slate-50 pl-12 pr-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium" placeholder="Full address with City and State"></textarea>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase px-1">Message / Special Instructions</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-300" size={18} />
                    <textarea name="message" onChange={handleChange} rows="4" className="w-full bg-slate-50 pl-12 pr-5 py-4 rounded-2xl border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all text-sm font-medium" placeholder="Tell us more about your specific needs..."></textarea>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="group flex items-center justify-center gap-3 w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-blue-100 hover:bg-slate-900 hover:shadow-slate-200 active:scale-95">
              Send Enquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* RIGHT: INFO SIDEBAR (4 Columns) */}
        <div className="xl:col-span-4">
          <div className="sticky top-10 space-y-6">
            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Why IndoSurgicals?</h4>
                <ul className="space-y-5">
                  {[
                    "Global Export Experience",
                    "Certified Quality Standards",
                    "Bulk Order Discounts",
                    "Doorstep Logistics Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <CheckCircle size={16} className="text-blue-400" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-10 border-t border-white/10 text-center md:text-left">
                   <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Direct Support</p>
                   <p className="text-xl font-bold mt-2">+91 11 4909 2567</p>
                   <p className="text-slate-400 text-xs mt-1">info@indosurgicals.com</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Enquiry;