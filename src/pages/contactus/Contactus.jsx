import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white animate-in fade-in duration-700">
      
      {/* --- HEADER SECTION --- */}
      <div className="w-full border-b border-slate-100 pb-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                Contact <span className="text-blue-600">Us</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">Get in touch with IndoSurgicals</p>
            </div>
          </div>
          <nav className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 w-fit">
            <Link className="text-slate-400 hover:text-blue-600 transition-colors" to="/home">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600">Contact</span>
          </nav>
        </div>
      </div>

      <div className="px-4 md:px-8 mt-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- MAIN CONTENT (Left - 75%) --- */}
          <main className="w-full lg:w-3/4 space-y-12">
            <div className="text-left max-w-4xl">
              <p className="text-xl md:text-2xl font-bold text-slate-700 leading-snug">
                Welcome to IndoSurgicals Private Limited! We value your feedback, inquiries, and 
                <span className="text-blue-600"> business opportunities.</span> Our dedicated team is here to assist you.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Office Card */}
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Registered Office</h2>
                  <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                    C-117, 3rd Floor, Mayapuri Industrial Area Phase II, <br />
                    New Delhi - 110064, India
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 p-4 bg-white/80 rounded-2xl border border-slate-100 backdrop-blur-sm">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Office Hours: <span className="text-slate-900 ml-2">10 AM - 5 PM</span></span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white text-left relative overflow-hidden">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight mb-6">Quick Connect</h2>
                <div className="space-y-4">
                  <a href="tel:+919350093400" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors font-bold text-sm underline decoration-blue-500/30">+91 93500 93400</a>
                  <a href="mailto:info@indosurgicals.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors font-bold text-sm">info@indosurgicals.com</a>
                  <a href="http://www.indosurgicals.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors font-bold text-sm">www.indosurgicals.com</a>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="p-10 rounded-[2.5rem] border border-slate-100 space-y-6 text-left">
              <p className="text-slate-500 text-sm leading-[1.8] font-medium">
                Whether you have questions about our products, need assistance with an order, or want to explore partnership opportunities, our experienced professionals are ready to help. We strive to respond promptly to all queries and provide the best possible customer service.
              </p>
              
              {/* Twitter Box */}
              <div className="bg-[#1DA1F2]/10 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1DA1F2]/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Twitter Updates</h4>
                    <p className="text-slate-500 text-[10px] font-bold uppercase">Follow @IndoSurgicals</p>
                  </div>
                </div>
                <a href="https://twitter.com/IndoSurgicals" target="_blank" rel="noreferrer" className="px-8 py-3 bg-[#1DA1F2] text-white text-[10px] font-black uppercase rounded-xl hover:brightness-110 shadow-md">Follow Now</a>
              </div>
            </div>
          </main>

          {/* --- SIDEBAR/MAP (Right - 25%) --- */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-28 space-y-6">
              <div className="p-3 bg-slate-100 rounded-[2.5rem] border border-slate-200">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-[500px] border border-slate-200">
                  <iframe 
                    title="location"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.138476722283!2d77.1264478755005!3d28.535516075711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df64373f153%3A0xe543e26f8d7b3a4f!2sMayapuri%20Industrial%20Area%20Phase%20II!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
              <div className="px-8 py-4 flex items-center gap-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-emerald-200 shadow-lg"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Service Online</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Contact;