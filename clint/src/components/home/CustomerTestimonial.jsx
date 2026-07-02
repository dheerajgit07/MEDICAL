import React from 'react';

const CustomerTestimonial = () => {
  return (
    // Outer container ab full width hai aur dark premium medical blue color use kar raha hai
    <div className="w-full bg-sky-900 py-10 px-5 relative overflow-hidden">
      
      {/* Background decoration (Optional - ek subtle watermark quote icon) */}
      <span className="absolute -top-10 -left-10 text-[20rem] text-sky-800 opacity-30 font-serif leading-none select-none pointer-events-none">
        "
      </span>

      {/* Content Container jisko center mein max-width diya hai */}
      <div className="w-full px-4 md:px-8 lg:px-12 text-center relative z-10 flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-sm md:text-base font-extrabold text-sky-400 uppercase tracking-[0.2em] mb-10">
          Customer Testimonials
        </h2>

        {/* Main Review Text */}
        <p className="text-2xl md:text-4xl italic text-white font-light leading-relaxed mb-12 px-4 md:px-0">
          "I am thoroughly impressed with the IndoSurgicals Lead Apron for its exceptional protection, comfort, and durability. It is a must-have for any medical professional working with radiation."
        </p>

        {/* Divider Line */}
        <div className="w-16 h-1 bg-sky-500 rounded-full mb-8"></div>

        {/* Reviewer Details */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          Dr. Jaspreet Singh
        </h3>
        <p className="text-base md:text-lg text-sky-300 font-medium mb-12">
          Bassi Pathana, India
        </p>

        {/* CTA Button (White button with dark text for high contrast) */}
        <a
          href="https://www.indosurgicals.com/testimonial.php"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-white text-sky-900 text-sm md:text-base font-extrabold tracking-wide rounded-full hover:bg-sky-50 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          READ MORE REVIEWS
        </a>
        
      </div>
    </div>
  );
};

export default CustomerTestimonial;