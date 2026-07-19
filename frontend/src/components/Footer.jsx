import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { mockData } from '../mock';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2A1345] to-[#140A22] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#3D2960]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Left Side - Logo and Content */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="inline-block">
                <Logo />
              </div>
            </div>
            <p className="text-gray-200 mb-2 text-base font-medium leading-relaxed">
              {mockData.company.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Transforming market complexity into strategic clarity through precision research methodologies.
            </p>
          </div>

          {/* Right Side - LinkedIn Button and Address */}
          <div className="flex flex-col md:items-end gap-5">
            <a 
              href="https://www.linkedin.com/company/survey-dive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4B1E73] to-[#E69B57] hover:from-[#5C2690] hover:to-[#F0AC6E] text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-[0_0_15px_rgba(75,30,115,0.4)] hover:shadow-[0_0_25px_rgba(230,155,87,0.4)] hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
              Follow us on LinkedIn
            </a>
            <div className="md:text-right text-gray-400 text-sm">
              <p>{mockData.company.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3D2960] pt-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#3D2960]">•</span>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-400 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} {mockData.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};