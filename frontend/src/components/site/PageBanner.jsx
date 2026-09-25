import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* Top banner for inner pages: deep purple, a soft purple and orange glow,
   a faint dot grid, and a trail of coloured dots like the one in the logo. */

const trail = [
  [0.02, 0.5, 9, '#8E4FD1'], [0.1, 0.35, 7, '#A56DE0'], [0.16, 0.62, 6, '#B477DA'],
  [0.24, 0.42, 5, '#C381CF'], [0.31, 0.7, 5, '#D18BBF'], [0.38, 0.3, 4, '#DC94A8'],
  [0.46, 0.55, 4, '#E59C8C'], [0.53, 0.38, 3, '#EBA372'], [0.6, 0.68, 3, '#F0A45E'],
  [0.68, 0.46, 2.5, '#F0A45E'], [0.76, 0.6, 2, '#F0A45E'], [0.84, 0.4, 2, '#F0A45E'],
  [0.92, 0.55, 1.5, '#F0A45E'],
];

export const PageBanner = ({ label, title, highlight, intro, children }) => {
  const reduce = useReducedMotion();
  const enter = (d) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } };

  return (
    <section className="relative overflow-hidden bg-[#1A0B30] pt-40 pb-20 sm:pt-48 sm:pb-28">
      {/* glow */}
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#6B2FA8]/40 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-48 right-0 w-[480px] h-[480px] rounded-full bg-[#E69B57]/20 blur-[120px]" aria-hidden="true" />
      {/* faint dot grid, fading out towards the bottom */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1.6px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 85%)',
        }}
        aria-hidden="true"
      />
      {/* logo-style dot trail on the right */}
      <svg className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[38%] h-40" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true">
        {trail.map(([x, y, r, c], i) => (
          <motion.circle
            key={i}
            cx={x * 400}
            cy={y * 160}
            r={r}
            fill={c}
            initial={reduce ? false : { opacity: 0, scale: 0 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
          />
        ))}
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          {label && (
            <motion.p {...enter(0.1)} className="font-display text-sm font-semibold text-[#C9A4F0] mb-5">
              {label}
            </motion.p>
          )}
          <motion.h1 {...enter(0.2)} className="font-display text-[40px] sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.02]">
            {title} {highlight && <span className="text-brand-gradient">{highlight}</span>}
          </motion.h1>
          {intro && (
            <motion.p {...enter(0.4)} className="mt-7 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
              {intro}
            </motion.p>
          )}
          {children && <motion.div {...enter(0.55)} className="mt-10">{children}</motion.div>}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};
