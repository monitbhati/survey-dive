import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BackgroundVideo } from '../../components/home/BackgroundVideo';
import { HomeHeader } from '../../components/home/HomeHeader';
import { Footer } from '../../components/Footer';
import { ParticleHeadline } from './ParticleHeadline';
import { ProjectFinder } from './ProjectFinder';
import '../../components/home/home.css';

/* =====================================================================
   SAMPLE 3: the interactive one.
   1. The headline is made of thousands of dots, like the logo's dot trail.
      Move the cursor through it and the dots scatter, then regroup.
   2. The page asks the visitor three survey questions and builds them a
      research brief from their answers.
   3. The panel section: "Dive In & Be Heard."
   Everything in [square brackets] is for the client to confirm.
   ===================================================================== */

const offerings = [
  'B2B Research',
  'Consumer Research',
  'Healthcare Professionals',
  'Ailment Audience',
  'CATI Research',
  'IDIs',
  'FGDs',
  'Community Recruitment',
  'Panel Recruitment',
  'Survey Programming',
];

const wrap = 'max-w-[1400px] mx-auto px-5 sm:px-8';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Sample3Page = () => {
  const reduce = useReducedMotion();
  const enter = (d) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } };

  return (
    <div className="home-root relative isolate min-h-screen bg-[#120822] text-white antialiased selection:bg-[#E69B57] selection:text-[#140A22]">
      <BackgroundVideo start={0.55} end={0.82} />
      <HomeHeader />

      {/* ---------- HERO: headline made of dots ---------- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 text-center">
        <h1 className="sr-only">Real people. Real answers.</h1>
        <ParticleHeadline className="max-w-6xl h-[88vw] sm:h-[44vw] max-h-[380px] min-h-[190px]" />
        <motion.p {...enter(1.2)} className="mt-8 text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
          Survey Dive empowers organizations to make smarter, more confident decisions through high-quality, actionable
          data intelligence. We connect you with the right people, the right data, and the right insights, helping you
          uncover what truly matters and turn information into meaningful business decisions.
        </motion.p>
      </section>

      {/* ---------- THE SURVEY ---------- */}
      <section id="brief" className={`${wrap} py-20 sm:py-28 scroll-mt-24`}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-display text-sm font-semibold text-[#C9A4F0] mb-4">Try it</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
              Take a 30-second survey. Get a research plan.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <ProjectFinder />
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT WE DO: scrolling strip ---------- */}
      <section className="py-20 sm:py-24">
        <Reveal className={`${wrap} mb-10`}>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">What we do</h2>
        </Reveal>
        <div className="py-10 sm:py-14 border-y border-white/15 overflow-hidden">
          <ul className="sr-only">
            {offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="sd-marquee flex w-max" style={{ animationDuration: '60s' }} aria-hidden="true">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {offerings.map((item, i) => (
                  <span
                    key={item}
                    className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight whitespace-nowrap px-6 sm:px-10 ${
                      i % 2 === 0 ? 'text-white' : 'sd-outline'
                    }`}
                  >
                    {item}
                    <span className="text-[#E69B57] pl-12 sm:pl-20">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PANEL: callback to the dots ---------- */}
      <section className={`${wrap} py-24 sm:py-36 text-center`}>
        <Reveal>
          <div className="flex justify-center gap-2 mb-10" aria-hidden="true">
            {['#A56DE0', '#C381CF', '#DC94A8', '#EBA372', '#F0A45E'].map((c, i) => (
              <motion.span
                key={c}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: c }}
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[1]">
            Dive In &amp; <span className="text-brand-gradient">Be Heard</span>
          </h2>
          <div className="mt-10">
            <Link
              to="/join-us"
              className="font-display inline-flex items-center justify-center gap-3 h-14 px-10 bg-white text-[#140A22] font-bold hover:bg-[#E69B57] transition-colors"
            >
              Join the panel <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};
