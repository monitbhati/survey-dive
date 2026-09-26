import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { Mail, MapPin, Clock, CheckCircle2, ChevronDown } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, btnPrimary, fieldClass, labelClass } from '../components/site/ui';
import { company, isReal } from '../components/site/siteContent';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const enquiryTypes = ['A new research project', 'Fieldwork or CATI only', 'A quote for an existing brief', 'Something else'];

const empty = { name: '', email: '', company: '', type: enquiryTypes[0], message: '' };

export const ContactPage = () => {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Same four fields the backend already accepts. The enquiry type goes at the top of the message.
      await axios.post(`${API}/contact/submit`, {
        name: form.name,
        email: form.email,
        company: form.company,
        message: `[Enquiry: ${form.type}]\n\n${form.message}`,
      });
      setSent(true);
      setForm(empty);
      toast.success('Message sent. We will be in touch soon.');
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Your message could not be sent. Please try again, or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const details = [
    { icon: Mail, label: 'Email', value: company.email, href: isReal(company.email) ? `mailto:${company.email}` : null },
    { icon: MapPin, label: 'Office', value: company.address },
    { icon: Clock, label: 'Hours', value: company.hours },
  ];

  return (
    <SiteLayout>
      <PageBanner
        label="   "
        title={<>Still thinking?<br /></>}
        highlight="Let’s Dive Into Your Research Needs"
        intro="Share a few details about your project. A researcher will reply within one working day with questions, an approach, or a quote."
      />

      <section className={`${wrap} py-20 sm:py-28 grid lg:grid-cols-12 gap-14`}>
        {/* ---------- FORM ---------- */}
        <Reveal className="lg:col-span-7">
          {sent ? (
            <div className="border border-white/15 p-10 sm:p-14">
              <CheckCircle2 size={44} className="text-[#E69B57]" />
              <h2 className="font-display mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">Thank you. Your message is with us.</h2>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                A member of our research team will reply within [one working day].
              </p>
              <button onClick={() => setSent(false)} className="mt-8 font-semibold text-[#E69B57] underline underline-offset-4">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Your name *</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" className={`${fieldClass} h-14`} placeholder="Sharon Sharma" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Work email *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" className={`${fieldClass} h-14`} placeholder="sharon@company.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className={labelClass}>Company</label>
                  <input id="company" name="company" value={form.company} onChange={onChange} autoComplete="organization" className={`${fieldClass} h-14`} placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="type" className={labelClass}>What is this about?</label>
                  <div className="relative">
                    <select id="type" name="type" value={form.type} onChange={onChange} className={`${fieldClass} h-14 appearance-none pr-12`}>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#1A0B30]">{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Your project *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className={`${fieldClass} py-4 resize-none`}
                  placeholder="Who do you need to hear from, roughly how many people, which cities, and by when?"
                />
              </div>

              {error && (
                <p role="alert" className="border border-red-400/40 bg-red-500/10 text-red-200 px-4 py-3">
                  {error} {isReal(company.email) && <a href={`mailto:${company.email}`} className="underline">{company.email}</a>}
                </p>
              )}

              <button type="submit" disabled={loading} className={btnPrimary}>
                {loading ? 'Sending...' : 'Send message'}
              </button>
              <p className="text-sm text-white/50">
                We use your details only to reply to this enquiry. See our <Link to="/privacy-policy" className="underline">privacy policy</Link>.
              </p>
            </form>
          )}
        </Reveal>

        {/* ---------- DETAILS ---------- */}
        <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 space-y-10">
          <div>
            <Label>Contact details</Label>
            <ul className="border-t border-white/15">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4 py-5 border-b border-white/15">
                  <d.icon size={20} className="shrink-0 text-[#E69B57] mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-white hover:text-[#E69B57] break-all">{d.value}</a>
                    ) : (
                      <p className="text-white/90">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
};
