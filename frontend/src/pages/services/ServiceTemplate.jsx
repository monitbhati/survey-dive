import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Clock } from 'lucide-react';
import { SiteLayout } from '../../components/site/SiteLayout';
import { PageBanner } from '../../components/site/PageBanner';
import { wrap, Reveal, Label, SectionHeading, NumberedRows, CTABand, btnPrimary } from '../../components/site/ui';
import { services, getService } from './serviceData';

// One layout for all four service pages. Content comes from serviceData.js.
export const ServiceTemplate = ({ slug }) => {
  const s = getService(slug);
  const others = services.filter((o) => o.slug !== slug);

  return (
    <SiteLayout>
      <PageBanner label="Services" title={s.title} intro={s.intro}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <Link to="/contact" className={btnPrimary}>Discuss your study</Link>
          <span className="inline-flex items-center gap-2 text-white/70">
            <Clock size={18} className="text-[#E69B57]" /> Typical timeline: {s.timeline}
          </span>
        </div>
      </PageBanner>

      {/* ---------- WHEN TO USE ---------- */}
      <section className={`${wrap} py-24 sm:py-32`}>
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <Label>When to use it</Label>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">Is this the right method for you?</h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6 border-t border-white/15">
            {s.whenToUse.map((w, i) => (
              <Reveal key={w} delay={i * 0.05} className="flex gap-5 py-6 border-b border-white/15">
                <Check size={22} className="shrink-0 text-[#E69B57] mt-0.5" />
                <p className="text-lg text-white/85">{w}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW WE DO IT ---------- */}
      <section className="bg-[#160A28] py-24 sm:py-32">
        <div className={wrap}>
          <SectionHeading label="How we do it" title="Step by step." />
          <NumberedRows items={s.steps} />
        </div>
      </section>

      {/* ---------- DELIVERABLES AND QUALITY ---------- */}
      <section className={`${wrap} py-24 sm:py-32 grid md:grid-cols-2 gap-14`}>
        <Reveal>
          <Label>What you get</Label>
          <ul className="space-y-4">
            {s.deliverables.map((d) => (
              <li key={d} className="flex gap-4 text-lg text-white/85">
                <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-[#E69B57]" />
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Label>How we protect quality</Label>
          <ul className="space-y-4">
            {s.quality.map((q) => (
              <li key={q} className="flex gap-4 text-lg text-white/85">
                <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-[#B07BEA]" />
                {q}
              </li>
            ))}
          </ul>
          <Link to="/quality" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#E69B57] hover:underline underline-offset-4">
            Our full quality process <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>

      {/* ---------- OTHER SERVICES ---------- */}
      <section className="bg-[#160A28] py-24 sm:py-28">
        <div className={wrap}>
          <SectionHeading label="Often combined with" title="Related services." />
          <div className="grid md:grid-cols-3 gap-px bg-white/15 border border-white/15">
            {others.map((o) => (
              <Link key={o.slug} to={o.path} className="group bg-[#160A28] p-8 hover:bg-[#1F0F36] transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold group-hover:text-[#E69B57] transition-colors">{o.title}</h3>
                  <ArrowUpRight size={20} className="shrink-0 text-white/40 group-hover:text-[#E69B57]" />
                </div>
                <p className="mt-3 text-white/65 leading-relaxed">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={s.cta} text="Tell us about it, and we will come back with an approach, a timeline, and a quote." />
    </SiteLayout>
  );
};
