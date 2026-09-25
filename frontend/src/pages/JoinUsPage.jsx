import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, SectionHeading, GradientRule, NumberedRows, btnPrimary, fieldClass, labelClass } from '../components/site/ui';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

/* Everything in [square brackets] is for the client to confirm. */

const reasons = [
  { title: 'Your voice counts', text: 'Your answers help shape the products, services, and policies you use every day.' },
  { title: 'Earn rewards', text: 'Get [reward type] for every survey you complete, redeemable once you reach [threshold].' },
  { title: 'Fits your day', text: 'Most surveys take [5 to 15] minutes. Answer on your phone, whenever it suits you.' },
];

const steps = [
  { title: 'Sign up', text: 'Share your name, email, and city. It takes under a minute.' },
  { title: 'Complete your profile', text: 'A few questions about you, so we only invite you to surveys that fit.' },
  { title: 'Get invitations', text: 'We email or message you when a survey matches your profile.' },
  { title: 'Earn and redeem', text: 'Rewards add up with every completed survey. Redeem them for [vouchers, recharges, or cash].' },
];

const empty = { name: '', email: '', city: '', adult: false, consent: false };

export const JoinUsPage = () => {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // No panel sign-up endpoint exists yet, so sign-ups are sent through the
      // existing contact endpoint and show up in the admin dashboard under contacts.
      await axios.post(`${API}/contact/submit`, {
        name: form.name,
        email: form.email,
        company: 'Panel sign-up',
        message: `[Panel sign-up]\nCity: ${form.city}\nConfirmed 18 or older: yes\nAgreed to privacy policy and terms: yes`,
      });
      setDone(true);
      setForm(empty);
      toast.success('Thanks for signing up.');
    } catch (err) {
      console.error('Panel sign-up error:', err);
      setError('Something went wrong. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <PageBanner
        label="Join our panel"
        title="Your opinion shapes"
        highlight="what gets built next."
        intro="Join [50,000+] people across India who share their views in short surveys and earn rewards for every one they complete."
      >
        <a href="#signup" className={btnPrimary}>Sign up free</a>
      </PageBanner>

      {/* ---------- WHY JOIN ---------- */}
      <section className={`${wrap} py-24 sm:py-32`}>
        <SectionHeading label="Why join" title="Short surveys. Real rewards. Your voice heard." />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <GradientRule />
              <h3 className="font-display mt-6 text-2xl font-bold">{r.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-[#160A28] py-24 sm:py-32">
        <div className={wrap}>
          <SectionHeading label="How it works" title="Four steps, and you are in." />
          <NumberedRows items={steps} />
        </div>
      </section>

      {/* ---------- SIGN UP ---------- */}
      <section id="signup" className={`${wrap} py-24 sm:py-32 grid lg:grid-cols-12 gap-14 scroll-mt-24`}>
        <Reveal className="lg:col-span-5">
          <Label>Sign up</Label>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08]">Join in under a minute.</h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Membership is free. Your personal details are never shared with the brands whose surveys you take.
          </p>
          <p className="mt-6 text-white/60">
            Questions first? Read the <Link to="/panel-faq" className="text-[#E69B57] underline underline-offset-4">Panel FAQ</Link>.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          {done ? (
            <div className="border border-white/15 p-10 sm:p-12">
              <CheckCircle2 size={44} className="text-[#E69B57]" />
              <h3 className="font-display mt-6 text-3xl font-extrabold tracking-tight">You are on the list.</h3>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                We will be in touch with the next steps to complete your profile. [Confirm what happens next and how soon.]
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6 border border-white/15 p-7 sm:p-10">
              <div>
                <label htmlFor="name" className={labelClass}>Full name *</label>
                <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" className={`${fieldClass} h-14`} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" className={`${fieldClass} h-14`} />
              </div>
              <div>
                <label htmlFor="city" className={labelClass}>City *</label>
                <input id="city" name="city" value={form.city} onChange={onChange} required autoComplete="address-level2" className={`${fieldClass} h-14`} />
              </div>
              <label className="flex gap-3 items-start text-white/80 cursor-pointer">
                <input type="checkbox" name="adult" checked={form.adult} onChange={onChange} required className="mt-1 w-5 h-5 accent-[#E69B57]" />
                <span>I am 18 or older. [Confirm age rule]</span>
              </label>
              <label className="flex gap-3 items-start text-white/80 cursor-pointer">
                <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required className="mt-1 w-5 h-5 accent-[#E69B57]" />
                <span>
                  I agree to the <Link to="/privacy-policy" className="underline">privacy policy</Link> and{' '}
                  <Link to="/terms-conditions" className="underline">terms and conditions</Link>, and to receive survey invitations.
                </span>
              </label>
              {error && (
                <p role="alert" className="border border-red-400/40 bg-red-500/10 text-red-200 px-4 py-3">{error}</p>
              )}
              <button type="submit" disabled={loading} className={`${btnPrimary} w-full`}>
                {loading ? 'Signing you up...' : 'Join the panel'}
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </SiteLayout>
  );
};
