import React, { useState } from 'react';

const HeightWeightScales = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { title: "Stadiometer/Height Measuring Scale", img: "https://www.indosurgicals.com/images/categories/height-measuring-scales.jpg", link: "/stadiometer-height-measuring-scale" },
    { title: "Measuring Tape", img: "https://www.indosurgicals.com/images/categories/measuring-tape.jpg", link: "/measuring-tape" },
    { title: "Infantometer", img: "https://www.indosurgicals.com/images/categories/infantometer.jpg", link: "/infantometer" },
    { title: "Personal Weighing Scale", img: "https://www.indosurgicals.com/images/categories/personal-weighing-scale.jpg", link: "/personal-weighing-scale" },
    { title: "Baby Weighing Scales", img: "https://www.indosurgicals.com/images/categories/baby-weighing-scales.jpg", link: "/baby-weighing-scales" },
    { title: "Stature Meter", img: "https://www.indosurgicals.com/images/categories/stature-meter.jpg", link: "/stature-meter" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 border-l-8 border-emerald-500 pl-4">
            Height & Weight Scales
          </h1>
          <div className="rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <img
              src="https://www.indosurgicals.com/images/categories/banner/height-weight-scales-in-india.jpg"
              alt="Height and Weight Scales Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </header>

        {/* Content Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 mb-12">
          <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-32'}`}>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>IndoSurgicals</strong> is a trusted maker and exporter of high-quality height and weight scales. 
              Our tools are built specifically for doctors and hospitals to help with accurate health checks. 
              We offer everything from <strong>Stadiometers</strong> to <strong>Baby Weighing Scales</strong> and special measuring tapes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Our products are strong, durable, and very easy to use. We know that getting the right measurement is 
              critical for medical diagnosis, so we test every piece carefully to ensure it gives the same accurate 
              result every single time.
            </p>
            <div className="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-400">
              <p className="font-semibold text-slate-800">
                To get a price quote, please email your requirement and quantity to: 
                <span className="text-blue-600 ml-2">info@indosurgicals.com</span>
              </p>
            </div>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-2 transition-colors"
          >
            {isExpanded ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </section>

        {/* Categories Grid */}
        <h2 className="text-2xl font-bold text-slate-700 mb-8 text-center uppercase tracking-widest">
          Product Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <a 
              key={index} 
              className="group bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
             href={item.link}>
              <div className="h-64 w-full flex items-center justify-center bg-slate-50 rounded-xl mb-4 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-center font-bold text-slate-700 text-lg group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HeightWeightScales;