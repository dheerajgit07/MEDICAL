import React, { useState } from 'react';

const OrthopaedicAids = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    brandBlue: "oklch(54.6% 0.245 262.881)",
    skyDark: "oklch(29.3% 0.066 243.157)",
    emerald: "oklch(76.8% 0.178 163.221)"
  };

  const categories = [
    { title: "Cervical Splints", img: "https://www.indosurgicals.com/images/categories/cervical-splints.jpg", link: "/cervical-splints" },
    { title: "Back Splints", img: "https://www.indosurgicals.com/images/categories/back-splints.jpg", link: "/back-splints" },
    { title: "Abdominal Splint", img: "https://www.indosurgicals.com/images/categories/abdominal-splint.jpg", link: "/abdominal-splint" },
    { title: "Wrist & Elbow Splints", img: "https://www.indosurgicals.com/images/categories/wrist-elbow-splints.jpg", link: "/wrist-elbow-splints" },
    { title: "Knee Calf & Ankle Splints", img: "https://www.indosurgicals.com/images/categories/knee-calf-ankle-splints.jpg", link: "/knee-calf-ankle-splints" },
    { title: "Cervical Traction Kit", img: "https://www.indosurgicals.com/images/categories/cervical-traction-kit-spares.jpg", link: "/cervical-traction-kit" },
    { title: "Pelvic Traction Kit", img: "https://www.indosurgicals.com/images/categories/pelvic-traction-kit-spares.jpg", link: "/pelvic-traction-kit" },
    { title: "Fracture Aids", img: "https://www.indosurgicals.com/images/categories/fracture-aids.jpg", link: "/fracture-aids" },
    { title: "General Aids", img: "https://www.indosurgicals.com/images/categories/general-aids.jpg", link: "/general-aids" },
    { title: "Walking Sticks or Walking Canes", img: "https://www.indosurgicals.com/images/categories/walking-sticks.jpg", link: "/walking-sticks-or-walking-canes" },
    { title: "Walkers", img: "https://www.indosurgicals.com/images/categories/walkers.jpg", link: "/walkers" },
    { title: "Underarm Crutches", img: "https://www.indosurgicals.com/images/categories/underarm-crutches.jpg", link: "/underarm-crutches" },
    { title: "Patient Lifting Aid", img: "https://www.indosurgicals.com/images/categories/patient-lifting-aid.jpg", link: "/patient-lifting-aid" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-8 transition-colors duration-500 hover:text-emerald-500 cursor-default" style={{ color: colors.skyDark }}>
          Orthopaedic Aids & Rehab Products
        </h1>

        <img 
          src="https://www.indosurgicals.com/images/categories/banner/orthopaedic-aids-in-india.jpg" 
          alt="Orthopaedic Aids & Rehab Products" 
          className="w-full rounded-3xl mb-12 shadow-md transition-transform duration-700 hover:scale-[1.005]"
        />

        <div className="relative mb-12">
          <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isExpanded ? 'max-h-[1500px]' : 'max-h-48'}`}>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>Welcome to IndoSurgicals Private Limited, the largest and most trusted <strong>manufacturer, supplier, and exporter of high-quality Orthopaedic Aids and Rehabilitation Products</strong>. Our commitment to excellence and customer satisfaction has made us a reputable name in the industry.</p>
              
              <p>We offer a comprehensive range of Orthopaedic Aids and Rehabilitation Products to address a variety of orthopedic needs. Our product line includes <strong>Cervical Splints, Back Splints, Abdominal Splints, Wrist & Elbow Splints, Knee Calf & Ankle Splints, Cervical Traction Kits, Pelvic Traction Kits, Fracture Aids, General Aids, Walking Sticks, Walkers, and Underarm Crutches.</strong></p>
              
              <p>IndoSurgicals takes pride in manufacturing top-quality Orthopaedic Aids and Rehabilitation Products that provide comfort, support, and aid in the healing and rehabilitation process. Our products are designed with <strong>utmost precision, adhering to the highest industry standards</strong>.</p>
              
              <p>Whether you require support for a specific area of the body or general aids for mobility assistance, our range of products <strong>caters to a diverse range of needs</strong>. Trust IndoSurgicals for the best quality Orthopaedic Aids and Rehabilitation Products that ensure <strong>optimal recovery and enhanced quality of life</strong>.</p>
              
              <p>Please send your Orthopedic Rehabilitation Aid requirement with quantity at info@indosurgicals.com so that we can provide you our best CIF/C&F prices.</p>
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

export default OrthopaedicAids;