import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
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
   3. The panel section calls back to the dots: "Be one of the dots."
   Everything in [square brackets] is for the client to confirm.
   ===================================================================== */

const services = [
  { title: 'Survey design', to: '/services/survey-designing' },
  { title: 'Quantitative research', to: '/services/quantitative-research' },
  { title: 'CATI', to: '/services/cati-excellence' },
  { title: 'Qualitative research', to: '/services/qualitative-deep-dives' },
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
        <motion.p {...enter(1.2)} className="font-display mt-4 text-sm sm:text-base font-semibold text-[#C9A4F0]">
          Every dot is a voice. We make sure each one is real.
        </motion.p>
        <motion.p {...enter(1.4)} className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
          Market research and data collection across [cities], in [languages], checked response by response.
        </motion.p>
        <motion.div {...enter(1.6)} className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="#brief"
            className="font-display inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#E69B57] text-[#140A22] font-bold hover:bg-[#F2AE70] transition-colors"
          >
            Build your research brief <ArrowRight size={18} />
          </a>
          <Link
            to="/join-us"
            className="font-display inline-flex items-center justify-center h-14 px-8 border border-white/60 font-bold hover:bg-white hover:text-[#140A22] transition-colors"
          >
            Join our panel
          </Link>
        </motion.div>
      </section>

      {/* ---------- THE SURVEY ---------- */}
      <section id="brief" className={`${wrap} py-20 sm:py-28 scroll-mt-24`}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-display text-sm font-semibold text-[#C9A4F0] mb-4">Try it</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
              Take a 30-second survey. Get a research plan.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Answer three questions the way a respondent would. We will turn your answers into a starting brief.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <ProjectFinder />
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICES: compact ---------- */}
      <section className={`${wrap} py-20 sm:py-24`}>
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">What we do</h2>
          <p className="text-white/65 max-w-md">Four methods, often combined in one project.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="bg-[#120822]/60">
              <Link to={s.to} className="group relative flex flex-col justify-between h-44 p-7 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[#A56DE0] to-[#F0A45E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-display text-sm font-bold text-[#E69B57] group-hover:text-[#140A22] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative flex items-end justify-between gap-4">
                  <span className="font-display text-2xl font-bold group-hover:text-[#140A22]">{s.title}</span>
                  <ArrowUpRight size={24} className="shrink-0 text-white/50 group-hover:text-[#140A22]" />
                </span>
              </Link>
            </Reveal>
          ))}
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
            Be one of <span className="text-brand-gradient">the dots.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-white/75 max-w-xl mx-auto leading-relaxed">
            Join [50,000+] people across India who shape what brands build next. Short surveys, [rewards], and your
            details always stay private.
          </p>
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
