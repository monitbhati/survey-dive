import React from 'react';
import { Check } from 'lucide-react';
import { SiteLayout } from '../../components/site/SiteLayout';
import { PageBanner } from '../../components/site/PageBanner';
import { wrap, Reveal, SectionHeading, CTABand } from '../../components/site/ui';
import { getService } from './serviceData';

// One layout for the three service pages. Content comes from serviceData.js.
export const ServiceTemplate = ({ slug }) => {
  const s = getService(slug);
  // 8 items sit in 4 columns, 6 items in 3, so the grid always fills evenly
  const cols = s.offer.items.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <SiteLayout>
      <PageBanner label="Services" title={s.title} highlight={s.highlight} intro={s.intro} />

      {/* ---------- FIRST LIST: numbered tiles ---------- */}
      <section className={`${wrap} py-24 sm:py-32`}>
        <SectionHeading title={s.offer.title} />
        <div className={`grid sm:grid-cols-2 ${cols} gap-px bg-white/15 border border-white/15`}>
          {s.offer.items.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 0.06} className="bg-[#120822]">
              <div className="group relative flex flex-col justify-between gap-10 h-full min-h-[170px] p-7 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-[#A56DE0] to-[#F0A45E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative font-display text-sm font-bold text-[#E69B57] group-hover:text-[#140A22] tabular-nums transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="relative font-display text-xl sm:text-2xl font-bold leading-snug group-hover:text-[#140A22] transition-colors">
                  {item}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SECOND LIST: checklist ---------- */}
      <section className="bg-[#160A28] py-24 sm:py-32">
        <div className={`${wrap} grid lg:grid-cols-12 gap-12`}>
          <div className="lg:col-span-4">
            <SectionHeading title={s.detail.title} className="!mb-0 lg:sticky lg:top-32" />
          </div>
          <ul className="lg:col-span-7 lg:col-start-6 border-t border-white/15">
            {s.detail.items.map((item, i) => (
              <Reveal key={item} as="li" delay={i * 0.05} className="flex items-center gap-5 py-6 border-b border-white/15">
                <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-[#A56DE0] to-[#F0A45E] flex items-center justify-center">
                  <Check size={18} className="text-[#140A22]" strokeWidth={3} />
                </span>
                <span className="text-lg sm:text-xl text-white/90">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Let's talk about your next study."
        text="Tell us what you need to find out. We will come back within [one working day]."
      />
    </SiteLayout>
  );
};
