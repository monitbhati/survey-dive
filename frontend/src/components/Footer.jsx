import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { mockData } from '../mock';
import { Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">
          {/* Left Side - Logo and Content */}
          <div className="flex-1">
            <div className="mb-4">
              <div className="bg-white inline-block px-3 py-2 rounded-lg">
                <Logo />
              </div>
            </div>
            <p className="text-slate-300 mb-2 text-base leading-relaxed">{mockData.company.tagline}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming market complexity into strategic clarity through precision research methodologies.
            </p>
          </div>

          {/* Right Side - LinkedIn Button and Address */}
          <div className="flex flex-col items-end gap-4">
            <a 
              href="https://www.linkedin.com/company/factum-research" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white px-5 py-2.5 rounded-lg transition-all font-medium shadow-lg"
            >
              <Linkedin size={20} />
              Follow us on LinkedIn
            </a>
            <div className="text-right text-slate-400 text-sm">
              <p>{mockData.company.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {mockData.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};