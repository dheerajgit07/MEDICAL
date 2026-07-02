import React, { useState } from 'react';

const AnaesthesiaEquipments = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const products = [
    { title: "Manual Artificial Resuscitators", img: "https://www.indosurgicals.com/images/categories/artificial-resuscitator.jpg", link: "/manual-artificial-resuscitators" },
    { title: "Breathing Circuit", img: "https://www.indosurgicals.com/images/categories/bain-circuit.jpg", link: "/breathing-circuit" },
    { title: "Laryngoscope", img: "https://www.indosurgicals.com/images/categories/laryngoscopes.jpg", link: "/laryngoscope" },
    { title: "Emergency FIRST AID Kit", img: "https://www.indosurgicals.com/images/categories/emergency-first-aid-kit.jpg", link: "/emergency-first-aid-kit" },
    { title: "Anesthesia Machine", img: "https://www.indosurgicals.com/images/categories/anesthesia-machine.jpg", link: "/anesthesia-machine" },
    { title: "Anaesthesia Face Masks", img: "https://www.indosurgicals.com/images/categories/anaesthesia-face-masks.jpg", link: "/anaesthesia-face-masks" },
    { title: "CPR Mask", img: "https://www.indosurgicals.com/images/categories/cpr-mask.jpg", link: "/cpr-mask" },
    { title: "Disposable Face Masks", img: "https://www.indosurgicals.com/images/categories/disposable-face-masks.jpg", link: "/disposable-face-masks" },
    { title: "Guedel Airways", img: "https://www.indosurgicals.com/images/categories/guedel-airways.jpg", link: "/guedel-airways" },
    { title: "Mouth Opener", img: "https://www.indosurgicals.com/images/categories/mouth-opener.jpg", link: "/mouth-opener" },
    { title: "NIV (Non Vented) Mask", img: "https://www.indosurgicals.com/images/categories/niv-non-vented-mask.jpg", link: "/niv-non-vented-mask" },
    { title: "CPAP/ BIPAP Mask", img: "https://www.indosurgicals.com/images/categories/cpap-niv-mask.jpg", link: "/cpap-bipap-mask" },
    { title: "Head Harness", img: "https://www.indosurgicals.com/images/categories/head-harness.jpg", link: "/head-harness" },
    { title: "Rebreathing Bags", img: "https://www.indosurgicals.com/images/categories/rebreathing-bags.jpg", link: "/rebreathing-bags" },
    { title: "Airways System", img: "https://www.indosurgicals.com/images/categories/airways-system.jpg", link: "/airways-system" },
    { title: "Reusable Circuit", img: "https://www.indosurgicals.com/images/categories/reusable-circuit.jpg", link: "/reusable-circuit" },
    { title: "High Flow Nasal Cannula", img: "https://www.indosurgicals.com/images/categories/high-flow-nasal-cannula.jpg", link: "/high-flow-nasal-cannula" },
    { title: "Ventilator Circuit", img: "https://www.indosurgicals.com/images/categories/ventilator-circuit.jpg", link: "/ventilator-circuit" },
    { title: "General Products", img: "https://www.indosurgicals.com/images/categories/general-products.jpg", link: "/general-products" },
    { title: "Combo Circuit", img: "https://www.indosurgicals.com/images/categories/combo-circuit.jpg", link: "/combo-circuit" },
    { title: "Heated Wire Circuit", img: "https://www.indosurgicals.com/images/categories/heated-wire-circuit.jpg", link: "/heated-wire-circuit" },
    { title: "Oxygen Cylinder & Regulators", img: "https://www.indosurgicals.com/images/categories/oxygen-cylinder-regulators.jpg", link: "/oxygen-cylinder-regulators" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 border-b-4 border-blue-500 inline-block">
        Anaesthesia Equipments
      </h1>

      {/* Main Banner */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="https://www.indosurgicals.com/images/categories/banner/anesthesia-equipment-and-products.jpg" 
          alt="Anaesthesia Equipments Banner" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Description Card */}
      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
        <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-32'}`}>
          <p className="text-lg leading-relaxed mb-4">
            <strong>IndoSurgical Private Limited</strong> is a leading name in making high-quality anesthesia equipment. 
            We offer a wide range of tools needed for surgery and emergency care, including machines, masks, and breathing circuits.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our products are built to be safe and easy to use for doctors and nurses. From oxygen cylinders to laryngoscopes, 
            every item is tested to meet high standards. Medical professionals around the world trust us for our durable and accurate equipment.
          </p>
          <p className="text-lg leading-relaxed font-bold text-blue-700">
            Send your requirements to info@indosurgicals.com for the best prices.
          </p>
          {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-600 font-bold hover:text-blue-800 transition-colors uppercase text-sm tracking-wider"
        >
          {isExpanded ? '↑ Show Less' : '↓ Read More'}
        </button>
      </section>

      {/* Product Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-700 bg-gray-100 py-3 px-6 rounded-full inline-block">
          Explore Our Categories
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <a key={index} href={item.link} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="p-4 flex-grow flex items-center justify-center bg-gray-50">
              <img 
                src={item.img} 
                alt={item.title} 
                className="max-h-48 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 border-t border-gray-100 text-center">
              <h3 className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnaesthesiaEquipments;