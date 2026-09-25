import React from 'react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, SectionHeading, NumberedRows, GradientRule, CTABand } from '../components/site/ui';

/* Everything in [square brackets] is for the client to confirm. Only keep checks Survey Dive really does. */

const stages = [
  { title: 'Before the survey', text: 'Respondents are verified by [phone OTP or email], de-duplicated, and profiled, so the right people are invited and nobody takes a survey twice.' },
  { title: 'During the survey', text: 'Attention checks and timing checks catch people who rush, answer at random, or give the same answer to every question.' },
  { title: 'During phone interviews', text: 'Supervisors monitor calls live, and [percentage] of completed interviews are back-checked with the respondent.' },
  { title: 'After fieldwork', text: 'Open answers are read, inconsistent responses are reviewed, and every removed response is logged, so you can see exactly what was excluded and why.' },
];

const promises = [
  { title: 'Transparent', text: 'You get a record of every quality check and every response we removed.' },
  { title: 'Secure', text: 'Data is stored [securely, with access limited to the project team], and shared with you only.' },
  { title: 'Private', text: 'Respondent identities are never shared with clients unless the respondent agrees.' },
];

export const QualityPage = () => (
  <SiteLayout>
    <PageBanner
      label="Quality and methodology"
      title="Data you can"
      highlight="defend."
      intro="Bad data looks exactly like good data until someone makes a decision on it. This is how we make sure every response we deliver is real, attentive, and honest."
    />

    <section className={`${wrap} py-24 sm:py-32`}>
      <SectionHeading label="Our checks" title="Quality at every stage, not just at the end." />
      <NumberedRows items={stages} />
    </section>

    <section className="bg-[#160A28] py-24 sm:py-32">
      <div className={wrap}>
        <SectionHeading label="Our promises" title="What you can count on." />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GradientRule />
              <h3 className="font-display mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className={`${wrap} py-24 sm:py-32`}>
      <Reveal className="max-w-3xl">
        <Label>Standards</Label>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
          [Memberships and certifications]
        </h2>
        <p className="mt-5 text-lg text-white/70 leading-relaxed">
          [List industry memberships and codes Survey Dive follows, e.g. ESOMAR, MRSI, ISO 20252. Remove this section
          if there are none yet.]
        </p>
      </Reveal>
    </section>

    <CTABand title="Want to see our quality process on your study?" text="Ask us for a sample quality report." />
  </SiteLayout>
);
