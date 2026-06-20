import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Phone, 
  Headphones, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Globe,
  BarChart3,
  Activity
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const CATIPage = () => {
  return (
    <div className="min-h-screen bg-[#26323A] flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-4xl text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CATI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE7823] to-[#BF4A3B]">Excellence</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#A8ADB8] leading-relaxed mb-10 max-w-2xl mx-auto">
              Computer Assisted Telephone Interviewing with trained professionals delivering high-quality phone surveys and deep respondent engagement.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] hover:from-[#BF4A3B] hover:to-[#A31E52] text-lg px-8 h-14 shadow-lg">
                  Request a Quote <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A2329]/50 border-t border-b border-[#3E4F59]/50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">What is CATI?</h2>
            <p className="text-lg text-[#A8ADB8] leading-relaxed">
              CATI (Computer Assisted Telephone Interviewing) combines professional telephone interviewers with advanced software systems to conduct structured phone surveys, ensuring consistent data collection and superior respondent experiences.
            </p>
          </div>
        </section>

        {/* Why Choose CATI */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose CATI?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'Personal Touch', desc: 'Human interaction builds rapport and encourages detailed responses' },
                { icon: Shield, title: 'High Quality', desc: 'Live monitoring ensures data accuracy and proper interview conduct' },
                { icon: Globe, title: 'Complex Topics', desc: 'Ideal for detailed, technical, or sensitive research subjects' },
                { icon: BarChart3, title: 'Better Response', desc: 'Higher completion rates compared to self-administered surveys' }
              ].map((item, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md hover:border-[#DE7823] transition-colors">
                  <CardContent className="pt-8 pb-8 text-center">
                    <item.icon className="text-[#DE7823] mx-auto mb-4" size={32} />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#A8ADB8]">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Headphones, title: 'Professional Interviewers', items: ['Extensive training', 'Subject matter expertise', 'Soft skills assessment', 'Performance monitoring'] },
                { icon: Phone, title: 'Advanced CATI Software', items: ['Smart question routing', 'Automatic data validation', 'Callback management', 'Real-time reporting'] },
                { icon: Shield, title: 'Quality Control', items: ['Live supervisor monitoring', 'Call recording & review', 'Validation callbacks', 'Performance metrics'] },
                { icon: Globe, title: 'Multi-Language Support', items: ['Native speakers', 'Cultural adaptation', 'Localized scripts', 'Global coverage'] }
              ].map((cap, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md">
                  <CardContent className="pt-8 pb-8">
                    <cap.icon className="text-[#BF4A3B] mb-4" size={32} />
                    <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
                    <ul className="space-y-3">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex items-start text-[#A8ADB8] text-sm">
                          <CheckCircle className="text-[#DE7823] mr-3 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A2329]/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Our CATI Process</h2>
            <div className="space-y-12">
              {[
                { n: '01', t: 'Script Development', d: 'Conversational scripts optimized for telephone delivery.' },
                { n: '02', t: 'Interviewer Training', d: 'Project-specific sessions for context and technique.' },
                { n: '03', t: 'Soft Launch', d: 'Controlled pilot phase to refine the approach.' },
                { n: '04', t: 'Full Fieldwork', d: 'Continuous calling schedule with active quality monitoring.' },
                { n: '05', t: 'Quality Verification', d: 'Data cleaning and QA documentation.' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#DE7823] text-[#DE7823] flex items-center justify-center flex-shrink-0 font-bold">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.t}</h4>
                    <p className="text-[#A8ADB8]">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};