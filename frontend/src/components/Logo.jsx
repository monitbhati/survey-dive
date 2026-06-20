import React from 'react';

export const Logo = () => {
  return (
    <img 
      // Make sure this matches the name of your new transparent file!
      src="/factum-logo.png" 
      alt="Factum Research" 
      className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" 
    />
  );
};