import React, { useState } from 'react';

const HospitalFurniture = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Manual Hospital Bed", img: "https://www.indosurgicals.com/images/categories/manual-hospital-bed.jpg", link: "/manual-hospital-bed" },
    { title: "Electric Hospital Bed", img: "https://www.indosurgicals.com/images/categories/electric-hospital-bed.jpg", link: "/electric-hospital-bed" },
    { title: "Orthopedic Traction Bed", img: "https://www.indosurgicals.com/images/categories/orthopedic-traction-bed.jpg", link: "/orthopedic-traction-bed" },
    { title: "Pediatric Hospital Bed", img: "https://www.indosurgicals.com/images/categories/pediatric-hospital-bed.jpg", link: "/pediatric-hospital-bed" },
    { title: "Attendant Bed", img: "https://www.indosurgicals.com/images/categories/attendant-bed.jpg", link: "/attendant-bed" },
    { title: "Hospital Ward Furniture", img: "https://www.indosurgicals.com/images/categories/hospital-ward-furniture.jpg", link: "/hospital-ward-furniture" },
    { title: "Blood Donor Couch & Chairs", img: "https://www.indosurgicals.com/images/categories/blood-donor-chairs.jpg", link: "/blood-donor-couch-chairs" },
    { title: "Stretchers", img: "https://www.indosurgicals.com/images/categories/stretchers.jpg", link: "/stretchers" },
    { title: "Hospital Trolleys", img: "https://www.indosurgicals.com/images/categories/hospital-trolleys.jpg", link: "/hospital-trolleys" },
    { title: "Examination & Delivery Tables", img: "https://www.indosurgicals.com/images/categories/examination-delivery-tables.jpg", link: "/examination-delivery-tables" },
    { title: "Wheelchairs", img: "https://www.indosurgicals.com/images/categories/wheel-chair.jpg", link: "/wheelchairs" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border-b-8 border-emerald-500">
          <img 
            src="https://www.indosurgicals.com/images/categories/banner/hospital-furniture-manufacturer-in-india.jpg" 
            alt="Hospital Furniture Banner" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-transparent flex items-center p-8">
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight">
              Hospital <br /> <span className="text-emerald-400">Furniture</span>
            </h1>
          </div>
        </div>

        {/* Content Card */}
        <section className="bg-white rounded-3xl p-8 border border-indigo-100 shadow-sm mb-16">
          <div className={`relative overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[1000px]' : 'max-h-40'}`}>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">World-Class Comfort & Durability</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Welcome to <strong>IndoSurgicals Private Limited</strong>, the premier destination for top-quality hospital furniture. 
              As a trusted manufacturer, we use the highest quality raw materials to ensure our products offer exceptional 
              durability and a flawless finish for modern healthcare environments.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our comprehensive range includes manual and electric beds, ward furniture, wheelchairs, ambulance stretchers, 
              and specialized tables. Every piece is designed to support healthcare professionals in providing 
              optimal care and comfort to their patients.
            </p>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-6 py-2 bg-indigo-900 text-emerald-400 font-black rounded-xl hover:bg-indigo-800 transition-all flex items-center gap-2"
          >
            {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </section>

        {/* Categories Section */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
          <h2 className="text-2xl font-black text-indigo-900 uppercase tracking-widest">Product Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl border border-indigo-50 shadow-md hover:shadow-indigo-200/50 hover:border-emerald-500 transition-all duration-300 flex flex-col"
             href={item.link}>
              <div className="p-6 bg-slate-50 flex items-center justify-center h-64 rounded-t-2xl overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
              <div className="p-5 border-t border-indigo-50 text-center flex-grow flex items-center justify-center">
                <h3 className="font-bold text-indigo-900 group-hover:text-emerald-600 transition-colors text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Inquiry CTA */}
        <div className="mt-20 bg-indigo-900 rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-white mb-4">Bulk Requirement Inquiry</h2>
            <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
              Please send your requirements with quantity to get our best CIF/C&F prices directly in your inbox.
            </p>
            <a 
              href="mailto:info@indosurgicals.com" 
              className="inline-block bg-emerald-500 text-indigo-900 font-black px-10 py-4 rounded-full text-xl hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg"
            >
              info@indosurgicals.com
            </a>
          </div>
          {/* Subtle background graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFurniture;