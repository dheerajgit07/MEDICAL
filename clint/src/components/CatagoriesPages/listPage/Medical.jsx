import React, { useState } from 'react';

const MedicalDisposable = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Anesthesia", img: "https://www.indosurgicals.com/images/categories/anesthesia.jpg", link: "/anesthesia" },
    { title: "Transfusion", img: "https://www.indosurgicals.com/images/categories/transfusion.jpg", link: "/transfusion" },
    { title: "Urology Care", img: "https://www.indosurgicals.com/images/categories/urology-products.jpg", link: "/urology-care" },
    { title: "Gastro Care", img: "https://www.indosurgicals.com/images/categories/gastro-care.jpg", link: "/gastro-care" },
    { title: "Miscellaneous", img: "https://www.indosurgicals.com/images/categories/miscellaneous.jpg", link: "/miscellaneous" },
    { title: "Cardiac Care", img: "https://www.indosurgicals.com/images/categories/cardiac-care.jpg", link: "/cardiac-care" },
    { title: "Surgery", img: "https://www.indosurgicals.com/images/categories/surgery.jpg", link: "/surgery" },
    { title: "Patient Care", img: "https://www.indosurgicals.com/images/categories/patient-care.jpg", link: "/patient-care" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Medical Disposable
        </h1>

        <div className="relative mb-12">
          <div 
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-32'}`}
          >
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>IndoSurgicals is an Indian-based firm, actively involved in the export of medical disposable products. Our medical disposable products are designed and manufactured for all medical and healthcare facilities, hospitals and care homes, as well as all health workers: doctors, nurses and other professionals in the sector.</p>
              
              <p>Please send your Medical Disposables requirement with quantity at <strong>info@indosurgicals.com</strong> so that we can provide you our best CIF/C&F prices.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 hover:tracking-widest"
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
              <div 
                className="h-1.5 w-0 group-hover:w-full transition-all duration-500 ease-in-out" 
                style={{ backgroundColor: colors.brandBlue }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalDisposable;