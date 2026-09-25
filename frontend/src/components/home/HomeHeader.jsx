import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/join-us', label: 'Join Our Panel' },
];

// Transparent at the top, dark frosted glass once you scroll.
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
          ? 'bg-[#0E0718]/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" aria-label="Survey Dive home">
          {/* brightness-0 invert = white logo. Swap for a light logo file when the client sends one. */}
          <img src="/surveydive-logo.png" alt="Survey Dive" className="h-11 md:h-12 w-auto object-contain brightness-0 invert" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display relative text-[13px] font-semibold uppercase tracking-[0.16em] text-white/85 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-[#E69B57] after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-display inline-flex items-center h-10 px-6 bg-[#E69B57] text-[#140A22] text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#F2AE70] transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden h-[calc(100vh-5rem)] px-6 pt-8 flex flex-col gap-7 bg-[#0E0718]/95 backdrop-blur-xl">
          {[...links, { to: '/contact', label: 'Contact' }].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-semibold text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
