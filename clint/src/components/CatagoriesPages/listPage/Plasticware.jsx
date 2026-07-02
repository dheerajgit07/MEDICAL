import React, { useState } from 'react';

const LabPlasticware = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Plastic Lab Beakers", img: "https://www.indosurgicals.com/images/categories/plastic-lab-beakers.jpg", link: "/plastic-lab-beakers" },
    { title: "Plastic Lab Bottles", img: "https://www.indosurgicals.com/images/categories/plastic-lab-bottles.jpg", link: "/plastic-lab-bottles" },
    { title: "Plastic Stopcocks & Connectors", img: "https://www.indosurgicals.com/images/categories/stop-cocks.jpg", link: "/plastic-stopcocks-connectors" },
    { title: "Plastic Funnels & Holders", img: "https://www.indosurgicals.com/images/categories/funnels.jpg", link: "/plastic-funnels-holders" },
    { title: "Plastic Petri Dishes", img: "https://www.indosurgicals.com/images/categories/petri-dishes.jpg", link: "/plastic-petri-dishes" },
    { title: "Slide Storage Boxes and Accessories", img: "https://www.indosurgicals.com/images/categories/slide-accesories.jpg", link: "/slide-storage-boxes-and-accessories" },
    { title: "Plastic Centrifuge Tube", img: "https://www.indosurgicals.com/images/categories/tubes.jpg", link: "/plastic-centrifuge-tube" },
    { title: "Plastic Lab Containers", img: "https://www.indosurgicals.com/images/categories/plastic-lab-containers.jpg", link: "/plastic-lab-containers" },
    { title: "Plastic Lab Vials", img: "https://www.indosurgicals.com/images/categories/plastic-lab-vials.jpg", link: "/plastic-lab-vials" },
    { title: "Plastic Measuring Cylinders", img: "https://www.indosurgicals.com/images/categories/plastic-lab-measuring-cylinders.jpg", link: "/plastic-measuring-cylinders" },
    { title: "Plastic Measuring Jugs", img: "https://www.indosurgicals.com/images/categories/plastic-measuring-jugs.jpg", link: "/plastic-measuring-jugs" },
    { title: "Conical Measures", img: "https://www.indosurgicals.com/images/categories/conical-measures.jpg", link: "/conical-measures" },
    { title: "Plastic Atomic Models", img: "https://www.indosurgicals.com/images/categories/plastic-atomic-models.jpg", link: "/plastic-atomic-models" },
    { title: "Pipette Accessories", img: "https://www.indosurgicals.com/images/categories/pipette-accessories.jpg", link: "/pipette-accessories" },
    { title: "Microcentrifuge Tubes", img: "https://www.indosurgicals.com/images/categories/microcentrifuge-tubes.jpg", link: "/microcentrifuge-tubes" },
    { title: "Micropipette & Accessories", img: "https://www.indosurgicals.com/images/categories/micropipette-and-accessories.jpg", link: "/micropipette-accessories" },
    { title: "Racks & Stands", img: "https://www.indosurgicals.com/images/categories/racks-and-stands.jpg", link: "/racks-stands" },
    { title: "General Labware", img: "https://www.indosurgicals.com/images/categories/general-labware.jpg", link: "/general-labware" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8" style={{ color: colors.skyDark }}>
          Laboratory Plasticware
        </h1>

        <img 
          src="https://www.indosurgicals.com/images/categories/banner/laboratory-plasticware-in-india.jpg" 
          alt="Laboratory Plasticware" 
          className="w-full rounded-3xl mb-12 shadow-lg"
        />

        <div className="relative mb-12">
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-48'}`}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Pvt. Ltd., a leading <strong>manufacturer, supplier, and exporter of premium quality LABORATORY PLASTICWARE</strong>. As one of the largest and most trusted providers in the industry, we offer a wide range of laboratory plasticware products to meet the diverse needs of <strong>educational institutions</strong>, <strong>diagnostic laboratories</strong>, and <strong>medical facilities</strong>.</p>
              <p>Our extensive product range includes <strong>Plastic Lab Beakers</strong>, <strong>Bottles</strong>, <strong>Stopcocks</strong>, <strong>Funnels</strong>, <strong>Petri Dishes</strong>, <strong>Slide Storage</strong>, <strong>Test Tubes</strong>, <strong>Lab Containers</strong>, <strong>Vials</strong>, <strong>Measuring Cylinders</strong>, <strong>Measuring Jugs</strong>, <strong>Conical Measures</strong>, <strong>Atomic Models</strong>, <strong>Micro Pipette Accessories</strong>, <strong>Microcentrifuge Tubes</strong>, <strong>Micropipettes and Tips</strong>, <strong>Racks & Stands</strong>, <strong>Test Tube Caps</strong>, <strong>Specimen Jars</strong>, <strong>Desiccators</strong>, and <strong>Kipp's Apparatus</strong>.</p>
              <p>We take pride in offering premium quality plasticware that meets rigorous industry standards. Our products are made from high-grade materials to <strong>ensure durability, chemical resistance, and optimal performance</strong>. Whether you are a school, college, diagnostic laboratory, or medical facility, our laboratory plasticware products are designed to meet your specific requirements.</p>
              <p>Choose IndoSurgicals Pvt. Ltd. as your trusted partner for all your <strong>laboratory plasticware needs</strong>. Explore our comprehensive product range and experience the reliability and quality of our offerings. Contact us today to discuss your requirements and let our expert team assist you in finding the right solutions for your laboratory applications.</p>
              <p>Please send your Laboratory Plasticware requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2"
            style={{ color: colors.brandBlue, borderColor: colors.brandBlue }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>

        <div className="mb-8 font-black text-xl" style={{ color: colors.skyDark }}>
          Find here your product under below listed categories
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((item, index) => (
            <a key={index} className="bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow" href={item.link}>
              <div className="p-4 flex items-center justify-center h-40">
                <img src={item.img} alt={item.title} className="max-h-full object-contain" />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h4 className="font-bold text-xs leading-tight" style={{ color: colors.skyDark }}>{item.title}</h4>
              </div>
              <div className="h-1.5 w-full" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabPlasticware;