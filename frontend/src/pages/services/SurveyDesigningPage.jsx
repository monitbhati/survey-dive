import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  ClipboardList, Layout, Smartphone, Settings, CheckCircle, ArrowRight, BarChart3, Zap, TestTube
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const SurveyDesigningPage = () => {
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
              Survey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE7823] to-[#BF4A3B]">Designing</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#A8ADB8] leading-relaxed mb-10 max-w-2xl mx-auto">
              Expertly crafted survey instruments that balance respondent experience with data quality, ensuring optimal completion rates and actionable insights.
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
            <h2 className="text-3xl font-bold text-white mb-6">What is Survey Designing?</h2>
            <p className="text-lg text-[#A8ADB8] leading-relaxed">
              Survey designing is the art and science of creating questionnaires that accurately capture data while providing a positive respondent experience. A well-designed survey yields reliable, actionable insights that drive business decisions.
            </p>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Design Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Layout, title: 'Question Development', items: ['Objective wording', 'Scale selection', 'Option optimization', 'Order logic'] },
                { icon: Settings, title: 'Logic Programming', items: ['Skip logic implementation', 'Text piping & substitution', 'Randomization', 'Quota management'] },
                { icon: Smartphone, title: 'Mobile Optimization', items: ['Mobile-first design', 'Touch-friendly UI', 'Fast loading times', 'Cross-device testing'] },
                { icon: TestTube, title: 'Testing & Refinement', items: ['Soft launch testing', 'Logic validation', 'Timing optimization', 'Respondent feedback'] }
              ].map((exp, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md">
                  <CardContent className="pt-8 pb-8">
                    <exp.icon className="text-[#DE7823] mb-6" size={32} />
                    <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                    <ul className="space-y-3">
                      {exp.items.map((item, i) => (
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

        {/* Principles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Respondent-Centric', text: 'We prioritize user experience to keep respondents engaged and motivated.' },
                { icon: BarChart3, title: 'Data Quality Focus', text: 'Every design decision is made with data integrity in mind.' },
                { icon: ClipboardList, title: 'Research Best Practices', text: 'We follow industry standards and academic research principles.' }
              ].map((p, idx) => (
                <div key={idx} className="text-center p-8 border border-[#3E4F59] bg-[#2E3D47]/50 rounded-2xl">
                  <p.icon className="text-[#BF4A3B] mx-auto mb-6" size={40} />
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-[#A8ADB8] text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A2329]/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Design Process</h2>
            <div className="space-y-12">
              {[
                { n: '01', t: 'Objectives Briefing', d: 'Understanding research goals and key metrics.' },
                { n: '02', t: 'Questionnaire Development', d: 'Crafting questions to optimize data quality.' },
                { n: '03', t: 'Programming & Logic', d: 'Implementing skip patterns and randomization.' },
                { n: '04', t: 'Pilot Testing', d: 'Validating instruments before full deployment.' },
                { n: '05', t: 'Refinement & Launch', d: 'Final adjustments for fieldwork.' }
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