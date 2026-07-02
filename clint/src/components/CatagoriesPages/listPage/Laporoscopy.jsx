import React, { useState } from 'react';

const LaparoscopyInstruments = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Laparoscopic Graspers", img: "https://www.indosurgicals.com/images/categories/laparoscopic-graspers.jpg", link: "/laparoscopic-graspers" },
    { title: "Laparoscopic Morcellator", img: "https://www.indosurgicals.com/images/categories/electronic-morcellator.jpg", link: "/laparoscopic-morcellator" },
    { title: "Laparoscopic Bipolar Forceps", img: "https://www.indosurgicals.com/images/categories/laparoscopic-bipolar-forceps.jpg", link: "/laparoscopic-bipolar-forceps" },
    { title: "Laparoscopic Needle Holders", img: "https://www.indosurgicals.com/images/categories/laparoscopic-needle-holder.jpg", link: "/laparoscopic-needle-holders" },
    { title: "Laparoscopic Trocar & Cannula", img: "https://www.indosurgicals.com/images/categories/laparoscopic-trocar-cannula.jpg", link: "/laparoscopic-trocar-cannula" },
    { title: "Laparoscopic Clip Applicator", img: "https://www.indosurgicals.com/images/categories/laparoscopic-clip-applicator.jpg", link: "/laparoscopic-clip-applicator" },
    { title: "Laparoscopic Scissors", img: "https://www.indosurgicals.com/images/categories/laparoscopic-scissors.jpg", link: "/laparoscopic-scissors" },
    { title: "Laparoscopic Retractors", img: "https://www.indosurgicals.com/images/categories/laparoscopic-retractor.jpg", link: "/laparoscopic-retractors" },
    { title: "Laparoscopic Veress Needle", img: "https://www.indosurgicals.com/images/categories/laparoscopic-veress-needle.jpg", link: "/laparoscopic-veress-needle" },
    { title: "Laparoscopic Dissectors", img: "https://www.indosurgicals.com/images/categories/laparoscopic-dissectors.jpg", link: "/laparoscopic-dissectors" },
    { title: "Laparoscopic Cables", img: "https://www.indosurgicals.com/images/categories/laparoscopic-cables.jpg", link: "/laparoscopic-cables" },
    { title: "Laparoscopic Uterine Manipulator", img: "https://www.indosurgicals.com/images/categories/laparoscopic-uterine-manipulator.jpg", link: "/laparoscopic-uterine-manipulator" },
    { title: "Laparoscopic Stone Holding Forceps", img: "https://www.indosurgicals.com/images/categories/laparoscopic-stone-holding-forceps.jpg", link: "/laparoscopic-stone-holding-forceps" },
    { title: "Laparoscopic Knot Pushers", img: "https://www.indosurgicals.com/images/categories/laparoscopic-knot-pushers.jpg", link: "/laparoscopic-knot-pushers" },
    { title: "Laparoscopic Reducers", img: "https://www.indosurgicals.com/images/categories/laparoscopic-reducer.jpg", link: "/laparoscopic-reducers" },
    { title: "Laparoscopic Vessel Sealer & Clamps", img: "https://www.indosurgicals.com/images/categories/laparoscopic-vessel-sealer-clamps.jpg", link: "/laparoscopic-vessel-sealer-clamps" },
    { title: "Laparoscopic Gynae Instruments", img: "https://www.indosurgicals.com/images/categories/laparoscopic-gynecological-instruments.jpg", link: "/laparoscopic-gynae-instruments" },
    { title: "Other Laparoscopic Instruments", img: "https://www.indosurgicals.com/images/categories/other-laparoscopic-instruments.jpg", link: "/other-laparoscopic-instruments" },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
            <span className="text-indigo-600 font-bold uppercase tracking-tighter">Premium Surgical Range</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Laparoscopy Instruments
          </h1>
        </header>

        {/* Content Section */}
        <section className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 p-8 mb-16">
          <div className={`relative overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[1500px]' : 'max-h-40'}`}>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong>IndoSurgicals Private Limited</strong> is a premier global entity specializing in the manufacturing of top-tier 
              <strong> Laparoscopy Instruments</strong>. Our tools serve a vital role across Gynecology, Urology, Bariatric, and Orthopedic surgeries.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our commitment to precision craftsmanship is unwavering. Each instrument—from Graspers and Bipolar Forceps to Trocar & Cannula—is meticulously 
              fashioned to uphold the highest standards of reliability, ensuring improved surgical outcomes and elevated patient care.
            </p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-xl">
              <h4 className="text-emerald-800 font-bold mb-2">Educational Resource:</h4>
              <a 
                href="https://www.indosurgicals.com/page/recommended-laparoscopic-instruments.php" 
                target="_blank" 
                className="text-emerald-600 hover:text-emerald-700 font-semibold underline decoration-2 underline-offset-4"
              >
                Recommended Laparoscopic Instruments For Surgeons: A Comprehensive Guide →
              </a>
            </div>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-8 py-2.5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            {isExpanded ? 'Read Less' : 'Read Full Overview'}
          </button>
        </section>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-500 transition-all duration-300 overflow-hidden"
             href={item.link}>
              <div className="flex items-center justify-center h-48 mb-6 bg-slate-50 rounded-xl overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-center font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  +
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Email Inquiry Section */}
        <footer className="mt-20 border-2 border-dashed border-indigo-200 rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="bg-indigo-600 text-white p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Bulk Requirements?</h2>
          <p className="text-slate-500 mb-6">Send your quantity details to receive our best CIF/C&F prices.</p>
          <a href="mailto:info@indosurgicals.com" className="text-xl font-black text-indigo-600 hover:tracking-widest transition-all">
            info@indosurgicals.com
          </a>
        </footer>

      </div>
    </div>
  );
};

export default LaparoscopyInstruments;