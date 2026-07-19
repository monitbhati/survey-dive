import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Zap, MessageSquare, ArrowRight, ShieldCheck, Building2, Clock } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API}/contact/submit`, formData);
      toast.success(response.data.message || 'Inquiry submitted successfully.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full h-12 px-4 rounded-md border border-gray-300 bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#4B1E73] focus:ring-1 focus:ring-[#4B1E73] text-sm transition-all";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#4B1E73] selection:text-white flex flex-col relative">
      <Header />

      <main className="flex-grow pb-24 relative z-10">
        
        {/* --- CONTACT HERO SECTION WITH IMAGE BG --- */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-20 border-b border-gray-200 pb-16 overflow-hidden">
          
          {/* 1. BACKGROUND IMAGE LAYER */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/5561910/pexels-photo-5561910.jpeg" /* <-- PASTE YOUR IMAGE LINK HERE */
              alt="Advisory Contact Background"
              className="w-full h-full object-cover grayscale opacity-30 blur-[2px]"
            />
            {/* Brand Tint & Frosted Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B1E73]/10 via-transparent to-[#E69B57]/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white backdrop-blur-[1px]" />
          </div>

          {/* 2. FOREGROUND CONTENT */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#4B1E73]/10 text-[#4B1E73] border border-[#4B1E73]/20 text-xs font-semibold px-3 py-1.5 rounded-md mb-6 tracking-widest uppercase font-mono shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B1E73]"></span>
                01 / Advisory & Operations Inquiries
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Initiate a Strategic Dialogue.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal mb-8">
                Connect with our research directors to discuss custom questionnaire architecture, global sampling incidence rates, or enterprise reporting requirements.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4 border-t border-gray-200/80">
                <div className="flex items-center gap-2.5 bg-white border border-gray-200 px-4 py-2 rounded-md shadow-2xs">
                  <Zap className="text-[#4B1E73]" size={16} />
                  <span className="text-xs font-mono font-semibold text-gray-700 uppercase tracking-wider">Response SLA: &lt; 24 Hours</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white border border-gray-200 px-4 py-2 rounded-md shadow-2xs">
                  <ShieldCheck className="text-[#E69B57]" size={16} />
                  <span className="text-xs font-mono font-semibold text-gray-700 uppercase tracking-wider">Strict NDA & Privacy Protocols</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FORMS & CHANNELS */}
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7">
                <Card className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-1.5 bg-gradient-to-r from-[#4B1E73] to-[#E69B57]" />
                  <CardHeader className="bg-gray-50/50 border-b border-gray-200 p-8">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight">Commission Research Scoping</CardTitle>
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">FORM // REF-01</span>
                    </div>
                    <CardDescription className="text-sm text-gray-600 font-normal">
                      Provide project specifics or general inquiry details below. Our intelligence team will review feasibility immediately upon receipt.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">Full Name *</label>
                        <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Dr. Jane Doe or Executive Leader" className={inputClasses} required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">Corporate Email *</label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="j.doe@enterprise.com" className={inputClasses} required />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">Organization</label>
                          <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Global Analytics Corp" className={inputClasses} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">Research Requirements & Objectives *</label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Detail your target demographics, sample incidence requirements, geographic scope, or methodology preference (Quant/Qual/CATI)..." rows={6} className="w-full p-4 rounded-md border border-gray-300 bg-gray-50/50 text-gray-900 focus:bg-white focus:border-[#4B1E73] focus:ring-1 focus:ring-[#4B1E73] text-sm resize-none" required />
                      </div>
                      <div className="pt-2">
                        <Button type="submit" disabled={loading} className="w-full h-12 bg-gradient-to-r from-[#4B1E73] to-[#3D1860] hover:opacity-95 text-white font-semibold text-sm rounded-md shadow-md transition-all flex items-center justify-center gap-2">
                          {loading ? 'Transmitting Briefing...' : <>Submit Project Briefing <ArrowRight size={16} /></>}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-5 space-y-6">
                <div className="border-b border-gray-200 pb-4 mb-2">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Direct Operations Channels</h3>
                </div>
                
                <Card className="bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4B1E73]/10 border border-[#4B1E73]/20 rounded-md flex items-center justify-center text-[#4B1E73] shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-1">Electronic Correspondence</div>
                      <div className="font-bold text-gray-900 text-base mb-1">General & Advisory Inquiries</div>
                      <a href={`mailto:${mockData.company.email}`} className="text-sm font-semibold text-[#4B1E73] hover:underline break-all">
                        {mockData.company.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E69B57]/10 border border-[#E69B57]/20 rounded-md flex items-center justify-center text-[#E69B57] shrink-0">
                      <Building2 size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-1">Physical Infrastructure</div>
                      <div className="font-bold text-gray-900 text-base mb-1">Global Headquarters</div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {mockData.company.address}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 mt-8">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-900 uppercase tracking-wider">
                    <Clock size={16} className="text-[#4B1E73]" /> Global Fieldwork Coverage
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our CATI call centers, quantitative data science teams, and qualitative moderation leads operate across North American, European, and APAC time zones.
                  </p>
                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span>Fieldwork Status: Active</span>
                    <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Operations
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};