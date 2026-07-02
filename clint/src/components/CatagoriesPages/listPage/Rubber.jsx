import React, { useState } from 'react';

const MedicalRubberProducts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Air Cushion (Invalid Air Rings)", img: "https://www.indosurgicals.com/images/categories/air-cushion-invalid-air-rings.jpg", link: "/air-cushion-invalid-air-rings" },
    { title: "Enema Syringes", img: "https://www.indosurgicals.com/images/categories/enema-syringes.jpg", link: "/enema-syringes" },
    { title: "Rubber Drainage Sheet", img: "https://www.indosurgicals.com/images/categories/rubber-drainage-sheet-corrugated.jpg", link: "/rubber-drainage-sheet" },
    { title: "Chloroform Bellow", img: "https://www.indosurgicals.com/images/categories/chloroform-bellow.jpg", link: "/chloroform-bellow" },
    { title: "Eye/Ear & Ulcer Syringe", img: "https://www.indosurgicals.com/images/categories/eye-ear-ulcer-syringe.jpg", link: "/eye-ear-ulcer-syringe" },
    { title: "Infant Rectal Syringe", img: "https://www.indosurgicals.com/images/categories/infant-rectal-syringe.jpg", link: "/infant-rectal-syringe" },
    { title: "Vaginal Douche Spray", img: "https://www.indosurgicals.com/images/categories/vaginal-douche-spray.jpg", link: "/vaginal-douche-spray" },
    { title: "Stomach Pump Tube", img: "https://www.indosurgicals.com/images/categories/stomach-pump-tube.jpg", link: "/stomach-pump-tube" },
    { title: "Mackintosh Sheet", img: "https://www.indosurgicals.com/images/categories/mackintosh-sheet.jpg", link: "/mackintosh-sheet" },
    { title: "Douche Bag", img: "https://www.indosurgicals.com/images/categories/douche-bag.jpg", link: "/douche-bag" },
    { title: "Hot Water Bottles", img: "https://www.indosurgicals.com/images/categories/hot-water-bottles.jpg", link: "/hot-water-bottles" },
    { title: "Tourniquet", img: "https://www.indosurgicals.com/images/categories/tourniquet.jpg", link: "/tourniquet" },
    { title: "Kelly's Pad", img: "https://www.indosurgicals.com/images/categories/kellys-pad.jpg", link: "/kelly-s-pad" },
    { title: "Pessary Rubber Ring", img: "https://www.indosurgicals.com/images/categories/pessary-rubber-ring.jpg", link: "/pessary-rubber-ring" },
    { title: "Nasal Aspirator", img: "https://www.indosurgicals.com/images/categories/nasal-aspirator.jpg", link: "/nasal-aspirator" },
    { title: "Pipette bulb", img: "https://www.indosurgicals.com/images/categories/pipette-bulb.jpg", link: "/pipette-bulb" },
    { title: "Breast Pump", img: "https://www.indosurgicals.com/images/categories/breast-pump.jpg", link: "/breast-pump" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Medical Rubber Products
        </h1>

        <img 
          src="https://www.indosurgicals.com/images/categories/banner/medical-rubber-products-in-india.jpg" 
          alt="Medical Rubber Products" 
          className="w-full rounded-3xl mb-12 shadow-md transition-transform duration-700 hover:scale-[1.005]"
        />

        <div className="relative mb-12">
          <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1500px]' : 'max-h-48'}`}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Private Limited, the largest and most trusted <strong>manufacturer, supplier, and exporter of high-quality Medical Rubber Products</strong>. Our extensive range includes a wide variety of essential products designed to meet the diverse needs of healthcare professionals.</p>
              <p>Discover our comprehensive collection of Medical Rubber Products, including <strong>Air Cushions</strong>, <strong>Enema Syringes</strong>, <strong>Rubber Drainage Sheets</strong>, <strong>Chloroform Bellows</strong>, <strong>Hot Water Bottles</strong>, and more.</p>
              <p>At IndoSurgicals Private Limited, we prioritize quality, durability, and customer satisfaction. Our <strong>Medical Rubber Products</strong> are made from premium-grade materials and undergo rigorous quality checks to ensure optimal performance and safety.</p>
              <p>Choose IndoSurgicals for the best quality Medical Rubber Products that meet stringent medical standards. Our products are designed to provide <strong>comfort, reliability, and convenience in various medical applications</strong>.</p>
              <p>Please send your Medical Rubber Products requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 hover:opacity-70"
            style={{ color: colors.brandBlue, borderColor: colors.brandBlue }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

        <div className="mb-8 font-black text-xl border-l-4 pl-4" style={{ color: colors.skyDark, borderColor: colors.emerald }}>
          Find here your product under below listed categories
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
             href={item.link}>
              <div className="p-4 flex items-center justify-center h-40 bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h4 className="font-bold text-xs md:text-sm leading-tight transition-colors duration-300 group-hover:text-emerald-600" style={{ color: colors.skyDark }}>
                  {item.title}
                </h4>
              </div>
              <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalRubberProducts;