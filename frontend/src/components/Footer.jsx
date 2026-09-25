import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { company, isReal } from './site/siteContent';

const columns = [
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/quality', label: 'Quality and methodology' },
      { to: '/careers', label: 'Careers' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services/survey-designing', label: 'Survey design' },
      { to: '/services/quantitative-research', label: 'Quantitative research' },
      { to: '/services/cati-excellence', label: 'CATI' },
      { to: '/services/qualitative-deep-dives', label: 'Qualitative research' },
    ],
  },
  {
    title: 'Panel',
    links: [
      { to: '/join-us', label: 'Join our panel' },
      { to: '/panel-faq', label: 'Panel FAQ' },
    ],
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0C0517] text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src="/surveydive-logo.png" alt="Survey Dive" className="h-14 w-auto object-contain" />
            <p className="mt-5 text-white/65 max-w-xs leading-relaxed">
              Market research and data collection. Real people, real answers.
            </p>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-white/80 hover:text-[#E69B57] transition-colors"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-display text-sm font-bold text-white mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-white/60 hover:text-white transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="font-display text-sm font-bold text-white mb-4">Get in touch</p>
              <ul className="space-y-3 text-white/60">
                <li>{isReal(company.email) ? <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a> : company.email}</li>
                <li>{isReal(company.phone) ? <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">{company.phone}</a> : company.phone}</li>
                <li className="leading-relaxed">{company.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between text-sm text-white/45">
          <p>© {year} Survey Dive. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy policy</Link>
            <Link to="/terms-conditions" className="hover:text-white">Terms and conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
