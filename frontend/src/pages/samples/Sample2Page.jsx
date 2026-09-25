import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BackgroundVideo } from '../../components/home/BackgroundVideo';
import { HomeHeader } from '../../components/home/HomeHeader';
import { Footer } from '../../components/Footer';
import '../../components/home/home.css';

/* =====================================================================
   SAMPLE 2: shorter and editorial. No cards: thin lines, numbered rows,
   big type, and a scrolling industries strip over the video.
   Everything in [square brackets] is for the client to confirm.
   ===================================================================== */

const stats = [
  { value: '[250+]', label: 'Studies delivered' },
  { value: '[40+]', label: 'Cities covered' },
  { value: '[12]', label: 'Languages' },
  { value: '[50,000+]', label: 'Panel members' },
];

const services = [
  { title: 'Survey design', text: 'Questionnaires built around the decision you need to make.', to: '/services/survey-designing' },
  { title: 'Quantitative research', text: 'Studies at scale, with samples that hold up.', to: '/services/quantitative-research' },
  { title: 'CATI', text: 'Telephone interviews with live supervision.', to: '/services/cati-excellence' },
  { title: 'Qualitative research', text: 'Focus groups and interviews that find the why.', to: '/services/qualitative-deep-dives' },
];

const reasons = [
  { title: 'Real people', text: 'Every respondent recruited and verified. No bots, no duplicates.' },
  { title: 'Checked data', text: 'Each response passes quality checks before it reaches you.' },
  { title: 'Local reach', text: 'Fieldwork across [cities] in [languages].' },
];

const industries = ['FMCG', 'Healthcare', 'Automotive', 'Finance', 'Technology', 'Retail', 'Media', 'Public sector'];

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

const Label = ({ children }) => (
  <p className="font-display text-sm font-semibold text-[#C9A4F0] mb-4">{children}</p>
);

export const Sample2Page = () => {
  const reduce = useReducedMotion();
  const enter = (d) =>
    reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } };

  return (
    <div className="home-root relative isolate min-h-screen bg-[#120822] text-white antialiased selection:bg-[#E69B57] selection:text-[#140A22]">
      <BackgroundVideo start={0.35} end={0.78} />
      <HomeHeader />

      {/* ---------- HERO: left aligned ---------- */}
      <section className={`${wrap} min-h-screen flex items-end pb-20 sm:pb-28 pt-32`}>
        <div className="max-w-6xl">
          <h1 className="font-display font-extrabold tracking-[-0.03em] leading-[0.98] text-[52px] sm:text-8xl lg:text-[120px]">
            <motion.span {...enter(0.2)} className="block">Real people.</motion.span>
            <motion.span {...enter(0.45)} className="block text-brand-gradient pb-2">Real answers.</motion.span>
          </h1>
          <motion.div {...enter(0.8)} className="mt-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
            <p className="text-lg sm:text-xl text-white/80 max-w-md leading-relaxed">
              Market research and data collection you can take into any boardroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 whitespace-nowrap">
              <Link
                to="/contact"
                className="font-display inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#E69B57] text-[#140A22] font-bold hover:bg-[#F2AE70] transition-colors"
              >
                Start a project <ArrowRight size={18} />
              </Link>
              <Link
                to="/join-us"
                className="font-display inline-flex items-center justify-center h-14 px-8 border border-white/60 font-bold hover:bg-white hover:text-[#140A22] transition-colors"
              >
                Join our panel
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- NUMBERS ---------- */}
      <section className={wrap}>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/20">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`py-10 px-2 sm:px-6 ${i % 2 === 0 ? 'border-r' : 'lg:border-r'} ${i < 2 ? 'border-b lg:border-b-0' : ''} ${
                i === 3 ? 'lg:border-r-0' : ''
              } border-white/20`}
            >
              <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{s.value}</p>
              <p className="mt-2 text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES: numbered rows ---------- */}
      <section className={`${wrap} py-24 sm:py-32`}>
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Label>What we do</Label>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.02em]">Four ways to the answer.</h2>
          </div>
          <Link to="/services" className="font-display inline-flex items-center gap-2 font-semibold text-white/80 hover:text-[#E69B57]">
            All services <ArrowRight size={18} />
          </Link>
        </Reveal>

        <div className="border-t border-white/20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Link
                to={s.to}
                className="group relative grid grid-cols-[48px_1fr_auto] sm:grid-cols-[80px_1fr_1fr_auto] items-center gap-4 sm:gap-8 py-8 sm:py-10 border-b border-white/20 transition-colors hover:bg-white/[0.04]"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E69B57] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <span className="font-display pl-3 sm:pl-5 text-sm font-bold text-[#E69B57] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="hidden sm:block text-white/65 max-w-sm">{s.text}</p>
                <ArrowUpRight size={28} className="mr-2 text-white/40 group-hover:text-[#E69B57] transition-colors" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WHY US: three columns with gradient lines ---------- */}
      <section className={`${wrap} pb-24 sm:pb-32`}>
        <Reveal>
          <Label>Why Survey Dive</Label>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] max-w-3xl">
            Data you can defend.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <span className="block h-[2px] w-full bg-gradient-to-r from-[#B07BEA] to-[#F0A45E]" />
              <h3 className="font-display mt-6 text-2xl font-bold">{r.title}</h3>
              <p className="mt-3 text-lg text-white/70 leading-relaxed">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- INDUSTRIES: scrolling strip ---------- */}
      <section className="py-10 sm:py-14 border-y border-white/15 overflow-hidden" aria-label="Industries we serve">
        <div className="sd-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {industries.map((ind, i) => (
                <span
                  key={ind}
                  className={`font-display text-5xl sm:text-7xl font-extrabold tracking-tight whitespace-nowrap px-6 sm:px-10 ${
                    i % 2 === 0 ? 'text-white' : 'sd-outline'
                  }`}
                >
                  {ind}
                  <span className="text-[#E69B57] pl-12 sm:pl-20">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SPLIT CALL TO ACTION ---------- */}
      <section className={`${wrap} py-24 sm:py-32`}>
        <div className="grid md:grid-cols-2 border border-white/20">
          <Link
            to="/contact"
            className="group p-10 sm:p-14 border-b md:border-b-0 md:border-r border-white/20 transition-colors hover:bg-[#E69B57] hover:text-[#140A22]"
          >
            <p className="font-display text-sm font-semibold text-[#C9A4F0] group-hover:text-[#140A22]">For businesses</p>
            <h2 className="font-display mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">Start a project</h2>
            <p className="mt-4 text-lg opacity-75 max-w-sm">Tell us what you need to find out. We reply within [one working day].</p>
            <ArrowRight size={32} className="mt-10 transition-transform group-hover:translate-x-2" />
          </Link>
          <Link to="/join-us" className="group p-10 sm:p-14 transition-colors hover:bg-white hover:text-[#140A22]">
            <p className="font-display text-sm font-semibold text-[#C9A4F0] group-hover:text-[#4B1E73]">For everyone</p>
            <h2 className="font-display mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">Join our panel</h2>
            <p className="mt-4 text-lg opacity-75 max-w-sm">Share your opinion in short surveys and earn [rewards].</p>
            <ArrowRight size={32} className="mt-10 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
