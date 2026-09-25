import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { Users, Mail, Inbox, Download, LogOut, Search, UserPlus } from 'lucide-react';
import '../components/home/home.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Panel sign-ups from the Join Our Panel page arrive as contacts with this company value
const PANEL_TAG = 'Panel sign-up';

// Wrap every value in quotes so commas and line breaks don't break the CSV
const toCsv = (rows) =>
  rows.map((row) => row.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');

const download = (csv, name) => {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};

const formatDate = (d) => {
  if (!d) return '';
  const date = new Date(d);
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
};

const StatTile = ({ icon: Icon, label, value }) => (
  <div className="border border-white/10 bg-[#160A28] p-6 flex items-center justify-between gap-4">
    <div>
      <p className="text-sm text-white/55">{label}</p>
      <p className="font-display mt-1 text-4xl font-extrabold tabular-nums">{value}</p>
    </div>
    <span className="w-12 h-12 flex items-center justify-center bg-[#E69B57]/15">
      <Icon size={22} className="text-[#E69B57]" />
    </span>
  </div>
);

export const AdminDashboardPage = () => {
  const [stats, setStats] = useState({ total_users: 0, total_contacts: 0, new_contacts: 0 });
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('contacts');
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const logout = useCallback(
    (message = 'Logged out') => {
      localStorage.removeItem('admin_token');
      toast.success(message);
      navigate('/admin/login');
    },
    [navigate]
  );

  const loadData = useCallback(async () => {
    const token = localStorage.getItem('admin_token');
    // The admin token is now sent with every request
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const [statsRes, usersRes, contactsRes] = await Promise.all([
        axios.get(`${API}/admin/stats`, config),
        axios.get(`${API}/admin/users`, config),
        axios.get(`${API}/admin/contacts`, config),
      ]);
      setStats(statsRes.data || {});
      setUsers(Array.isArray(usersRes.data) ? usersRes.data : []);
      setContacts(Array.isArray(contactsRes.data) ? contactsRes.data : []);
    } catch (error) {
      console.error('Error loading data:', error);
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
        logout('Your session has expired. Please log in again.');
        return;
      }
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  }, [logout]);

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [navigate, loadData]);

  const q = query.trim().toLowerCase();
  const matches = (values) => !q || values.some((v) => String(v ?? '').toLowerCase().includes(q));

  // Small lists, so filtering on every render is fine
  const visibleContacts = contacts
    .filter((c) => (filter === 'panel' ? c.company === PANEL_TAG : filter === 'enquiries' ? c.company !== PANEL_TAG : true))
    .filter((c) => matches([c.name, c.email, c.company, c.message]));

  const visibleUsers = users.filter((u) => matches([u.name, u.surname, u.email, u.country, u.profession]));

  const panelCount = contacts.filter((c) => c.company === PANEL_TAG).length;

  const exportUsers = () => {
    download(
      toCsv([
        ['ID', 'Name', 'Surname', 'Email', 'Age', 'Country', 'Profession', 'Gender'],
        ...visibleUsers.map((u) => [u.id, u.name, u.surname, u.email, u.age, u.country, u.profession, u.gender]),
      ]),
      'users'
    );
    toast.success('Users exported');
  };

  const exportContacts = () => {
    download(
      toCsv([
        ['ID', 'Name', 'Email', 'Company', 'Message', 'Date', 'Status'],
        ...visibleContacts.map((c) => [c.id, c.name, c.email, c.company || 'N/A', c.message, c.created_at ? new Date(c.created_at).toLocaleString() : '', c.status]),
      ]),
      filter === 'panel' ? 'panel_signups' : 'contacts'
    );
    toast.success('Contacts exported');
  };

  if (loading) {
    return (
      <div className="home-root min-h-screen bg-[#120822] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-white/15 border-t-[#E69B57] mx-auto" />
          <p className="mt-4 text-white/60">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const tabBtn = (key, label, count) => (
    <button
      onClick={() => setTab(key)}
      className={`font-display px-5 h-11 text-[15px] font-semibold border-b-2 transition-colors ${
        tab === key ? 'border-[#E69B57] text-white' : 'border-transparent text-white/55 hover:text-white'
      }`}
    >
      {label} <span className="ml-1 text-white/40 tabular-nums">{count}</span>
    </button>
  );

  const chip = (key, label) => (
    <button
      onClick={() => setFilter(key)}
      className={`px-4 h-9 text-sm border transition-colors ${
        filter === key ? 'bg-[#E69B57] border-[#E69B57] text-[#140A22] font-semibold' : 'border-white/20 text-white/75 hover:border-white/50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="home-root min-h-screen bg-[#120822] text-white antialiased">
      {/* ---------- TOP BAR ---------- */}
      <header className="sticky top-0 z-40 bg-[#160A28]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 flex items-center gap-4">
          <Link to="/"><img src="/surveydive-logo.png" alt="Survey Dive" className="h-10 w-auto object-contain" /></Link>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline font-display font-semibold">Admin dashboard</span>
          <button onClick={() => logout()} className="ml-auto inline-flex items-center gap-2 h-10 px-4 border border-white/20 text-sm text-white/80 hover:bg-white/10">
            <LogOut size={16} /> Log out
          </button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 py-10">
        {/* ---------- STATS ---------- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatTile icon={Users} label="Registered users" value={stats.total_users ?? users.length} />
          <StatTile icon={Mail} label="All contact submissions" value={stats.total_contacts ?? contacts.length} />
          <StatTile icon={Inbox} label="New submissions" value={stats.new_contacts ?? 0} />
          <StatTile icon={UserPlus} label="Panel sign-ups" value={panelCount} />
        </div>

        {/* ---------- TABS + SEARCH ---------- */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10">
          <div className="flex">
            {tabBtn('contacts', 'Contact submissions', contacts.length)}
            {tabBtn('users', 'Registered users', users.length)}
          </div>
          <div className="relative pb-3 lg:pb-2 lg:w-80">
            <Search size={16} className="absolute left-3 top-3 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, message..."
              aria-label="Search"
              className="w-full h-10 pl-9 pr-3 bg-white/[0.06] border border-white/15 text-sm placeholder:text-white/40 focus:outline-none focus:border-[#E69B57]"
            />
          </div>
        </div>

        {tab === 'contacts' ? (
          <section className="mt-6">
            <div className="flex flex-wrap items-center gap-2 justify-between">
              <div className="flex flex-wrap gap-2">
                {chip('all', 'All')}
                {chip('enquiries', 'Business enquiries')}
                {chip('panel', 'Panel sign-ups')}
              </div>
              <button onClick={exportContacts} disabled={!visibleContacts.length} className="inline-flex items-center gap-2 h-9 px-4 bg-[#E69B57] text-[#140A22] text-sm font-semibold hover:bg-[#F2AE70] disabled:opacity-40">
                <Download size={16} /> Export {visibleContacts.length} to CSV
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {visibleContacts.map((c) => (
                <article key={c.id} className="border border-white/10 bg-[#160A28] p-5 sm:p-6 hover:border-white/25 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold">{c.name}</h3>
                        {c.company === PANEL_TAG && (
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#8E4FD1]/25 text-[#D4B5F5]">Panel</span>
                        )}
                      </div>
                      <a href={`mailto:${c.email}`} className="text-sm text-[#E69B57] hover:underline break-all">{c.email}</a>
                      {c.company && c.company !== PANEL_TAG && <p className="text-sm text-white/55 mt-0.5">{c.company}</p>}
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                      {c.status && <span className="text-xs font-semibold px-2.5 py-1 border border-[#E69B57]/40 text-[#E69B57] capitalize">{c.status}</span>}
                      <span className="text-xs text-white/45">{formatDate(c.created_at)}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] text-white/75 leading-relaxed whitespace-pre-line bg-white/[0.03] border border-white/5 p-4">{c.message}</p>
                </article>
              ))}
              {visibleContacts.length === 0 && (
                <p className="text-center py-16 text-white/50 border border-dashed border-white/15">
                  {q || filter !== 'all' ? 'Nothing matches this filter.' : 'No contact submissions yet.'}
                </p>
              )}
            </div>
          </section>
        ) : (
          <section className="mt-6">
            <div className="flex justify-end">
              <button onClick={exportUsers} disabled={!visibleUsers.length} className="inline-flex items-center gap-2 h-9 px-4 bg-[#E69B57] text-[#140A22] text-sm font-semibold hover:bg-[#F2AE70] disabled:opacity-40">
                <Download size={16} /> Export {visibleUsers.length} to CSV
              </button>
            </div>
            <div className="mt-6 border border-white/10 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="bg-[#160A28] text-sm text-white/55">
                    {['Name', 'Email', 'Age', 'Country', 'Profession', 'Gender'].map((h) => (
                      <th key={h} className="py-4 px-5 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleUsers.map((u) => (
                    <tr key={u.id} className="border-t border-white/10 hover:bg-white/[0.03]">
                      <td className="py-4 px-5 font-medium">{u.name} {u.surname}</td>
                      <td className="py-4 px-5 text-white/70">{u.email}</td>
                      <td className="py-4 px-5 text-white/70 tabular-nums">{u.age}</td>
                      <td className="py-4 px-5 text-white/70">{u.country}</td>
                      <td className="py-4 px-5 text-white/70">{u.profession}</td>
                      <td className="py-4 px-5 text-white/70 capitalize">{u.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {visibleUsers.length === 0 && (
                <p className="text-center py-16 text-white/50">{q ? 'Nothing matches this search.' : 'No users registered yet.'}</p>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};