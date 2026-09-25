import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// Your Cloudinary video. e_grayscale = black and white, q_auto = automatic compression.
const VIDEO =
  'https://res.cloudinary.com/dypr66exd/video/upload/e_grayscale,q_auto/v1790282777/A_Online-Video-Cutter.Com_1_fzr5xr.mp4';
// First frame, also black and white, shown while the video loads
const POSTER =
  'https://res.cloudinary.com/dypr66exd/video/upload/so_0,e_grayscale,q_auto/v1790282777/A_Online-Video-Cutter.Com_1_fzr5xr.jpg';

// Video fixed behind the whole page, with a deep purple shade on top.
// The shade gets stronger as you scroll so the content further down stays readable.
// start / end = how dark the shade is at the top and further down the page.
export const BackgroundVideo = ({ start = 0.5, end = 0.8 }) => {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const shade = useTransform(scrollYProgress, [0, 0.08, 1], [start, end - 0.06, end]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#120822]" aria-hidden="true">
      <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster={POSTER}>
        <source src={VIDEO} type="video/mp4" />
      </video>
      {/* purple tint: turns the black and white footage into Survey Dive purple */}
      <div className="absolute inset-0 bg-[#4B1E73] mix-blend-multiply opacity-60" />
      <motion.div className="absolute inset-0 bg-[#120822]" style={{ opacity: reduce ? end - 0.1 : shade }} />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#120822]/70 to-transparent" />
    </div>
  );
};
