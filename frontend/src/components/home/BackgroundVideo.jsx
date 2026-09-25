import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// Your Cloudinary video. e_grayscale = black and white, q_auto = automatic compression.
const VIDEO =
  'https://res.cloudinary.com/dypr66exd/video/upload/e_grayscale,q_auto/v1790282777/A_Online-Video-Cutter.Com_1_fzr5xr.mp4';
// First frame, also black and white, shown while the video loads
const POSTER =
  'https://res.cloudinary.com/dypr66exd/video/upload/so_0,e_grayscale,q_auto/v1790282777/A_Online-Video-Cutter.Com_1_fzr5xr.jpg';

// Video fixed behind the whole page. The dark layer on top gets
// stronger as you scroll, so the content further down stays readable.
export const BackgroundVideo = () => {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const shade = useTransform(scrollYProgress, [0, 0.08, 1], [0.45, 0.72, 0.8]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#0B0612]" aria-hidden="true">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
      <motion.div className="absolute inset-0 bg-[#0B0612]" style={{ opacity: reduce ? 0.7 : shade }} />
      {/* faint brand tint so the black and white feels on-brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4B1E73]/10 via-transparent to-[#4B1E73]/20" />
    </div>
  );
};
