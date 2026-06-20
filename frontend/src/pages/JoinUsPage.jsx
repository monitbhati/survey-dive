import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { toast } from 'sonner';
import axios from 'axios';
import { Wallet, Clock, Smartphone, Globe, ShieldCheck, Target } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const JoinUsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('signup');
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    country: '',
    gender: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [detectingCountry, setDetectingCountry] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  // Auto-detect country on component mount
  useEffect(() => {
    detectUserCountry();
  }, []);

  const detectUserCountry = async () => {
    try {
      setDetectingCountry(true);
      const response = await axios.get('https://ipapi.co/json/');
      
      if (response.data && response.data.country_name) {
        setSignupData(prev => ({
          ...prev,
          country: response.data.country_name
        }));
        toast.success(`Country detected: ${response.data.country_name}`);
      }
    } catch (error) {
      console.log('Could not auto-detect country:', error);
    } finally {
      setDetectingCountry(false);
    }
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!agreedToTerms || !agreedToPrivacy) {
      toast.error('Please agree to the Terms & Conditions and Privacy Policy to continue');
      return;
    }
    
    setLoading(true);
    try {
      const backendData = {
        name: signupData.firstName,
        surname: signupData.lastName,
        email: signupData.email,
        password: signupData.password,
        age: parseInt(signupData.age),
        country: signupData.country,
        gender: signupData.gender
      };
      
      await axios.post(`${API}/auth/signup`, backendData);
      toast.success('Registration successful! Please login with your credentials.');
      setSignupData({ firstName: '', lastName: '', email: '', age: '', country: '', gender: '', password: '' });
      setAgreedToTerms(false);
      setAgreedToPrivacy(false);
      setActiveTab('login');
    } catch (error) {
      console.error('Signup error:', error.message || 'Registration failed');
      let errorMessage = 'Registration failed';
      
      if (error.response?.data?.detail) {
        if (typeof error.response.data.detail === 'string') {
          errorMessage = error.response.data.detail;
        } else if (Array.isArray(error.response.data.detail)) {
          errorMessage = error.response.data.detail.map(err => err.msg || err).join(', ');
        } else {
          errorMessage = 'Registration failed. Please check your information.';
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API}/auth/login`, loginData);
      localStorage.setItem('token', response.data.access_token);
      toast.success('Login successful! Redirecting to dashboard...');
      setLoginData({ email: '', password: '' });
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      console.error('Login error:', error.message || 'Login failed');
      let errorMessage = 'Login failed';
      
      if (error.response?.data?.detail) {
        if (typeof error.response.data.detail === 'string') {
          errorMessage = error.response.data.detail;
        } else if (Array.isArray(error.response.data.detail)) {
          errorMessage = error.response.data.detail.map(err => err.msg || err).join(', ');
        } else {
          errorMessage = 'Login failed. Please check your credentials.';
        }
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Shared classes to force the shadcn components into our dark theme
  const inputClasses = "w-full bg-[#1A2329] border-[#3E4F59] text-white focus:border-[#DE7823] focus:ring-[#DE7823] placeholder:text-slate-500 rounded-lg px-4 py-3";

  return (
    <div className="min-h-screen bg-[#26323A] flex flex-col relative">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Value Proposition */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-10 lg:sticky lg:top-32"
            >
              <div>
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 border border-[#DE7823]/30 bg-[#DE7823]/10 rounded-full text-xs font-semibold tracking-widest uppercase text-[#DE7823] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE7823] animate-pulse"></span>
                  Panelist Network
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Drive Strategy.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE7823] to-[#BF4A3B]">Earn Rewards.</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-[#A8ADB8] leading-relaxed max-w-xl">
                  Join our exclusive global panel. Your insights directly influence product development, market strategy, and corporate innovation—while you earn competitive compensation.
                </motion.p>
              </div>

              <motion.div variants={staggerContainer} className="space-y-6">
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DE7823] to-[#BF4A3B] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Wallet className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Guaranteed Compensation</h3>
                    <p className="text-[#A8ADB8]">Receive immediate payouts for every audited survey you complete.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2E3D47] border border-[#3E4F59] flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#DE7823]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Absolute Flexibility</h3>
                    <p className="text-[#A8ADB8]">Participate entirely on your own schedule with zero minimum requirements.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2E3D47] border border-[#3E4F59] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-[#BF4A3B]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Data Anonymity</h3>
                    <p className="text-[#A8ADB8]">Your PII is encrypted and strictly protected under our core privacy framework.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Forms */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-md mx-auto lg:max-w-none lg:ml-auto"
            >
              <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden">
                <div className="flex p-2 border-b border-[#3E4F59] bg-[#1A2329]/50">
                  <button
                    onClick={() => setActiveTab('signup')}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'signup'
                        ? 'bg-[#2E3D47] text-white shadow-sm border border-[#3E4F59]'
                        : 'text-[#A8ADB8] hover:text-white hover:bg-[#2E3D47]/50'
                    }`}
                  >
                    Register Panelist
                  </button>
                  <button
                    onClick={() => setActiveTab('login')}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'login'
                        ? 'bg-[#2E3D47] text-white shadow-sm border border-[#3E4F59]'
                        : 'text-[#A8ADB8] hover:text-white hover:bg-[#2E3D47]/50'
                    }`}
                  >
                    Account Login
                  </button>
                </div>

                <CardContent className="p-6 sm:p-8">
                  {activeTab === 'signup' ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Create Profile</h2>
                        <p className="text-[#A8ADB8] text-sm">Enter your details to initiate the vetting process.</p>
                      </div>

                      <form onSubmit={handleSignup} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">First Name *</Label>
                            <Input id="firstName" name="firstName" value={signupData.firstName} onChange={handleSignupChange} className={inputClasses} required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Last Name *</Label>
                            <Input id="lastName" name="lastName" value={signupData.lastName} onChange={handleSignupChange} className={inputClasses} required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Email *</Label>
                          <Input id="email" name="email" type="email" value={signupData.email} onChange={handleSignupChange} className={inputClasses} required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Password *</Label>
                          <Input id="password" name="password" type="password" value={signupData.password} onChange={handleSignupChange} className={inputClasses} required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="age" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Age *</Label>
                            <Input id="age" name="age" type="number" value={signupData.age} onChange={handleSignupChange} className={inputClasses} required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Gender *</Label>
                            <Select name="gender" onValueChange={(value) => handleSelectChange('gender', value)} required>
                              <SelectTrigger className={inputClasses}>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#2E3D47] border-[#3E4F59] text-white">
                                <SelectItem value="male" className="hover:bg-[#3E4F59] focus:bg-[#3E4F59] cursor-pointer">Male</SelectItem>
                                <SelectItem value="female" className="hover:bg-[#3E4F59] focus:bg-[#3E4F59] cursor-pointer">Female</SelectItem>
                                <SelectItem value="other" className="hover:bg-[#3E4F59] focus:bg-[#3E4F59] cursor-pointer">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="country" className="flex justify-between text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">
                            <span>Country *</span>
                            {detectingCountry && <span className="text-[#DE7823] animate-pulse">Detecting...</span>}
                          </Label>
                          <Input id="country" name="country" value={signupData.country} onChange={handleSignupChange} placeholder={detectingCountry ? "Locating..." : "Enter your country"} className={inputClasses} required />
                        </div>
                        
                        {/* Checkboxes */}
                        <div className="space-y-4 pt-2">
                          <div className="flex items-start gap-3">
                            <input type="checkbox" id="terms" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="mt-1 w-4 h-4 rounded border-[#3E4F59] bg-[#1A2329] text-[#DE7823] focus:ring-[#DE7823] focus:ring-offset-[#2E3D47]" />
                            <label htmlFor="terms" className="text-sm text-[#A8ADB8] cursor-pointer leading-tight">
                              I agree to the <a href="/terms-conditions" target="_blank" className="text-white hover:text-[#DE7823] transition-colors font-medium border-b border-[#DE7823]/30">Terms & Conditions</a> *
                            </label>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <input type="checkbox" id="privacy" checked={agreedToPrivacy} onChange={(e) => setAgreedToPrivacy(e.target.checked)} className="mt-1 w-4 h-4 rounded border-[#3E4F59] bg-[#1A2329] text-[#DE7823] focus:ring-[#DE7823] focus:ring-offset-[#2E3D47]" />
                            <label htmlFor="privacy" className="text-sm text-[#A8ADB8] cursor-pointer leading-tight">
                              I accept the <a href="/privacy-policy" target="_blank" className="text-white hover:text-[#DE7823] transition-colors font-medium border-b border-[#DE7823]/30">Privacy Policy</a> *
                            </label>
                          </div>
                        </div>

                        <Button type="submit" disabled={loading || !agreedToTerms || !agreedToPrivacy} className="w-full bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] hover:from-[#BF4A3B] hover:to-[#A31E52] text-white h-12 text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-4">
                          {loading ? 'Processing...' : 'Submit Application'}
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-[#A8ADB8] text-sm">Enter your credentials to access your dashboard.</p>
                      </div>

                      <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="loginEmail" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Email Address *</Label>
                          <Input id="loginEmail" name="email" type="email" value={loginData.email} onChange={handleLoginChange} className={inputClasses} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="loginPassword" className="text-[#A8ADB8] text-xs uppercase tracking-wider font-semibold">Password *</Label>
                          <Input id="loginPassword" name="password" type="password" value={loginData.password} onChange={handleLoginChange} className={inputClasses} required />
                        </div>
                        <div className="flex justify-end">
                          <button type="button" className="text-sm text-[#DE7823] hover:text-white transition-colors">Recover Password</button>
                        </div>
                        <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] hover:from-[#BF4A3B] hover:to-[#A31E52] text-white h-12 text-base shadow-lg disabled:opacity-50 mt-2">
                          {loading ? 'Authenticating...' : 'Secure Login'}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};