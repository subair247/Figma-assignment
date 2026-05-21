import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
        <Search className="w-4 h-4" />
      </span>
      <input 
        type="text"
        placeholder="Find influencers to collaborate with"
        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-figma-sm text-xs focus:outline-none focus:border-brand-blue font-sans text-slate-700 placeholder-slate-400 transition-colors"
      />
    </div>
  );
}