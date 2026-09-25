import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* Shared building blocks for every inner page, so they all look like one site. */

export const wrap = 'max-w-[1400px] mx-auto px-5 sm:px-8';
export const narrow = 'max-w-3xl';

export const btnPrimary =
  'font-display inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#E69B57] text-[#140A22] font-bold hover:bg-[#F2AE70] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60';
export const btnGhost =
  'font-display inline-flex items-center justify-center gap-3 h-14 px-8 border border-white/50 text-white font-bold hover:bg-white hover:text-[#140A22] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white';

// Form fields: clear borders and an orange outline while typing
export const fieldClass =
  'w-full bg-white/[0.06] border border-white/25 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#E69B57] focus:ring-2 focus:ring-[#E69B57]/30 transition-colors';
export const labelClass = 'block text-sm font-semibold text-white/85 mb-2';

export const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};

export const Label = ({ children }) => (
  <p className="font-display text-sm font-semibold text-[#C9A4F0] mb-4">{children}</p>
);

export const SectionHeading = ({ label, title, intro, className = '' }) => (
  <Reveal className={`max-w-3xl mb-12 sm:mb-14 ${className}`}>
    {label && <Label>{label}</Label>}
    <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08]">{title}</h2>
    {intro && <p className="mt-5 text-lg text-white/70 leading-relaxed">{intro}</p>}
  </Reveal>
);

// A thin purple-to-orange line, used above columns instead of cards
export const GradientRule = () => <span className="block h-[2px] w-full bg-gradient-to-r from-[#B07BEA] to-[#F0A45E]" />;

// Numbered rows, used for steps and lists
export const NumberedRows = ({ items }) => (
  <div className="border-t border-white/15">
    {items.map((item, i) => (
      <Reveal key={item.title} delay={i * 0.05} className="grid grid-cols-[48px_1fr] sm:grid-cols-[80px_280px_1fr] gap-x-4 sm:gap-x-8 gap-y-2 py-7 border-b border-white/15">
        <span className="font-display text-sm font-bold text-[#E69B57] tabular-nums pt-1.5">{String(i + 1).padStart(2, '0')}</span>
        <h3 className="font-display text-xl sm:text-2xl font-bold">{item.title}</h3>
        <p className="col-start-2 sm:col-start-3 text-white/70 leading-relaxed">{item.text}</p>
      </Reveal>
    ))}
  </div>
);

// Closing band at the bottom of most pages
export const CTABand = ({ title = 'What do you need to find out?', text, primary = { to: '/contact', label: 'Start a project' }, secondary }) => (
  <section className={`${wrap} py-24 sm:py-32`}>
    <Reveal className="relative overflow-hidden border border-white/15 p-10 sm:p-16">
      <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-[#E69B57]/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-[#8E4FD1]/20 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08]">{title}</h2>
        {text && <p className="mt-5 text-lg text-white/75 leading-relaxed">{text}</p>}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to={primary.to} className={btnPrimary}>
            {primary.label} <ArrowRight size={18} />
          </Link>
          {secondary && (
            <Link to={secondary.to} className={btnGhost}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  </section>
);
