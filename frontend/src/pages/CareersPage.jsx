import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, SectionHeading, GradientRule, CTABand } from '../components/site/ui';
import { company, isReal } from '../components/site/siteContent';

/* Everything in [square brackets] is for the client to confirm. Remove any role that is not open. */

const perks = [
  { title: 'Learn the craft', text: 'Work alongside experienced researchers on real projects for real clients from day one.' },
  { title: 'Grow with us', text: '[Describe growth paths, e.g. from CATI executive to team lead to research executive.]' },
  { title: 'A steady team', text: '[Describe the culture: team size, office life, training, benefits.]' },
];

const roles = [
  { title: 'CATI executive', type: '[Full time]', place: '[City]', text: 'Conduct telephone interviews in [languages], following scripts accurately and warmly.' },
  { title: 'Field interviewer', type: '[Contract]', place: '[Cities]', text: 'Run face-to-face interviews and recruit participants for studies in your area.' },
  { title: 'Research executive', type: '[Full time]', place: '[City]', text: 'Help design questionnaires, manage fieldwork, and prepare reports for clients.' },
  { title: 'Data analyst', type: '[Full time]', place: '[City]', text: 'Clean, weight, and analyse survey data, and build tables and charts for reports.' },
];

export const CareersPage = () => {
  const mail = isReal(company.careersEmail) ? `mailto:${company.careersEmail}` : null;

  return (
    <SiteLayout>
      <PageBanner
        label="Careers"
        title="Build a career in"
        highlight="finding real answers."
        intro="We are always looking for curious, careful people: interviewers, researchers, and analysts who care about getting it right."
      />

      <section className={`${wrap} py-24 sm:py-32`}>
        <SectionHeading label="Why Survey Dive" title="A good place to learn research." />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GradientRule />
              <h3 className="font-display mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#160A28] py-24 sm:py-32">
        <div className={wrap}>
          <SectionHeading label="Open roles" title="Where you could fit in." />
          <div className="border-t border-white/15">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05} className="grid md:grid-cols-12 gap-3 md:gap-8 py-8 border-b border-white/15">
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{r.type} · {r.place}</p>
                </div>
                <p className="md:col-span-5 text-white/75 leading-relaxed">{r.text}</p>
                <div className="md:col-span-3 md:text-right">
                  {mail ? (
                    <a href={`${mail}?subject=${encodeURIComponent(`Application: ${r.title}`)}`} className="font-semibold text-[#E69B57] underline underline-offset-4">
                      Apply by email
                    </a>
                  ) : (
                    <span className="text-white/50">Apply: {company.careersEmail}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-white/65">
            Do not see your role? Send your CV to {mail ? <a href={mail} className="text-[#E69B57] underline underline-offset-4">{company.careersEmail}</a> : company.careersEmail} and tell us how you would like to contribute.
          </Reveal>
        </div>
      </section>

      <section className={`${wrap} py-20`}>
        <Reveal className="flex gap-5 border border-[#E69B57]/40 bg-[#E69B57]/[0.07] p-7 sm:p-9 max-w-4xl">
          <ShieldAlert size={28} className="shrink-0 text-[#E69B57]" />
          <div>
            <Label>Beware of job scams</Label>
            <p className="text-white/80 leading-relaxed">
              Survey Dive never asks for money at any stage of hiring: no registration, training, or equipment fees.
              We only contact candidates from {company.careersEmail}. If someone asks you to pay for a job with us,
              please report it to {company.email}.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABand title="Want to take part in surveys instead?" text="Join our panel and earn rewards for sharing your opinion." primary={{ to: '/join-us', label: 'Join our panel' }} />
    </SiteLayout>
  );
};
