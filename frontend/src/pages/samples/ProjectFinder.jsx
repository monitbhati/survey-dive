import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, RotateCcw, Check } from 'lucide-react';

/* A three-question survey. The visitor answers like a respondent would,
   and gets a research brief built from their answers. It shows what
   Survey Dive does instead of describing it.
   Keyboard: press A, B, C or D to answer. */

const questions = [
  {
    q: 'What do you need to find out?',
    options: [
      { key: 'brand', label: 'What people think of a product or brand' },
      { key: 'why', label: 'Why people behave the way they do' },
      { key: 'size', label: 'How big a market or audience is' },
      { key: 'staff', label: 'How employees or members feel' },
    ],
  },
  {
    q: 'Who do you need to hear from?',
    options: [
      { key: 'consumers', label: 'Consumers across India' },
      { key: 'b2b', label: 'Business decision-makers' },
      { key: 'niche', label: 'A specific group, like doctors or dealers' },
      { key: 'own', label: 'Our own customers or staff' },
    ],
  },
  {
    q: 'How soon do you need answers?',
    options: [
      { key: 'fast', label: 'Within two weeks' },
      { key: 'month', label: 'Within a month' },
      { key: 'flex', label: 'No fixed deadline' },
    ],
  },
];

// [Client to review: how each answer maps to a recommendation]
const method = {
  brand: 'A quantitative survey measuring awareness, perception, and preference.',
  why: 'Qualitative research: focus groups and in-depth interviews.',
  size: 'A quantitative survey with a large, representative sample.',
  staff: 'An online survey, followed by interviews to explore the key themes.',
};
const fieldwork = {
  consumers: 'Our consumer panel, with CATI to reach people who are rarely online.',
  b2b: 'CATI with verified business respondents.',
  niche: 'Targeted recruitment, then CATI or in-depth interviews.',
  own: 'We run the study with your contact list, and handle the analysis.',
};
const timeline = {
  fast: 'Fast-track: possible for most studies. We will confirm on a short call.',
  month: 'Design in week one, fieldwork in weeks two and three, report in week four.',
  flex: 'We plan the timeline around getting the right sample.',
};

const letters = ['A', 'B', 'C', 'D'];

// Colours for the dark (default) and light versions
const themes = {
  dark: {
    panel: 'bg-[#130822]/90 backdrop-blur-sm',
    muted: 'text-white/60',
    faint: 'text-white/45',
    track: 'bg-white/10',
    option: 'border-white/15 hover:border-white/50 hover:bg-white/[0.05]',
    badge: 'bg-white/10 text-white/80 group-hover:bg-white/20',
    optText: 'text-white/90',
    rule: 'divide-white/10 border-white/10',
    value: 'text-white/90',
    note: 'text-white/55',
    ghost: 'border-white/40 hover:bg-white/10',
    link: 'hover:text-white',
    gradient: 'text-brand-gradient',
    accent: 'text-[#E69B57]',
  },
  light: {
    panel: 'bg-white/90 backdrop-blur-sm text-[#1E1230]',
    muted: 'text-[#1E1230]/60',
    faint: 'text-[#1E1230]/45',
    track: 'bg-[#4B1E73]/10',
    option: 'border-[#4B1E73]/15 hover:border-[#4B1E73]/50 hover:bg-[#4B1E73]/[0.04]',
    badge: 'bg-[#4B1E73]/10 text-[#4B1E73] group-hover:bg-[#4B1E73]/20',
    optText: 'text-[#1E1230]/90',
    rule: 'divide-[#4B1E73]/10 border-[#4B1E73]/10',
    value: 'text-[#1E1230]/90',
    note: 'text-[#1E1230]/55',
    ghost: 'border-[#4B1E73]/40 text-[#4B1E73] hover:bg-[#4B1E73]/5',
    link: 'hover:text-[#4B1E73]',
    gradient: 'text-brand-gradient-deep',
    accent: 'text-[#B55F1C]',
  },
};

export const ProjectFinder = ({ light = false }) => {
  const t = light ? themes.light : themes.dark;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const done = step >= questions.length;

  const choose = (key) => {
    const nextAnswers = [...answers.slice(0, step), key];
    setAnswers(nextAnswers);
    setTimeout(() => setStep((s) => s + 1), reduce ? 0 : 280);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  // keyboard answers only while the finder is on screen
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.intersectionRatio > 0.5), { threshold: [0, 0.5, 1] });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || done) return undefined;
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      const i = letters.indexOf(e.key.toUpperCase());
      const opt = questions[step].options[i];
      if (opt) choose(opt.key);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const progress = done ? 100 : (step / questions.length) * 100;

  return (
    <div ref={ref} className="rounded-[28px] p-[1.5px] bg-gradient-to-br from-[#A56DE0] via-[#D18BBF] to-[#F0A45E]">
      <div className={`rounded-[27px] ${t.panel} p-7 sm:p-12 min-h-[480px] flex flex-col`}>
        {/* progress */}
        <div className="flex items-center justify-between gap-6 mb-10">
          <p className={`font-display text-sm font-semibold tabular-nums ${t.muted}`}>
            {done ? 'Your brief is ready' : `Question ${step + 1} of ${questions.length}`}
          </p>
          <div className={`flex-1 max-w-xs h-1.5 rounded-full overflow-hidden ${t.track}`}>
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#A56DE0] to-[#F0A45E]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {questions[step].q}
              </h3>
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {questions[step].options.map((o, i) => {
                  const picked = answers[step] === o.key;
                  return (
                    <button
                      key={o.key}
                      onClick={() => choose(o.key)}
                      className={`group flex items-center gap-4 text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57] ${
                        picked
                          ? 'border-[#E69B57] bg-[#E69B57]/15'
                          : t.option
                      }`}
                    >
                      <span
                        className={`font-display shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                          picked ? 'bg-[#E69B57] text-[#140A22]' : t.badge
                        }`}
                      >
                        {picked ? <Check size={16} /> : letters[i]}
                      </span>
                      <span className={`text-[16px] sm:text-[17px] ${t.optText}`}>{o.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className={`mt-8 flex items-center justify-between text-sm ${t.faint}`}>
                <span className="hidden sm:inline">Tip: press A, B, C or D to answer</span>
                {step > 0 && (
                  <button onClick={() => setStep((s) => s - 1)} className={`underline underline-offset-4 ${t.link}`}>
                    Back
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col"
            >
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Here is how we would <span className={t.gradient}>approach it.</span>
              </h3>
              <dl className={`mt-10 divide-y border-y ${t.rule}`}>
                {[
                  ['Method', method[answers[0]]],
                  ['Fieldwork', fieldwork[answers[1]]],
                  ['Timeline', timeline[answers[2]]],
                ].map(([k, v], i) => (
                  <motion.div
                    key={k}
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="grid sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 py-5"
                  >
                    <dt className={`font-display text-sm font-bold ${t.accent}`}>{k}</dt>
                    <dd className={`text-lg ${t.value}`}>{v}</dd>
                  </motion.div>
                ))}
              </dl>
              <p className={`mt-6 ${t.note}`}>
                This is a starting point. A researcher will refine it with you on a short call.
              </p>
              <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="font-display inline-flex items-center justify-center gap-3 h-14 px-8 bg-[#E69B57] text-[#140A22] font-bold hover:bg-[#F2AE70] transition-colors"
                >
                  Talk to a researcher <ArrowRight size={18} />
                </Link>
                <button
                  onClick={restart}
                  className={`font-display inline-flex items-center justify-center gap-2 h-14 px-8 border font-bold transition-colors ${t.ghost}`}
                >
                  <RotateCcw size={16} /> Start again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
