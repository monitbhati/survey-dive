import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import CountUp from 'react-countup';
import {
  TrendingUp, ShieldCheck, Award, Target,
  ClipboardList, Phone, Users, ChevronDown, Check,
} from 'lucide-react';
import { mockData } from '../mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const iconMap = { TrendingUp, ShieldCheck, Award, Target, ClipboardList, Phone, Users };

// Headings use Sora, body stays on Inter (both loaded in public/index.html)
const display = { fontFamily: "'Sora', 'Inter', sans-serif" };

const MAX_DEPTH = 240;

/* ------------------------------------------------------------------ */
/* Depth gauge: thin scale on the left edge that descends with scroll  */
/* ------------------------------------------------------------------ */
const DepthGauge = () => {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const depth = useTransform(scrollYProgress, (v) => `${Math.round(v * MAX_DEPTH)} m`);

  return (
    <div
      aria-hidden="true"
      className="hidden min-[1440px]:block fixed left-8 top-1/2 -translate-y-1/2 h-[56vh] w-10 z-40 pointer-events-none"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#9B8AB0]/50" />
      {[0, 0.25, 0.5, 0.75, 1].map((t) => (
        <div
          key={t}
          className="absolute left-0 w-2 h-px bg-[#9B8AB0]/70"
          style={{ top: `${t * 100}%` }}
        />
      ))}
      <motion.div className="absolute left-0 -translate-y-1/2 flex items-center gap-2" style={{ top }}>
        <span className="block w-3 h-3 -ml-[5.5px] rounded-full bg-[#E69B57] ring-4 ring-[#E69B57]/20" />
        <motion.span className="text-[11px] font-medium tabular-nums text-[#9B8AB0] whitespace-nowrap">
          {depth}
        </motion.span>
      </motion.div>
    </div>
  );
};

/* Small depth marker used above each section heading */
const DepthMark = ({ m, dark = false }) => (
  <div className={`flex items-center gap-3 mb-5 text-sm font-medium ${dark ? 'text-[#E69B57]' : 'text-[#B06A2E]'}`}>
    <span className={`h-px w-8 ${dark ? 'bg-[#E69B57]' : 'bg-[#B06A2E]'}`} />
    {m} m below the surface
  </div>
);

/* ------------------------------------------------------------------ */
/* Hero dashboard: chart, logo, chart, logo                            */
/* ------------------------------------------------------------------ */
const preferenceData = [
  { label: 'Brand A', before: 42, after: 35 },
  { label: 'Brand B', before: 31, after: 38 },
  { label: 'Brand C', before: 18, after: 20 },
  { label: 'Others', before: 9, after: 7 },
];

const trendPoints = [12, 18, 16, 27, 31, 29, 42, 48, 46, 58, 66, 71];

const ComparisonSlide = ({ active }) => (
  <div className="h-full flex flex-col">
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <p className="text-base font-semibold text-[#1C1530]" style={display}>Brand preference by quarter</p>
        <p className="text-sm text-[#6B5F80]">Share of respondents, sample data</p>
      </div>
      <div className="flex gap-4 text-xs text-[#6B5F80] shrink-0">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#C9B8E0]" />Q1</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#4B1E73]" />Q2</span>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center gap-4">
      {preferenceData.map((row, i) => (
        <div key={row.label} className="grid grid-cols-[72px_1fr_40px] items-center gap-3">
          <span className="text-sm text-[#3D3352]">{row.label}</span>
          <div className="space-y-1">
            <motion.div
              className="h-2.5 rounded-full bg-[#C9B8E0]"
              initial={{ width: 0 }}
              animate={{ width: active ? `${row.before * 2}%` : 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
            />
            <motion.div
              className="h-2.5 rounded-full bg-[#4B1E73]"
              initial={{ width: 0 }}
              animate={{ width: active ? `${row.after * 2}%` : 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
            />
          </div>
          <span className="text-sm font-semibold tabular-nums text-[#1C1530] text-right">{row.after}%</span>
        </div>
      ))}
    </div>
  </div>
);

const TrendSlide = ({ active }) => {
  const w = 520;
  const h = 180;
  const max = 80;
  const step = w / (trendPoints.length - 1);
  const coords = trendPoints.map((v, i) => [i * step, h - (v / max) * h]);
  const line = coords.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  const [lx, ly] = coords[coords.length - 1];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-base font-semibold text-[#1C1530]" style={display}>Completed interviews, live fieldwork</p>
          <p className="text-sm text-[#6B5F80]">Thousands per week, sample data</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-[#1F7A4D] bg-[#E6F4EC] px-2.5 py-1 rounded-full shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A4D]" />
          In field
        </span>
      </div>
      <div className="flex-1 flex items-center">
        <svg viewBox={`0 0 ${w} ${h + 10}`} className="w-full h-auto" role="img" aria-label="Line chart of completed interviews rising over twelve weeks">
          <defs>
            <linearGradient id="sd-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4B1E73" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#4B1E73" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((t) => (
            <line key={t} x1="0" x2={w} y1={h * t} y2={h * t} stroke="#EAE3F2" strokeWidth="1" />
          ))}
          <motion.path
            d={area}
            fill="url(#sd-area)"
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.path
            d={line}
            fill="none"
            stroke="#4B1E73"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <motion.circle
            cx={lx}
            cy={ly}
            r="5"
            fill="#E69B57"
            initial={{ scale: 0 }}
            animate={{ scale: active ? 1 : 0 }}
            transition={{ delay: 1.1 }}
          />
        </svg>
      </div>
    </div>
  );
};

const LogoSlide = ({ caption }) => (
  <div className="h-full flex flex-col items-center justify-center text-center">
    <img src="/surveydive-logo.png" alt="Survey Dive" className="h-28 sm:h-32 w-auto object-contain mb-5" />
    <p className="text-sm text-[#6B5F80] max-w-xs">{caption}</p>
  </div>
);

const slides = [
  { id: 'compare', label: 'Brand preference chart' },
  { id: 'logo-1', label: 'Survey Dive logo' },
  { id: 'trend', label: 'Live fieldwork chart' },
  { id: 'logo-2', label: 'Survey Dive logo' },
];

const HeroDashboard = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [paused, reduceMotion]);

  const renderSlide = (id) => {
    switch (id) {
      case 'compare': return <ComparisonSlide active />;
      case 'trend': return <TrendSlide active />;
      case 'logo-1': return <LogoSlide caption={mockData.company.tagline} />;
      default: return <LogoSlide caption={`${mockData.stats.projectsCompleted}+ studies delivered across ${mockData.stats.industriesServed}+ industries`} />;
    }
  };

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="rounded-[28px] bg-white border border-[#E4DAF0] p-6 sm:p-8 shadow-[0_30px_60px_-30px_rgba(75,30,115,0.35)]">
        <div className="relative h-[300px] sm:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              className="absolute inset-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {renderSlide(slides[index].id)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.label}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B1E73] focus-visible:ring-offset-2 ${
              i === index ? 'w-8 bg-[#4B1E73]' : 'w-2 bg-[#CFC2E0] hover:bg-[#A895C4]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Stats as one sentence instead of four boxes                         */
/* ------------------------------------------------------------------ */
const Num = ({ value, suffix }) => {
  const reduceMotion = useReducedMotion();
  return (
    <span className="text-[#4B1E73] tabular-nums">
      {reduceMotion ? (
        `${value}${suffix}`
      ) : (
        <CountUp end={parseInt(value, 10)} duration={2} suffix={suffix} enableScrollSpy scrollSpyOnce />
      )}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/* Process steps                                                        */
/* ------------------------------------------------------------------ */
const processSteps = [
  { title: 'Design', text: 'We shape the questionnaire around the decision you need to make, then pilot it before launch.' },
  { title: 'Field', text: 'Surveys, phone interviews, and discussions run with live quality checks on every response.' },
  { title: 'Analyse', text: 'Responses are cleaned, weighted, and coded so the patterns hold up to scrutiny.' },
  { title: 'Deliver', text: 'You get a clear report, the raw data, and a walkthrough with the researchers who ran it.' },
];

/* ------------------------------------------------------------------ */
/* FAQ (dark)                                                          */
/* ------------------------------------------------------------------ */
const FAQList = () => {
  const [openId, setOpenId] = useState(mockData.faqs[0]?.id ?? null);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {mockData.faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              className="w-full py-5 flex items-center justify-between gap-6 text-left text-white font-medium hover:text-[#F2C49B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57] rounded-sm"
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[#E69B57] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[#C8BBDA]">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
const btnPrimary =
  'inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#4B1E73] text-white font-semibold text-[15px] hover:bg-[#3A165A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B1E73] focus-visible:ring-offset-2';
const btnSecondary =
  'inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#CFC2E0] bg-white text-[#3D3352] font-semibold text-[15px] hover:border-[#4B1E73] hover:text-[#4B1E73] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B1E73] focus-visible:ring-offset-2';

export const HomePage = () => {
  const [lead, ...rest] = mockData.services;
  const { stats } = mockData;

  return (
    <div className="min-h-screen bg-white text-[#1C1530] antialiased selection:bg-[#4B1E73] selection:text-white">
      <Header />
      <DepthGauge />

      {/* ---------- SURFACE: hero ---------- */}
      <section className="relative pt-36 sm:pt-44 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-[#F7F3FB] overflow-hidden">
        {/* soft light from above, like sunlight on water */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#E69B57]/10 blur-3xl"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1
              className="text-[42px] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-[#1C1530] mb-6"
              style={display}
            >
              {mockData.company.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-[#5A4F6E] leading-relaxed max-w-2xl mx-auto mb-10">
              {mockData.company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className={btnPrimary}>Plan a study with us</Link>
              <Link to="/services" className={btnSecondary}>See our methods</Link>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      {/* ---------- 20 m: track record ---------- */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3FB]">
        <div className="max-w-5xl mx-auto">
          <DepthMark m={20} />
          <p className="text-2xl sm:text-4xl lg:text-[44px] leading-[1.25] font-medium tracking-[-0.02em] text-[#2A2140]" style={display}>
            <Num value={stats.projectsCompleted} suffix="+" /> studies delivered across{' '}
            <Num value={stats.industriesServed} suffix="+" /> industries.{' '}
            <Num value={stats.clientSatisfaction} suffix="%" /> of our clients come back for their next project, and
            we have been in the field for <Num value={stats.yearsExperience} suffix="+" /> years.
          </p>
        </div>
      </section>

      {/* ---------- 60 m: services bento ---------- */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#EEE6F7]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <DepthMark m={60} />
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.1] text-[#1C1530]" style={display}>
              Three ways we get to the answer
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {lead && (() => {
              const LeadIcon = iconMap[lead.icon] || ClipboardList;
              return (
                <div className="lg:col-span-2 lg:row-span-2 rounded-[28px] bg-[#4B1E73] text-white p-8 sm:p-10 flex flex-col">
                  <LeadIcon size={28} className="text-[#E69B57] mb-8" strokeWidth={1.75} />
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-4" style={display}>{lead.title}</h3>
                  <p className="text-[#D9CDEA] leading-relaxed max-w-xl mb-10">{lead.description}</p>
                  <ul className="mt-auto grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {lead.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px] text-white/90">
                        <Check size={16} className="text-[#E69B57] mt-1 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {rest.map((service) => {
              const Icon = iconMap[service.icon] || ClipboardList;
              return (
                <div key={service.id} className="rounded-2xl bg-white border border-[#E1D6EE] p-7 flex flex-col">
                  <Icon size={22} className="text-[#4B1E73] mb-6" strokeWidth={1.75} />
                  <h3 className="text-xl font-semibold tracking-[-0.015em] mb-3" style={display}>{service.title}</h3>
                  <p className="text-[15px] text-[#5A4F6E] leading-relaxed">{service.description}</p>
                </div>
              );
            })}

            <div className="lg:col-span-3 rounded-2xl border border-dashed border-[#B9A6D3] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <p className="text-lg text-[#2A2140]">
                Not sure which method fits your question? A researcher can help you choose.
              </p>
              <Link to="/contact" className={`${btnPrimary} shrink-0`}>Talk to a researcher</Link>
            </div>
          </div>
        </div>
      </section>

      {/* transition from light water into deep water */}
      <div aria-hidden="true" className="h-40 bg-gradient-to-b from-[#EEE6F7] to-[#3A1766]" />

      {/* ---------- 110 m: process ---------- */}
      <section className="pb-28 pt-4 px-4 sm:px-6 lg:px-8 bg-[#3A1766] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <DepthMark m={110} dark />
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]" style={display}>
              From first question to final insight
            </h2>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t border-white/20 pt-6 lg:mt-[var(--offset)]"
                style={{ '--offset': `${i * 40}px` }}
              >
                <div>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E69B57] text-[#2A0F4C] font-semibold text-sm mb-5 tabular-nums">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold mb-3" style={display}>{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#D2C4E6]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 160 m: why us ---------- */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#2A0F4C] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <DepthMark m={160} dark />
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]" style={display}>
              Why teams trust our numbers
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {mockData.whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || Target;
              return (
                <div key={item.id}>
                  <Icon size={22} className="text-[#E69B57] mb-4" strokeWidth={1.75} />
                  <h3 className="text-lg font-semibold mb-2" style={display}>{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#C8BBDA]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 210 m: FAQ ---------- */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1D0A36] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <DepthMark m={210} dark />
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] leading-[1.15] mb-5" style={display}>
              Questions clients ask us
            </h2>
            <p className="text-[#C8BBDA] leading-relaxed mb-8">
              Anything else you want to know before starting a project? Ask us directly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57]"
            >
              Ask a question
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FAQList />
          </div>
        </div>
      </section>

      {/* ---------- 240 m: closing CTA ---------- */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#140626] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] mb-6" style={display}>
            Ready to go deeper?
          </h2>
          <p className="text-lg text-[#C8BBDA] leading-relaxed max-w-xl mx-auto mb-10">
            Tell us what you need to find out. We will come back with a method, a timeline, and a quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#E69B57] text-[#1C0A30] font-semibold text-[15px] hover:bg-[#F0AE72] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57] focus-visible:ring-offset-2 focus-visible:ring-offset-[#140626]"
          >
            Plan a study with us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};