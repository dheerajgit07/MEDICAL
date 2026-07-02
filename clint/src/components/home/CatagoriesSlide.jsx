import React from 'react';

// Demo logo URL - Replace with actual assets later
const demoLogo = "https://placehold.co/150x150/0ea5e9/ffffff?text=GOV+LOGO";

const clientsData = [
  { name: "Indian Air Force", img: demoLogo },
  { name: "Indian Army", img: demoLogo },
  { name: "Indian Coast Guard", img: demoLogo },
  { name: "CRPF Composite Hospital", img: demoLogo },
  { name: "Indian Navy", img: demoLogo },
  { name: "Indian Railway", img: demoLogo },
  { name: "ITBP", img: demoLogo },
  { name: "NCC", img: demoLogo },
  { name: "Assam Rifles", img: demoLogo },
  { name: "Border Roads Organisation", img: demoLogo },
  { name: "NTPC Limited", img: demoLogo },
  { name: "Ministry of Ayush", img: demoLogo },
  { name: "AIIMS New Delhi", img: demoLogo },
  { name: "Dept. of Atomic Energy PMO", img: demoLogo },
  { name: "BARC", img: demoLogo },
  { name: "ESIC Hospital", img: demoLogo },
  { name: "HAL", img: demoLogo },
  { name: "IIT Delhi", img: demoLogo },
  { name: "HLL Infra Tech Services", img: demoLogo },
  { name: "All India Institute of Ayurveda", img: demoLogo },
  { name: "ALIMCO", img: demoLogo },
  { name: "AIMSS Shimla", img: demoLogo },
  { name: "Baba Raghav Das Medical College", img: demoLogo },
  { name: "Bhopal Memorial Hospital", img: demoLogo },
  { name: "Central Ayurveda Research Institute", img: demoLogo },
  { name: "DSIR", img: demoLogo },
  { name: "IIST", img: demoLogo },
  { name: "IIT BHU", img: demoLogo },
  { name: "IHBAS", img: demoLogo },
  { name: "Birbal Sahni Institute", img: demoLogo },
  { name: "PGIMER Chandigarh", img: demoLogo },
  { name: "Agharkar Research Institute", img: demoLogo }
];

const CategoriesSlide = () => {
  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/150x150/e0f2fe/0369a1?text=Error";
  };

  return (
    <div className="bg-slate-50 py-20 overflow-hidden relative border-y border-slate-100">
      
      {/* Dynamic Keyframes injected into the page */}
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .custom-marquee {
            display: flex;
            width: max-content;
            animation: infiniteScroll 60s linear infinite;
          }
          .custom-marquee:hover {
            animation-play-state: paused;
          }
          .fade-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}
      </style>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h5 className="text-blue-600 font-bold text-[11px] tracking-[0.3em] uppercase mb-4">Trusted Worldwide</h5>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our Esteemed <span className="text-blue-600">Government Clients</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative w-full overflow-hidden fade-edges py-4">
        
        <div className="custom-marquee">
          {/* Double mapping for seamless infinite loop */}
          {[...clientsData, ...clientsData].map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-start w-52 mx-8 flex-shrink-0 group"
            >
              {/* Logo Container */}
              <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-6 mb-5 group-hover:shadow-xl group-hover:border-blue-200 group-hover:-translate-y-3 transition-all duration-500 ease-out">
                <img 
                  src={client.img} 
                  alt={client.name} 
                  onError={handleImageError}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Client Name */}
              <p className="text-[12px] font-bold text-slate-500 text-center uppercase tracking-wider group-hover:text-blue-600 transition-colors duration-300 px-2 leading-relaxed">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Overlay for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-right from-transparent via-slate-200 to-transparent"></div>
    </div>
  );
};

export default CategoriesSlide;