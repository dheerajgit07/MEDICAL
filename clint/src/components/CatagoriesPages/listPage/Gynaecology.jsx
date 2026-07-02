import React, { useState } from 'react';

const GynaecologyProducts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Vacuum Extractor Sets - Manual", img: "https://www.indosurgicals.com/images/categories/vacuum-extractor-manual.jpg", link: "/vacuum-extractor-sets-manual" },
    { title: "Electric Vacuum Extractor Set", img: "https://www.indosurgicals.com/images/categories/vacuum-extractor-electric.jpg", link: "/electric-vacuum-extractor-set" },
    { title: "Vaginal Speculum", img: "https://www.indosurgicals.com/images/categories/vaginal-speculums-cusco-duck-bill.jpg", link: "/vaginal-speculum" },
    { title: "Gynecological Aspiration Kit (MVA Kit)", img: "https://www.indosurgicals.com/images/categories/gynecological-aspiration-kit.jpg", link: "/gynecological-aspiration-kit-mva-kit" },
    { title: "Vaginal Pessary", img: "https://www.indosurgicals.com/images/categories/pessaries.jpg", link: "/vaginal-pessary" },
    { title: "Latex Gynecological Gloves", img: "https://www.indosurgicals.com/images/categories/latex-gynecological-gloves.jpg", link: "/latex-gynecological-gloves" },
    { title: "Umbilical Cord Clamp", img: "https://www.indosurgicals.com/images/categories/umbilical-cord-clamp.jpg", link: "/umbilical-cord-clamp" },
    { title: "Midwifery Case", img: "https://www.indosurgicals.com/images/categories/midwifery-case.jpg", link: "/midwifery-case" },
    { title: "Breast Pumps", img: "https://www.indosurgicals.com/images/categories/breast-pumps.jpg", link: "/breast-pumps" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8" style={{ color: colors.skyDark }}>
          Obstetrics & Gynaecology
        </h1>

        <img 
          src="https://www.indosurgicals.com/images/categories/banner/gynecological-products-in-india.jpg" 
          alt="Obstetrics & Gynaecology" 
          className="w-full rounded-3xl mb-12 shadow-lg"
        />

        <div className="relative mb-12">
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-48'}`}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Private Limited, your trusted destination for <strong>premium quality Obstetrics & Gynaecology products</strong>. As one of the <strong>largest manufacturers, suppliers, and exporters, we understand the critical importance of reliable and efficient equipment in the field of Obstetrics & Gynaecology</strong>.</p>
              
              <p>Our comprehensive product range includes <strong>Manual Vacuum Extractor Sets</strong>, <strong>Electric Vacuum Extractor Sets</strong>, <strong>Vaginal Speculum</strong>, <strong>Gynecological Aspiration Kit (MVA Kit)</strong>, <strong>Vaginal Pessary</strong>, <strong>Latex Gynecological Gloves</strong>, <strong>Umbilical Cord Clamp</strong>, <strong>Midwifery Case</strong>, and <strong>Breast Pumps</strong>. These superior-quality instruments are designed to meet the unique needs of Obstetrics & Gynaecologists, ensuring safe and accurate procedures.</p>
              
              <p>From effective <strong>vacuum extraction sets to precise vaginal speculums</strong> and advanced breast pumps, our products are trusted by professionals worldwide. We prioritize the well-being of both patients and healthcare providers by offering reliable and hygienic solutions.</p>
              
              <p>At IndoSurgicals, we are committed to delivering excellence in Obstetrics & Gynaecology equipment, empowering medical professionals to provide the highest standard of care. Explore our range and experience the difference in quality and performance.</p>
              
              <p>Please send your Gynecological Products requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a key={index} className="bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow" href={item.link}>
              <div className="p-4 flex items-center justify-center h-48">
                <img src={item.img} alt={item.title} className="max-h-full object-contain" />
              </div>
              <div className="p-4 text-center flex-grow flex items-center justify-center border-t border-slate-50">
                <h4 className="font-bold text-sm leading-tight" style={{ color: colors.skyDark }}>{item.title}</h4>
              </div>
              <div className="h-1.5 w-full" style={{ backgroundColor: colors.brandBlue }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GynaecologyProducts;