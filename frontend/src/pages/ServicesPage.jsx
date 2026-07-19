import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ClipboardList, Phone, Users, CheckCircle2, PenTool, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const services = [
  {
    id: 1,
    title: 'Quantitative Research',
    icon: Users,
    code: 'METH-01',
    description: 'Large-scale empirical studies engineered for high-granularity audience segmentation and statistically robust global market tracking.',
    highlights: [
      'B2B Professional & C-Suite Decision Maker Panels',
      'B2C Global Consumer Tracking & Syndicated Cohorts',
      'Specialized Healthcare & Clinical Key Opinion Leaders',
      'Harmonized Sampling Across 50+ Global Markets'
    ],
    slug: 'quantitative-research'
  },
  {
    id: 2,
    title: 'CATI Excellence',
    icon: Phone,
    code: 'METH-02',
    description: 'Computer Assisted Telephone Interviewing executed by native-language research interviewers, turning structured dialogues into analyzable data.',
    highlights: [
      'Highly Calibrated Native-Language Interviewer Network',
      'Centralized Global Operations & Multi-Language Support',
      'Live Supervisory Monitoring & Audio Verification',
      'Advanced Predictive Dialing & Sample Routing Software'
    ],
    slug: 'cati-excellence'
  },
  {
    id: 3,
    title: 'Qualitative Deep Dives',
    icon: PenTool,
    code: 'METH-03',
    description: 'Exploratory qualitative methodologies designed to surface the underlying behavioral drivers and emotional triggers behind market trends.',
    highlights: [
      'Executive In-Depth Interviews (IDIs) & Moderations',
      'Structured Online & Offline Focus Group Discussions',
      'Longitudinal Ethnographic & Digital Diary Studies',
      'Specialized Behavioral Research Moderators'
    ],
    slug: 'qualitative-deep-dives'
  },
  {
    id: 4,
    title: 'Survey Architecture',
    icon: ClipboardList,
    code: 'METH-04',
    description: 'Custom research instruments engineered to eliminate methodological friction, balancing respondent cognitive load with empirical rigor.',
    highlights: [
      'Custom Questionnaire Architecture & Logic Design',
      'Cognitive Flow Optimization & Bias Reduction',
      'Complex Conjoint & MaxDiff Exercise Programming',
      'Device-Agnostic Responsive Instrument Deployment'
    ],
    slug: 'survey-designing'
  }
];

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#4B1E73] selection:text-white flex flex-col relative">
      <Header />

      <main className="flex-grow pt-40 pb-20 relative z-10">
        
        {/* --- SERVICES HERO SECTION WITH IMAGE BG --- */}
        <section className="relative px-4 sm:px-6 lg:px-8 mb-20 border-b border-gray-200 pb-20 overflow-hidden">
          
          {/* 1. BACKGROUND IMAGE LAYER */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://www.pexels.com/photo/close-up-shot-of-a-paper-with-market-research-7947854/" /* <-- PASTE YOUR IMAGE LINK HERE */
              alt="Methodologies Background"
              className="w-full h-full object-cover grayscale opacity-40 blur-[2px]"
            />
            {/* Brand Tint & Frosted Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B1E73]/10 to-[#E69B57]/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white backdrop-blur-[1px]" />
          </div>

          {/* 2. FOREGROUND CONTENT */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#4B1E73]/10 text-[#4B1E73] border border-[#4B1E73]/20 text-xs font-semibold px-3 py-1.5 rounded-md mb-6 tracking-widest uppercase font-mono shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B1E73]"></span>
                01 / Methodological Frameworks
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Empirical rigor designed for high-stakes decision making.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
                We deploy structured quantitative architectures and deep-dive qualitative explorations to capture clean, defensible market signals across global industry verticals.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isPurple = index % 2 === 0;
                const hoverBorderColor = isPurple ? 'hover:border-[#4B1E73] hover:shadow-[#4B1E73]/10' : 'hover:border-[#E69B57] hover:shadow-[#E69B57]/10';
                const iconBgColor = isPurple ? 'text-[#4B1E73] bg-[#4B1E73]/10 border-[#4B1E73]/20' : 'text-[#E69B57] bg-[#E69B57]/10 border-[#E69B57]/20';
                const checkColor = isPurple ? 'text-[#4B1E73]' : 'text-[#E69B57]';

                return (
                  <motion.div key={service.id} variants={fadeInUp} className="h-full">
                    <Card className={`h-full bg-white border-gray-200 shadow-sm hover:shadow-lg rounded-lg transition-all duration-300 ${hoverBorderColor} flex flex-col justify-between overflow-hidden group`}>
                      <div className={`h-1 w-full ${isPurple ? 'bg-gradient-to-r from-[#4B1E73] to-[#7131A8]' : 'bg-gradient-to-r from-[#E69B57] to-[#F2B37A]'}`}></div>
                      
                      <div>
                        <CardHeader className="pb-6 pt-8 px-8">
                          <div className="flex items-center justify-between mb-6">
                            <div className={`w-12 h-12 border rounded-md flex items-center justify-center transition-colors ${iconBgColor}`}>
                              <IconComponent size={22} strokeWidth={2} />
                            </div>
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{service.code}</span>
                          </div>
                          
                          <CardTitle className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-600 leading-relaxed font-normal">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="px-8 pb-8 pt-0">
                          <div className="pt-6 border-t border-gray-100">
                            <h4 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">
                              Execution Parameters
                            </h4>
                            <ul className="space-y-3">
                              {service.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <CheckCircle2 className={`${checkColor} shrink-0 mt-0.5`} size={15} />
                                  <span className="text-xs text-gray-700 font-medium leading-normal">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </div>
                      
                      <div className="p-8 pt-0 mt-auto">
                        <Link to={`/services/${service.slug}`} className="block w-full">
                          <Button variant="outline" className={`w-full bg-white border-gray-300 text-gray-700 ${isPurple ? 'hover:bg-[#4B1E73] hover:border-[#4B1E73]' : 'hover:bg-[#E69B57] hover:border-[#E69B57]'} hover:text-white transition-all h-11 text-xs font-semibold uppercase tracking-wider`}>
                            Review Methodology <ArrowRight className="ml-2" size={14} />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ENTERPRISE CTA SECTION */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1A0B2E] text-white overflow-hidden mt-12 border-t border-gray-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#4B1E73] to-[#E69B57] rounded-full blur-[140px] opacity-25 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/10 border border-white/20 text-gray-300 text-xs font-mono px-3 py-1 rounded mb-4 uppercase tracking-widest shadow-lg">
              Project Scoping
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Require custom sampling or methodological architecture?
            </h2>
            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
              Connect with our advisory directors to scope project feasibility, review global incidence rates, and design a custom inquiry framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#4B1E73] to-[#3D1860] hover:opacity-95 text-white font-semibold text-sm px-8 h-12 rounded-md transition-all shadow-md border border-[#4B1E73]/50">
                  Commission Research Briefing <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};