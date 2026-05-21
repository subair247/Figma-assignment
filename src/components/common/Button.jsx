import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = "px-4 py-2 text-xs font-semibold rounded-figma-sm transition-all shadow-sm duration-150";
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-700",
    secondary: "border border-slate-200 text-slate-700 hover:bg-slate-50",
    amber: "bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}