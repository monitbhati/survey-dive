import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BackgroundVideo } from '../../components/home/BackgroundVideo';
import { HomeHeader } from '../../components/home/HomeHeader';
import { Footer } from '../../components/Footer';
import { DotBullet, DotDivider, DotTrail, DotChart } from '../../components/home/DotMotif';
import { ParticleHeadline } from './ParticleHeadline';
import { ProjectFinder } from './ProjectFinder';
import '../../components/home/home.css';

/* =====================================================================
   SAMPLE 5: Sample 3 with the dot motif used throughout, and an
   editorial serif for headings, so it reads more like a research
   publication than a tech startup. Dots from the logo appear as
   bullets, dividers, number trails, and a chart built from dots.
   Everything in [square brackets] is for the client to confirm.
   ===================================================================== */

const stats = [
  { value: '[250+]', label: 'Studies delivered' },
  { value: '[40+]', label: 'Cities covered' },
  { value: '[12]', label: 'Languages' },
  { value: '[50,000+]', label: 'Panel members' },
];

// Sample data for the dot chart. One dot = 2% of respondents.
const finding = [
  ['Better price', 38],
  ['Better quality', 27],
  ['A friend suggested it', 21],
  ['Saw an advert', 14],
];

const services = [
  { title: 'Survey design', text: 'Questionnaires built around the decision you need to make.', to: '/services/survey-designing' },
  { title: 'Quantitative research', text: 'Studies at scale, with samples that hold up.', to: '/services/quantitative-research' },
  { title: 'CATI', text: 'Telephone interviews with live supervision.', to: '/services/cati-excellence' },
  { title: 'Qualitative research', text: 'Focus groups and interviews that find the why.', to: '/services/qualitative-deep-dives' },
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

const Kicker = ({ children }) => (
  <p className="font-display flex items-center gap-3 text-sm font-semibold text-[#C9A4F0] mb-5">
    <DotBullet /> {children}
  </p>
);

const Heading = ({ children, className = '' }) => (
  <h2 className={`font-serif-display text-4xl sm:text-6xl font-medium tracking-[-0.02em] leading-[1.05] ${className}`}>{children}</h2>
);

export const Sample5Page = () => {
  const reduce = useReducedMotion();
  const enter = (d) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } };

  return (
    <div className="home-root relative isolate min-h-screen bg-[#120822] text-white antialiased selection:bg-[#E69B57] selection:text-[#140A22]">
      <BackgroundVideo start={0.55} end={0.84} />
      <HomeHeader />

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 text-center">
        <h1 className="sr-only">Real people. Real answers.</h1>
        <ParticleHeadline className="max-w-6xl h-[88vw] sm:h-[44vw] max-h-[380px] min-h-[190px]" />
        <motion.p {...enter(1.2)} className="font-serif-display mt-4 text-lg sm:text-xl italic text-[#D9C2F2]">
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

      <div className={wrap}><DotDivider /></div>

      {/* ---------- NUMBERS WITH DOT TRAILS ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal className="max-w-3xl mb-14">
          <Kicker>At a glance</Kicker>
          <Heading>Numbers you can stand behind.</Heading>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex items-center gap-2">
                <p className="font-serif-display text-5xl sm:text-6xl font-medium tracking-tight">{s.value}</p>
                <DotTrail />
              </div>
              <p className="mt-3 text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- THE SURVEY ---------- */}
      <section id="brief" className={`${wrap} py-20 sm:py-28 scroll-mt-24`}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
            <Kicker>Try it</Kicker>
            <Heading className="!text-4xl sm:!text-5xl">Take a 30-second survey. Get a research plan.</Heading>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Answer three questions the way a respondent would. We will turn your answers into a starting brief.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <ProjectFinder />
          </Reveal>
        </div>
      </section>

      {/* ---------- A FINDING, DRAWN IN DOTS ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <Kicker>How we report</Kicker>
            <Heading>Findings your whole team can read.</Heading>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We turn thousands of responses into answers anyone in the room understands at a glance. Here, every dot
              stands for real respondents.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <figure className="border border-white/15 p-7 sm:p-9">
              <figcaption className="flex items-start justify-between gap-4 mb-8">
                <span className="font-serif-display text-2xl sm:text-3xl font-medium leading-snug">Why shoppers switched brands</span>
                <span className="shrink-0 text-xs text-white/50 mt-2">Sample data</span>
              </figcaption>
              <DotChart rows={finding} />
              <p className="mt-8 text-sm text-white/50">One dot = 2% of respondents. n = [1,200], [cities], [month year].</p>
            </figure>
          </Reveal>
        </div>
      </section>

      <div className={wrap}><DotDivider /></div>

      {/* ---------- SERVICES WITH DOT BULLETS ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Kicker>What we do</Kicker>
            <Heading>Four ways to the answer.</Heading>
          </div>
          <Link to="/services" className="font-display inline-flex items-center gap-2 font-semibold text-white/80 hover:text-[#E69B57]">
            All services <ArrowRight size={18} />
          </Link>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-14">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Link to={s.to} className="group flex items-start gap-5 py-8 border-b border-white/15">
                <DotBullet className="mt-3" />
                <div className="flex-1">
                  <h3 className="font-serif-display text-3xl font-medium group-hover:text-[#F2B27A] transition-colors">{s.title}</h3>
                  <p className="mt-2 text-white/65">{s.text}</p>
                </div>
                <ArrowUpRight size={24} className="mt-2 shrink-0 text-white/40 group-hover:text-[#E69B57] transition-colors" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PANEL ---------- */}
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
          <h2 className="font-serif-display text-5xl sm:text-7xl lg:text-8xl font-medium tracking-[-0.02em] leading-[1]">
            Be one of <span className="text-brand-gradient italic">the dots.</span>
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
