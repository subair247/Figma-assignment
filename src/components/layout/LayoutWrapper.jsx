import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-6xl bg-slate-50 border border-slate-700/40 rounded-figma-lg shadow-2xl overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
          <Header />
          <div className="p-4 md:p-6 flex flex-col lg:flex-row gap-6 items-start overflow-y-auto max-h-[85vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}