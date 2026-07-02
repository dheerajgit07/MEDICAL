import React, { useState } from 'react';

const DentalInstruments = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Burnishers", img: "https://www.indosurgicals.com/images/categories/burnishers.jpg", link: "/burnishers" },
    { title: "Carvers", img: "https://www.indosurgicals.com/images/categories/dental-carvers.jpg", link: "/carvers" },
    { title: "Cement Spatulas", img: "https://www.indosurgicals.com/images/categories/cement-spatulas.jpg", link: "/cement-spatulas" },
    { title: "Chisels", img: "https://www.indosurgicals.com/images/categories/chisels.jpg", link: "/chisels" },
    { title: "College Pliers", img: "https://www.indosurgicals.com/images/categories/college-pliers.jpg", link: "/college-pliers" },
    { title: "Cord Packers", img: "https://www.indosurgicals.com/images/categories/cord-packers.jpg", link: "/cord-packers" },
    { title: "Curettes", img: "https://www.indosurgicals.com/images/categories/curettes.jpg", link: "/curettes" },
    { title: "Dental Instrument Kits", img: "https://www.indosurgicals.com/images/categories/dental-instrument-kits.jpg", link: "/dental-instrument-kits" },
    { title: "Dissectors", img: "https://www.indosurgicals.com/images/categories/dissectors.jpg", link: "/dissectors" },
    { title: "Elevators", img: "https://www.indosurgicals.com/images/categories/elevators.jpg", link: "/elevators" },
    { title: "Extraction Forceps", img: "https://www.indosurgicals.com/images/categories/extraction-forceps.jpg", link: "/extraction-forceps" },
    { title: "Orthodontics Instruments", img: "https://www.indosurgicals.com/images/categories/orthodontics.jpg", link: "/orthodontics-instruments" },
    { title: "Wax Placers", img: "https://www.indosurgicals.com/images/categories/wax-placers.jpg", link: "/wax-placers" },
    { title: "General Dentistry", img: "https://www.indosurgicals.com/images/categories/general-dentistry.jpg", link: "/general-dentistry" },
    { title: "Dental Caliper", img: "https://www.indosurgicals.com/images/categories/dental-caliper.jpg", link: "/dental-caliper" },
    { title: "Syringes", img: "https://www.indosurgicals.com/images/categories/syringes.jpg", link: "/syringes" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 border-b-4 border-cyan-500 pb-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Dental Instruments
          </h1>
          <p className="mt-2 text-cyan-600 font-medium uppercase tracking-widest">
            Precision Crafted Medical Solutions
          </p>
        </header>

        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-32'}`}>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>IndoSurgical Private Limited</strong> is a global leader in manufacturing high-quality dental instruments. 
              Our tools are crafted using the finest raw materials, ensuring <strong>superior performance, durability, and accuracy</strong> for dental professionals.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              We offer an extensive range of instruments—from <strong>burnishers and extraction forceps</strong> to <strong>orthodontic tools and specialized kits</strong>. 
              Every instrument undergoes strict quality control to meet international standards.
            </p>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-cyan-600 font-bold hover:text-cyan-700 transition-colors underline"
          >
            {isExpanded ? 'Show Less ↑' : 'Read More About Our Process ↓'}
          </button>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
             href={item.link}>
              <div className="aspect-square bg-slate-50 flex items-center justify-center p-4">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white text-center">
                <h3 className="font-bold text-slate-800 group-hover:text-cyan-600 transition-colors text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="mt-16 bg-cyan-900 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Inquire Now</h2>
          <p className="text-cyan-100 mb-6">Explore our full catalog and get the best price quotes today.</p>
          <div className="inline-block bg-white text-cyan-900 font-black py-3 px-8 rounded-full shadow-lg">
            info@indosurgicals.com
          </div>
        </div>

      </div>
    </div>
  );
};

export default DentalInstruments;