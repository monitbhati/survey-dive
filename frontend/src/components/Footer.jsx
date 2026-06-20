import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { mockData } from '../mock';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1A252E] to-[#0F172A] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#3E4F59]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Left Side - Logo and Content */}
          <div className="flex-1">
            <div className="mb-6">
              {/* The white box is completely removed here */}
              <div className="inline-block">
                <Logo />
              </div>
            </div>
            <p className="text-[#A8ADB8] mb-2 text-base font-medium leading-relaxed">
              {mockData.company.tagline}
            </p>
            <p className="text-[#A8ADB8] text-sm leading-relaxed max-w-md">
              Transforming market complexity into strategic clarity through precision research methodologies.
            </p>
          </div>

          {/* Right Side - LinkedIn Button and Address */}
          <div className="flex flex-col md:items-end gap-5">
            <a 
              href="https://www.linkedin.com/company/factum-research" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-[0_0_15px_rgba(190,24,93,0.3)] hover:shadow-[0_0_25px_rgba(190,24,93,0.5)] hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
              Follow us on LinkedIn
            </a>
            <div className="md:text-right text-[#A8ADB8] text-sm">
              <p>{mockData.company.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3E4F59] pt-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/privacy-policy" className="text-[#A8ADB8] hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#3E4F59]">•</span>
            <Link to="/terms-conditions" className="text-[#A8ADB8] hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-[#A8ADB8] text-sm tracking-wide">
            &copy; {new Date().getFullYear()} {mockData.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};