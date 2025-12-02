import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/admin/login`, { password });
      
      // Store admin token
      localStorage.setItem('admin_token', response.data.access_token);
      
      toast.success('Admin access granted');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Admin login error:', error);
      toast.error('Invalid admin password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Admin Access
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enter admin password to access the dashboard
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Admin Login</CardTitle>
                <CardDescription className="text-base">Secure access for administrators only</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <Label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2">Admin Password *</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="h-12"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-slate-800 hover:bg-slate-900 h-12 text-base"
                    disabled={loading}
                  >
                    {loading ? 'Verifying...' : 'Access Dashboard'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};