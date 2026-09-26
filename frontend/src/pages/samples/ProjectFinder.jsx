import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { company } from '../../components/site/siteContent';

/* A three-question survey. The visitor answers like a respondent would,
   then gets a thank-you message with the sales email.
   Keyboard: press A, B, C or D to answer. */

const questions = [
  {
    q: 'Who do you need to hear from?',
    options: [
      { key: 'consumer', label: 'Consumer Audience' },
      { key: 'b2b', label: 'B2B Audience' },
      { key: 'hcp', label: 'Healthcare Professionals' },
      { key: 'ailment', label: 'Ailment Audience' },
    ],
  },
  {
    q: 'How many responses you need from us?',
    options: [
      { key: '100', label: '100 Responses' },
      { key: '500', label: '500 Responses' },
      { key: '1000', label: '1000 Responses' },
      { key: '5000', label: '5000 Responses' },
    ],
  },
  {
    q: 'How soon do you need answers?',
    options: [
      { key: '4-5', label: 'within 4-5 days' },
      { key: '7-10', label: 'within 7-10 days' },
      { key: '15-20', label: 'within 15-20 days' },
      { key: '25-30', label: 'within 25-30 days' },
    ],
  },
];

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
    note: 'text-white/55',
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
    note: 'text-[#1E1230]/55',
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
            {done ? 'Survey complete' : `Question ${step + 1} of ${questions.length}`}
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
              className="flex-1 flex flex-col justify-center"
            >
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                <span className={t.gradient}>Congratulations!</span> You have completed the survey.
              </h3>
              <p className={`mt-8 text-lg sm:text-xl leading-relaxed ${t.optText}`}>
                To initiate the strategic plan feel free to reach out to us at{' '}
                <a
                  href={`mailto:${company.email}`}
                  className={`font-semibold underline underline-offset-4 break-all ${t.accent}`}
                >
                  {company.email}
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
