import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Users, 
  MessageCircle, 
  Target, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  FileText,
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

export const QualitativePage = () => {
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
              Qualitative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE7823] to-[#BF4A3B]">Deep Dives</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#A8ADB8] leading-relaxed mb-10 max-w-2xl mx-auto">
              Uncover the "why" behind behaviors through expert-led in-depth interviews, focus groups, and ethnographic research that reveal insights beyond numbers.
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
            <h2 className="text-3xl font-bold text-white mb-6">What is Qualitative Research?</h2>
            <p className="text-lg text-[#A8ADB8] leading-relaxed">
              Qualitative research explores the deeper meaning, motivations, and contexts behind human behavior. Through open-ended conversations and observations, we uncover rich insights that quantitative methods cannot capture.
            </p>
          </div>
        </section>

        {/* Research Methods */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Qualitative Methods</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MessageCircle, title: 'In-Depth Interviews', list: ['Structured & semi-structured', '45-90 minute sessions', 'Expert moderators', 'Audio/video recording'] },
                { icon: Users, title: 'Focus Groups', list: ['6-10 participants', 'Professional facilities', 'Observation rooms', 'Live streaming options'] },
                { icon: Eye, title: 'Ethnographic Research', list: ['In-home observations', 'Shop-alongs', 'Workplace studies', 'Contextual inquiry'] }
              ].map((method, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md">
                  <CardContent className="pt-8 pb-8">
                    <method.icon className="text-[#DE7823] mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                    <ul className="space-y-3">
                      {method.list.map((item, i) => (
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

        {/* Our Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Qualitative Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: 'Expert Moderators', text: 'Moderators who probe beneath surface responses to create comfortable environments for candid sharing.' },
                { icon: Lightbulb, title: 'Thematic Analysis', text: 'Rigorous analytical frameworks to identify patterns and synthesize strategic implications.' },
                { icon: FileText, title: 'Comprehensive Documentation', text: 'Full transcriptions, field notes, and recordings preserving the richness of data.' },
                { icon: Activity, title: 'Strategic Recruitment', text: 'Targeted screening to ensure participants articulate deep, meaningful experiences.' }
              ].map((app, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80">
                  <CardContent className="pt-8 pb-8">
                    <app.icon className="text-[#BF4A3B] mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                    <p className="text-[#A8ADB8] leading-relaxed">{app.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A2329]/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Qualitative Process</h2>
            <div className="space-y-12">
              {[
                { n: '01', t: 'Research Design', d: 'Objective setting and discussion guide development.' },
                { n: '02', t: 'Participant Recruitment', d: 'Targeted recruitment with rigorous screening.' },
                { n: '03', t: 'Fieldwork Execution', d: 'Expert moderation for authentic insight gathering.' },
                { n: '04', t: 'Analysis & Synthesis', d: 'Rigorous thematic pattern identification.' },
                { n: '05', t: 'Strategic Reporting', d: 'Actionable recommendations tied to business goals.' }
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