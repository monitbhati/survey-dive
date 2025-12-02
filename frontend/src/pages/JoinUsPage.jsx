import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { UserPlus, LogIn } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const JoinUsPage = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    surname: '',
    email: '',
    age: '',
    country: '',
    profession: '',
    gender: '',
    password: ''
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signup');

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/auth/signup`, {
        ...signupData,
        age: parseInt(signupData.age)
      });
      
      toast.success(response.data.message || 'Account created successfully! Please login to continue.');
      
      // Reset form
      setSignupData({
        name: '',
        surname: '',
        email: '',
        age: '',
        country: '',
        profession: '',
        gender: '',
        password: ''
      });
      
      // Switch to login tab
      setActiveTab('login');
    } catch (error) {
      console.error('Signup error:', error);
      const errorMessage = error.response?.data?.detail || 'Failed to create account. Please try again.';
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
      
      // Store token in localStorage
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      toast.success(`Welcome back, ${response.data.user.name}!`);
      
      // Reset form
      setLoginData({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.detail || 'Login failed. Please check your credentials.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-700 mb-4">
              Your Voice Matters
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join Our Global Panel
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
              Turn your opinions into income. Share your thoughts on products, services, and trends while earning rewards from the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Earn Extra Income</h3>
                  <p className="text-sm text-gray-600">Get paid for sharing your opinions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Flexible Timing</h3>
                  <p className="text-sm text-gray-600">Work on your own schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Simple Surveys</h3>
                  <p className="text-sm text-gray-600">Easy questions, no special skills needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Join Our Panel?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">Earn Money</div>
                <p className="text-gray-700 font-medium mb-2">Get Paid Per Survey</p>
                <p className="text-sm text-gray-600">Answer simple questions and receive payments directly to your account</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">Flexibility</div>
                <p className="text-gray-700 font-medium mb-2">Work Anytime, Anywhere</p>
                <p className="text-sm text-gray-600">Complete surveys from your phone, tablet, or computer at your convenience</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">Impact</div>
                <p className="text-gray-700 font-medium mb-2">Shape Products & Services</p>
                <p className="text-sm text-gray-600">Your opinions help companies improve their offerings and make better decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signup" className="text-lg py-3">
                  <UserPlus className="mr-2" size={20} />
                  Sign Up
                </TabsTrigger>
                <TabsTrigger value="login" className="text-lg py-3">
                  <LogIn className="mr-2" size={20} />
                  Login
                </TabsTrigger>
              </TabsList>

              {/* Signup Tab */}
              <TabsContent value="signup">
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100">
                    <CardTitle className="text-2xl">Become a Panelist Today</CardTitle>
                    <CardDescription className="text-base">
                      Join thousands earning extra income by sharing their opinions. Simple registration, verified profiles get priority access to high-paying surveys!
                    </CardDescription>
                    <div className="mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg">
                      <p className="text-sm font-semibold text-center">
                        ✨ Start earning within 24 hours of profile approval
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignup} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">First Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={signupData.name}
                            onChange={handleSignupChange}
                            placeholder="Enter your first name"
                            className="h-12"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="surname" className="text-sm font-semibold text-gray-700 mb-2">Surname *</Label>
                          <Input
                            id="surname"
                            name="surname"
                            value={signupData.surname}
                            onChange={handleSignupChange}
                            placeholder="Enter your surname"
                            className="h-12"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={signupData.email}
                          onChange={handleSignupChange}
                          placeholder="your@email.com"
                          className="h-12"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="age" className="text-sm font-semibold text-gray-700 mb-2">Age *</Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            value={signupData.age}
                            onChange={handleSignupChange}
                            placeholder="Your age"
                            className="h-12"
                            min="18"
                            max="100"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="gender" className="text-sm font-semibold text-gray-700 mb-2">Gender *</Label>
                          <Select 
                            value={signupData.gender} 
                            onValueChange={(value) => setSignupData({...signupData, gender: value})}
                            required
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country" className="text-sm font-semibold text-gray-700 mb-2">Country *</Label>
                        <Input
                          id="country"
                          name="country"
                          value={signupData.country}
                          onChange={handleSignupChange}
                          placeholder="Your country"
                          className="h-12"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="profession" className="text-sm font-semibold text-gray-700 mb-2">Profession *</Label>
                        <Input
                          id="profession"
                          name="profession"
                          value={signupData.profession}
                          onChange={handleSignupChange}
                          placeholder="Your profession"
                          className="h-12"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="signup-password" className="text-sm font-semibold text-gray-700 mb-2">Password *</Label>
                        <Input
                          id="signup-password"
                          name="password"
                          type="password"
                          value={signupData.password}
                          onChange={handleSignupChange}
                          placeholder="Create a strong password"
                          className="h-12"
                          minLength="8"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-slate-800 hover:bg-slate-900 h-12 text-base"
                        disabled={loading}
                      >
                        {loading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Login Tab */}
              <TabsContent value="login">
                <Card className="border-2 border-gray-100 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-100">
                    <CardTitle className="text-2xl">Welcome Back, Panelist!</CardTitle>
                    <CardDescription className="text-base">Login to check available surveys and track your earnings</CardDescription>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>New surveys available daily</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-5">
                      <div>
                        <Label htmlFor="login-email" className="text-sm font-semibold text-gray-700 mb-2">Email Address *</Label>
                        <Input
                          id="login-email"
                          name="email"
                          type="email"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          placeholder="your@email.com"
                          className="h-12"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="login-password" className="text-sm font-semibold text-gray-700 mb-2">Password *</Label>
                        <Input
                          id="login-password"
                          name="password"
                          type="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          placeholder="Enter your password"
                          className="h-12"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-slate-800 hover:bg-slate-900 h-12 text-base"
                        disabled={loading}
                      >
                        {loading ? 'Logging in...' : 'Login'}
                      </Button>

                      <p className="text-center text-sm text-gray-600">
                        Forgot your password? <button type="button" className="text-slate-800 font-semibold hover:underline">Reset it here</button>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};