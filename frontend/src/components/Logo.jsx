import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Intertwining F and R inspired by flowing swirls */}
        
        {/* F - Yellow flowing curves */}
        <path 
          d="M 8 10 Q 12 8 16 10 Q 20 12 20 16 L 20 22 Q 20 26 16 28 Q 12 30 8 28 Q 4 26 4 22 L 4 16 Q 4 12 8 10 Z" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        <path 
          d="M 4 16 Q 4 12 8 10 Q 12 8 16 10 L 20 12" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        <path 
          d="M 12 16 Q 14 16 16 18 Q 18 20 18 22" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        
        {/* Main intertwining swirl - Yellow top part */}
        <path 
          d="M 10 8 Q 18 6 24 10 Q 30 14 32 22 Q 34 30 30 36" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        
        {/* R - Magenta/Purple flowing curves intertwining with F */}
        <path 
          d="M 30 36 Q 26 40 20 40 Q 14 40 10 36 Q 6 32 6 26" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <path 
          d="M 20 24 Q 24 24 28 26 Q 32 28 32 32 Q 32 36 28 38" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        <path 
          d="M 24 30 L 30 38" 
          fill="none" 
          stroke="#C2185B" 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        
        {/* Additional flowing connector */}
        <path 
          d="M 16 12 Q 20 16 24 18 Q 28 20 28 24" 
          fill="none" 
          stroke="#FDB913" 
          strokeWidth="3" 
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Company name */}
        <text x="48" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700" fill="#1e3a5f" letterSpacing="0.5">FACTUM</text>
        <text x="48" y="36" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="600" fill="#C2185B" letterSpacing="1.8">RESEARCH</text>
      </svg>
    </div>
  );
};