import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

// Tuned noise generator to match the chunky grain of your logo file
const noiseTexture = (rgb, alpha) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 ${rgb.r}  0 0 0 0 ${rgb.g}  0 0 0 0 ${rgb.b}  0 0 0 ${alpha} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#3E4F59] transition-all duration-300 shadow-xl bg-gradient-to-b from-[#1C2631] to-[#171F28]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/join-us" 
              className={`font-medium transition-colors ${
                isActive('/join-us') ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              Join Us
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 px-6 text-white border-0">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#3E4F59]">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-left text-gray-300 hover:text-pink-400 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-left text-gray-300 hover:text-pink-400 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-left text-gray-300 hover:text-pink-400 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/join-us" 
                className="text-left text-gray-300 hover:text-pink-400 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="pt-2">
                <Button className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 w-full text-white border-0">
                  Contact
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};