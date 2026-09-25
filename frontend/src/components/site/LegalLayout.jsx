import React from 'react';
import { SiteLayout } from './SiteLayout';
import { PageBanner } from './PageBanner';
import { wrap } from './ui';
import { company, isReal } from './siteContent';

/* Shared layout for Privacy Policy and Terms and Conditions:
   a table of contents on the left (desktop), readable text on the right. */

export const LegalLayout = ({ title, updated, intro, sections, note }) => (
  <SiteLayout>
    <PageBanner label="Legal" title={title} intro={intro}>
      <p className="text-white/55">Last updated: {updated}</p>
    </PageBanner>

    <section className={`${wrap} py-20 sm:py-24 grid lg:grid-cols-12 gap-12`}>
      <nav className="hidden lg:block lg:col-span-3" aria-label="On this page">
        <div className="sticky top-32">
          <p className="font-display text-sm font-bold text-white/60 mb-4">On this page</p>
          <ol className="space-y-3 border-l border-white/15">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block pl-4 -ml-px border-l-2 border-transparent text-white/60 hover:text-white hover:border-[#E69B57] transition-colors">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article className="lg:col-span-8 lg:col-start-5 max-w-3xl">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28 pb-12 mb-12 border-b border-white/10 last:border-b-0">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              <span className="text-[#E69B57] mr-3 tabular-nums">{i + 1}.</span>
              {s.title}
            </h2>
            <div className="legal-body space-y-4 text-[17px] leading-relaxed text-white/75">{s.content}</div>
          </section>
        ))}

        <div className="bg-[#1A0B30] border border-white/10 p-8">
          <h3 className="font-display text-xl font-bold">Contact us</h3>
          <p className="mt-3 text-white/70">For questions or concerns, please contact:</p>
          <p className="mt-4 font-semibold text-[#E69B57]">Survey Dive</p>
          <p className="mt-2 text-white/80">
            Email:{' '}
            {isReal(company.email) ? (
              <a href={`mailto:${company.email}`} className="text-[#E69B57] hover:underline">{company.email}</a>
            ) : (
              company.email
            )}
          </p>
          <p className="mt-1 text-white/80">Address: {company.address}</p>
        </div>

        {note && (
          <div className="mt-8 border-l-4 border-[#E69B57] bg-[#E69B57]/10 p-5">
            <p className="text-white/90">{note}</p>
          </div>
        )}
      </article>
    </section>
  </SiteLayout>
);

// Styled list and bold text for legal sections
export const LegalList = ({ items }) => (
  <ul className="space-y-2.5 pl-1">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#E69B57]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const B = ({ children }) => <strong className="font-semibold text-white">{children}</strong>;
