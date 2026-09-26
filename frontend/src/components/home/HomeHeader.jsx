import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { to: '/services/quantitative-research', label: 'Quantitative research' },
  { to: '/services/qualitative-deep-dives', label: 'Qualitative research' },
  { to: '/services/cati-excellence', label: 'CATI' },
];

const linkBase =
  'font-display relative text-[15px] font-medium transition-colors after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#E69B57] after:transition-all';

// Logo and menu on the left, Contact on the right.
// Transparent at the top of the page, deep purple frosted glass once you scroll.
export const HomeHeader = ({ light = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (to) => pathname === to || (to === '/services' && pathname.startsWith('/services'));
  // light = dark text for light pages
  const on = light ? 'text-[#1E1230]' : 'text-white';
  const off = light ? 'text-[#1E1230]/70 hover:text-[#4B1E73]' : 'text-white/80 hover:text-white';
  const cls = (to) => `${linkBase} ${isActive(to) ? `${on} after:w-full` : `${off} after:w-0 hover:after:w-full`}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? light
            ? 'bg-white/85 backdrop-blur-xl border-b border-[#4B1E73]/10'
            : 'bg-[#160A28]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-20 flex items-center">
        <Link to="/" aria-label="Survey Dive home" className="shrink-0 mr-12">
          <img src="/surveydive-logo.png" alt="Survey Dive" className="h-12 md:h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          <Link to="/about" className={cls('/about')}>About</Link>

          {/* Services only opens the dropdown (on hover, tap, or keyboard focus); it has no page of its own */}
          <div className="relative group">
            <button type="button" aria-haspopup="true" className={`${cls('/services')} inline-flex items-center gap-1.5 cursor-default`}>
              Services <ChevronDown size={15} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>
            <div className="absolute left-0 top-full pt-5 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
              <div className={`w-64 backdrop-blur-xl border py-2 shadow-2xl ${light ? 'bg-white/95 border-[#4B1E73]/10' : 'bg-[#1A0C2E]/95 border-white/10'}`}>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className={`block px-5 py-3 text-[15px] transition-colors ${
                      light ? 'hover:bg-[#4B1E73]/5 hover:text-[#4B1E73]' : 'hover:bg-white/5 hover:text-[#E69B57]'
                    } ${pathname === s.to ? (light ? 'text-[#4B1E73]' : 'text-[#E69B57]') : light ? 'text-[#1E1230]/80' : 'text-white/85'}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/join-us" className={cls('/join-us')}>Join Our Panel</Link>
        </nav>

        <Link
          to="/contact"
          className={`font-display hidden md:inline-flex ml-auto items-center h-11 px-7 border text-[15px] font-semibold transition-colors ${
            pathname === '/contact'
              ? 'bg-[#E69B57] border-[#E69B57] text-[#140A22]'
              : light
              ? 'border-[#4B1E73] text-[#4B1E73] hover:bg-[#4B1E73] hover:text-white'
              : 'border-white/70 text-white hover:bg-[#E69B57] hover:border-[#E69B57] hover:text-[#140A22]'
          }`}
        >
          Contact
        </Link>

        <button
          className={`md:hidden ml-auto p-2 ${light ? 'text-[#1E1230]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className={`md:hidden h-[calc(100vh-5rem)] overflow-y-auto px-6 pt-8 pb-10 flex flex-col gap-6 backdrop-blur-xl ${light ? 'bg-white/95 text-[#1E1230]' : 'bg-[#160A28]/95 text-white'}`}>
          <Link to="/about" className="font-display text-2xl font-semibold">About</Link>
          <div>
            <p className="font-display text-2xl font-semibold">Services</p>
            <div className={`mt-3 pl-4 border-l flex flex-col gap-3 ${light ? 'border-[#4B1E73]/15' : 'border-white/15'}`}>
              {serviceLinks.map((s) => (
                <Link key={s.to} to={s.to} className="text-lg opacity-75">{s.label}</Link>
              ))}
            </div>
          </div>
          <Link to="/join-us" className="font-display text-2xl font-semibold">Join Our Panel</Link>
          <Link to="/contact" className="font-display text-2xl font-semibold text-[#E69B57]">Contact</Link>
        </nav>
      )}
    </header>
  );
};
