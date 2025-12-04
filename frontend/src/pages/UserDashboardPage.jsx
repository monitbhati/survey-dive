import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { User, Mail, MapPin, Briefcase, Calendar, LogOut, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const UserDashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login to access dashboard');
      navigate('/join-us');
      return;
    }
    loadUserData();
  }, [navigate]);

  const loadUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('Session expired. Please login again.');
      localStorage.removeItem('token');
      navigate('/join-us');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/join-us');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50"></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Dashboard Header */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Welcome back, {user?.firstName}! 👋
                </h1>
                <p className="text-lg text-gray-600">Your panelist dashboard</p>
              </div>
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <LogOut className="mr-2" size={18} />
                Logout
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-yellow-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Account Status</p>
                      <p className="text-2xl font-bold text-green-600">Active</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Surveys Completed</p>
                      <p className="text-2xl font-bold text-gray-900">0</p>
                    </div>
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="text-pink-600" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Available Surveys</p>
                      <p className="text-2xl font-bold text-gray-900">Coming Soon</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="text-purple-600" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Information */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Card */}
              <Card className="border-2 border-yellow-300 bg-white shadow-xl">
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-pink-700 text-white">
                  <CardTitle className="text-2xl flex items-center">
                    <User className="mr-2" size={24} />
                    Your Profile
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    Your registered information
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="text-purple-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Full Name</p>
                        <p className="font-semibold text-gray-900">{user?.firstName} {user?.lastName}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-purple-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-gray-900">{user?.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="text-purple-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Age</p>
                        <p className="font-semibold text-gray-900">{user?.age} years</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-purple-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Country</p>
                        <p className="font-semibold text-gray-900">{user?.country}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <User className="text-purple-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Gender</p>
                        <p className="font-semibold text-gray-900 capitalize">{user?.gender}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Welcome & Next Steps */}
              <div className="space-y-6">
                <Card className="border-2 border-pink-300 bg-white shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-700 text-white">
                    <CardTitle className="text-2xl">Welcome to FACTUM RESEARCH!</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Thank you for joining our global panel of research participants. Your opinions matter and will help shape products, services, and decisions across industries.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-sm text-yellow-800 font-semibold mb-2">
                        🎉 Registration Complete!
                      </p>
                      <p className="text-sm text-yellow-700">
                        Your profile is active. We'll notify you via email when surveys matching your profile become available.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-300 bg-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Profile Complete</p>
                          <p className="text-sm text-gray-600">Your registration is confirmed</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Wait for Survey Invitations</p>
                          <p className="text-sm text-gray-600">We'll email you when surveys are available</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Check Your Email</p>
                          <p className="text-sm text-gray-600">Stay tuned for opportunities to participate</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
