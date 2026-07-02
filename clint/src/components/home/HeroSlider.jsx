import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const banners = [
    {
      id: 0,
      image: "https://www.indosurgicals.com/images/banners/hospital-furniture.jpg",
      tag: "Hospital Infrastructure",
      title: "Premium Hospital Furniture",
      desc: "ISO Certified beds and clinical furniture designed for durability.",
      link: "/hospital-furniture"
    },
    {
      id: 1,
      image: "https://www.indosurgicals.com/images/banners/silvery-ii-stethoscope.jpg",
      tag: "Diagnostics",
      title: "Advanced Diagnostic Tools",
      desc: "Precision instruments for accurate medical assessment.",
      link: "/stethoscopes"
    },
    {
      id: 2,
      image: "https://www.indosurgicals.com/images/banners/lead-apron-banner.jpg",
      tag: "Radiology",
      title: "Radiation Protection Gear",
      desc: "Certified safety technology for healthcare professionals.",
      link: "/lead-aprons"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative top-15 w-full h-[450px] bg-white border-b border-slate-100 overflow-hidden group">
      
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {banners.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col md:flex-row transition-all duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* 1. Left Content Side (No Overlay) */}
            <div className="w-full md:w-2/5 h-1/2 md:h-full flex items-center bg-[#f8fafc] px-8 md:px-16">
              <div className={`transition-all duration-700 delay-300 transform ${index === current ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <span className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">
                  {slide.tag}
                </span>
                <h2 className="text-slate-900 text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-slate-500 text-sm md:text-base mb-8 max-w-xs font-medium">
                  {slide.desc}
                </p>
                <a 
                  href={slide.link}
                  className="inline-flex items-center justify-center px-10 py-4 font-black text-[10px] tracking-[0.2em] uppercase text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-lg active:scale-95"
                >
                  View Collection
                </a>
              </div>
            </div>

            {/* 2. Right Image Side (100% Visibility) */}
            <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden bg-white">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-contain p-4 md:p-10 transition-transform duration-[2000ms] ${
                  index === current ? "scale-100" : "scale-110"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Side Navigation Buttons */}
      <button
        onClick={() => setCurrent(current === 0 ? banners.length - 1 : current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-xl flex items-center justify-center rounded-full text-slate-800 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent(current === banners.length - 1 ? 0 : current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow-xl flex items-center justify-center rounded-full text-slate-800 hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
      >
        ❯
      </button>

      {/* Modern Line Indicators */}
      <div className="absolute bottom-6 left-8 md:left-16 z-20 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-500 rounded-full ${
              current === index ? "bg-blue-600 w-12" : "bg-slate-300 w-6 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;