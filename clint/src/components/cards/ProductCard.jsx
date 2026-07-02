import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Zap, CheckCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Ensuring numeric price extraction if needed, but keeping string for now as per context
    addToCart({ ...product, quantity: 1 });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    addToCart({ ...product, quantity: 1 });
    window.location.href = '/enquiry-cart';
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
      
      {/* Premium Notification Toast */}
      <div 
        className={`absolute top-4 left-4 right-4 z-50 transition-all duration-500 transform ${
          showNotification ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}
      >
        <div className="bg-emerald-500 text-white px-4 py-3 rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-center gap-3 text-sm font-bold border border-white/20 backdrop-blur-sm">
          <CheckCircle size={18} />
          <span className="tracking-tight">Added to your enquiry!</span>
        </div>
      </div>

      <div className="relative h-64 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-blue-600 shadow-sm border border-blue-50 tracking-tighter uppercase">
          Certified Quality
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors" title={product.name}>
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
          {product.description || "High-quality medical equipment designed for professional use."}
        </p>
        
        <div className="pt-4 border-t border-gray-50 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.1em] font-bold">Estimated Price</span>
              <span className="text-2xl font-black text-slate-900 leading-none">₹{product.price}</span>
            </div>
            <div className="bg-blue-50 text-blue-700 p-2 rounded-lg">
               <ShoppingCart size={20} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 py-3.5 bg-slate-50 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95"
            >
              Add to List
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              <Zap size={14} fill="currentColor" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
