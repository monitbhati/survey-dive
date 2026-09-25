import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { Lock, ArrowLeft } from 'lucide-react';
import { btnPrimary, fieldClass, labelClass } from '../components/site/ui';
import '../components/home/home.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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
    <div className="home-root relative isolate min-h-screen bg-[#120822] text-white antialiased flex items-center justify-center px-5 py-16 overflow-hidden">
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#6B2FA8]/40 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-48 -right-20 w-[480px] h-[480px] rounded-full bg-[#E69B57]/15 blur-[120px]" aria-hidden="true" />

      <div className="relative w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-10">
          <ArrowLeft size={16} /> Back to website
        </Link>

        <div className="border border-white/15 bg-[#160A28]/80 backdrop-blur-xl p-8 sm:p-10">
          <img src="/surveydive-logo.png" alt="Survey Dive" className="h-12 w-auto object-contain" />
          <div className="mt-8 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center bg-[#E69B57]/15">
              <Lock size={18} className="text-[#E69B57]" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight">Admin access</h1>
              <p className="text-sm text-white/55">For Survey Dive staff only</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label htmlFor="password" className={labelClass}>Admin password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                autoFocus
                className={`${fieldClass} h-14`}
              />
            </div>
            {error && (
              <p role="alert" className="border border-red-400/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm">{error}</p>
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