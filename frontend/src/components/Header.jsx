import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `font-medium transition-colors ${
      isActive(path)
        ? 'text-[#4B1E73] font-semibold'
        : 'text-gray-600 hover:text-[#4B1E73]'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/join-us" className={navLinkClass('/join-us')}>Join Us</Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-[#4B1E73] to-[#E69B57] hover:from-[#401A62] hover:to-[#C4844A] px-6 rounded-lg text-white border-0">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-[#4B1E73] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-left text-gray-600 hover:text-[#4B1E73] transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-left text-gray-600 hover:text-[#4B1E73] transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/services" className="text-left text-gray-600 hover:text-[#4B1E73] transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/join-us" className="text-left text-gray-600 hover:text-[#4B1E73] transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Join Us</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="pt-2">
                <Button className="bg-gradient-to-r from-[#4B1E73] to-[#E69B57] hover:from-[#401A62] hover:to-[#C4844A] w-full rounded-lg text-white border-0">
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