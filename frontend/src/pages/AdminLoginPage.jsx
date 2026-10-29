import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { Lock, ArrowLeft } from 'lucide-react';
import { btnPrimary } from '../components/site/ui';
import '../components/home/home.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Light fields for the white admin area
const lightField =
  'w-full h-14 bg-white border border-[#1E1230]/20 px-4 text-[#1E1230] placeholder:text-[#1E1230]/40 focus:outline-none focus:border-[#4B1E73] focus:ring-2 focus:ring-[#4B1E73]/15 transition-colors';

export const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Same request as before: POST /api/admin/login, then store the token
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${API}/admin/login`, { password });
      localStorage.setItem('admin_token', response.data.access_token);
      toast.success('Admin access granted');
      navigate('/admin/dashboard');
    } catch (err) {
      console.error('Admin login error:', err);
      setError('That password is not correct.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-root relative isolate min-h-screen bg-[#F6F5F9] text-[#1E1230] antialiased flex items-center justify-center px-5 py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8E4FD1] to-[#F0A45E]" aria-hidden="true" />

      <div className="relative w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#1E1230]/60 hover:text-[#4B1E73] mb-10">
          <ArrowLeft size={16} /> Back to website
        </Link>

        <div className="border border-[#1E1230]/10 bg-white shadow-[0_20px_50px_-24px_rgba(30,18,48,0.25)] p-8 sm:p-10">
          <img src="/surveydive-logo.png" alt="Survey Dive" className="h-12 w-auto object-contain" />
          <div className="mt-8 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center bg-[#4B1E73]/[0.07]">
              <Lock size={18} className="text-[#4B1E73]" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight">Admin access</h1>
              <p className="text-sm text-[#1E1230]/55">For Survey Dive staff only</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#1E1230]/80 mb-2">Admin password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                autoFocus
                className={lightField}
              />
            </div>
            {error && (
              <p role="alert" className="border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</p>
            )}
            <button type="submit" disabled={loading} className={`${btnPrimary} w-full`}>
              {loading ? 'Checking...' : 'Open dashboard'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};