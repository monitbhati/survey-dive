import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, CTABand } from '../components/site/ui';
import { company } from '../components/site/siteContent';

/* Everything in [square brackets] is for the client to confirm. */

const faqs = [
  { q: 'Who can join the panel?', a: 'Anyone aged [18] or over who lives in India. [Confirm any other rules.]' },
  { q: 'Is it free to join?', a: 'Yes. Joining and taking part are completely free. Survey Dive will never ask you to pay anything.' },
  { q: 'How often will I get surveys?', a: 'It depends on your profile and the studies running. Most members hear from us [a few times a month].' },
  { q: 'How long does a survey take?', a: 'Most take [5 to 15] minutes. Each invitation tells you the expected time before you start.' },
  { q: 'How do rewards work?', a: 'You earn [reward type] for every survey you complete. The amount is shown in each invitation.' },
  { q: 'How do I redeem my rewards?', a: 'Once you reach [threshold], you can redeem them for [vouchers, mobile recharges, or cash]. [Explain how.]' },
  { q: 'Why was I screened out of a survey?', a: 'Studies often need people with a specific profile. If your answers to the first few questions do not match, the survey ends early. It is not a reflection on you, and [you may still receive a small reward, confirm].' },
  { q: 'Is my personal information safe?', a: 'Yes. Your answers are combined with others and reported in groups. Your name and contact details are never shared with the brands whose surveys you take. See our privacy policy for details.' },
  { q: 'How do I leave the panel or delete my data?', a: `Email ${company.panelEmail} and we will remove your account and personal data within [30 days].` },
];

const Item = ({ q, a, open, onToggle, id }) => (
  <div className="border-b border-white/15">
    <button
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={`faq-${id}`}
      className="w-full flex items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69B57]"
    >
      <span className="font-display text-lg sm:text-xl font-bold">{q}</span>
      <Plus size={22} className={`shrink-0 text-[#E69B57] transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
    </button>
    <div id={`faq-${id}`} hidden={!open} className="pb-7 pr-10 text-lg text-white/75 leading-relaxed">
      {a}
    </div>
  </div>
);

export const PanelFaqPage = () => {
  const [open, setOpen] = useState(0);
  return (
    <SiteLayout>
      <PageBanner
        label="Panel FAQ"
        title="Questions from"
        highlight="panel members."
        intro="Everything you need to know about taking part, rewards, and your privacy."
      />
      <section className={`${wrap} py-20 sm:py-28 grid lg:grid-cols-12 gap-12`}>
        <Reveal className="lg:col-span-8 border-t border-white/15">
          {faqs.map((f, i) => (
            <Item key={f.q} id={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-10">
          <div className="bg-[#1A0B30] border border-white/10 p-7">
            <p className="font-display text-lg font-bold">Still have a question?</p>
            <p className="mt-2 text-white/65 leading-relaxed">Email {company.panelEmail} and our panel team will help.</p>
            <Link to="/join-us" className="mt-5 inline-block font-semibold text-[#E69B57] underline underline-offset-4">
              Not a member yet? Join
            </Link>
          </div>
        </Reveal>
      </section>
      <CTABand title="Ready to share your opinion?" primary={{ to: '/join-us', label: 'Join our panel' }} />
    </SiteLayout>
  );
};
