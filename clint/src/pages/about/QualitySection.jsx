import React from 'react';

const QualitySection = () => {
  return (
    <section className="mb-12">
      {/* Container with a subtle gradient and professional border */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm group hover:shadow-md transition-all duration-300">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                Quality <span className="text-blue-600">Assurance</span>
              </h3>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-[15px]">
              IndoSurgicals operates under a world-class quality management system, holding both <strong className="text-slate-900">ISO 9001:2015</strong> and <strong className="text-slate-900">ISO 13485:2016</strong> certifications. 
              Our commitment to patient safety is reflected in our 100% testing protocol, ensuring every instrument meets international regulatory benchmarks.
            </p>
          </div>

          {/* Certificates Display */}
          <div className="w-full lg:w-auto flex flex-wrap gap-6 items-center justify-center lg:justify-end border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10">
            <div className="flex flex-col items-center gap-2 group">
              <div className="h-16 w-32 bg-white rounded-lg flex items-center justify-center p-2 border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                <img 
                  src="https://www.indosurgicals.com/images/ce.jpg" 
                  alt="CE Certified" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CE Certified</span>
            </div>

            <div className="flex flex-col items-center gap-2 group">
              <div className="h-16 w-32 bg-white rounded-lg flex items-center justify-center p-2 border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                <img 
                  src="https://www.indosurgicals.com/images/gqsec.jpg" 
                  alt="GQSEC Compliance" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Compliance</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualitySection;