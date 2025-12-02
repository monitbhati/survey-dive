import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="220" height="55" viewBox="0 0 220 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Elegant intertwining swirl logo - Yellow and Magenta curves */}
        
        {/* Yellow swirl (top/outer curves) */}
        <path 
          d="M 10 28 Q 8 18 14 12 Q 20 6 28 8 Q 36 10 40 18 Q 44 26 42 34 Q 40 40 34 43" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="5.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M 34 43 Q 28 46 22 44 Q 16 42 12 36" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="5.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Magenta swirl (inner/intertwined curves) */}
        <path 
          d="M 12 36 Q 8 30 8 24 Q 8 16 14 12" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="5.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M 14 12 Q 20 8 26 10 Q 32 12 36 18 Q 40 24 40 32" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="5.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M 40 32 Q 40 38 36 42 Q 32 46 26 47" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="5.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Additional inner flow for visual richness */}
        <path 
          d="M 22 20 Q 26 18 30 20 Q 34 22 35 26 Q 36 30 34 34" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="4" 
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Company name */}
        <text x="60" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontSize="17" fontWeight="700" fill="#1e3a5f" letterSpacing="0.5">FACTUM</text>
        <text x="60" y="41" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="600" fill="#C2185B" letterSpacing="1.8">RESEARCH</text>
      </svg>
    </div>
  );
};