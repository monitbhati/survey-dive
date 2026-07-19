import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/ui/button';
import { 
  ArrowRight, TrendingUp, ShieldCheck, Award, Target, 
  ClipboardList, Phone, Users, CheckCircle2, ChevronDown, ChevronUp 
} from 'lucide-react';
import { mockData } from '../mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Map icons dynamically from mockData strings to Lucide components
const iconMap = { 
  TrendingUp, ShieldCheck, Award, Target, 
  ClipboardList, Phone, Users 
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

// ---- Interactive FAQ Accordion Component ----
const FAQAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {mockData.faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 bg-white">
            <button 
              onClick={() => toggleFAQ(faq.id)} 
              className="w-full p-5 text-left font-bold text-gray-900 tracking-tight flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span>{faq.question}</span>
              {isOpen ? <ChevronUp size={18} className="text-[#4B1E73]" /> : <ChevronDown size={18} className="text-gray-400" />}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#4B1E73] selection:text-white">
      <Header />

      {/* --- VIDEO HERO SECTION --- */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-gray-100">
        
        {/* 1. VIDEO LAYER */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale blur-[2px] opacity-40 contrast-125"
          >
            {/* Swap this link with your actual ImageKit or Supabase link */}
            <source src="https://res.cloudinary.com/dypr66exd/video/upload/v1784444437/istockphoto-1363187645-640_adpp_is_cvjegg.mp4" type="video/mp4" />
          </video>

          {/* 2. BRAND TINT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4B1E73]/10 via-transparent to-[#E69B57]/10 mix-blend-multiply" />

          {/* 3. FROSTED GLASS & SEAMLESS BOTTOM FADE */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/80 to-white backdrop-blur-[1px]" />
        </div>

        {/* 4. FOREGROUND CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#4B1E73]/10 text-[#4B1E73] border border-[#4B1E73]/20 text-xs font-semibold px-3 py-1.5 rounded-md mb-6 tracking-widest uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4B1E73] animate-pulse"></span>
              Rigorous Sampling & Qualitative Depth
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {mockData.company.tagline}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-8 max-w-2xl">
              {mockData.company.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-[#4B1E73] hover:bg-[#3D1860] text-white font-semibold text-base px-6 h-12 rounded-md transition-all duration-200 shadow-sm">
                  Initiate Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold text-base px-6 h-12 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all">
                  Explore Methodologies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --- END OF VIDEO HERO SECTION --- */}

      {/* SOCIAL PROOF / TRUST BANNER */}
      <section className="py-10 bg-gray-50 border-b border-gray-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono whitespace-nowrap">
            Trusted by strategic teams across 20+ global industries
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 opacity-60 grayscale">
            <span className="font-bold text-lg tracking-tighter text-gray-700">Healthcare Enterprise</span>
            <span className="font-bold text-lg tracking-tight text-gray-700 font-serif">Global Financial</span>
            <span className="font-extrabold text-lg tracking-widest text-gray-700">EDTECH</span>
            <span className="font-semibold text-lg tracking-normal text-gray-700">Consumer Goods Co.</span>
          </div>
        </div>
      </section>

      {/* METRICS SECTION (Mapped directly to stats) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: mockData.stats.projectsCompleted, suffix: '+', label: 'Projects Completed', sub: 'Rigorous quantitative & qualitative studies' },
              { value: mockData.stats.industriesServed, suffix: '+', label: 'Industries Served', sub: 'Deep domain context & expertise' },
              { value: mockData.stats.clientSatisfaction, suffix: '%', label: 'Client Retention', sub: 'Long-term advisory partnerships' },
              { value: mockData.stats.yearsExperience, suffix: '+', label: 'Years Experience', sub: 'Methodological excellence' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 border-l-2 border-[#4B1E73] bg-gray-50/50">
                <div className="text-4xl font-bold text-gray-900 tracking-tight mb-1">
                  <CountUp end={parseInt(stat.value)} duration={2} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-sm font-semibold text-gray-900 tracking-tight">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES (Mapped directly to whyChooseUs) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mb-16">
            <h2 className="text-xs font-bold text-[#4B1E73] tracking-widest uppercase font-mono mb-3">Why Choose Us</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Differentiated capabilities that transform market research into high-conviction strategies.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon] || Target;
              return (
                <motion.div key={item.id} variants={fadeInUp}>
                  <div className="h-full pr-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-[#4B1E73]">
                      <IconComponent size={20} strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGIES & SERVICES (Mapped directly to services) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold text-[#4B1E73] tracking-widest uppercase font-mono mb-3">Core Methodologies</h2>
              <p className="text-3xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                From first question to final insight.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                We combine custom questionnaire architecture with in-depth qualitative coding to surface the context that quantitative data alone misses.
              </p>
              <Link to="/services">
                <Button variant="outline" className="font-semibold text-xs uppercase tracking-wider px-4 py-2 border-gray-300">
                  View All Capabilities
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
              {mockData.services.map((service, idx) => {
                const ServiceIcon = iconMap[service.icon] || ClipboardList;
                return (
                  <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-200/80 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[#4B1E73] font-bold text-xs tracking-wider uppercase mb-3 font-mono">
                        <ServiceIcon size={16} /> Methodology 0{idx + 1}
                      </div>
                      <h4 className="font-bold text-gray-900 tracking-tight text-lg mb-2">{service.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 size={13} className="text-[#4B1E73] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (Mapped directly to faqs) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#4B1E73] tracking-widest uppercase font-mono mb-3">Frequently Asked Questions</h2>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">
              Rigorous Standards, Transparent Execution
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ENTERPRISE CTA SECTION */}
      <section className="bg-[#1A0B2E] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to dive beneath the surface of your market data?
          </h2>
          <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
            Connect with our research strategists to scope your upcoming project, review custom sampling methodologies, or request sample reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#1A0B2E] hover:bg-gray-100 font-semibold text-sm px-8 h-12 rounded-md transition-colors">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm px-8 h-12 rounded-md border-gray-600 bg-transparent text-white hover:bg-white/5 transition-colors font-semibold">
                Explore Engagement Models
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};