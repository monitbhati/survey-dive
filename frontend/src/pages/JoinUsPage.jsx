import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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
      // Using ipapi.co free API for IP geolocation
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
      // Silently fail - user can still enter country manually
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
    
    // Comprehensive client-side validation with specific error messages
    const missingFields = [];
    
    if (!signupData.firstName || signupData.firstName.trim() === '') {
      missingFields.push('First Name');
    }
    
    if (!signupData.lastName || signupData.lastName.trim() === '') {
      missingFields.push('Last Name');
    }
    
    if (!signupData.email || signupData.email.trim() === '') {
      missingFields.push('Email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    if (!signupData.password || signupData.password.trim() === '') {
      missingFields.push('Password');
    } else if (signupData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    
    if (!signupData.age || signupData.age === '') {
      missingFields.push('Age');
    } else if (parseInt(signupData.age) < 18) {
      toast.error('You must be at least 18 years old to register');
      return;
    } else if (parseInt(signupData.age) > 100) {
      toast.error('Please enter a valid age');
      return;
    }
    
    if (!signupData.country || signupData.country.trim() === '') {
      missingFields.push('Country');
    }
    
    if (!signupData.gender || signupData.gender === '') {
      missingFields.push('Gender');
    }
    
    // Show error for missing fields
    if (missingFields.length > 0) {
      toast.error(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }
    
    // Check if user agreed to terms and privacy policy
    if (!agreedToTerms || !agreedToPrivacy) {
      toast.error('Please agree to the Terms & Conditions and Privacy Policy to continue');
      return;
    }
    
    setLoading(true);
    try {
      // Map frontend fields to backend expected fields
      const backendData = {
        name: signupData.firstName,
        surname: signupData.lastName,
        email: signupData.email,
        password: signupData.password,
        age: parseInt(signupData.age),
        country: signupData.country,
        gender: signupData.gender
      };
      
      const response = await axios.post(`${API}/auth/signup`, backendData);
      toast.success('Registration successful! Please login with your credentials.');
      setSignupData({ firstName: '', lastName: '', email: '', age: '', country: '', gender: '', password: '' });
      setAgreedToTerms(false);
      setAgreedToPrivacy(false);
      setActiveTab('login');
    } catch (error) {
      console.error('Signup error:', error.message || 'Registration failed');
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response?.data?.detail) {
        // Handle both string and array formats
        if (typeof error.response.data.detail === 'string') {
          errorMessage = error.response.data.detail;
        } else if (Array.isArray(error.response.data.detail)) {
          // Parse validation errors from backend
          const errors = error.response.data.detail.map(err => {
            if (err.msg) {
              const field = err.loc ? err.loc[err.loc.length - 1] : 'field';
              return `${field}: ${err.msg}`;
            }
            return err;
          });
          errorMessage = errors.join('; ');
        } else {
          errorMessage = 'Registration failed. Please check your information.';
        }
      } else if (error.response?.status === 400) {
        errorMessage = 'Email already registered or invalid data. Please check your information.';
      } else if (error.response?.status === 422) {
        errorMessage = 'Please check all fields are filled correctly.';
      } else if (error.message && error.message !== 'Network Error') {
        errorMessage = error.message;
      }
      
      toast.error(errorMessage, { duration: 5000 });
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
      
      // Redirect to user dashboard after 1 second
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      console.error('Login error:', error.message || 'Login failed');
      let errorMessage = 'Login failed';
      
      if (error.response?.data?.detail) {
        // Handle both string and array formats
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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1758873269317-51888e824b28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwbWVldGluZ3xlbnwwfHx8fDE3NjQ3MTcxNzd8MA&ixlib=rb-4.1.0&q=85" 
          alt="Diverse Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-pink-900/85 to-yellow-900/85"></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Page Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-[550px] flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-5 py-2 bg-yellow-400/90 backdrop-blur-sm rounded-full text-sm font-bold text-purple-900 mb-4 shadow-lg">
                Your Voice Matters
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Join Our Global Panel
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mb-4 drop-shadow-md">
                Turn your opinions into income. Share your thoughts on products, services, and trends while earning rewards from the comfort of your home.
              </p>
              <div className="flex flex-wrap gap-6 justify-center mt-8 text-left max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white drop-shadow-md">Earn Extra Income</h3>
                    <p className="text-sm text-gray-200 drop-shadow">Get paid for sharing your opinions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white drop-shadow-md">Flexible Timing</h3>
                    <p className="text-sm text-gray-200 drop-shadow">Work on your own schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white drop-shadow-md">Simple & Easy</h3>
                    <p className="text-sm text-gray-200 drop-shadow">Quick online surveys</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup/Login Forms */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-2xl">
            <Card className="border-2 border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg">
              <CardHeader>
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('signup')}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'signup'
                        ? 'bg-gradient-to-r from-yellow-500 to-pink-700 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setActiveTab('login')}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === 'login'
                        ? 'bg-gradient-to-r from-yellow-500 to-pink-700 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Login
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                {activeTab === 'signup' ? (
                  <div>
                    <CardHeader className="bg-transparent border-b border-white/20">
                      <CardTitle className="text-2xl text-white drop-shadow-md">Create Your Account</CardTitle>
                      <CardDescription className="text-gray-100 drop-shadow-sm">Join our panel and start earning today</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="text-white drop-shadow-md">First Name *</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={signupData.firstName}
                              onChange={handleSignupChange}
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-white drop-shadow-md">Last Name *</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={signupData.lastName}
                              onChange={handleSignupChange}
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white drop-shadow-md">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="password" className="text-white drop-shadow-md">Password * (min. 6 characters)</Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            placeholder="Create a secure password"
                            minLength={6}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="age" className="text-white drop-shadow-md">Age * (18+)</Label>
                            <Input
                              id="age"
                              name="age"
                              type="number"
                              min="18"
                              max="100"
                              value={signupData.age}
                              onChange={handleSignupChange}
                              placeholder="Your age"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="gender" className="text-white drop-shadow-md">Gender *</Label>
                            <Select name="gender" value={signupData.gender} onValueChange={(value) => handleSelectChange('gender', value)} required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="country" className="text-white drop-shadow-md">
                            Country * {detectingCountry && <span className="text-xs text-yellow-300">(Detecting...)</span>}
                          </Label>
                          <Input
                            id="country"
                            name="country"
                            value={signupData.country}
                            onChange={handleSignupChange}
                            placeholder={detectingCountry ? "Detecting your country..." : "Enter your country"}
                            required
                          />
                        </div>
                        
                        {/* Terms and Privacy Agreement */}
                        <div className="space-y-3 pt-2">
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="terms"
                              checked={agreedToTerms}
                              onChange={(e) => setAgreedToTerms(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded border-white/30 text-purple-600 focus:ring-purple-500"
                            />
                            <label htmlFor="terms" className="text-sm text-white drop-shadow-md cursor-pointer">
                              I agree to the{' '}
                              <a 
                                href="/terms-conditions" 
                                target="_blank"
                                className="text-yellow-300 hover:text-yellow-200 underline font-semibold"
                              >
                                Terms & Conditions
                              </a>
                              {' '}*
                            </label>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="privacy"
                              checked={agreedToPrivacy}
                              onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                              className="mt-1 w-4 h-4 rounded border-white/30 text-purple-600 focus:ring-purple-500"
                            />
                            <label htmlFor="privacy" className="text-sm text-white drop-shadow-md cursor-pointer">
                              I have read and accept the{' '}
                              <a 
                                href="/privacy-policy" 
                                target="_blank"
                                className="text-yellow-300 hover:text-yellow-200 underline font-semibold"
                              >
                                Privacy Policy
                              </a>
                              {' '}*
                            </label>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={loading || !agreedToTerms || !agreedToPrivacy}
                          className="w-full bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                      </form>
                    </CardContent>
                  </div>
                ) : (
                  <div>
                    <CardHeader className="bg-transparent border-b border-white/20">
                      <CardTitle className="text-2xl text-white drop-shadow-md">Welcome Back</CardTitle>
                      <CardDescription className="text-gray-100 drop-shadow-sm">Login to your panelist account</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="loginEmail" className="text-white drop-shadow-md">Email *</Label>
                          <Input
                            id="loginEmail"
                            name="email"
                            type="email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="loginPassword" className="text-white drop-shadow-md">Password *</Label>
                          <Input
                            id="loginPassword"
                            name="password"
                            type="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 h-12 text-base"
                        >
                          {loading ? 'Logging in...' : 'Login'}
                        </Button>
                        <p className="text-sm text-center text-white drop-shadow-md">
                          Forgot your password? <button type="button" className="text-yellow-300 font-semibold hover:underline drop-shadow-md">Reset it here</button>
                        </p>
                      </form>
                    </CardContent>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Why Researchers Love Our Panel */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Why Researchers Love Our Panel</h2>
              <p className="text-lg text-gray-100 drop-shadow-md">Join thousands of panelists making a difference</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-200 shadow-xl text-center hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Diverse Opportunities</h3>
                <p className="text-gray-700">Access surveys across industries</p>
                <div className="mt-4 bg-gradient-to-r from-yellow-500 to-pink-700 text-white px-4 py-3 rounded-lg">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm">Surveys Monthly</p>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-200 shadow-xl text-center hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Competitive Rewards</h3>
                <p className="text-gray-700">Earn for every completed survey</p>
                <div className="mt-4 bg-gradient-to-r from-yellow-500 to-pink-700 text-white px-4 py-3 rounded-lg">
                  <p className="text-2xl font-bold">Fast Payouts</p>
                  <p className="text-sm">Multiple options</p>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-200 shadow-xl text-center hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Privacy</h3>
                <p className="text-gray-700">Your information is secure</p>
                <div className="mt-4 bg-gradient-to-r from-yellow-500 to-pink-700 text-white px-4 py-3 rounded-lg">
                  <p className="text-2xl font-bold">100% Secure</p>
                  <p className="text-sm">Encrypted data</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer />
      </div>
    </div>
  );
};