import React, { useState } from 'react';

const XRaySupplies = () => {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    { title: "Lead Aprons", img: "https://www.indosurgicals.com/images/categories/lead-aprons.jpg", link: "/lead-aprons", link: "/lead-aprons" },
    { title: "Thyroid Collar/Shield", img: "https://www.indosurgicals.com/images/categories/thyroid-collars.jpg", link: "/thyroid-collar-shield", link: "/thyroid-collar-shield" },
    { title: "Gonad & Ovarian Shields", img: "https://www.indosurgicals.com/images/categories/gonad-and-ovarian-shields.jpg", link: "/gonad-ovarian-shields", link: "/gonad-ovarian-shields" },
    { title: "Radiation Protection Head Shield", img: "https://www.indosurgicals.com/images/categories/radiation-protection-head-shield.jpg", link: "/radiation-protection-head-shield", link: "/radiation-protection-head-shield" },
    { title: "Breast Protector", img: "https://www.indosurgicals.com/images/categories/breast-protector.jpg", link: "/breast-protector", link: "/breast-protector" },
    { title: "Lead Gloves", img: "https://www.indosurgicals.com/images/categories/lead-gloves.jpg", link: "/lead-gloves", link: "/lead-gloves" },
    { title: "Lead Goggles", img: "https://www.indosurgicals.com/images/categories/x-ray-lead-goggles.jpg", link: "/lead-goggles", link: "/lead-goggles" },
    { title: "X-Ray View Box", img: "https://www.indosurgicals.com/images/categories/x-ray-view-box.jpg", link: "/x-ray-view-box", link: "/x-ray-view-box" },
    { title: "Lead Apron Racks & Hangers", img: "https://www.indosurgicals.com/images/categories/lead-apron-racks.jpg", link: "/lead-apron-racks-hangers", link: "/lead-apron-racks-hangers" },
    { title: "Mobile Lead Barrier", img: "https://www.indosurgicals.com/images/categories/mobile-lead-barrier.jpg", link: "/mobile-lead-barrier", link: "/mobile-lead-barrier" },
    { title: "X-Ray Hangers", img: "https://www.indosurgicals.com/images/categories/x-ray-hangers.jpg", link: "/x-ray-hangers", link: "/x-ray-hangers" },
    { title: "X-Ray Cassettes", img: "https://www.indosurgicals.com/images/categories/x-ray-cassettes.jpg", link: "/x-ray-cassettes", link: "/x-ray-cassettes" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        
        {/* Main Header */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800">X-Ray Supplies</h1>
        </div>

        {/* Banner Image */}
        <div className="w-full">
          <img 
            src="https://www.indosurgicals.com/images/categories/banner/x-ray-supplies-in-india.jpg" 
            alt="X-Ray Supplies Banner" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="p-6 text-gray-700 leading-relaxed">
          <div className={`${showMore ? '' : 'line-clamp-3 md:line-clamp-none'} overflow-hidden transition-all duration-500`}>
            <p className="mb-4">
              <strong>IndoSurgicals Private Limited</strong> is a leading name in making <strong>X-Ray Supplies</strong>. 
              We provide protective clothes and gear to keep doctors and patients safe from radiation. 
              Our products include lead aprons, thyroid shields, lead gloves, and special boxes to view X-ray films. 
              Everything we make follows world safety rules.
            </p>
            <p className="mb-4">
              Our gear is used in hospitals and clinics all over the world. Whether you are a doctor, 
              nurse, or a student, our supplies offer the best protection. We use high-quality materials 
              to make sure our clothes are strong and comfortable to wear.
            </p>
            <p className="mb-4 font-semibold text-blue-700">
              To get a price quote, please email your requirements and quantity to: info@indosurgicals.com
            </p>
          </div>
          
          <button 
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-blue-600 font-bold hover:underline md:hidden"
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Product Grid */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-bold text-center mb-8 text-gray-800 uppercase tracking-wide">
            Product Categories
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <a key={index} href={item.link} className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-200 p-4 flex flex-col items-center">
                <div className="h-48 w-full flex items-center justify-center mb-4">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-bold text-gray-700 hover:text-blue-600 cursor-pointer">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XRaySupplies;