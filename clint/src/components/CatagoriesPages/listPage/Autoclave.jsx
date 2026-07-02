import React, { useState } from 'react';

const AutoclaveSterilizer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Portable Autoclaves", img: "https://www.indosurgicals.com/images/categories/portable-autoclaves.jpg", link: "/portable-autoclaves" },
    { title: "Vertical Autoclaves", img: "https://www.indosurgicals.com/images/categories/Vertical-Autoclave.jpg", link: "/vertical-autoclaves" },
    { title: "Horizontal Autoclaves", img: "https://www.indosurgicals.com/images/categories/Horizontal Autoclaves.jpg", link: "/horizontal-autoclaves" },
    { title: "Dental Autoclaves", img: "https://www.indosurgicals.com/images/categories/dental-autoclaves.jpg", link: "/dental-autoclaves" },
    { title: "Tattoo Autoclaves", img: "https://www.indosurgicals.com/images/categories/tattoo-autoclaves.jpg", link: "/tattoo-autoclaves" },
    { title: "Ultraviolet Chamber", img: "https://www.indosurgicals.com/images/categories/ultraviolet-chamber.jpg", link: "/ultraviolet-chamber" },
    { title: "Instrument Sterilizer", img: "https://www.indosurgicals.com/images/categories/instrument-sterilizer.jpg", link: "/instrument-sterilizer" },
    { title: "Formalin Chamber", img: "https://www.indosurgicals.com/images/categories/formalin-chamber.jpg", link: "/formalin-chamber" },
    { title: "Dressing Drums", img: "https://www.indosurgicals.com/images/categories/dressing-drum.jpg", link: "/dressing-drums" },
    { title: "Cidex Trays", img: "https://www.indosurgicals.com/images/categories/cidex-tray.jpg", link: "/cidex-trays" },
    { title: "Sterilization Cassette", img: "https://www.indosurgicals.com/images/categories/sterilization-cassette.jpg", link: "/sterilization-cassette" },
    { title: "Autoclave Accessories", img: "https://www.indosurgicals.com/images/categories/autoclave-accessories.jpg", link: "/autoclave-accessories" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans text-gray-800">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6 border-l-8 border-blue-600 pl-4">
        Autoclave & Sterilizer
      </h1>

      {/* Main Banner */}
      <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <img 
          src="https://www.indosurgicals.com/images/categories/banner/autoclave-sterilizer-in-india.jpg" 
          alt="Autoclave & Sterilizer Banner" 
          className="w-full h-auto"
        />
      </div>

      {/* About Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12">
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-full' : 'max-h-32'}`}>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>IndoSurgicals Private Limited</strong> is a top manufacturer and supplier of autoclaves and sterilizers. 
            We help hospitals and clinics keep their tools germ-free and safe for patients. 
            Our range includes everything from small portable units to large machines for hospitals.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            We also provide accessories like sterilization trays, drums, and tapes. Every product is built with high precision 
            to ensure it lasts long and works effectively. Doctors, dentists, and even tattoo artists across the globe 
            trust our equipment for their daily hygiene needs.
          </p>
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r">
            <p className="font-semibold text-blue-900">
              For pricing and orders, please email your requirements to: 
              <a href="mailto:info@indosurgicals.com" className="ml-2 underline hover:text-blue-700">info@indosurgicals.com</a>
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-600 font-bold hover:underline"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </section>

      {/* Product Categories Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-700 inline-block border-b-2 border-gray-300 pb-2">
          Find Products by Category
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <a key={index} className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow group" href={item.link}>
            <div className="h-52 flex items-center justify-center p-4 bg-gray-50">
              <img 
                src={item.img} 
                alt={item.title} 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-grow flex items-center justify-center border-t border-gray-100">
              <h3 className="text-sm font-bold text-center text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AutoclaveSterilizer;