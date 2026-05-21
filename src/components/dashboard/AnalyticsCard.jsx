import React, { useState } from 'react';
import { Wallet, ChevronUp, ArrowUpRight } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function AnalyticsCard() {
  const [walletApplied, setWalletApplied] = useState(false);
  const [couponCode, setCouponCode] = useState('WELCOME20');
  const [couponSelected, setCouponSelected] = useState(true);

  const subtotal = 14999.00;
  const taxAmount = 1079.64;
  const walletDeduction = walletApplied ? 500.00 : 0.00;
  
  // Dynamically balance metrics if wallet is modified
  const finalTotalDue = 16078.64 - walletDeduction;

  return (
    <div className="w-full lg:w-[380px] space-y-4 flex-shrink-0">
      <div className="bg-white border border-slate-100 rounded-figma-lg p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-4">Order Summary</h3>
        <div className="border border-blue-100 bg-blue-50/30 rounded-figma-md p-4 flex justify-between items-center">
          <div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-extrabold text-slate-900">₹4,999</span>
              <span className="text-xs text-slate-500 font-medium">/month</span>
            </div>
            <span className="text-[11px] text-slate-400 block mt-0.5">Includes 5,000 credits/mo.</span>
          </div>
          <div className="text-right">
            <Badge text="Startup" status="info" />
          </div>
        </div>
        <button className="w-full mt-4 py-2 border border-blue-200 text-brand-blue text-xs font-semibold rounded-figma-sm bg-white hover:bg-blue-50 transition-colors flex items-center justify-center gap-1">
          <ArrowUpRight className="w-3.5 h-3.5" /> Upgrade to Growth Plan
        </button>
      </div>

      <div className="bg-white border border-slate-100 rounded-figma-lg p-5 shadow-sm space-y-3.5">
        /* Wallet Row Panel with Click Handler */
        <div className="border border-slate-100 rounded-figma-md p-3 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <Wallet className="w-4 h-4 text-brand-blue" />
            <div>
              <p className="text-xs font-bold text-slate-800">Wallet Balance</p>
              <p className="text-[11px] text-slate-400">₹500.00 available</p>
            </div>
          </div>
          <button 
            type="button"
            onClick={() => setWalletApplied(!walletApplied)}
            className={`text-xs font-bold px-3 py-1 border rounded-figma-sm transition-all ${walletApplied ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'border-slate-200 text-brand-blue hover:bg-slate-50'}`}
          >
            {walletApplied ? 'Applied' : 'Apply'}
          </button>
        </div>

        <div className="border border-slate-100 rounded-figma-md p-3 space-y-3">
          <div className="flex items-center justify-between cursor-pointer">
            <span className="text-xs font-bold text-slate-800">Apply Coupon</span>
            <ChevronUp className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={couponCode} 
              onChange={(e) => setCouponCode(e.target.value)} 
              className="flex-1 px-3 py-1.5 border border-slate-200 rounded-figma-sm text-xs focus:outline-none focus:border-brand-blue" 
            />
            <Button variant="secondary" onClick={() => setCouponSelected(couponCode.toUpperCase() === 'WELCOME20')}>Apply</Button>
          </div>
          
          /* Coupon Selector Toggle Click Target */
          <div 
            onClick={() => setCouponSelected(!couponSelected)}
            className={`p-2 border rounded-figma-sm flex items-center justify-between cursor-pointer transition-all ${couponSelected ? 'border-brand-blue bg-blue-50/10' : 'border-slate-100'}`}
          >
            <div>
              <span className="text-xs font-bold text-slate-800 block">WELCOME20</span>
              <span className="text-[10px] text-slate-400">20% off on your first month</span>
            </div>
            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${couponSelected ? 'border-brand-blue' : 'border-slate-300'}`}>
              {couponSelected && <div className="w-2 h-2 rounded-full bg-brand-blue"></div>}
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2 text-xs border-t border-slate-50">
          <div className="flex justify-between text-slate-500">
            <span>Subtotal</span>
            <span className="font-bold text-slate-800">₹14,999.00</span>
          </div>
          {walletApplied && (
            <div className="flex justify-between text-emerald-600 font-semibold">
              <span>Wallet Deduction</span>
              <span>- ₹500.00</span>
            </div>
          )}
          <div className="flex justify-between text-slate-500">
            <span>Tax (18% GST)</span>
            <span className="font-bold text-slate-800">₹1,079.64</span>
          </div>
          <div className="pt-2 flex justify-between items-baseline">
            <span className="text-xs font-bold text-slate-900">Total due today</span>
            <span className="text-xl font-extrabold text-brand-blue">
              ₹{(couponSelected ? finalTotalDue : finalTotalDue + 3000).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
        <button type="button" onClick={() => alert("Redirecting to your integrated gateway payment page...")} className="w-full py-2.5 bg-brand-blue text-white font-bold text-xs rounded-figma-sm hover:bg-blue-700 transition-all shadow-md">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}