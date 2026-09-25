import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { LogOut, Mail, User, MapPin, Calendar, Bell, CheckCircle2 } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageBanner } from '../components/site/PageBanner';
import { wrap, Reveal, Label, NumberedRows } from '../components/site/ui';
import { company } from '../components/site/siteContent';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const nextSteps = [
  { title: 'Watch your inbox', text: 'We email you when a survey matches your profile. Add us to your contacts so invitations do not land in spam.' },
  { title: 'Keep your profile current', text: 'Accurate details mean you are invited to surveys that fit you, and screened out less often.' },
  { title: 'Answer honestly', text: 'Thoughtful answers are what make the research useful, and what keep your rewards coming.' },
];

export const UserDashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Same request as before: GET /api/auth/me with the saved token
  const loadUserData = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      setUser(response.data);
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('Session expired. Please log in again.');
      localStorage.removeItem('token');
      navigate('/join-us');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      toast.error('Please log in to see your dashboard');
      navigate('/join-us');
      return;
    }
    loadUserData();
  }, [navigate, loadUserData]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out');
    navigate('/join-us');
  };

  if (loading) {
    return (
      <div className="home-root min-h-screen bg-[#120822] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-white/15 border-t-[#E69B57] mx-auto" />
          <p className="mt-4 text-white/60">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // The backend may use firstName/lastName or name/surname, so accept both
  const first = user?.firstName || user?.name || '';
  const last = user?.lastName || user?.surname || '';
  const joined = user?.created_at ? new Date(user.created_at).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) : null;

  const profile = [
    { icon: User, label: 'Name', value: `${first} ${last}`.trim() },
    { icon: Mail, label: 'Email', value: user?.email },
    { icon: Calendar, label: 'Age', value: user?.age },
    { icon: User, label: 'Gender', value: user?.gender },
    { icon: MapPin, label: 'Country', value: user?.country },
  ].filter((p) => p.value);

  return (
    <SiteLayout>
      <PageBanner label="Panel member dashboard" title="Welcome back," highlight={first ? `${first}.` : 'member.'}>
        <button onClick={handleLogout} className="inline-flex items-center gap-2 h-11 px-5 border border-white/40 text-white/85 hover:bg-white/10">
          <LogOut size={16} /> Log out
        </button>
      </PageBanner>

      <section className={`${wrap} py-20 sm:py-24 grid lg:grid-cols-12 gap-12`}>
        <Reveal className="lg:col-span-5">
          <div className="border border-white/10 bg-[#160A28] p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <Label>Your profile</Label>
              <span className="inline-flex items-center gap-1.5 text-sm text-[#7EE0A8] -mt-4">
                <CheckCircle2 size={16} /> Active member
              </span>
            </div>
            <ul className="border-t border-white/10">
              {profile.map((p) => (
                <li key={p.label} className="flex items-center gap-4 py-4 border-b border-white/10">
                  <p.icon size={18} className="shrink-0 text-[#E69B57]" />
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">{p.label}</p>
                    <p className={`text-white break-all ${p.label === 'Gender' ? 'capitalize' : ''}`}>{p.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            {joined && <p className="mt-5 text-sm text-white/50">Member since {joined}</p>}
            <p className="mt-5 text-sm text-white/55">
              Need to change something? Email {company.panelEmail}.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-start gap-4 border border-[#E69B57]/30 bg-[#E69B57]/[0.07] p-6 mb-10">
              <Bell size={22} className="shrink-0 text-[#E69B57] mt-0.5" />
              <div>
                <p className="font-display text-lg font-bold">Survey invitations come by email</p>
                <p className="mt-1 text-white/70">Whenever a survey matches your profile, we send the link to {user?.email || 'your inbox'}.</p>
              </div>
            </div>
            <Label>Make the most of your membership</Label>
          </Reveal>
          <NumberedRows items={nextSteps} />
          <Reveal className="mt-8">
            <Link to="/panel-faq" className="font-semibold text-[#E69B57] underline underline-offset-4">Read the Panel FAQ</Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};