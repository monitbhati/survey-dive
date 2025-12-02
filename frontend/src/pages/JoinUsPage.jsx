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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join Our Community
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Create an account to access exclusive research insights and connect with our team
            </p>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-2xl">Create Your Account</CardTitle>
                    <CardDescription className="text-base">Fill in your details to get started</CardDescription>
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
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-2xl">Welcome Back</CardTitle>
                    <CardDescription className="text-base">Login to access your account</CardDescription>
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