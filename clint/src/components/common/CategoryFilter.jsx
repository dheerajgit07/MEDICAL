import React from 'react';
import { Search, Filter } from 'lucide-react';

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange,
  isLoading 
}) => {
  if (isLoading) {
    return (
      <section className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex gap-4 animate-pulse">
        <div className="h-12 bg-slate-100 rounded-xl flex-1"></div>
        <div className="h-12 bg-slate-100 rounded-xl w-64"></div>
      </section>
    );
  }

  return (
    <section className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by product name..."
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="relative w-64">
        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <select
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 outline-none font-medium text-slate-600"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default CategoryFilter;
