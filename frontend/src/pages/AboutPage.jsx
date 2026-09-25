import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, SectionHeading, GradientRule, CTABand } from '../components/site/ui';

/* Everything in [square brackets] is for the client to confirm or replace. */

const principles = [
  { title: 'Real people', text: 'Every respondent is recruited, profiled, and verified. We would rather deliver a smaller, honest sample than a large, doubtful one.' },
  { title: 'Checked data', text: 'No response reaches you without passing our quality checks. If something looks wrong, we find out why before you ever see it.' },
  { title: 'Straight answers', text: 'We tell you what the data says, including when it is not what you hoped. Clear findings are more useful than comfortable ones.' },
];

const stats = [
  { value: '[2018]', label: 'Founded' },
  { value: '[250+]', label: 'Studies delivered' },
  { value: '[40+]', label: 'Cities covered' },
  { value: '[12]', label: 'Languages' },
];

const team = [
  { name: '[Full name]', role: '[Founder and Director]', bio: '[One line on their background, e.g. years in research, past firms.]', linkedin: '' },
  { name: '[Full name]', role: '[Head of Research]', bio: '[One line on their background.]', linkedin: '' },
  { name: '[Full name]', role: '[Head of Operations and CATI]', bio: '[One line on their background.]', linkedin: '' },
];

const initials = (name) =>
  name.replace(/[[\]]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export const AboutPage = () => (
  <SiteLayout>
    <PageBanner
      label="About Survey Dive"
      title="Research that starts with"
      highlight="real people."
      intro="We are a [city]-based market research and data collection company. We help brands, agencies, and institutions hear from the people who matter to them, and trust what they hear."
    />

    {/* ---------- STORY ---------- */}
    <section className={`${wrap} py-24 sm:py-32`}>
      <div className="grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <Label>Our story</Label>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">Why we started Survey Dive.</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6 space-y-5 text-lg text-white/75 leading-relaxed">
          <p>
            [Survey Dive was founded in [year] by [founder names], after [number] years working in market research.
            Replace this paragraph with the real story: what the founders saw going wrong in the industry, and what
            they set out to do differently.]
          </p>
          <p>
            Today we run studies across [regions] in [languages], combining survey design, telephone interviewing,
            and qualitative research under one roof. Every project, large or small, gets the same care: the right
            questions, the right people, and data we are willing to stand behind.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-y border-white/15">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`py-10 px-2 sm:px-6 border-white/15 ${i % 2 === 0 ? 'border-r' : 'lg:border-r'} ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i === 3 ? 'lg:border-r-0' : ''}`}
          >
            <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{s.value}</p>
            <p className="mt-2 text-white/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ---------- PRINCIPLES ---------- */}
    <section className="bg-[#160A28] py-24 sm:py-32">
      <div className={wrap}>
        <SectionHeading label="How we work" title="Three things we never compromise on." />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <GradientRule />
              <h3 className="font-display mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- TEAM ---------- */}
    <section className={`${wrap} py-24 sm:py-32`}>
      <SectionHeading
        label="Leadership"
        title="The people who run your study."
        intro="Senior researchers stay involved from the first call to the final presentation."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((m, i) => (
          <Reveal key={i} delay={i * 0.08}>
            {/* Replace the initials block with a photo: <img src="/team/name.jpg" ... /> */}
            <div className="aspect-[4/5] bg-gradient-to-br from-[#2A1245] to-[#1A0B30] border border-white/10 flex items-center justify-center">
              <span className="font-display text-6xl font-extrabold text-white/15">{initials(m.name) || 'SD'}</span>
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold">{m.name}</h3>
                <p className="text-[#E69B57] font-medium mt-1">{m.role}</p>
              </div>
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="text-white/60 hover:text-white">
                  <FaLinkedin size={20} />
                </a>
              )}
            </div>
            <p className="mt-3 text-white/65 leading-relaxed">{m.bio}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ---------- REACH ---------- */}
    <section className="bg-[#160A28] py-24 sm:py-32">
      <div className={`${wrap} grid lg:grid-cols-2 gap-14`}>
        <Reveal>
          <Label>Reach</Label>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08]">
            Local understanding, national coverage.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Our interviewers speak the languages your respondents speak, and understand the context behind their
            answers. That is the difference between data and insight.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-8">
          <div>
            <p className="font-display text-sm font-bold text-white/60 mb-3">Regions</p>
            <p className="text-xl leading-relaxed">[North India, South India, East India, West India, metros and tier 2 and 3 towns]</p>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white/60 mb-3">Languages</p>
            <p className="text-xl leading-relaxed">[Hindi, English, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi]</p>
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white/60 mb-3">Memberships and certifications</p>
            <p className="text-xl leading-relaxed">[ESOMAR, MRSI, ISO, or remove this block if none]</p>
          </div>
        </Reveal>
      </div>
    </section>

    <CTABand
      title="Let's talk about your next study."
      text="Tell us what you need to find out. We will come back within [one working day]."
      secondary={{ to: '/services', label: 'Our services' }}
    />
  </SiteLayout>
);
