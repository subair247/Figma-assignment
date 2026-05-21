import React from 'react';
import { LayoutDashboard, Settings, CreditCard, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-400 border-r border-slate-800 p-6 space-y-6 hidden md:block">
      <div className="flex items-center gap-2 text-white font-bold text-lg px-2">
        <div className="w-6 h-6 rounded bg-brand-blue flex items-center justify-center text-xs font-black">R</div>
        Reelax
      </div>
      <nav className="space-y-1">
        <div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold rounded-figma-sm hover:bg-slate-800 hover:text-white cursor-pointer transition-colors">
          <LayoutDashboard className="w-4 h-4" /> Dashboard
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold rounded-figma-sm hover:bg-slate-800 hover:text-white cursor-pointer transition-colors">
          <Users className="w-4 h-4" /> Influencers
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-white bg-brand-blue rounded-figma-sm cursor-pointer transition-colors">
          <CreditCard className="w-4 h-4" /> Billing
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs font-semibold rounded-figma-sm hover:bg-slate-800 hover:text-white cursor-pointer transition-colors">
          <Settings className="w-4 h-4" /> Settings
        </div>
      </nav>
    </aside>
  );
}