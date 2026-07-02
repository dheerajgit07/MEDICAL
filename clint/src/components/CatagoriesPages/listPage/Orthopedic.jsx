import React, { useState } from 'react';

const OrthopedicInstruments = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Bone Drill and Accessories", img: "https://www.indosurgicals.com/images/categories/bone-drill-and-accessories.jpg", link: "/bone-drill-and-accessories" },
    { title: "Orthopedic Bone Osteotomes", img: "https://www.indosurgicals.com/images/categories/osteotome.jpg", link: "/orthopedic-bone-osteotomes" },
    { title: "Periosteal Elevator", img: "https://www.indosurgicals.com/images/categories/orthopedic-periosteal-elevator.jpg", link: "/periosteal-elevator" },
    { title: "Plate Bender", img: "https://www.indosurgicals.com/images/categories/orthopedic-plate-bender.jpg", link: "/plate-bender" },
    { title: "Screw Driver", img: "https://www.indosurgicals.com/images/categories/orthopedic-screw-driver.jpg", link: "/screw-driver" },
    { title: "Sterilization Tubes", img: "https://www.indosurgicals.com/images/categories/sterilization-tubes.jpg", link: "/sterilization-tubes" },
    { title: "Bone Nibbler", img: "https://www.indosurgicals.com/images/categories/bone-nibbler.jpg", link: "/bone-nibbler" },
    { title: "Reamer", img: "https://www.indosurgicals.com/images/categories/orthopedic-reamers.jpg", link: "/reamer" },
    { title: "Scissors and Shears", img: "https://www.indosurgicals.com/images/categories/scissors-and-shears.jpg", link: "/scissors-and-shears" },
    { title: "Retractors", img: "https://www.indosurgicals.com/images/categories/orthopedic-retractors.jpg", link: "/retractors" },
    { title: "Bone Cutting Forceps", img: "https://www.indosurgicals.com/images/categories/bone-cutting-forceps.jpg", link: "/bone-cutting-forceps" },
    { title: "Bone Hammer", img: "https://www.indosurgicals.com/images/categories/bone-hammer.jpg", link: "/bone-hammer" },
    { title: "Bone Holding Forceps & Clamp", img: "https://www.indosurgicals.com/images/categories/bone-holding-forceps-clamp.jpg", link: "/bone-holding-forceps-clamp" },
    { title: "Bone Levers", img: "https://www.indosurgicals.com/images/categories/bone-levers.jpg", link: "/bone-levers" },
    { title: "Bone Chisel", img: "https://www.indosurgicals.com/images/categories/orthopedic-chisel.jpg", link: "/bone-chisel" },
    { title: "Power Tools", img: "https://www.indosurgicals.com/images/categories/power-tools.jpg", link: "/power-tools" },
    { title: "Premium Instrument Sets", img: "https://www.indosurgicals.com/images/categories/premium-orthopedic-instrument-sets.jpg", link: "/premium-instrument-sets" },
    { title: "Orthopedic Instrument Sets", img: "https://www.indosurgicals.com/images/categories/instruments-sets.jpg", link: "/orthopedic-instrument-sets" },
    { title: "General Orthopedic Instruments", img: "https://www.indosurgicals.com/images/categories/other-orthopedic-instruments.jpg", link: "/general-orthopedic-instruments" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-indigo-900 pb-8">
          <div>
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Surgical Excellence</span>
            <h1 className="text-5xl font-black text-indigo-900 mt-2">
              Orthopedic Instruments
            </h1>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-indigo-900 font-semibold">Leading Global Manufacturer</p>
            <p className="text-slate-500 text-sm">ISO Certified Quality Standards</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Main Info Box */}
          <section className="lg:col-span-3 bg-indigo-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-44'}`}>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Crafting Durability & Reliability</h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-4">
                Welcome to <strong>IndoSurgicals Private Limited</strong>. We are the largest manufacturer of high-quality orthopedic instruments, 
                designed for convenient and flawless surgical use. Our range features precision-engineered tools like Bone Cutting Forceps, 
                Drills, and Periosteal Elevators.
              </p>
              <p className="text-indigo-100 text-lg leading-relaxed">
                By utilizing top-grade raw materials, we ensure every instrument offers maximum longevity. Our dedicated team is committed to 
                innovation, helping healthcare professionals achieve superior outcomes in orthopedic procedures.
              </p>
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-indigo-950 font-black py-2 px-6 rounded-lg transition-all"
            >
              {isExpanded ? 'SHOW LESS' : 'LEARN MORE'}
            </button>

            {/* Decorative Background Element */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </section>

          {/* Inquiry Card */}
          <div className="bg-white rounded-3xl p-8 border-2 border-indigo-900 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-indigo-900 font-bold mb-2">Get Quote</h3>
            <p className="text-slate-500 text-xs mb-6 uppercase tracking-wider font-bold">Best CIF/C&F Prices</p>
            <a href="mailto:info@indosurgicals.com" className="text-indigo-900 font-black text-sm hover:text-emerald-600 transition-colors">
              info@indosurgicals.com
            </a>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden border border-indigo-50 shadow-sm hover:shadow-indigo-200/50 hover:border-emerald-500 transition-all duration-300"
             href={item.link}>
              <div className="aspect-square p-4 flex items-center justify-center bg-indigo-50/30">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-center font-bold text-indigo-900 text-xs md:text-sm leading-tight group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrthopedicInstruments;