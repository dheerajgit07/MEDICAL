import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronRight, ShoppingBag, ArrowLeft, User, Phone, Mail, MapPin, MessageSquare, ClipboardList, Send } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', company: '', gst: '', address: '', country: 'India', message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enquiry Submitted:", { items: cartItems, customer: formData });
        alert("Enquiry sent successfully!");
        clearCart();
    };

    return (
        <div className="min-h-screen bg-[#fcfcfd] py-12 px-4 md:px-12 lg:px-32 font-sans text-slate-900">
            {/* Breadcrumb */}
            <nav className="text-xs font-bold uppercase tracking-widest mb-10 flex items-center text-slate-400">
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-slate-900">Enquiry Cart</span>
            </nav>

            {/* Header Section - Modern Centered */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-4">
                    Review Your Selection
                </h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
                    Please verify your medical equipment list below and fill in the contact details for a formal quotation.
                </p>
            </div>

            {/* 1. Product Table Section (Horizontal & Wide) */}
            <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-2">
                        <ClipboardList className="text-blue-600" /> 01. Product List
                    </h2>
                    <span className="bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter border border-blue-100">
                        Total {cartItems.length} Items Selected
                    </span>
                </div>

                {cartItems.length > 0 ? (
                    <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="p-6 font-bold uppercase text-[10px] tracking-[0.2em] w-20 text-center">No.</th>
                                    <th className="p-6 font-bold uppercase text-[10px] tracking-[0.2em]">Product Details</th>
                                    <th className="p-6 font-bold uppercase text-[10px] tracking-[0.2em] text-center w-40">Quantity</th>
                                    <th className="p-6 font-bold uppercase text-[10px] tracking-[0.2em] text-center w-32">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {cartItems.map((item, index) => (
                                    <tr key={item.id || item.sku} className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 text-center font-mono text-slate-400 font-bold italic">{index + 1}</td>
                                        <td className="p-6">
                                            <h3 className="font-black text-xl text-slate-800">{item.name}</h3>
                                            <div className="flex gap-6 mt-2 text-xs font-bold text-slate-500 uppercase tracking-tight">
                                                <span className="flex items-center gap-1">SKU: <b className="text-slate-900">{item.sku}</b></span>
                                                <span className="flex items-center gap-1">Color: <b className="text-slate-900">{item.color}</b></span>
                                                <span className="flex items-center gap-1">Size: <b className="text-slate-900">{item.size}</b></span>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center justify-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id || item.sku, parseInt(e.target.value))}
                                                    className="w-20 h-12 border-2 border-slate-100 rounded-2xl text-center font-black text-lg focus:border-blue-600 outline-none transition-all shadow-inner bg-slate-50"
                                                />
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <button
                                                onClick={() => removeFromCart(item.id || item.sku)}
                                                className="p-4 text-red-400 hover:text-white hover:bg-red-500 rounded-2xl transition-all shadow-sm"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white rounded-[2rem] border-2 border-dashed border-slate-200 p-24 text-center">
                        <ShoppingBag className="mx-auto text-slate-200 mb-6" size={80} />
                        <h2 className="text-3xl font-black text-slate-300 uppercase italic mb-8">Your Cart is Empty</h2>
                        <Link to="/products" className="inline-flex items-center bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg">
                            <ArrowLeft size={18} className="mr-3" /> Browse Catalog
                        </Link>
                    </div>
                )}
            </div>

            {/* 2. Contact Information Section (Horizontal Layout) */}
            <div className={cartItems.length === 0 ? "hidden" : "block"}>
                <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-2 mb-6">
                    <Send className="text-blue-600" /> 02. Enquiry Information
                </h2>

                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-10 lg:p-16 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                    <form onSubmit={handleSubmit} className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                            {/* Input Fields with Icons */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name*</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input type="text" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all" placeholder="John Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Contact Phone*</label>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input type="tel" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all" placeholder="+91 XXX-XXXXXXX" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address*</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input type="email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all" placeholder="info@company.com" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Shipping/Clinic Address*</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-4 top-4 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <textarea required rows="3" onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all resize-none" placeholder="Enter full address for delivery estimate"></textarea>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Special Requirements</label>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-4 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <textarea rows="3" onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all resize-none" placeholder="Anything else we should know?"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="group relative bg-slate-900 text-white px-20 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all hover:bg-blue-600 hover:-translate-y-1 active:scale-95 shadow-2xl shadow-blue-200 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Submit Official Enquiry <ArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={16} />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;