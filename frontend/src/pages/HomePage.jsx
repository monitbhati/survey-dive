import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/ui/button';
import { ArrowRight, TrendingUp, ShieldCheck, Award, Target } from 'lucide-react';
import { mockData } from '../mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Award,
  Target
};

// ---------------------------------------------------------------------------
// Helpers & Animation Variants
// ---------------------------------------------------------------------------
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

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#26323A] relative">
      
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 bg-[#26323A]">
        
        {/* Universal Video - Now plays on both Mobile and Desktop! */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.35] grayscale-[0.2]"
          src="https://res.cloudinary.com/dypr66exd/video/upload/q_auto,f_auto/v1781944775/3192362-Uhd_3840_2160_25Fps_uofpp6.mp4" 
        />

        {/* The Overlay (Smooth Gradient ONLY - No Grain) */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(38,50,58,0.75) 0%, rgba(38,50,58,0.4) 50%, rgba(38,50,58,0.90) 100%)`
          }}
        ></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center bg-transparent">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {mockData.company.tagline}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-[#A8ADB8] max-w-3xl mx-auto leading-relaxed mb-16">
                {mockData.company.description}
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <div className="bg-[#2E3D47]/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#3E4F59] text-center hover:shadow-[0_10px_40px_-15px_rgba(222,120,35,0.3)] hover:-translate-y-2 hover:border-[#DE7823] transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] bg-clip-text text-transparent mb-2">
                    <CountUp end={parseInt(mockData.stats.projectsCompleted)} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />
                  </div>
                  <div className="text-sm text-[#A8ADB8] font-semibold tracking-wide">Strategic Projects</div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <div className="bg-[#2E3D47]/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#3E4F59] text-center hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.3)] hover:-translate-y-2 hover:border-[#BF4A3B] transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#BF4A3B] to-[#A8294B] bg-clip-text text-transparent mb-2">
                    <CountUp end={parseInt(mockData.stats.industriesServed)} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />
                  </div>
                  <div className="text-sm text-[#A8ADB8] font-semibold tracking-wide">Industry Sectors</div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-[#2E3D47]/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#3E4F59] text-center hover:shadow-[0_10px_40px_-15px_rgba(163,30,82,0.3)] hover:-translate-y-2 hover:border-[#A31E52] transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#A8294B] to-[#A31E52] bg-clip-text text-transparent mb-2">
                    <CountUp end={parseInt(mockData.stats.clientSatisfaction)} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} />
                  </div>
                  <div className="text-sm text-[#A8ADB8] font-semibold tracking-wide">Client Retention</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Strategic Advantages</h2>
              <p className="text-lg text-[#A8ADB8] max-w-3xl mx-auto">
                Differentiated capabilities that transform market research into strategic intelligence
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            >
              {mockData.whyChooseUs.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                const hoverBorderColor = index % 2 === 0 ? 'hover:border-[#DE7823]' : 'hover:border-[#BF4A3B]';
                const hoverShadowColor = index % 2 === 0 ? 'hover:shadow-[0_10px_40px_-15px_rgba(222,120,35,0.3)]' : 'hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.3)]';

                return (
                  <motion.div key={item.id} variants={fadeInUp}>
                    <div className={`bg-[#2E3D47]/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#3E4F59] transition-all duration-300 hover:-translate-y-2 ${hoverBorderColor} ${hoverShadowColor} h-full`}>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                        <IconComponent className="text-white" size={26} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-[#A8ADB8] leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link to="/about">
                <Button size="lg" variant="outline" className="border border-[#3E4F59] bg-[#2E3D47] text-white hover:bg-[#3E4F59] hover:text-white transition-colors px-8 h-12">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-[400px] flex items-center bg-transparent">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto"
          >
            <div className="max-w-4xl mx-auto text-center bg-[#2E3D47]/80 backdrop-blur-md border border-[#3E4F59] p-12 rounded-3xl shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Market Intelligence?
              </h2>
              <p className="text-lg text-[#A8ADB8] mb-10 max-w-2xl mx-auto">
                Connect with our research strategists to explore how we can support your intelligence requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#DE7823] to-[#BF4A3B] hover:from-[#BF4A3B] hover:to-[#A31E52] text-white text-lg px-8 h-14 shadow-[0_0_20px_rgba(191,74,59,0.3)] hover:shadow-[0_0_30px_rgba(191,74,59,0.5)] transition-all duration-300">
                    Initiate Consultation <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 border border-[#3E4F59] bg-transparent text-white hover:bg-[#3E4F59] transition-colors">
                    Explore Capabilities
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
};