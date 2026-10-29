import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import {
  wrap,
  Reveal,
  Label,
  SectionHeading,
  GradientRule,
  NumberedRows,
  btnPrimary,
  btnGhost,
  fieldClass,
  labelClass,
} from '../components/site/ui';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

/* Draft copy for the client to review. No figures are shown until Survey Dive confirms real ones. */

const steps = [
  { title: 'Register', text: 'Create a free panel account and complete a short profile about yourself.' },
  { title: 'Receive invitations', text: 'When a study matches your profile, we send the invitation to your registered email address.' },
  { title: 'Participate and earn', text: 'Complete the survey within its fieldwork window and receive a reward for your time.' },
];

const reasons = [
  { title: 'Influence real decisions', text: 'Organisations use panel responses to inform their products, services, and strategy.' },
  { title: 'Participate on your schedule', text: 'Studies are completed online, on any device, at a time that suits you.' },
  { title: 'Privacy by design', text: 'Your profile is used only to match you to relevant studies. We do not sell personal information.' },
];

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const emptySignup = { name: '', surname: '', email: '', password: '', age: '', gender: '', country: '', profession: '' };
const emptyLogin = { email: '', password: '' };

// FastAPI sends either a single message or a list of validation errors
const errorText = (err, fallback) => {
  const detail = err?.response?.data?.detail;
  if (typeof detail === 'string') return detail;
  if (Array.isArray(detail)) return detail.map((d) => d.msg || String(d)).join(', ');
  return fallback;
};

export const JoinUsPage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [tab, setTab] = useState('signup');
  const [signup, setSignup] = useState(emptySignup);
  const [login, setLogin] = useState(emptyLogin);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    try {
      setLoggedIn(Boolean(localStorage.getItem('token')));
    } catch {
      setLoggedIn(false);
    }
  }, []);

  const openTab = (name) => {
    setTab(name);
    setError('');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onSignupChange = (e) => setSignup({ ...signup, [e.target.name]: e.target.value });
  const onLoginChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const logIn = async (credentials) => {
    const res = await axios.post(`${API}/auth/login`, credentials);
    localStorage.setItem('token', res.data.access_token);
    navigate('/dashboard');
  };

  const onSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (!agreed) {
      setError('Please agree to the terms and conditions and the privacy policy to continue.');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/auth/signup`, {
        ...signup,
        age: Number(signup.age),
        profession: signup.profession.trim() || null,
      });
      toast.success('Registration complete. Welcome to the Survey Dive panel.');
      try {
        await logIn({ email: signup.email, password: signup.password });
      } catch {
        setLogin({ email: signup.email, password: '' });
        setTab('login');
        toast.info('Your account is ready. Please log in to continue.');
      }
      setSignup(emptySignup);
      setAgreed(false);
    } catch (err) {
      console.error('Signup error:', err);
      setError(errorText(err, 'We could not create your account. Please check your details and try again.'));
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await logIn(login);
      toast.success('Logged in.');
    } catch (err) {
      console.error('Login error:', err);
      setError(errorText(err, 'We could not log you in. Please try again.'));
    } finally {
      setLoading(false);
    }
  };

  const tabClass = (name) =>
    `font-display flex-1 h-12 text-[15px] font-semibold transition-colors ${
      tab === name ? 'bg-white text-[#140A22]' : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
    }`;

  return (
    <SiteLayout>
      <PageBanner
        label="Research panel"
        title="Join the Survey Dive"
        highlight="research panel."
        intro="Contribute your perspective to market research studies for brands and organisations. Register once, and we will invite you to studies that match your profile. Every completed survey is rewarded."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {loggedIn ? (
            <Link to="/dashboard" className={btnPrimary}>
              Go to your dashboard <ArrowRight size={18} />
            </Link>
          ) : (
            <>
              <button type="button" onClick={() => openTab('signup')} className={btnPrimary}>
                Register now <ArrowRight size={18} />
              </button>
              <button type="button" onClick={() => openTab('login')} className={btnGhost}>
                Member login
              </button>
            </>
          )}
        </div>
      </PageBanner>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className={`${wrap} py-20 sm:py-28`}>
        <SectionHeading label="How it works" title="How participation works" />
        <NumberedRows items={steps} />
      </section>

      {/* ---------- WHY JOIN ---------- */}
      <section className={`${wrap} pb-20 sm:pb-28`}>
        <SectionHeading label="Why participate" title="Research that respects your time" />
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <GradientRule />
              <h3 className="font-display mt-6 text-xl sm:text-2xl font-bold">{r.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SIGN UP / LOG IN ---------- */}
      <section ref={formRef} id="join" className={`${wrap} pb-24 sm:pb-32 scroll-mt-28 grid lg:grid-cols-12 gap-12`}>
        <Reveal className="lg:col-span-4">
          <Label>Panel membership</Label>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08]">
            {tab === 'signup' ? 'Register as a panel member' : 'Member login'}
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            {tab === 'signup'
              ? 'Membership is free and open to adults aged 18 and over.'
              : 'Access your panel profile and membership details.'}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <div className="border border-white/15 bg-[#160A28]">
            <div className="flex border-b border-white/15" role="tablist" aria-label="Register or log in">
              <button type="button" role="tab" aria-selected={tab === 'signup'} onClick={() => { setTab('signup'); setError(''); }} className={tabClass('signup')}>
                Register
              </button>
              <button type="button" role="tab" aria-selected={tab === 'login'} onClick={() => { setTab('login'); setError(''); }} className={tabClass('login')}>
                Log in
              </button>
            </div>

            <div className="p-6 sm:p-10">
              {tab === 'signup' ? (
                <form onSubmit={onSignup} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>First name *</label>
                      <input id="name" name="name" value={signup.name} onChange={onSignupChange} required autoComplete="given-name" className={`${fieldClass} h-14`} />
                    </div>
                    <div>
                      <label htmlFor="surname" className={labelClass}>Last name *</label>
                      <input id="surname" name="surname" value={signup.surname} onChange={onSignupChange} required autoComplete="family-name" className={`${fieldClass} h-14`} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" value={signup.email} onChange={onSignupChange} required autoComplete="email" className={`${fieldClass} h-14`} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="password" className={labelClass}>Password *</label>
                    <input id="password" name="password" type="password" value={signup.password} onChange={onSignupChange} required minLength={8} autoComplete="new-password" className={`${fieldClass} h-14`} />
                    <p className="mt-2 text-sm text-white/50">At least 8 characters.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="age" className={labelClass}>Age *</label>
                      <input id="age" name="age" type="number" min={18} max={100} value={signup.age} onChange={onSignupChange} required className={`${fieldClass} h-14`} />
                    </div>
                    <div>
                      <label htmlFor="gender" className={labelClass}>Gender *</label>
                      <div className="relative">
                        <select id="gender" name="gender" value={signup.gender} onChange={onSignupChange} required className={`${fieldClass} h-14 appearance-none pr-12`}>
                          <option value="" disabled className="bg-[#1A0B30]">Select</option>
                          {genders.map((g) => (
                            <option key={g.value} value={g.value} className="bg-[#1A0B30]">{g.label}</option>
                          ))}
                        </select>
                        <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60" />
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className={labelClass}>Country *</label>
                      <input id="country" name="country" value={signup.country} onChange={onSignupChange} required autoComplete="country-name" className={`${fieldClass} h-14`} placeholder="Country of residence" />
                    </div>
                    <div>
                      <label htmlFor="profession" className={labelClass}>Profession</label>
                      <input id="profession" name="profession" value={signup.profession} onChange={onSignupChange} autoComplete="organization-title" className={`${fieldClass} h-14`} placeholder="Optional" />
                    </div>
                  </div>

                  <label className="flex items-start gap-3 text-white/75 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 h-4 w-4 accent-[#E69B57]" />
                    <span>
                      I agree to the{' '}
                      <Link to="/terms-conditions" target="_blank" className="underline underline-offset-4 hover:text-[#E69B57]">terms and conditions</Link>{' '}
                      and the{' '}
                      <Link to="/privacy-policy" target="_blank" className="underline underline-offset-4 hover:text-[#E69B57]">privacy policy</Link>.
                    </span>
                  </label>

                  {error && <p role="alert" className="border border-red-400/40 bg-red-500/10 text-red-200 px-4 py-3">{error}</p>}

                  <button type="submit" disabled={loading} className={`${btnPrimary} w-full sm:w-auto`}>
                    {loading ? 'Creating your account...' : 'Create account'}
                  </button>
                </form>
              ) : (
                <form onSubmit={onLogin} className="space-y-6">
                  <div>
                    <label htmlFor="loginEmail" className={labelClass}>Email *</label>
                    <input id="loginEmail" name="email" type="email" value={login.email} onChange={onLoginChange} required autoComplete="email" className={`${fieldClass} h-14`} />
                  </div>
                  <div>
                    <label htmlFor="loginPassword" className={labelClass}>Password *</label>
                    <input id="loginPassword" name="password" type="password" value={login.password} onChange={onLoginChange} required autoComplete="current-password" className={`${fieldClass} h-14`} />
                  </div>

                  {error && <p role="alert" className="border border-red-400/40 bg-red-500/10 text-red-200 px-4 py-3">{error}</p>}

                  <button type="submit" disabled={loading} className={`${btnPrimary} w-full sm:w-auto`}>
                    {loading ? 'Logging in...' : 'Log in'}
                  </button>
                  <p className="text-sm text-white/50">
                    Forgot your password? <Link to="/contact" className="underline underline-offset-4 hover:text-white">Contact us</Link> and we will help.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
};
