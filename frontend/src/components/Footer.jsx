import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { mockData } from '../mock';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="mb-6">
              <div className="bg-white inline-block px-3 py-2 rounded-lg">
                <Logo />
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">{mockData.company.tagline}</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Transforming market complexity into strategic clarity through precision research methodologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Capabilities</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Survey Architecture</li>
              <li className="text-slate-400">CATI Excellence</li>
              <li className="text-slate-400">Qualitative Research</li>
              <li className="text-slate-400">Strategic Intelligence</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {mockData.company.name}. All rights reserved. | Strategic Market Intelligence</p>
        </div>
      </div>
    </footer>
  );
};