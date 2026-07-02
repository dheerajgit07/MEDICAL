import React, { useState } from 'react';
import { useCart } from '../../../../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const LaparoscopicGynaeInstruments = () => {
    const { addToCart } = useCart();
    
    // Mock data
    const mockProducts = [
        {
            id: 'LAPAROSCOPICGYNAEINSTRUMENTS_01',
            name: ' Laparoscopic Gynae Instruments Basic',
            category: ' Laparoscopic Gynae Instruments',
            description: 'High quality and reliable  Laparoscopic Gynae Instruments designed for medical professionals.',
            price: 50.00,
            image: 'https://via.placeholder.com/300?text=Image+Not+Available',
            sku: 'LAPAROSCOPICGYNAEINSTRUMENTS_01'
        },
        {
            id: 'LAPAROSCOPICGYNAEINSTRUMENTS_02',
            name: ' Laparoscopic Gynae Instruments Premium',
            category: ' Laparoscopic Gynae Instruments',
            description: 'Advanced  Laparoscopic Gynae Instruments with exceptional precision and durability.',
            price: 120.00,
            image: 'https://via.placeholder.com/300?text=Image+Not+Available',
             sku: 'LAPAROSCOPICGYNAEINSTRUMENTS_02'
        },
        {
            id: 'LAPAROSCOPICGYNAEINSTRUMENTS_03',
            name: ' Laparoscopic Gynae Instruments Professional',
            category: ' Laparoscopic Gynae Instruments',
            description: 'Industry-standard  Laparoscopic Gynae Instruments for hospital environments.',
            price: 85.00,
            image: 'https://via.placeholder.com/300?text=Image+Not+Available',
             sku: 'LAPAROSCOPICGYNAEINSTRUMENTS_03'
        },
        {
            id: 'LAPAROSCOPICGYNAEINSTRUMENTS_04',
            name: ' Laparoscopic Gynae Instruments Economy',
            category: ' Laparoscopic Gynae Instruments',
            description: 'Cost-effective  Laparoscopic Gynae Instruments solution without compromising on quality.',
            price: 35.00,
            image: 'https://via.placeholder.com/300?text=Image+Not+Available',
             sku: 'LAPAROSCOPICGYNAEINSTRUMENTS_04'
        }
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4"> Laparoscopic Gynae Instruments</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {mockProducts.map((product) => (
                    <div key={product.id} className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">
                        <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="absolute top-0 left-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                            />
                            {product.price > 100 && (
                                <div className="absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase rounded">
                                    Premium
                                </div>
                            )}
                        </div>
                        <div className="p-5 flex flex-col flex-grow border-t">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 truncate" title={product.name}>{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-2">{product.description}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xl font-black text-blue-600">$${product.price.toFixed(2)}</span>
                                <button 
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center title='Add to Cart'"
                                    aria-label="Add to cart"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    <span className="ml-2 font-bold text-sm">ADD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between shadow-sm">
                <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Need bulk pricing for  Laparoscopic Gynae Instruments?</h3>
                    <p className="text-blue-700">Contact our sales team for special institutional rates, discounts, and customized medical supply solutions.</p>
                </div>
                <Link to="/contactus" className="mt-6 md:mt-0 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black tracking-wider uppercase rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap">
                    Enquire Now
                </Link>
            </div>
        </div>
    );
};

export default LaparoscopicGynaeInstruments;
