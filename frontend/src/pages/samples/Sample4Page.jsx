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
   SAMPLE 4: Sample 3 in a light theme.
   The black and white video still runs behind the whole page, under a
   soft white-lavender wash. The logo sits on the background it was
   designed for. Everything in [square brackets] is for the client.
   ===================================================================== */

const services = [
  { title: 'Survey design', to: '/services/survey-designing' },
  { title: 'Quantitative research', to: '/services/quantitative-research' },
  { title: 'CATI', to: '/services/cati-excellence' },
  { title: 'Qualitative research', to: '/services/qualitative-deep-dives' },
];

const ink = 'text-[#1E1230]';
const muted = 'text-[#1E1230]/70';
const wrap = 'max-w-[1400px] mx-auto px-5 sm:px-8';

const btnPrimary =
  'font-display inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#4B1E73] text-white font-bold hover:bg-[#3A165A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57] focus-visible:ring-offset-2';
const btnGhost =
  'font-display inline-flex items-center justify-center h-14 px-8 border border-[#4B1E73]/60 text-[#4B1E73] font-bold hover:bg-[#4B1E73] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57] focus-visible:ring-offset-2';

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

export const Sample4Page = () => {
  const reduce = useReducedMotion();
  const enter = (d) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } };

  return (
    <div className={`home-root relative isolate min-h-screen bg-[#F7F3FC] ${ink} antialiased selection:bg-[#4B1E73] selection:text-white`}>
      <BackgroundVideo light start={0.7} end={0.88} />
      <HomeHeader light />

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 text-center">
        <h1 className="sr-only">Real people. Real answers.</h1>
        <ParticleHeadline light className="max-w-6xl h-[88vw] sm:h-[44vw] max-h-[380px] min-h-[190px]" />
        <motion.p {...enter(1.2)} className="font-display mt-4 text-sm sm:text-base font-semibold text-[#6B2FA8]">
          Every dot is a voice. We make sure each one is real.
        </motion.p>
        <motion.p {...enter(1.4)} className={`mt-6 text-lg sm:text-xl ${muted} max-w-xl leading-relaxed`}>
          Market research and data collection across [cities], in [languages], checked response by response.
        </motion.p>
        <motion.div {...enter(1.6)} className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href="#brief" className={btnPrimary}>
            Build your research brief <ArrowRight size={18} />
          </a>
          <Link to="/join-us" className={btnGhost}>Join our panel</Link>
        </motion.div>
      </section>

      {/* ---------- THE SURVEY ---------- */}
      <section id="brief" className={`${wrap} py-20 sm:py-28 scroll-mt-24`}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="font-display text-sm font-semibold text-[#6B2FA8] mb-4">Try it</p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
              Take a 30-second survey. Get a research plan.
            </h2>
            <p className={`mt-6 text-lg ${muted} leading-relaxed`}>
              Answer three questions the way a respondent would. We will turn your answers into a starting brief.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="shadow-[0_30px_80px_-30px_rgba(75,30,115,0.35)] rounded-[28px]">
              <ProjectFinder light />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className={`${wrap} py-20 sm:py-24`}>
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">What we do</h2>
          <p className={`${muted} max-w-md`}>Four methods, often combined in one project.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#4B1E73]/15 border border-[#4B1E73]/15">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="bg-white/80">
              <Link to={s.to} className="group relative flex flex-col justify-between h-44 p-7 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[#4B1E73] to-[#D9822B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-display text-sm font-bold text-[#B55F1C] group-hover:text-white tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative flex items-end justify-between gap-4">
                  <span className="font-display text-2xl font-bold group-hover:text-white">{s.title}</span>
                  <ArrowUpRight size={24} className="shrink-0 text-[#4B1E73]/50 group-hover:text-white" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PANEL ---------- */}
      <section className={`${wrap} py-24 sm:py-36 text-center`}>
        <Reveal>
          <div className="flex justify-center gap-2 mb-10" aria-hidden="true">
            {['#4B1E73', '#7A2F98', '#B04D82', '#D27449', '#D9822B'].map((c, i) => (
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
            Be one of <span className="text-brand-gradient-deep">the dots.</span>
          </h2>
          <p className={`mt-8 text-lg sm:text-xl ${muted} max-w-xl mx-auto leading-relaxed`}>
            Join [50,000+] people across India who shape what brands build next. Short surveys, [rewards], and your
            details always stay private.
          </p>
          <div className="mt-10">
            <Link to="/join-us" className={btnPrimary}>
              Join the panel <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};
