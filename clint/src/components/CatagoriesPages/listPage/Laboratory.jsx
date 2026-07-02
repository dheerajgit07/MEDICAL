import React, { useState } from 'react';

const LaboratoryEquipments = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Microscopes", img: "https://www.indosurgicals.com/images/categories/microscopes.jpg", link: "/microscopes" },
    { title: "Centrifuge", img: "https://www.indosurgicals.com/images/categories/centrifuge.jpg", link: "/centrifuge" },
    { title: "Water Bath", img: "https://www.indosurgicals.com/images/categories/image-coming-soon.jpg", link: "/water-bath" },
    { title: "Hot Plates", img: "https://www.indosurgicals.com/images/categories/image-coming-soon.jpg", link: "/hot-plates" },
    { title: "Hot Air Sterilizers or Hot Air Ovens", img: "https://www.indosurgicals.com/images/categories/image-coming-soon.jpg", link: "/hot-air-sterilizers-or-hot-air-ovens" },
    { title: "Laboratory Incubators", img: "https://www.indosurgicals.com/images/categories/image-coming-soon.jpg", link: "/laboratory-incubators" },
    { title: "Blood Cell Counter", img: "https://www.indosurgicals.com/images/categories/blood-cell-counter.jpg", link: "/blood-cell-counter" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Laboratory Equipments
        </h1>

        <div className="relative mb-12">
          <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1200px]' : 'max-h-48'}`}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Private Limited, the largest and most trusted <strong>manufacturer, supplier, and exporter of top-quality Laboratory Equipments</strong>. With a commitment to excellence, we provide a comprehensive range of products to meet all your laboratory needs.</p>
              
              <p>Our product range includes <strong>Microscopes</strong>, <strong>Centrifuge</strong>, <strong>Water Bath</strong>, <strong>Hot Plates</strong>, <strong>Hot Air Sterilizer</strong>, <strong>Hot Air Oven</strong>, <strong>Laboratory Incubators</strong>, and <strong>Blood Cell Counters</strong>. Each equipment is meticulously designed and manufactured to <strong>deliver accurate and reliable results</strong>, ensuring optimal performance in your laboratory.</p>
              
              <p>At IndoSurgicals, we understand the <strong>critical role laboratory equipment plays in scientific research and analysis</strong>. That's why we employ cutting-edge technology and adhere to strict quality control measures throughout the manufacturing process.</p>
              
              <p>Customer satisfaction is our utmost priority, and we go above and beyond to exceed expectations. When you choose IndoSurgicals, you can trust that you are working with a reputable industry leader committed to providing exceptional products and service.</p>
              
              <p>Please send your Laboratory Equipment requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
             href={item.link}>
              <div className="p-4 flex items-center justify-center h-48 bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h4 className="font-bold text-sm leading-tight transition-colors duration-300 group-hover:text-emerald-600" style={{ color: colors.skyDark }}>
                  {item.title}
                </h4>
              </div>
              <div className="h-1.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaboratoryEquipments;