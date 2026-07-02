import React, { useState } from 'react';

const Surb = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Hospital Scrubs", img: "https://www.indosurgicals.com/images/categories/hospital-scrubs-manufacturer.jpg", link: "/hospital-scrubs", link: "/hospital-scrubs" },
    { title: "Surgeon & Patient Gown", img: "https://www.indosurgicals.com/images/categories/surgeon-patient-gown-manufacturer.jpg", link: "/surgeon-patient-gown", link: "/surgeon-patient-gown" },
    { title: "Hospital Uniforms & Dresses", img: "https://www.indosurgicals.com/images/categories/other-hospital-uniforms-dresses.jpg", link: "/hospital-uniforms-dresses", link: "/hospital-uniforms-dresses" },
    { title: "Hospital Bed Sheets", img: "https://www.indosurgicals.com/images/categories/hospital-bed-sheets.jpg", link: "/hospital-bed-sheets", link: "/hospital-bed-sheets" },
    { title: "Patient Identification Wristbands", img: "https://www.indosurgicals.com/images/categories/patient-identification-wristbands.jpg", link: "/patient-identification-wristbands", link: "/patient-identification-wristbands" },
    { title: "Medical Drape Sheets", img: "https://www.indosurgicals.com/images/categories/medical-drape-sheets.jpg", link: "/medical-drape-sheets", link: "/medical-drape-sheets" },
    { title: "Pillow & Pillow Cover", img: "https://www.indosurgicals.com/images/categories/hospital-pillow-and-cover.jpg", link: "/pillow-pillow-cover", link: "/pillow-pillow-cover" },
    { title: "Operation Theatre Towels", img: "https://www.indosurgicals.com/images/categories/operation-theatre-towels.jpg", link: "/operation-theatre-towels", link: "/operation-theatre-towels" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Hospital Scrubs & Linens</h1>
      
      <div className="mb-8">
        <img 
          src="https://www.indosurgicals.com/images/categories/banner/hospital-scrubs-linens-in-india.jpg" 
          alt="Hospital Scrubs & Linens Banner" 
          className="w-full rounded-lg shadow-md mb-6"
        />

        <div className="prose prose-blue max-w-none">
          <p className="mb-4">
            At <strong>IndoSurgicals Private Limited</strong>, we take pride in being one of the <strong>largest manufacturers, suppliers, and exporters</strong> of premium <strong>hospital scrubs and linens</strong>. 
          </p>

          <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
            <p className="mb-4">
              Our range includes <strong>hospital scrubs, surgeon & patient gowns, hospital uniforms & dresses, hospital bed sheets, patient identification wristbands, medical drape sheets, pillows & pillow covers</strong>, and <strong>operation theatre towels</strong>. We are committed to providing the <strong>best quality</strong> products that meet the stringent demands of the healthcare industry.
            </p>
            
            <p className="mb-4">
              Our products are widely used by <strong>Doctors, surgeons, nurses, medical students, and specialists</strong> globally. The durability and comfort of our scrubs make them the preferred choice for long shifts and intense medical procedures.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold">Request a Quote:</p>
              <p>Please send your requirements with quantity to <span className="text-blue-600 underline">info@indosurgicals.com</span> for best CIF/C&F prices.</p>
            </div>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 font-bold hover:underline md:hidden"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      <hr className="my-10 border-gray-200" />

      {/* Categories Grid */}
      <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-wide">
        Find your product under the categories below
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <a key={index} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300" href={item.link}>
            <a href={item.link} className="block">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white text-center">
                <h3 className="text-sm font-bold text-gray-700 group-hover:text-blue-600">
                  {item.title}
                </h3>
              </div>
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Surb;