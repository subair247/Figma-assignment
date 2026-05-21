import React from 'react';
import { Menu } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between">
      <SearchBar />
      <div className="flex items-center gap-4">
        <Button variant="amber">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block mr-1.5 animate-pulse"></span>
          Upgrade
        </Button>
        <Button variant="primary">+ Create Campaign</Button>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-brand-blue font-semibold text-xs">
            MS
          </div>
          <Menu className="w-4 h-4 text-slate-600 hover:text-slate-900" />
        </div>
      </div>
    </header>
  );
}