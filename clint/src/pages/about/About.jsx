import React from 'react';
import AboutHero from './AboutHero'; 
import QualitySection from './QualitySection';
import NoticeCard from './NoticeCard';

const About = () => {
  return (
    <div className="animate-in fade-in duration-1000 w-full pb-20">
      
      {/* 1. HERO: Top Section */}
      <AboutHero /> 

      {/* 2. MAIN CONTENT: Left Side Gap Khatam karne ke liye px-2 rakha hai */}
      <div className="w-full space-y-24 px-2">
        
        {/* Our Story Section */}
        <article className="w-full">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-12 w-2 bg-blue-600 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Our Journey
            </h2>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-2xl font-bold text-slate-800 leading-tight">
                For over a decade, <span className="text-blue-600 italic">IndoSurgicals</span> has redefined the standards of medical equipment manufacturing.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Located in New Delhi, we have transformed into a global powerhouse, 
                exporting high-precision surgical tools to more than 50 nations.
              </p>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <p className="text-slate-600 leading-[1.8] text-lg">
                 Our mission is to empower healthcare professionals with reliable tools, 
                 ensuring every patient receives care supported by excellence. We believe 
                 that premium healthcare solutions should be accessible to all institutions 
                 worldwide without compromising on precision.
               </p>
            </div>
          </div>
        </article>

        {/* 3. QUALITY SECTION: Full Width Dark Card */}
        <section className="w-full bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white shadow-3xl relative overflow-hidden">
           <div className="relative z-10">
              <QualitySection />
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        </section>

        {/* 4. NOTICE CARD */}
        <div className="w-full">
           <NoticeCard />
        </div>
      </div>
    </div>
  );
};

export default About;