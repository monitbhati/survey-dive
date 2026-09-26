import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, SectionHeading, GradientRule, CTABand } from '../components/site/ui';

/* Everything in [square brackets] is for the client to confirm or replace. */

const principles = [
  { title: 'Real people', text: 'Every respondent is recruited, profiled, and verified. We would rather deliver a smaller, honest sample than a large, doubtful one.' },
  { title: 'Rigorous Quality', text: 'Rigorous quality checks are in place to ensure that no response reaches you without first passing our stringent quality standards.' },
  { title: 'On Time. Every Time.', text: 'Delivering within agreed timelines, keeping your research projects moving without unnecessary delays.' },
];

// from = where the count-up starts
const stats = [
  { from: 2000, to: 2025, suffix: '', label: 'Founded' },
  { from: 0, to: 700, suffix: '+', label: 'Studies delivered' },
  { from: 0, to: 40, suffix: '+', label: 'Countries covered' },
  { from: 0, to: 96, suffix: '%', label: 'Client Retention' },
];

const panelSteps = ['Recruit', 'Profile', 'Verify', 'Engage', 'Quality Check', 'Deliver'];
const stepColors = ['#A56DE0', '#B477DA', '#C381CF', '#DC94A8', '#EBA372', '#F0A45E'];

const coverage = [
  { region: 'North America', share: 37.3 },
  { region: 'Europe', share: 22.4 },
  { region: 'Asia Pacific', share: 16.3 },
  { region: 'Latin America', share: 13.5 },
  { region: 'Middle East & Africa', share: 10.4 },
];

// Counts up from `from` to `to` the first time it scrolls into view
const CountUp = ({ from, to, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : from);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(from, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, from, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

const PanelProcess = () => {
  const reduce = useReducedMotion();
  const line = (axis) =>
    reduce
      ? {}
      : {
          initial: { [axis]: 0 },
          whileInView: { [axis]: 1 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className={`${wrap} py-24 sm:py-32`}>
      <SectionHeading title="How We Build Our Panel" />
      <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-6">
        {/* connecting line: across on desktop, down the side on phones */}
        <motion.span
          {...line('scaleX')}
          className="hidden lg:block absolute left-[8.33%] right-[8.33%] top-[11px] h-[2px] origin-left bg-gradient-to-r from-[#A56DE0] to-[#F0A45E]"
          aria-hidden="true"
        />
        <motion.span
          {...line('scaleY')}
          className="lg:hidden absolute left-[11px] top-3 bottom-3 w-[2px] origin-top bg-gradient-to-b from-[#A56DE0] to-[#F0A45E]"
          aria-hidden="true"
        />
        {panelSteps.map((step, i) => (
          <Reveal key={step} as="li" delay={0.15 + i * 0.18} className="relative flex items-center gap-5 lg:flex-col lg:gap-6 lg:text-center">
            <span
              className="relative z-10 w-6 h-6 shrink-0 rounded-full ring-[6px] ring-[#120822]"
              style={{ backgroundColor: stepColors[i] }}
              aria-hidden="true"
            />
            <span>
              <span className="block font-display text-sm font-bold text-[#E69B57] tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="block font-display mt-1 text-xl sm:text-2xl font-bold">{step}</span>
            </span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

const GlobalCoverage = () => {
  const reduce = useReducedMotion();
  return (
    <section className={`${wrap} pb-24 sm:pb-32`}>
      <div className="grid lg:grid-cols-12 gap-12 border-t border-white/10 pt-24 sm:pt-32">
        <div className="lg:col-span-4">
          <SectionHeading title="Global Coverage" className="!mb-0" />
        </div>
        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <GradientRule />
          <div className="flex justify-between pt-6 pb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-white/50">
            <span>Region</span>
            <span>Panel share</span>
          </div>
          <ul>
            {coverage.map((c, i) => (
              <li key={c.region} className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg sm:text-xl font-bold">{c.region}</span>
                  <span className="font-display text-lg sm:text-xl font-bold tabular-nums">{c.share}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#A56DE0] to-[#F0A45E]"
                    initial={reduce ? false : { width: 0 }}
                    whileInView={{ width: `${c.share}%` }}
                    style={reduce ? { width: `${c.share}%` } : undefined}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export const AboutPage = () => (
  <SiteLayout>
    <PageBanner title="Research that starts with" highlight="real people." />

    {/* ---------- STATS ---------- */}
    <section className={`${wrap} py-24 sm:py-32`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/15">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`py-10 px-2 sm:px-6 border-white/15 ${i % 2 === 0 ? 'border-r' : 'lg:border-r'} ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i === 3 ? 'lg:border-r-0' : ''}`}
          >
            <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              <CountUp from={s.from} to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-white/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ---------- WHY DIVE WITH US ---------- */}
    <section className="bg-[#160A28] py-24 sm:py-32">
      <div className={wrap}>
        <SectionHeading title="Why dive with us" />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GradientRule />
              <h3 className="font-display mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- HOW WE BUILD OUR PANEL ---------- */}
    <PanelProcess />

    {/* ---------- GLOBAL COVERAGE ---------- */}
    <GlobalCoverage />

    <CTABand
      title="Let's talk about your next study."
      text="Tell us what you need to find out. We will come back within [one working day]."
    />
  </SiteLayout>
);g