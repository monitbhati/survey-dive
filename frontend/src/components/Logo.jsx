import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* F letter with chart integration */}
        <rect x="4" y="8" width="4" height="32" fill="#1e293b" rx="1"/>
        <rect x="4" y="8" width="16" height="4" fill="#1e293b" rx="1"/>
        <rect x="4" y="22" width="12" height="4" fill="#3b82f6" rx="1"/>
        
        {/* Chart bars integrated */}
        <rect x="24" y="20" width="3" height="20" fill="#64748b" rx="1"/>
        <rect x="29" y="14" width="3" height="26" fill="#475569" rx="1"/>
        <rect x="34" y="10" width="3" height="30" fill="#3b82f6" rx="1"/>
        
        {/* Company name */}
        <text x="44" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700" fill="#1e293b" letterSpacing="0.5">FACTUM</text>
        <text x="44" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="500" fill="#64748b" letterSpacing="1.5">RESEARCH</text>
      </svg>
    </div>
  );
};