import React from 'react';
import { HomeHeader } from '../home/HomeHeader';
import { Footer } from '../Footer';
import '../home/home.css';

// Wrapper for every inner page: header, dark background, footer.
export const SiteLayout = ({ children }) => (
  <div className="home-root relative isolate min-h-screen bg-[#120822] text-white antialiased selection:bg-[#E69B57] selection:text-[#140A22]">
    <HomeHeader />
    <main>{children}</main>
    <Footer />
  </div>
);
