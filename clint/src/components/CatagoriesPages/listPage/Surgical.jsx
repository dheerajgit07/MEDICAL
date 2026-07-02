import React, { useState } from 'react';

const SurgicalInstruments = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Instrument Kit", img: "https://www.indosurgicals.com/images/categories/instrument-kit.jpg", link: "/instrument-kit" },
    { title: "Surgical Forceps", img: "https://www.indosurgicals.com/images/categories/forceps.jpg", link: "/surgical-forceps" },
    { title: "General Dissecting Forceps", img: "https://www.indosurgicals.com/images/categories/general-dissecting-forceps.jpg", link: "/general-dissecting-forceps" },
    { title: "Surgical Scissors", img: "https://www.indosurgicals.com/images/categories/scissors.jpg", link: "/surgical-scissors" },
    { title: "Scalpel Handle", img: "https://www.indosurgicals.com/images/categories/scalpels.jpg", link: "/scalpel-handle" },
    { title: "Other Instruments", img: "https://www.indosurgicals.com/images/categories/other-instruments.jpg", link: "/other-instruments" },
    { title: "OB/GYN", img: "https://www.indosurgicals.com/images/categories/ob-gyn.jpg", link: "/ob-gyn" },
    { title: "Tracheal Retractors", img: "https://www.indosurgicals.com/images/categories/tracheal-retractors.jpg", link: "/tracheal-retractors" },
    { title: "Rectal Speculum", img: "https://www.indosurgicals.com/images/categories/rectal-speculum.jpg", link: "/rectal-speculum" },
    { title: "Abdominal Retractors", img: "https://www.indosurgicals.com/images/categories/abdominal-retractors.jpg", link: "/abdominal-retractors" },
    { title: "Volkman Retractor", img: "https://www.indosurgicals.com/images/categories/finger-retractors.jpg", link: "/volkman-retractor" },
    { title: "General Use Retractors", img: "https://www.indosurgicals.com/images/categories/general-use-retractors.jpg", link: "/general-use-retractors" },
    { title: "Mouth Gags", img: "https://www.indosurgicals.com/images/categories/mouth-gags.jpg", link: "/mouth-gags" },
    { title: "Self-Retaining Retractors", img: "https://www.indosurgicals.com/images/categories/surgical-retractors.jpg", link: "/self-retaining-retractors" },
    { title: "ENT Instruments", img: "https://www.indosurgicals.com/images/categories/ent-instruments.jpg", link: "/ent-instruments" },
    { title: "Suction Tube", img: "https://www.indosurgicals.com/images/categories/suction-tube.jpg", link: "/suction-tube" },
    { title: "Surgical Cannula", img: "https://www.indosurgicals.com/images/categories/surgical-cannula.jpg", link: "/surgical-cannula" },
    { title: "Nuero Instruments", img: "https://www.indosurgicals.com/images/categories/nuero-instruments.jpg", link: "/nuero-instruments" },
    { title: "Cardiothoracic Instruments", img: "https://www.indosurgicals.com/images/categories/cardiothoracic-instruments.jpg", link: "/cardiothoracic-instruments" },
    { title: "Ophthalmic Instruments", img: "https://www.indosurgicals.com/images/categories/ophthalmic-instruments.jpg", link: "/ophthalmic-instruments" },
    { title: "Veterinary Instruments", img: "https://www.indosurgicals.com/images/categories/veterinary-instruments.jpg", link: "/veterinary-instruments" },
    { title: "Spine Surgical Instruments", img: "https://www.indosurgicals.com/images/categories/spine-surgical-instruments.jpg", link: "/spine-surgical-instruments" },
    { title: "Nerve Retractors", img: "https://www.indosurgicals.com/images/categories/nerve-retractors.jpg", link: "/nerve-retractors" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Surgical Instruments
          </h1>
          <div className="h-1.5 w-32 bg-red-600 mx-auto rounded-full"></div>
        </header>

        {/* Content/About Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 mb-16">
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-36'}`}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">World-Class Precision & Excellence</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Welcome to <strong>IndoSurgicals Private Limited</strong>, a global leader in manufacturing and supplying surgical instruments. 
              Our expansive range caters to diverse medical specialties, including ENT, Neuro, Cardiothoracic, and Laparoscopic procedures.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Crafted from premium materials, our instruments ensure maximum durability and precision. We maintain stringent quality control 
              and international compliance standards to guarantee the safety of every healthcare professional and patient.
            </p>
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-red-600 font-bold hover:text-red-700 underline flex items-center gap-1"
          >
            {isExpanded ? 'Read Less' : 'Read More About Our Excellence'}
          </button>
        </section>

        {/* Categories Grid */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <h3 className="text-xl font-bold text-gray-700">Explore Categories</h3>
          <span className="text-sm text-gray-500 font-medium">{categories.length} Specialties Found</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-red-500 hover:shadow-xl transition-all duration-300"
             href={item.link}>
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-center font-bold text-gray-700 text-sm group-hover:text-red-600 transition-colors line-clamp-2 min-h-[40px] flex items-center justify-center">
                  {item.title}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <footer className="mt-20 bg-gray-900 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-gray-400 mb-6">Send your requirements with quantity for the best CIF/C&F prices.</p>
          <a 
            href="mailto:info@indosurgicals.com" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Email: info@indosurgicals.com
          </a>
        </footer>
      </div>
    </div>
  );
};

export default SurgicalInstruments;