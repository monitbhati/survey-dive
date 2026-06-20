import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ClipboardList, Phone, Users, CheckCircle, PenTool, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const services = [
  {
    id: 1,
    title: 'Quantitative Research',
    icon: Users,
    description: 'Large-scale quantitative studies delivering statistically significant insights across diverse populations and market segments.',
    highlights: [
      'B2B Professional Panels',
      'B2C Consumer Audiences',
      'Healthcare Specialized Sampling',
      'Global Reach Across 50+ Countries',
      'Real-Time Quality Monitoring'
    ],
    slug: 'quantitative-research'
  },
  {
    id: 2,
    title: 'CATI Excellence',
    icon: Phone,
    description: 'Computer Assisted Telephone Interviewing with trained professionals who conduct high-quality phone surveys. Our state-of-the-art call center technology combined with experienced interviewers ensures superior data collection and respondent engagement.',
    highlights: [
      'Professional Trained Interviewers',
      'Multi-Language Support',
      'Real-Time Call Monitoring',
      'Advanced CATI Software',
      'Quality Control Protocols'
    ],
    slug: 'cati-excellence'
  },
  {
    id: 3,
    title: 'Qualitative Deep Dives',
    icon: PenTool,
    description: 'In-depth qualitative research methodologies that uncover the "why" behind consumer behaviors. Our expert moderators facilitate meaningful conversations through IDIs, focus groups, and ethnographic studies to reveal insights beyond numbers.',
    highlights: [
      'In-Depth Interviews (IDI)',
      'Focus Group Discussions',
      'Ethnographic Research',
      'Expert Moderators',
      'Detailed Thematic Analysis'
    ],
    slug: 'qualitative-deep-dives'
  },
  {
    id: 4,
    title: 'Survey Designing',
    icon: ClipboardList,
    description: 'Expertly crafted survey instruments designed to capture accurate data and actionable insights. Our research specialists create questionnaires that balance respondent experience with data quality, ensuring optimal completion rates and reliable results.',
    highlights: [
      'Custom Questionnaire Development',
      'Survey Flow Optimization',
      'Question Logic Programming',
      'Mobile-Responsive Design',
      'Pilot Testing & Refinement'
    ],
    slug: 'survey-designing'
  }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#26323A] flex flex-col relative">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        
        {/* Page Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="container mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 border border-[#DE7823]/30 bg-[#DE7823]/10 rounded-full text-xs font-semibold tracking-widest uppercase text-[#DE7823] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE7823] animate-pulse"></span>
              Core Offerings
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE7823] to-[#BF4A3B]">Methodologies</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#A8ADB8] leading-relaxed max-w-2xl mx-auto">
              Comprehensive research solutions tailored to deliver facts that matter and strategic intelligence that drives corporate growth.
            </motion.p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-32">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const hoverBorderColor = index % 2 === 0 ? 'hover:border-[#DE7823]' : 'hover:border-[#BF4A3B]';
                const shadowColor = index % 2 === 0 ? 'hover:shadow-[0_10px_40px_-15px_rgba(222,120,35,0.2)]' : 'hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.2)]';

                return (
                  <motion.div key={service.id} variants={fadeInUp} className="h-full">
                    <Card className={`h-full bg-[#2E3D47]/80 backdrop-blur-md border-[#3E4F59] transition-all duration-300 hover:-translate-y-2 ${hoverBorderColor} ${shadowColor} flex flex-col overflow-hidden`}>
                      <CardHeader className="flex-grow-0 pb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                          <IconComponent className="text-white" size={26} strokeWidth={2.5} />
                        </div>
                        <CardTitle className="text-2xl text-white mb-3">{service.title}</CardTitle>
                        <CardDescription className="text-base text-[#A8ADB8] leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex flex-col flex-grow pt-0">
                        <div className="mt-4 mb-8 flex-grow">
                          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Key Capabilities</h4>
                          <ul className="space-y-3">
                            {service.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="text-[#DE7823] mr-3 flex-shrink-0 mt-0.5" size={18} strokeWidth={2} />
                                <span className="text-sm text-[#A8ADB8]">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-auto pt-6 border-t border-[#3E4F59]/50">
                          <Link to={`/services/${service.slug}`} className="block w-full">
                            <Button variant="outline" className="w-full bg-transparent border-[#3E4F59] text-white hover:bg-[#3E4F59] hover:text-white transition-colors h-12">
                              Explore Architecture <ArrowRight className="ml-2" size={18} />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1A2329]/50 border-t border-b border-[#3E4F59]/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Factum Advantage</h2>
              <p className="text-lg text-[#A8ADB8]">Quality, expertise, and reliability engineered into every project lifecycle.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeInUp} className="bg-[#2E3D47]/50 p-8 rounded-2xl border border-[#3E4F59]">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#DE7823]/20 text-[#DE7823] flex items-center justify-center text-sm">01</span>
                  Quality Assurance
                </h3>
                <p className="text-[#A8ADB8] text-sm leading-relaxed">
                  Multi-layered validation systems ensure data integrity at every touchpoint, delivering reliable and accurate results you can confidently build strategy upon.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-[#2E3D47]/50 p-8 rounded-2xl border border-[#3E4F59]">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#BF4A3B]/20 text-[#BF4A3B] flex items-center justify-center text-sm">02</span>
                  Domain Experts
                </h3>
                <p className="text-[#A8ADB8] text-sm leading-relaxed">
                  Experienced research professionals with deep industry knowledge and methodological expertise across specific B2B and B2C structural domains.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-[#2E3D47]/50 p-8 rounded-2xl border border-[#3E4F59]">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#A8294B]/20 text-[#A8294B] flex items-center justify-center text-sm">03</span>
                  Custom Architecture
                </h3>
                <p className="text-[#A8ADB8] text-sm leading-relaxed">
                  Tailored research methodologies engineered specifically from the ground up for your unique market positioning and corporate objectives.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="pt-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#2E3D47] to-[#1A2329] p-12 rounded-3xl border border-[#3E4F59] shadow-2xl relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-[#DE7823]/10 blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Initiate a Project?
                </h2>
                <p className="text-lg text-[#A8ADB8] mb-10">
                  Connect with our intelligence strategists to discuss which methodological architecture best fits your current requirements.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] hover:from-[#BF4A3B] hover:to-[#A31E52] text-white text-lg px-10 h-14 shadow-[0_0_20px_rgba(222,120,35,0.2)] hover:shadow-[0_0_30px_rgba(222,120,35,0.4)] transition-all duration-300">
                    Schedule Consultation <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
};