import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../common/Button';

export default function DataTable() {
  const [formData, setFormData] = useState({
    companyName: 'abhigyan',
    email: 'abhigyan.pandey@getreelax.com',
    gstNumber: '',
    panNumber: '',
    premiseNo: '',
    street: '',
    state: 'Tamil Nadu',
    city: 'Chennai',
    country: 'India',
    pinCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-figma-lg border border-slate-100 p-6 md:p-8 shadow-sm flex-1 w-full">
      <button type="button" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-800 font-medium mb-5 transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to plans
      </button>

      <h1 className="text-xl font-bold text-slate-900 tracking-tight">Review your details</h1>
      <h2 className="text-xs font-bold text-slate-700 mt-1 mb-5">Billing Information</h2>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Company Name</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-figma-sm text-xs text-slate-800 focus:outline-none focus:border-brand-blue" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-figma-sm text-xs text-slate-800 focus:outline-none focus:border-brand-blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">GST Number <span className="text-slate-400 font-normal">(Optional)</span></label>
            <input type="text" name="gstNumber" placeholder="GST Number" value={formData.gstNumber} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 rounded-figma-sm text-xs placeholder-slate-400 focus:outline-none focus:border-brand-blue" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">PAN Number <span className="text-slate-400 font-normal">(Optional)</span></label>
            <input type="text" name="panNumber" placeholder="PAN Number" value={formData.panNumber} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 rounded-figma-sm text-xs placeholder-slate-400 focus:outline-none focus:border-brand-blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Premise/House no.</label>
            <input type="text" name="premiseNo" placeholder="Premise/House no." value={formData.premiseNo} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 rounded-figma-sm text-xs placeholder-slate-400 focus:outline-none focus:border-brand-blue" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Street</label>
            <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 rounded-figma-sm text-xs placeholder-slate-400 focus:outline-none focus:border-brand-blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-figma-sm text-xs text-slate-700 focus:outline-none focus:border-brand-blue" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-figma-sm text-xs text-slate-700 focus:outline-none focus:border-brand-blue" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Country</label>
            <input type="text" name="country" value={formData.country} readOnly className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-figma-sm text-xs text-slate-400 cursor-not-allowed outline-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Pin Code</label>
            <input type="text" name="pinCode" placeholder="Pincode" value={formData.pinCode} onChange={handleChange} className="w-full px-3 py-2 border border-slate-200 rounded-figma-sm text-xs placeholder-slate-400 focus:outline-none focus:border-brand-blue" />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-5 border-t border-slate-100 mt-6">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" type="submit">Save Details</Button>
        </div>
      </form>
    </div>
  );
}