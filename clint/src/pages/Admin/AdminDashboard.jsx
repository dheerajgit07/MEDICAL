import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {
  Plus, Edit2, Trash2, LogOut, Package,
  Image as ImageIcon, CheckCircle2, Search, Filter, Activity, X
} from 'lucide-react';
import { MEDICAL_CATEGORIES } from '../../constants/categories';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: MEDICAL_CATEGORIES[0], 
    price: '',
    description: '',
    stock: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/admin');
      return;
    }
    fetchData();
  }, [navigate]);

  useEffect(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  const categoryStats = useMemo(() => {
    if (selectedCategory === 'All') {
      return { label: 'Total Catalog', count: products.length };
    }
    const count = products.filter(p => p.category === selectedCategory).length;
    return { label: selectedCategory, count };
  }, [selectedCategory, products]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/products');
      if (res.data.status) {
        setProducts(res.data.data);
        setFilteredProducts(res.data.data);
      }
    } catch (err) {
      console.error('Fetch error', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const openAddModal = () => {
    setEditingId(null);
    setFormData({ name: '', category: MEDICAL_CATEGORIES[0], price: '', description: '', stock: 0 });
    setImageFile(null);
    setImagePreview('');
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      category: MEDICAL_CATEGORIES.includes(product.category) ? product.category : MEDICAL_CATEGORIES[0],
      price: product.price,
      description: product.description,
      stock: product.stock,
    });
    setImageFile(null);
    setImagePreview(product.image);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      if (imageFile) data.append('image', imageFile);

      if (editingId) {
        await api.put(`/update-item/${editingId}`, data);
      } else {
        await api.post('/add-item', data);
      }

      setIsModalOpen(false);
      fetchData(); 
    } catch (err) {
      alert(err.response?.data?.msg || 'Action failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await api.delete(`/delete-item/${id}`);
        fetchData();
      } catch (err) {
        console.error('Delete error', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A] text-white flex flex-col fixed h-full z-20 shadow-2xl">
        <div className="p-8 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-black tracking-tight uppercase">Dikota <span className="text-blue-500 font-light italic">Med</span></h2>
          </div>
        </div>
        <nav className="flex-1 px-6 py-8">
          <button className="flex items-center w-full px-5 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all">
            <Package className="mr-3 h-5 w-5" />
            Inventory List
          </button>
        </nav>
        <div className="p-6 border-t border-slate-800/50">
          <button onClick={handleLogout} className="flex items-center w-full px-5 py-4 text-slate-400 hover:text-white hover:bg-red-500/10 rounded-2xl transition-all group">
            <LogOut className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 flex-1 p-10 flex flex-col min-h-screen">
        <header className="mb-10 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Medical Inventory</h1>
              <p className="text-slate-500 mt-1 font-medium italic">Secure Enterprise Management System</p>
            </div>
            <button onClick={openAddModal} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
              <Plus className="mr-2 h-5 w-5" />
              ADD NEW RECORD
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600"><Package className="w-6 h-6" /></div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Products</p>
                <p className="text-2xl font-black text-slate-900">{products.length}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 col-span-2">
               <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="text" placeholder="Quick Search..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
               </div>
               <div className="w-64 relative">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none appearance-none font-bold text-slate-700" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All">All Categories</option>
                    {MEDICAL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
               </div>
            </div>
          </div>
        </header>

        {/* Table container */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex-1">
           {loading ? (
             <div className="p-20 text-center flex flex-col items-center justify-center h-full">
               <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Syncing Records...</p>
             </div>
           ) : (
             <div className="overflow-x-auto h-full">
               <table className="w-full text-left border-separate border-spacing-0">
                  <thead className="sticky top-0 bg-white z-10">
                    <tr className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] border-b border-slate-100">
                      <th className="px-10 py-6">Product</th>
                      <th className="px-10 py-6">Category</th>
                      <th className="px-10 py-6">Stock Level</th>
                      <th className="px-10 py-6">Unit Price</th>
                      <th className="px-10 py-6 text-right">Controls</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredProducts.map(product => (
                      <tr key={product._id} className="group hover:bg-slate-50/80 transition-colors">
                        <td className="px-10 py-6">
                           <div className="flex items-center gap-4">
                              <img src={product.image} alt="" className="w-14 h-14 object-cover rounded-xl border border-slate-200 shadow-sm" />
                              <p className="font-bold text-slate-800">{product.name}</p>
                           </div>
                        </td>
                        <td className="px-10 py-6">
                           <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-wider border border-blue-100">
                              {product.category}
                           </span>
                        </td>
                        <td className="px-10 py-6">
                           <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${product.stock > 5 ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`}></div>
                              <span className="font-bold text-slate-700">{product.stock} units</span>
                           </div>
                        </td>
                        <td className="px-10 py-6 font-black text-slate-900 text-lg">₹{product.price}</td>
                        <td className="px-10 py-6 text-right">
                           <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                              <button onClick={() => openEditModal(product)} className="p-3 bg-white border border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl shadow-sm transition-all"><Edit2 className="w-4 h-4" /></button>
                              <button onClick={() => handleDelete(product._id)} className="p-3 bg-white border border-slate-200 text-red-500 hover:bg-red-500 hover:text-white rounded-xl shadow-sm transition-all"><Trash2 className="w-4 h-4" /></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
             </div>
           )}
        </div>
      </main>

      {/* FIXED UI POPUP (MODAL) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.2)] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            
            {/* Modal Header */}
            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{editingId ? 'Modify Medical Record' : 'Add New Inventory'}</h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Dikota Enterprise Database</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-2xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-10 py-8 bg-white custom-scrollbar">
              <form id="productForm" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="col-span-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Full Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800" placeholder="e.g., Digital Blood Pressure Monitor" />
                  </div>

                  {/* Category Dropdown (Synced) */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Industry Category</label>
                    <div className="relative">
                      <select name="category" value={formData.category} onChange={handleInputChange} required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800 appearance-none cursor-pointer">
                        {MEDICAL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                      <Filter className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Unit Price (INR)</label>
                    <input type="text" name="price" value={formData.price} onChange={handleInputChange} required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-blue-600" placeholder="0.00" />
                  </div>

                  {/* Stock */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Stock Quantity</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800" />
                  </div>

                  {/* Description */}
                  <div className="col-span-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Technical Specifications</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} required rows="3" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-600 resize-none" placeholder="Enter detailed product details..."></textarea>
                  </div>

                  {/* Image Upload Area */}
                  <div className="col-span-2">
                     <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Product Visual</label>
                     <div className="flex items-center gap-6 p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl">
                        <label className="shrink-0 w-28 h-28 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
                          <ImageIcon className="w-6 h-6 text-slate-300 group-hover:text-blue-500 transition-colors" />
                          <span className="text-[9px] font-black uppercase text-slate-400 mt-2">Upload</span>
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} required={!editingId} />
                        </label>
                        <div className="flex-1">
                          {imagePreview ? (
                            <div className="relative inline-block">
                              <img src={imagePreview} alt="Preview" className="w-32 h-32 rounded-2xl object-cover shadow-md border border-white" />
                              <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                            </div>
                          ) : (
                            <div className="text-slate-400">
                              <p className="text-xs font-bold uppercase tracking-wider">No Image Selected</p>
                              <p className="text-[10px] mt-1 leading-relaxed">Upload a clear photo of the medical product for the catalog.</p>
                            </div>
                          )}
                        </div>
                     </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer (Sticky) */}
            <div className="px-10 py-8 border-t border-slate-100 bg-white flex justify-end gap-4 shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
              <button onClick={() => setIsModalOpen(false)} className="px-8 py-4 text-slate-400 font-black uppercase text-[10px] tracking-[0.2em] hover:text-slate-900 transition-colors">
                Cancel
              </button>
              <button type="submit" form="productForm" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-blue-600/30 hover:bg-blue-700 active:scale-95 transition-all">
                {editingId ? 'Update Record' : 'Confirm Entry'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;