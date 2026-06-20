import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, MapPin, Zap, Clock, MessageSquare } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// ---------------------------------------------------------------------------
// Helpers & Animation Variants
// ---------------------------------------------------------------------------
const noiseTexture = (rgb, alpha) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 ${rgb.r}  0 0 0 0 ${rgb.g}  0 0 0 0 ${rgb.b}  0 0 0 ${alpha} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

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
    <div className="min-h-screen bg-[#26323A] relative">
    {/* Global Background Layer */}
      <div className="fixed inset-0 z-0">
        <img 
          // I brought your original team image back!
          src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzY0NjU2ODI1fDA&ixlib=rb-4.1.0&q=85" 
          alt="Professional Team"
          // Removed the opacity-20 so the image is fully rendered
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            // Lowered the overlay opacity from 0.94 down to 0.75 in the middle so the photo shines through perfectly!
            backgroundImage: `${noiseTexture({ r: 0.15, g: 0.19, b: 0.22 }, 0.5)}, linear-gradient(180deg, rgba(38,50,58,0.85) 0%, rgba(38,50,58,0.75) 50%, rgba(38,50,58,0.95) 100%)`,
            backgroundRepeat: 'repeat, no-repeat'
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <Header />

        {/* Page Header */}
        <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 min-h-[450px] flex items-center bg-transparent">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] text-white rounded-full text-sm font-bold mb-6 shadow-[0_0_20px_rgba(191,74,59,0.4)]">
                  Let's Connect
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  We'd Love to Hear From You
                </h1>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-lg sm:text-xl text-[#A8ADB8] leading-relaxed mb-10 max-w-2xl mx-auto">
                  Have a research project in mind? Our team of experts is ready to help you gather the insights that matter most.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-3 bg-[#2E3D47] border border-[#3E4F59] px-6 py-3 rounded-xl shadow-lg">
                  <Zap className="text-[#DE7823]" size={20} />
                  <span className="text-sm font-semibold text-[#A8ADB8]">Quick Response</span>
                </div>
                <div className="flex items-center gap-3 bg-[#2E3D47] border border-[#3E4F59] px-6 py-3 rounded-xl shadow-lg">
                  <Clock className="text-[#BF4A3B]" size={20} />
                  <span className="text-sm font-semibold text-[#A8ADB8]">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3 bg-[#2E3D47] border border-[#3E4F59] px-6 py-3 rounded-xl shadow-lg">
                  <MessageSquare className="text-[#A31E52]" size={20} />
                  <span className="text-sm font-semibold text-[#A8ADB8]">Free Consultation</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
              
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <Card className="bg-[#2E3D47] border border-[#3E4F59] shadow-2xl hover:border-[#BF4A3B] transition-colors duration-500 overflow-hidden">
                  <CardHeader className="bg-[#2E3D47]/50 border-b border-[#3E4F59] pb-6">
                    <CardTitle className="text-2xl text-white">Submit Inquiry</CardTitle>
                    <CardDescription className="text-base text-[#A8ADB8]">Our team responds to all inquiries within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="h-12 bg-[#26323A] border-[#3E4F59] text-white placeholder:text-[#A8ADB8]/50 focus-visible:ring-[#BF4A3B] focus-visible:border-[#BF4A3B]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                          <Input 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="h-12 bg-[#26323A] border-[#3E4F59] text-white placeholder:text-[#A8ADB8]/50 focus-visible:ring-[#BF4A3B] focus-visible:border-[#BF4A3B]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-white mb-2">Organization</label>
                          <Input 
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company name"
                            className="h-12 bg-[#26323A] border-[#3E4F59] text-white placeholder:text-[#A8ADB8]/50 focus-visible:ring-[#BF4A3B] focus-visible:border-[#BF4A3B]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Research Requirements *</label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your research objectives and intelligence needs..."
                          rows={6}
                          className="bg-[#26323A] border-[#3E4F59] text-white placeholder:text-[#A8ADB8]/50 focus-visible:ring-[#BF4A3B] focus-visible:border-[#BF4A3B] resize-none"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] hover:from-[#BF4A3B] hover:to-[#A31E52] h-14 text-lg font-bold shadow-[0_0_20px_rgba(191,74,59,0.3)] hover:shadow-[0_0_30px_rgba(191,74,59,0.5)] transition-all duration-300"
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2 space-y-8 lg:pt-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#3E4F59] pb-4">Contact Channels</h3>
                  <div className="space-y-8">
                    <Card className="bg-[#2E3D47] border border-[#3E4F59] hover:-translate-y-1 hover:border-[#DE7823] transition-all duration-300">
                      <CardContent className="p-6 flex items-start">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Mail className="text-white" size={24} />
                        </div>
                        <div className="ml-5">
                          <div className="font-bold text-white text-lg mb-1">Email</div>
                          <a href={`mailto:${mockData.company.email}`} className="text-[#A8ADB8] hover:text-[#DE7823] transition-colors">
                            {mockData.company.email}
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#2E3D47] border border-[#3E4F59] hover:-translate-y-1 hover:border-[#BF4A3B] transition-all duration-300">
                      <CardContent className="p-6 flex items-start">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#BF4A3B] to-[#A31E52] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <MapPin className="text-white" size={24} />
                        </div>
                        <div className="ml-5">
                          <div className="font-bold text-white text-lg mb-1">Office Location</div>
                          <div className="text-[#A8ADB8] leading-relaxed">
                            {mockData.company.address}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};