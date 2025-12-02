import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/contact/submit`, formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
              Let's Connect
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Have a research project in mind? Our team of experts is ready to help you gather the insights that matter most.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Submit Inquiry</CardTitle>
                <CardDescription className="text-base">Our team responds to all inquiries within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Research Requirements *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your research objectives and intelligence needs..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-slate-800 hover:bg-slate-900 h-12 text-base"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-slate-700" size={24} />
                    </div>
                    <div className="ml-5">
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <div className="text-gray-600">{mockData.company.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="text-slate-700" size={24} />
                    </div>
                    <div className="ml-5">
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <div className="text-gray-600">{mockData.company.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-slate-700" size={24} />
                    </div>
                    <div className="ml-5">
                      <div className="font-semibold text-gray-900 mb-1">Office Location</div>
                      <div className="text-gray-600">{mockData.company.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Office Hours</h4>
                <div className="text-gray-700 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};