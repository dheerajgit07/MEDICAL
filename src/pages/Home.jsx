import React from 'react';
import HeroSlider from '../components/home/HeroSlider'; 
import Categories from '../components/home/Categories';
import CategoriesSlide from '../components/home/CatagoriesSlide';
import CustomerTestimonial from '../components/home/CustomerTestimonial';
import Footer from '../components/home/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full bg-white font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Hero Slider Section */}
      <section className="w-full relative">
        <HeroSlider />
      </section>

      {/* 2. Professional Trust Grid (Refined Design) */}
      <section className="max-w-7xl mx-auto -mt-10 relative z-20 px-6 mt-60">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Badge 1: Quality */}
          <div className="group bg-white p-8 border-b-4 border-blue-600 shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <span className="text-2xl font-bold">🛡️</span>
            </div>
            <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] mb-2">Quality Assurance</h4>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">ISO 9001:2015 & CE Certified Instruments</p>
          </div>

          {/* Badge 2: Global */}
          <div className="group bg-white p-8 border-b-4 border-slate-900 shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
               <span className="text-2xl font-bold">🌍</span>
            </div>
            <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] mb-2">Global Presence</h4>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">Exporting to 50+ Countries Worldwide</p>
          </div>

          {/* Badge 3: Manufacturing */}
          <div className="group bg-white p-8 border-b-4 border-blue-600 shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <span className="text-2xl font-bold">🏗️</span>
            </div>
            <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] mb-2">Manufacturing</h4>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">State-of-the-Art Production Facility</p>
          </div>

          {/* Badge 4: Support */}
          <div className="group bg-white p-8 border-b-4 border-slate-900 shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 text-slate-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
               <span className="text-2xl font-bold">💬</span>
            </div>
            <h4 className="text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] mb-2">24/7 Enquiry</h4>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">Dedicated Support for Bulk Orders</p>
          </div>

        </div>
      </section>

      {/* 3. Corporate Statement Section (The "Professional" Part) */}
      <section className="max-w-6xl mx-auto text-center py-24 px-6">
        <div className="flex flex-col items-center">
            <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4">Leading Healthcare Excellence</span>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-10">
                Empowering healthcare with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    precision and quality
                </span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg leading-loose font-medium max-w-3xl mb-12">
                Discover our wide range of medical equipment and supplies. From diagnostics to 
                surgical instruments, we've got you covered. Join the millions of satisfied 
                customers who trust <span className="text-slate-900 font-black">IndoSurgicals</span> for their healthcare needs.
            </p>

            <Link 
                to="/aboutus" 
                className="inline-block bg-slate-900 hover:bg-blue-600 text-white font-black text-[11px] tracking-[0.2em] uppercase px-12 py-5 transition-all shadow-2xl active:scale-95"
            >
                Read More
            </Link>
        </div>
      </section>

      {/* 4. Subtle Border for Next Section */}
      <div className="max-w-7xl mx-auto border-t border-slate-100"></div>
      <Categories />
        <CategoriesSlide />
        <CustomerTestimonial />

        {/* Global Footer & Floating Buttons */}
        
    </div>
  );
};

export default Home;