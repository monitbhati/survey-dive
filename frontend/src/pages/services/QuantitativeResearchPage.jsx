import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Users, Target, Shield, ArrowRight, CheckCircle, Zap, BarChart3, Globe, Activity
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const QuantitativeResearchPage = () => {
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
              Quantitative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE7823] to-[#BF4A3B]">Research</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#A8ADB8] leading-relaxed mb-10 max-w-2xl mx-auto">
              Large-scale quantitative studies delivering statistically significant insights across diverse populations and market segments.
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
            <h2 className="text-3xl font-bold text-white mb-6">What is Quantitative Research?</h2>
            <p className="text-lg text-[#A8ADB8] leading-relaxed">
              Quantitative research employs statistical methods and large sample sizes to measure, analyze, and quantify market behaviors, preferences, and trends with mathematical precision.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Research Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: 'Statistical Rigor', list: ['Representative sampling', 'Confidence intervals', 'Significance testing'] },
                { icon: Shield, title: 'Data Validation', list: ['Outlier detection', 'Consistency validation', 'Statistical verification'] },
                { icon: Globe, title: 'Scale & Coverage', list: ['Large sample sizes', 'Multi-market studies', 'Cross-demographic analysis'] },
                { icon: Zap, title: 'Advanced Analytics', list: ['Multivariate analysis', 'Statistical modeling', 'Predictive insights'] }
              ].map((app, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md">
                  <CardContent className="pt-8 pb-8">
                    <app.icon className="text-[#DE7823] mb-6" size={32} />
                    <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                    <ul className="space-y-3">
                      {app.list.map((item, i) => (
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

        {/* Methodologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Research Methodologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'Survey Research', list: ['Online Surveys', 'Telephone Interviews', 'Mixed-Mode Studies', 'Panel Research'] },
                { icon: BarChart3, title: 'Market Measurement', list: ['Market Sizing', 'Brand Tracking', 'Usage & Attitude', 'Competitive Analysis'] },
                { icon: Shield, title: 'Statistical Analysis', list: ['Regression Analysis', 'Factor Analysis', 'Cluster Analysis', 'Conjoint Analysis'] }
              ].map((m, idx) => (
                <Card key={idx} className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md">
                  <CardContent className="pt-8 pb-8">
                    <m.icon className="text-[#BF4A3B] mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-4">{m.title}</h3>
                    <ul className="space-y-3">
                      {m.list.map((item, i) => (
                        <li key={i} className="text-[#A8ADB8] text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#BF4A3B]"></div>
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
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Research Process</h2>
            <div className="space-y-12">
              {[
                { n: '01', t: 'Research Design', d: 'Objective setting, sample size calculations, and statistical framework design.' },
                { n: '02', t: 'Sampling Strategy', d: 'Sound sampling techniques to ensure representative population coverage.' },
                { n: '03', t: 'Data Collection', d: 'Systematic gathering with real-time quality monitoring.' },
                { n: '04', t: 'Statistical Analysis', d: 'Multivariate analysis and inferential testing.' },
                { n: '05', t: 'Insights & Reporting', d: 'Actionable reports with statistical significance testing.' }
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