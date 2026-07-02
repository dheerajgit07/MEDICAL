import React from 'react';

const TopBar = () => {
  return (
    // Ab background White hai aur niche ek patli light gray border hai
    <div className="w-full bg-white border-b border-gray-100 py-2.5 px-6 hidden lg:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Professional Contact Details */}
        <div className="flex items-center space-x-8">
          {/* Call Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 border border-blue-100 group-hover:bg-blue-600 transition-all duration-300">
               <span className="text-[10px] group-hover:filter group-hover:brightness-0 group-hover:invert">📞</span>
            </div>
            <div className="flex flex-col">
               <span className="text-[9px] font-bold text-blue-600 tracking-wider leading-none uppercase">Sales Support</span>
               <a 
                 href="tel:+911149092567" 
                 className="text-[11px] font-semibold text-gray-700 hover:text-blue-600 transition-colors"
               >
                 +91-11-49092567
               </a>
            </div>
          </div>
          
          <div className="h-6 w-[1px] bg-gray-200"></div> {/* Subtle Divider */}

          {/* Email Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 group-hover:bg-emerald-600 transition-all duration-300">
               <span className="text-[10px] group-hover:filter group-hover:brightness-0 group-hover:invert">✉️</span>
            </div>
            <div className="flex flex-col">
               <span className="text-[9px] font-bold text-emerald-600 tracking-wider leading-none uppercase">Queries</span>
               <a 
                 href="mailto:info@indosurgicals.com" 
                 className="text-[11px] font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
               >
                 info@indosurgicals.com
               </a>
            </div>
          </div>
        </div>

        {/* Right Side: Online Store & Trust Badges */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">ISO 9001:2015</span>
          </div>

          <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:shadow-md transition-all group">
            <span className="text-[9px] font-black text-gray-400 tracking-widest mr-4">ONLINE STORE:</span>
            <a href="http://www.meddeal.in" target="_blank" rel="noreferrer">
              <img 
                src="https://www.indosurgicals.com/images/meddeal-logo.png" 
                alt="MedDeal Logo" 
                className="h-4 w-auto grayscale group-hover:grayscale-0 transition-all" 
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;