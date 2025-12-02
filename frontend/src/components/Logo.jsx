import React from 'react';

export const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Modern geometric logo with F and R */}
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#FDB913', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#C2185B', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        {/* Circular badge background */}
        <circle cx="25" cy="25" r="22" fill="url(#logoGrad)" opacity="0.15"/>
        
        {/* Bold F */}
        <path 
          d="M 14 13 L 14 37 L 18 37 L 18 27 L 30 27 L 30 23 L 18 23 L 18 17 L 32 17 L 32 13 Z" 
          fill="url(#logoGrad)"
        />
        
        {/* Bold R with modern cut */}
        <path 
          d="M 38 13 L 38 37 L 42 37 L 42 27 L 48 27 L 56 37 L 61 37 L 52 26.5 Q 58 25 58 19 Q 58 13 50 13 Z M 42 17 L 49 17 Q 54 17 54 19 Q 54 23 49 23 L 42 23 Z" 
          fill="url(#logoGrad)"
        />
        
        {/* Accent dot */}
        <circle cx="60" cy="15" r="2.5" fill="#FDB913"/>
        
        {/* Company name */}
        <text x="70" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700" fill="#1e3a5f" letterSpacing="1">FACTUM</text>
        <text x="70" y="37" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="600" fill="#C2185B" letterSpacing="2">RESEARCH</text>
      </svg>
    </div>
  );
};