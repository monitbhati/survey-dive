import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  Users, ShieldCheck, MapPin, UserCheck,
  ClipboardList, BarChart3, PhoneCall, MessagesSquare,
  ArrowUpRight, Quote,
} from 'lucide-react';
import { BackgroundVideo } from '../../components/home/BackgroundVideo';
import { HomeHeader } from '../../components/home/HomeHeader';
import { Footer } from '../../components/Footer';
import '../../components/home/home.css';

/* =====================================================================
   CONTENT
   Everything in [square brackets] is a placeholder for the client to
   confirm or replace. Edit the text here; the layout below uses it.
   ===================================================================== */

const hero = {
  lines: ['Designed With Precision', 'Answered By Real People', 'Delivered As Insight'],
  sub: 'Market research and data collection for teams that need answers they can stand behind.',
};

const statement = [
  'Big decisions deserve better than guesswork.',
  'Yet too much research is rushed,',
  'asked of the wrong people,',
  'and never properly checked.',
  'We do it the other way round:',
  'the right questions, the right respondents,',
  'and every response verified before it reaches you.',
];

const stats = [
  { value: '[250+]', label: 'Studies delivered' },
  { value: '[40+]', label: 'Cities covered' },
  { value: '[12]', label: 'Languages' },
  { value: '[50,000+]', label: 'Panel members' },
];

const pillars = [
  {
    icon: Users,
    title: 'Real people',
    text: 'Every respondent is recruited, profiled, and verified. No bots, no duplicates, no professional survey-takers.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified data',
    text: 'Each response passes [multi-stage] quality checks before it enters your dataset.',
  },
  {
    icon: MapPin,
    title: 'Local reach',
    text: 'Fieldwork across [cities and regions] in [languages], by interviewers who understand local context.',
  },
  {
    icon: UserCheck,
    title: 'Senior researchers',
    text: 'Your study is run by experienced researchers, not passed down the line. You speak to the people doing the work.',
  },
];

const services = [
  {
    icon: ClipboardList,
    title: 'Survey design',
    text: 'Questionnaires built around the decision you need to make, tested before they go live.',
    to: '/services/survey-designing',
  },
  {
    icon: BarChart3,
    title: 'Quantitative research',
    text: 'Structured studies at scale, with sampling and weighting that make the numbers hold.',
    to: '/services/quantitative-research',
  },
  {
    icon: PhoneCall,
    title: 'CATI',
    text: 'Telephone interviews by trained callers, with live supervision on every shift.',
    to: '/services/cati-excellence',
  },
  {
    icon: MessagesSquare,
    title: 'Qualitative research',
    text: 'Focus groups and in-depth interviews that uncover the reasons behind the numbers.',
    to: '/services/qualitative-deep-dives',
  },
];

// [Client to confirm which of these Survey Dive offers]
const engagements = [
  { title: 'End-to-end studies', text: 'From questionnaire to final report, we run the whole project.' },
  { title: 'Fieldwork only', text: 'You design the study. We collect clean data, on time.' },
  { title: 'Single services', text: 'Just CATI, just recruitment, or just analysis. Pick what you need.' },
];

const steps = [
  { title: 'Brief', text: 'We start with the decision you are facing, not a template.' },
  { title: 'Design', text: 'Questionnaire, sample plan, and timeline, agreed with you before launch.' },
  { title: 'Field', text: 'Data collection with daily progress updates and live quality checks.' },
  { title: 'Deliver', text: 'Clean data, clear findings, and a walkthrough with the team who ran it.' },
];

// [Client to confirm sectors and client types]
const industries = [
  'FMCG', 'Healthcare and pharma', 'Automotive', 'Banking and finance',
  'Technology and telecom', 'Retail and e-commerce', 'Media', 'Public sector',
];
const clientTypes = [
  'Market research agencies', 'Brand and marketing teams', 'Consulting firms',
  'Government and NGOs', 'Academic researchers',
];

const testimonials = [
  { quote: '[Client testimonial. One or two sentences about the result they got.]', name: '[Name]', role: '[Role, Company]', tag: 'Client' },
  { quote: '[Client testimonial. What working with Survey Dive was like.]', name: '[Name]', role: '[Role, Company]', tag: 'Client' },
  { quote: '[Panel member testimonial. Why they enjoy taking part.]', name: '[First name]', role: 'Panel member', tag: 'Panel' },
];

/* =====================================================================
   BUILDING BLOCKS
   ===================================================================== */

const glass =
  'bg-[#1A0E2A]/55 backdrop-blur-md border border-white/10 rounded-2xl';

const btnPrimary =
  'font-display inline-flex items-center justify-center gap-2 h-12 px-7 bg-[#E69B57] text-[#140A22] text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#F2AE70] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white';
const btnGhost =
  'font-display inline-flex items-center justify-center gap-2 h-12 px-7 border border-white/60 text-white text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-white hover:text-[#140A22] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Label = ({ children }) => (
  <p className="font-display flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C4A6E6] mb-5">
    <span className="w-8 h-[2px] bg-[#E69B57]" />
    {children}
  </p>
);

const Heading = ({ children, className = '' }) => (
  <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-white ${className}`}>
    {children}
  </h2>
);

// A line of the scroll statement: brightest in the middle of the screen
const FadeLine = ({ children }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.55, 0.75, 0.9], [0, 0.25, 1, 1, 0.25, 0]);
  return (
    <motion.p
      ref={ref}
      style={{ opacity: reduce ? 1 : opacity }}
      className="font-display text-[26px] leading-snug sm:text-4xl lg:text-[46px] font-semibold tracking-tight text-white"
    >
      {children}
    </motion.p>
  );
};

const wrap = 'max-w-7xl mx-auto px-5 sm:px-8';

/* =====================================================================
   PAGE
   ===================================================================== */

export const Sample1Page = () => {
  const reduce = useReducedMotion();

  return (
    <div className="home-root relative isolate min-h-screen bg-[#0B0612] text-white antialiased selection:bg-[#E69B57] selection:text-[#140A22]">
      <BackgroundVideo />
      <HomeHeader />

      {/* ---------- 1. HERO ---------- */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center px-5 text-center">
        <div>
          <h1 className="font-display space-y-1 sm:space-y-2">
            {hero.lines.map((line, i) => (
              <motion.span
                key={line}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`block text-[34px] leading-[1.12] sm:text-6xl lg:text-[80px] font-bold tracking-tight ${
                  i === 1 ? 'text-brand-gradient' : 'text-white'
                }`}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed"
          >
            {hero.sub}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/contact" className={btnPrimary}>Start a project</Link>
            <Link to="/join-us" className={btnGhost}>Join our panel</Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- 2. SCROLL STATEMENT ---------- */}
      <section className="max-w-5xl mx-auto px-5 text-center pt-[10vh] pb-[20vh] space-y-3 sm:space-y-5">
        {statement.map((line) => (
          <FadeLine key={line}>{line}</FadeLine>
        ))}
      </section>

      {/* ---------- 3. AT A GLANCE ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-6">
            <Label>Survey Dive at a glance</Label>
            <Heading>A research partner built on reach and rigour.</Heading>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-white/75">
              Survey Dive is a [city]-based market research and data collection company. We design studies,
              reach the right people across [regions], and deliver data you can defend in any meeting.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-white/15">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="pt-8 pb-2 pr-4 lg:border-r lg:last:border-r-0 border-white/15 lg:pl-8 lg:first:pl-0">
              <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 4. WHY SURVEY DIVE ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal className="max-w-2xl mb-14">
          <Label>Why Survey Dive</Label>
          <Heading>Four reasons clients trust our numbers.</Heading>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className={`${glass} h-full p-7 transition-all duration-300 hover:border-[#E69B57]/50 hover:-translate-y-1`}>
                <div className="w-12 h-12 rounded-xl bg-[#E69B57]/15 flex items-center justify-center mb-6">
                  <p.icon size={22} className="text-[#E69B57]" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 5. SERVICES ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <Reveal className="lg:col-span-7">
            <Label>What we do</Label>
            <Heading>Research built around your question.</Heading>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:self-end">
            <p className="text-lg leading-relaxed text-white/75">
              Four methods, used on their own or combined in one project, depending on what you need to find out.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link
                to={s.to}
                className={`${glass} group flex gap-6 p-7 sm:p-8 h-full transition-all duration-300 hover:border-[#E69B57]/50 hover:bg-[#1A0E2A]/70`}
              >
                <s.icon size={30} className="shrink-0 text-[#C4A6E6] mt-1" strokeWidth={1.6} />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <ArrowUpRight size={22} className="shrink-0 text-white/40 group-hover:text-[#E69B57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{s.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/60 mb-6">
            Research the way you need it
          </p>
          <div className="grid md:grid-cols-3 border-y border-white/15 md:divide-x divide-white/15">
            {engagements.map((e) => (
              <div key={e.title} className="py-7 md:px-8 md:first:pl-0 border-b md:border-b-0 border-white/15 last:border-b-0">
                <h4 className="font-display text-lg font-bold text-[#E69B57]">{e.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{e.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- 6. HOW WE WORK ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal className="max-w-2xl mb-16">
          <Label>How we work</Label>
          <Heading>From first question to final insight.</Heading>
        </Reveal>
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-[#E69B57] via-white/30 to-white/10" aria-hidden="true" />
          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#0E0718] border-2 border-[#E69B57] text-[#E69B57] font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 7. WHO WE WORK WITH ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <div className={`${glass} p-8 sm:p-12 lg:p-14 grid lg:grid-cols-12 gap-12`}>
          <Reveal className="lg:col-span-5">
            <Label>Who we work with</Label>
            <Heading className="!text-3xl sm:!text-4xl">Built for teams that decide with data.</Heading>
            <ul className="mt-8 space-y-3">
              {clientTypes.map((c) => (
                <li key={c} className="flex items-center gap-3 text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E69B57]" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/60 mb-6">Industries</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-5 py-3 rounded-full border border-white/20 text-[15px] text-white/85 hover:border-[#E69B57] hover:text-white transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 8. JOIN OUR PANEL ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Label>Join our panel</Label>
            <Heading>Your opinion shapes the products you use.</Heading>
            <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-xl">
              Join [50,000+] people across India who share their views on brands, services, and everyday life.
              Take short surveys, earn rewards, and see your voice make a difference.
            </p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li className="flex gap-3"><span className="text-[#E69B57] font-bold">01</span> Short surveys that fit into your day</li>
              <li className="flex gap-3"><span className="text-[#E69B57] font-bold">02</span> [Rewards] for every completed survey</li>
              <li className="flex gap-3"><span className="text-[#E69B57] font-bold">03</span> Your personal details always stay private</li>
            </ul>
            <div className="mt-10">
              <Link to="/join-us" className={btnPrimary}>Join the panel</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className={`${glass} p-8 sm:p-10`}>
              <Quote size={34} className="text-[#E69B57]" />
              <p className="font-display mt-6 text-2xl sm:text-3xl font-semibold leading-snug">
                [Panel member quote about why they enjoy taking part in Survey Dive surveys.]
              </p>
              <p className="mt-8 text-sm text-white/60">[First name], panel member since [year]</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 9. TESTIMONIALS ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <Reveal className="max-w-2xl mb-14">
          <Label>What people say</Label>
          <Heading>Trusted by teams who can't afford bad data.</Heading>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className={`${glass} h-full p-7 flex flex-col`}>
                <span className="self-start text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-white/10 text-[#C4A6E6]">
                  {t.tag}
                </span>
                <blockquote className="mt-6 flex-1 text-[17px] leading-relaxed text-white/85">“{t.quote}”</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- 10. FINAL CALL TO ACTION ---------- */}
      <section className={`${wrap} py-24 sm:py-36 text-center`}>
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            What do you need
            <br />
            <span className="text-[#E69B57]">to find out?</span>
          </h2>
          <p className="mt-8 text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We will come back within [one working day] with an approach, a timeline, and a quote.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className={btnPrimary}>Start a project</Link>
            <Link to="/services" className={btnGhost}>Explore services</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};
