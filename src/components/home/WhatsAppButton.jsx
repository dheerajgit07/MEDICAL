import React from 'react';

const WhatsAppButton = () => {
  // Yahan apna actual WhatsApp number dalein
  const phoneNumber = "919876543210"; 
  const message = "Hello IndoSurgicals! Mujhe aapke products ke baare mein janna hai.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Fixed positioning at bottom-right
    <div className="fixed bottom-6 right-6 z-[60]">
      
      <div className="relative flex items-center group">
        
        {/* Subtle Ping Animation Layer - Ab yeh pure button ke size ka hoga */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        
        {/* Actual Clickable Pill Button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          // px-5 py-3 se yeh perfectly pill shape ban jayega
          className="relative flex items-center gap-2 px-5 py-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1da851] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-white/20"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M12.031 21.043h-.008c-1.895 0-3.753-.51-5.385-1.474l-.386-.228-4.008 1.05 1.074-3.908-.25-.398C2.071 14.417 1.5 12.33 1.5 10.165c0-5.807 4.73-10.536 10.536-10.536s10.536 4.73 10.536 10.536-4.73 10.536-10.536 10.536zm0-19.34C7.14 1.703 3.167 5.677 3.167 10.565c0 1.56.409 3.085 1.186 4.425l-1.6 5.827 5.962-1.563c1.288.706 2.748 1.078 4.246 1.078h.005c4.887 0 8.862-3.974 8.862-8.863 0-4.888-3.975-8.862-8.863-8.862zm4.862 12.18c-.267-.134-1.577-.778-1.821-.867-.243-.09-.42-.134-.598.134-.178.267-.686.867-.841 1.045-.156.178-.312.201-.579.067a7.487 7.487 0 0 1-2.193-1.353c-.687-.604-1.15-1.348-1.284-1.615-.134-.267-.014-.412.119-.545.121-.121.267-.312.401-.468.134-.156.178-.267.267-.445.09-.178.045-.334-.022-.467-.067-.134-.598-1.442-.819-1.975-.215-.52-.433-.45-.598-.458l-.51-.009c-.178 0-.468.067-.712.334-.244.267-.935.913-.935 2.227 0 1.314.957 2.583 1.09 2.761.134.178 1.883 2.872 4.558 4.028 2.288.986 2.859.867 3.393.778.534-.09 1.577-.646 1.8-1.27.223-.623.223-1.157.156-1.27-.067-.111-.244-.178-.51-.311z" />
          </svg>
          
          {/* Text: Mobile par hidden, baaki screens par dikhega */}
          <span className="font-bold tracking-wider text-sm hidden sm:inline-block drop-shadow-sm">
            WhatsApp Us
          </span>
        </a>

      </div>
    </div>
  );
};

export default WhatsAppButton;