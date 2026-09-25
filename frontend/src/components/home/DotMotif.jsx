import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* The dot trail from the Survey Dive logo, reused as small design elements. */

const TRAIL = ['#8E4FD1', '#A56DE0', '#B477DA', '#C381CF', '#D18BBF', '#DC94A8', '#E59C8C', '#EBA372', '#F0A45E'];
// Deeper shades for light backgrounds
const TRAIL_LIGHT = ['#4B1E73', '#5E2590', '#7A2F98', '#963C92', '#B04D82', '#C3616A', '#D27449', '#D9822B', '#D9822B'];

// Three shrinking dots, used instead of a plain bullet point
export const DotBullet = ({ className = '', light = false }) => (
  <svg width="22" height="10" viewBox="0 0 22 10" className={`shrink-0 ${className}`} aria-hidden="true">
    <circle cx="3" cy="5" r="3" fill={light ? '#4B1E73' : '#8E4FD1'} />
    <circle cx="11" cy="5" r="2" fill={light ? '#B04D82' : '#D18BBF'} />
    <circle cx="17.5" cy="5" r="1.4" fill={light ? '#D9822B' : '#F0A45E'} />
  </svg>
);

// A row of dots that thins out, used instead of a plain line between sections
export const DotDivider = ({ className = '', light = false }) => {
  const trail = light ? TRAIL_LIGHT : TRAIL;
  const reduce = useReducedMotion();
  const dots = Array.from({ length: 14 }, (_, i) => {
    const t = i / 13;
    return { x: 6 + Math.pow(t, 1.35) * 588, r: 4.2 - t * 3.4, c: trail[Math.min(trail.length - 1, Math.floor(t * trail.length))] };
  });
  return (
    <svg viewBox="0 0 600 14" preserveAspectRatio="xMinYMid meet" className={`w-full h-3.5 ${className}`} aria-hidden="true">
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.x}
          cy="7"
          r={d.r}
          fill={d.c}
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.3 }}
        />
      ))}
    </svg>
  );
};

// A short trail after a number, so stats echo the logo
export const DotTrail = ({ className = '', light = false }) => {
  const c = light ? ['#4B1E73', '#963C92', '#C3616A', '#D27449', '#D9822B'] : ['#A56DE0', '#D18BBF', '#E59C8C', '#F0A45E', '#F0A45E'];
  return (
    <svg width="44" height="20" viewBox="0 0 44 20" className={`shrink-0 ${className}`} aria-hidden="true">
      <circle cx="5" cy="6" r="3.5" fill={c[0]} />
      <circle cx="15" cy="12" r="2.8" fill={c[1]} />
      <circle cx="24" cy="5" r="2.2" fill={c[2]} />
      <circle cx="32" cy="13" r="1.7" fill={c[3]} />
      <circle cx="40" cy="7" r="1.2" fill={c[4]} />
    </svg>
  );
};

// A bar chart drawn in dots. Each row: [label, value]. One dot = `per` units.
export const DotChart = ({ rows, per = 2, labelClass = 'text-white/70', valueClass = 'text-white', light = false }) => {
  const reduce = useReducedMotion();
  const colors = light ? ['#4B1E73', '#7A2F98', '#B04D82', '#D27449', '#D9822B'] : ['#8E4FD1', '#B477DA', '#D18BBF', '#EBA372', '#F0A45E'];
  return (
    <div className="space-y-5">
      {rows.map(([label, value], i) => {
        const n = Math.round(value / per);
        return (
          <div key={label} className="grid grid-cols-[110px_1fr_48px] sm:grid-cols-[150px_1fr_56px] items-center gap-3">
            <span className={`text-sm sm:text-[15px] ${labelClass}`}>{label}</span>
            <span className="flex flex-wrap gap-[5px]">
              {Array.from({ length: n }, (_, k) => (
                <motion.span
                  key={k}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                  style={{ backgroundColor: colors[i % colors.length] }}
                  initial={reduce ? false : { opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + k * 0.03, duration: 0.25 }}
                />
              ))}
            </span>
            <span className={`font-display text-right font-bold tabular-nums ${valueClass}`}>{value}%</span>
          </div>
        );
      })}
    </div>
  );
};
