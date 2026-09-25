import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, SectionHeading, GradientRule, NumberedRows, CTABand } from '../components/site/ui';
import { services } from './services/serviceData';

const engagements = [
  { title: 'End-to-end studies', text: 'From questionnaire to final presentation, we run the whole project.' },
  { title: 'Fieldwork only', text: 'You design the study and do the analysis. We collect clean data, on time.' },
  { title: 'Single services', text: 'Just CATI, just recruitment, just translation, or just analysis. Pick what you need.' },
];

const steps = [
  { title: 'Brief', text: 'We start with the decision you are facing, not a template.' },
  { title: 'Design', text: 'Questionnaire, sample plan, and timeline, agreed with you before anything goes live.' },
  { title: 'Field', text: 'Data collection with daily progress updates and live quality checks.' },
  { title: 'Deliver', text: 'Clean data, clear findings, and a walkthrough with the team who ran the study.' },
];

// [Client to confirm sectors]
const industries = ['FMCG', 'Healthcare and pharma', 'Automotive', 'Banking and finance', 'Technology and telecom', 'Retail and e-commerce', 'Media', 'Public sector'];

export const ServicesPage = () => (
  <SiteLayout>
    <PageBanner
      label="Services"
      title="Research built around"
      highlight="your question."
      intro="Four methods, used on their own or combined in one project. We recommend what fits the decision you need to make, not what is easiest for us to sell."
    />

    {/* ---------- THE FOUR SERVICES ---------- */}
    <section className={`${wrap} py-24 sm:py-32`}>
      <div className="border-t border-white/20">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <Link
              to={s.path}
              className="group relative grid grid-cols-[48px_1fr_auto] sm:grid-cols-[80px_1fr_1fr_auto] items-center gap-4 sm:gap-8 py-9 sm:py-12 border-b border-white/20 transition-colors hover:bg-white/[0.04]"
            >
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E69B57] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
              <span className="font-display pl-3 sm:pl-5 text-sm font-bold text-[#E69B57] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2">{s.title}</h2>
              <p className="hidden sm:block text-white/65 max-w-md leading-relaxed">{s.short}</p>
              <ArrowUpRight size={28} className="mr-2 text-white/40 group-hover:text-[#E69B57] transition-colors" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ---------- WAYS TO WORK ---------- */}
    <section className="bg-[#160A28] py-24 sm:py-32">
      <div className={wrap}>
        {/* [Client to confirm which of these Survey Dive offers] */}
        <SectionHeading label="Ways to work with us" title="Research the way you need it." />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <GradientRule />
              <h3 className="font-display mt-6 text-2xl font-bold">{e.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{e.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- PROCESS ---------- */}
    <section className={`${wrap} py-24 sm:py-32`}>
      <SectionHeading label="How we work" title="From first question to final insight." />
      <NumberedRows items={steps} />
    </section>

    {/* ---------- INDUSTRIES ---------- */}
    <section className="bg-[#160A28] py-24 sm:py-32">
      <div className={wrap}>
        <SectionHeading label="Industries" title="Sectors we know well." />
        <Reveal className="flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span key={ind} className="px-5 py-3 border border-white/20 text-white/85 text-[15px]">
              {ind}
            </span>
          ))}
        </Reveal>
      </div>
    </section>

    <CTABand
      title="Not sure which method fits?"
      text="Describe what you need to find out, and a researcher will recommend an approach."
      primary={{ to: '/contact', label: 'Talk to a researcher' }}
    />
  </SiteLayout>
);
