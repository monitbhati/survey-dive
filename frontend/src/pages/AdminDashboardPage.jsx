import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { Users, Mail, Inbox, Download, LogOut, Search } from 'lucide-react';
import '../components/home/home.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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
  <div className="border border-[#1E1230]/10 bg-white p-6 flex items-center justify-between gap-4">
    <div>
      <p className="text-sm text-[#1E1230]/60">{label}</p>
      <p className="font-display mt-1 text-4xl font-extrabold tabular-nums">{value}</p>
    </div>
    <span className="w-12 h-12 flex items-center justify-center bg-[#4B1E73]/[0.07]">
      <Icon size={22} className="text-[#4B1E73]" />
    </span>
  </div>
);

export const AdminDashboardPage = () => {
  const [stats, setStats] = useState({ total_users: 0, total_contacts: 0, new_contacts: 0 });
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('contacts');
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
    .filter((c) => matches([c.name, c.email, c.company, c.message]));

  const visibleUsers = users.filter((u) => matches([u.name, u.surname, u.email, u.country, u.profession]));

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
      'contacts'
    );
    toast.success('Contacts exported');
  };

  if (loading) {
    return (
      <div className="home-root min-h-screen bg-[#F6F5F9] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#1E1230]/10 border-t-[#4B1E73] mx-auto" />
          <p className="mt-4 text-[#1E1230]/60">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const tabBtn = (key, label, count) => (
    <button
      onClick={() => setTab(key)}
      className={`font-display px-5 h-11 text-[15px] font-semibold border-b-2 transition-colors ${
        tab === key ? 'border-[#4B1E73] text-[#4B1E73]' : 'border-transparent text-[#1E1230]/55 hover:text-[#1E1230]'
      }`}
    >
      {label} <span className="ml-1 text-[#1E1230]/40 tabular-nums">{count}</span>
    </button>
  );

  return (
    <div className="home-root min-h-screen bg-[#F6F5F9] text-[#1E1230] antialiased">
      {/* ---------- TOP BAR ---------- */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#1E1230]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 flex items-center gap-4">
          <Link to="/"><img src="/surveydive-logo.png" alt="Survey Dive" className="h-10 w-auto object-contain" /></Link>
          <span className="hidden sm:inline text-[#1E1230]/25">/</span>
          <span className="hidden sm:inline font-display font-semibold">Admin dashboard</span>
          <button onClick={() => logout()} className="ml-auto inline-flex items-center gap-2 h-10 px-4 border border-[#1E1230]/15 text-sm text-[#1E1230]/80 hover:bg-[#F6F5F9]">
            <LogOut size={16} /> Log out
          </button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 py-10">
        {/* ---------- STATS ---------- */}
        <div className="grid sm:grid-cols-3 gap-4">
          <StatTile icon={Users} label="Registered users" value={stats.total_users ?? users.length} />
          <StatTile icon={Mail} label="All contact submissions" value={stats.total_contacts ?? contacts.length} />
          <StatTile icon={Inbox} label="New submissions" value={stats.new_contacts ?? 0} />
        </div>

        {/* ---------- TABS + SEARCH ---------- */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#1E1230]/10">
          <div className="flex">
            {tabBtn('contacts', 'Contact submissions', contacts.length)}
            {tabBtn('users', 'Registered users', users.length)}
          </div>
          <div className="relative pb-3 lg:pb-2 lg:w-80">
            <Search size={16} className="absolute left-3 top-3 text-[#1E1230]/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, message..."
              aria-label="Search"
              className="w-full h-10 pl-9 pr-3 bg-white border border-[#1E1230]/15 text-sm placeholder:text-[#1E1230]/40 focus:outline-none focus:border-[#4B1E73] focus:ring-2 focus:ring-[#4B1E73]/15"
            />
          </div>
        </div>

        {tab === 'contacts' ? (
          <section className="mt-6">
            <div className="flex flex-wrap items-center gap-2 justify-end">
              <button onClick={exportContacts} disabled={!visibleContacts.length} className="inline-flex items-center gap-2 h-9 px-4 bg-[#E69B57] text-[#140A22] text-sm font-semibold hover:bg-[#F2AE70] disabled:opacity-40">
                <Download size={16} /> Export {visibleContacts.length} to CSV
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {visibleContacts.map((c) => (
                <article key={c.id} className="border border-[#1E1230]/10 bg-white p-5 sm:p-6 hover:border-[#1E1230]/25 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold">{c.name}</h3>
                      <a href={`mailto:${c.email}`} className="text-sm text-[#4B1E73] hover:underline break-all">{c.email}</a>
                      {c.company && <p className="text-sm text-[#1E1230]/55 mt-0.5">{c.company}</p>}
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                      {c.status && <span className="text-xs font-semibold px-2.5 py-1 border border-[#4B1E73]/25 bg-[#4B1E73]/[0.05] text-[#4B1E73] capitalize">{c.status}</span>}
                      <span className="text-xs text-[#1E1230]/45">{formatDate(c.created_at)}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] text-[#1E1230]/80 leading-relaxed whitespace-pre-line bg-[#F6F5F9] border border-[#1E1230]/5 p-4">{c.message}</p>
                </article>
              ))}
              {visibleContacts.length === 0 && (
                <p className="text-center py-16 text-[#1E1230]/50 bg-white border border-dashed border-[#1E1230]/15">
                  {q ? 'Nothing matches your search.' : 'No contact submissions yet.'}
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
            <div className="mt-6 border border-[#1E1230]/10 bg-white overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="bg-[#F6F5F9] text-sm text-[#1E1230]/60">
                    {['Name', 'Email', 'Age', 'Country', 'Profession', 'Gender'].map((h) => (
                      <th key={h} className="py-4 px-5 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleUsers.map((u) => (
                    <tr key={u.id} className="border-t border-[#1E1230]/10 hover:bg-[#F6F5F9]">
                      <td className="py-4 px-5 font-medium">{u.name} {u.surname}</td>
                      <td className="py-4 px-5 text-[#1E1230]/70">{u.email}</td>
                      <td className="py-4 px-5 text-[#1E1230]/70 tabular-nums">{u.age}</td>
                      <td className="py-4 px-5 text-[#1E1230]/70">{u.country}</td>
                      <td className="py-4 px-5 text-[#1E1230]/70">{u.profession}</td>
                      <td className="py-4 px-5 text-[#1E1230]/70 capitalize">{u.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {visibleUsers.length === 0 && (
                <p className="text-center py-16 text-[#1E1230]/50">{q ? 'Nothing matches this search.' : 'No users registered yet.'}</p>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};