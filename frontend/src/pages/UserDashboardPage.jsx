import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { User, Mail, MapPin, Calendar, LogOut, CheckCircle, Bell, Activity } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

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
      <div className="min-h-screen bg-[#26323A] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DE7823] mx-auto mb-4"></div>
          <p className="text-[#A8ADB8] font-medium tracking-wide">Authenticating Session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#26323A] flex flex-col relative">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          
          {/* Dashboard Header */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-teal-500/30 bg-teal-500/10 rounded-full text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                Secure Session Active
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Welcome back, {user?.firstName}
              </h1>
              <p className="text-[#A8ADB8]">Intelligence Panelist Dashboard</p>
            </div>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="border border-[#3E4F59] bg-[#2E3D47] text-[#A8ADB8] hover:bg-[#3E4F59] hover:text-white transition-colors"
            >
              <LogOut className="mr-2" size={16} />
              Terminate Session
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {/* Status Card */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-xl h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#A8ADB8] uppercase tracking-wider mb-1">Account Status</p>
                      <p className="text-2xl font-bold text-teal-400">Verified</p>
                    </div>
                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center border border-teal-500/20">
                      <CheckCircle className="text-teal-400" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Completed Card */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-xl h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#A8ADB8] uppercase tracking-wider mb-1">Surveys Cleared</p>
                      <p className="text-2xl font-bold text-white">0</p>
                    </div>
                    <div className="w-12 h-12 bg-[#DE7823]/10 rounded-xl flex items-center justify-center border border-[#DE7823]/20">
                      <Activity className="text-[#DE7823]" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Available Card */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-xl h-full relative overflow-hidden">
                {/* Subtle gradient glow for emphasis */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#BF4A3B]/20 blur-2xl rounded-full"></div>
                <CardContent className="pt-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#A8ADB8] uppercase tracking-wider mb-1">Available Audits</p>
                      <p className="text-2xl font-bold text-white">Pending</p>
                    </div>
                    <div className="w-12 h-12 bg-[#BF4A3B]/10 rounded-xl flex items-center justify-center border border-[#BF4A3B]/20">
                      <Bell className="text-[#BF4A3B]" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Detailed Sections */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Profile Card */}
            <motion.div variants={fadeInUp}>
              <Card className="border border-[#3E4F59] bg-[#1A2329]/50 shadow-xl overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-[#2E3D47] to-[#1A2329] border-b border-[#3E4F59]">
                  <CardTitle className="text-xl text-white flex items-center">
                    <User className="mr-3 text-[#DE7823]" size={20} />
                    Analyst Profile
                  </CardTitle>
                  <CardDescription className="text-[#A8ADB8]">
                    Registered demographic vectors
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 pb-4 border-b border-[#3E4F59]/50">
                      <div className="p-2 bg-[#2E3D47] rounded-lg border border-[#3E4F59]">
                        <User className="text-[#A8ADB8]" size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#A8ADB8] uppercase tracking-wider">Full Name</p>
                        <p className="text-white font-medium">{user?.firstName} {user?.lastName}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pb-4 border-b border-[#3E4F59]/50">
                      <div className="p-2 bg-[#2E3D47] rounded-lg border border-[#3E4F59]">
                        <Mail className="text-[#A8ADB8]" size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#A8ADB8] uppercase tracking-wider">Secure Email</p>
                        <p className="text-white font-medium">{user?.email}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#2E3D47] rounded-lg border border-[#3E4F59]">
                          <Calendar className="text-[#A8ADB8]" size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#A8ADB8] uppercase tracking-wider">Age</p>
                          <p className="text-white font-medium">{user?.age}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#2E3D47] rounded-lg border border-[#3E4F59]">
                          <User className="text-[#A8ADB8]" size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#A8ADB8] uppercase tracking-wider">Gender</p>
                          <p className="text-white font-medium capitalize">{user?.gender}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#2E3D47] rounded-lg border border-[#3E4F59]">
                        <MapPin className="text-[#A8ADB8]" size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#A8ADB8] uppercase tracking-wider">Location Vector</p>
                        <p className="text-white font-medium">{user?.country}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next Steps / Onboarding Card */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-xl">
                <CardHeader className="border-b border-[#3E4F59]/50">
                  <CardTitle className="text-xl text-white">System Initialization</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-[#1A2329]/80 border border-teal-500/30 p-5 rounded-xl mb-6">
                    <p className="text-sm text-teal-400 font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle size={16} /> Protocol Complete
                    </p>
                    <p className="text-sm text-[#A8ADB8] leading-relaxed">
                      Your identity and demographic vectors have been securely stored in our encrypted database. The system is now scanning for relevant market audits.
                    </p>
                  </div>

                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Required Actions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div>
                      <div>
                        <p className="font-medium text-white text-sm">Monitor Communications</p>
                        <p className="text-sm text-[#A8ADB8]">We will issue direct email notifications when a high-value survey matches your demographic vector.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#DE7823] shadow-[0_0_8px_rgba(222,120,35,0.6)]"></div>
                      <div>
                        <p className="font-medium text-white text-sm">Maintain Accuracy</p>
                        <p className="text-sm text-[#A8ADB8]">Ensure your profile data remains current to qualify for targeted corporate evaluations.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};