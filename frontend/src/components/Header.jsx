import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-slate-900' : 'text-gray-700 hover:text-slate-900'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-slate-900' : 'text-gray-700 hover:text-slate-900'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') ? 'text-slate-900' : 'text-gray-700 hover:text-slate-900'
              }`}
            >
              Services
            </Link>
            <Link to="/contact">
              <Button className="bg-slate-800 hover:bg-slate-900 px-6">Contact</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-slate-800 hover:bg-slate-900 w-full">Contact</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};