import React from 'react';

export default function Badge({ text, status = 'info' }) {
  const styles = {
    info: "bg-blue-50 text-brand-blue border border-blue-100",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-100"
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider ${styles[status]}`}>
      {text}
    </span>
  );
}