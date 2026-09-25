import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/join-us', label: 'Join Our Panel' },
];

// Logo and menu on the left, Contact on the right.
// Transparent at the top of the page, deep purple frosted glass once you scroll.
export const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#160A28]/75 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-20 flex items-center">
        <Link to="/" aria-label="Survey Dive home" className="shrink-0 mr-12">
          <img src="/surveydive-logo.png" alt="Survey Dive" className="h-12 md:h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display relative text-[15px] font-medium text-white/85 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#E69B57] after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="font-display hidden md:inline-flex ml-auto items-center h-11 px-7 border border-white/70 text-white text-[15px] font-semibold hover:bg-[#E69B57] hover:border-[#E69B57] hover:text-[#140A22] transition-colors"
        >
          Contact
        </Link>

        <button
          className="md:hidden ml-auto p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden h-[calc(100vh-5rem)] px-6 pt-8 flex flex-col gap-7 bg-[#160A28]/95 backdrop-blur-xl">
          {[...links, { to: '/contact', label: 'Contact' }].map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-display text-2xl font-semibold text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
