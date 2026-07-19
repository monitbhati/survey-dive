import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Globe, Users, CheckCircle2, Target, ShieldCheck, Award, BarChart3, Layers } from 'lucide-react';

// Static Data
const PANEL_STATS = [
  { label: 'Global Markets Covered', end: 50, suffix: '+', icon: Globe, sub: 'Verified active panels' },
  { label: 'B2B Decision Makers', end: 200, suffix: 'K+', icon: Target, sub: 'Vetted C-suite & management' },
  { label: 'Healthcare Professionals', end: 30, suffix: 'K+', icon: Award, sub: 'Specialists & clinical leaders' },
  { label: 'Consumer Panelists', end: 1, suffix: 'M+', icon: Users, sub: 'Highly calibrated demographics' },
];

const REGION_BREAKDOWN = [
  { region: 'North America', share: 35, suffix: '%', focus: 'Enterprise Tech & Healthcare', color: 'text-[#4B1E73]' },
  { region: 'Europe', share: 30, suffix: '%', focus: 'Financial Services & Industrial', color: 'text-[#E69B57]' },
  { region: 'Asia Pacific', share: 20, suffix: '%', focus: 'Consumer Goods & Emerging Tech', color: 'text-[#4B1E73]' },
  { region: 'Latin America', share: 10, suffix: '%', focus: 'Retail & Telecommunications', color: 'text-[#E69B57]' },
  { region: 'Middle East & Africa', share: 5, suffix: '%', focus: 'Energy & Infrastructure', color: 'text-[#4B1E73]' }
];

const TEAM = [
  {
    name: 'Anuj Kumar',
    position: 'Founder & Managing Director',
    image: '/team/founder.png',
    objectPosition: 'center center',
    quote: 'Our mission is to revolutionize market research by delivering authentic insights that drive meaningful business decisions. Quality and integrity are at the heart of everything we do.'
  },
  {
    name: 'Ayush Bhatnagar',
    position: 'Head of Sales & Business Development',
    image: '/team/client-services.png',
    objectPosition: '60% center',
    quote: "Building lasting partnerships is what drives us. We believe in understanding our clients' unique challenges and delivering tailored research solutions that exceed expectations."
  },
  {
    name: 'Anand Yadav',
    position: 'Head of Global Operations',
    image: '/team/operations-head.jpeg',
    objectPosition: 'center center',
    quote: 'Excellence in execution is our standard. From project inception to final delivery, our team ensures every detail meets the highest quality benchmarks through rigorous processes.'
  },
  {
    name: 'Neeraj Saxena',
    position: 'Chief Financial Officer',
    image: '/team/cfo.png',
    objectPosition: 'center center',
    quote: 'Sustainable growth through strategic investments in technology and talent enables us to maintain competitive pricing while delivering premium research quality to our clients.'
  }
];

const TeamAvatar = ({ name, image, objectPosition }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map((part) => part[0]).join('');

  if (failed) {
    return (
      <div className="w-20 h-20 rounded-md flex-shrink-0 border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-700 text-lg font-bold font-mono tracking-wider">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border border-gray-200 bg-gray-100">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover contrast-105 group-hover:scale-105 transition-all duration-300"
        style={{ objectPosition }}
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#4B1E73] selection:text-white">
      <Header />
      <main className="pb-20">
        
        {/* --- ABOUT HERO SECTION WITH IMAGE BG --- */}
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 overflow-hidden">
          
          {/* 1. BACKGROUND IMAGE LAYER */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/7948039/pexels-photo-7948039.jpeg" /* <-- PASTE YOUR IMAGE LINK HERE */
              alt="Corporate Background"
              className="w-full h-full object-cover grayscale opacity-40 blur-[2px]"
            />
            {/* Brand Tint & Frosted Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E69B57]/10 to-[#4B1E73]/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white backdrop-blur-[1px]" />
          </div>

          {/* 2. FOREGROUND CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#E69B57]/10 text-[#E69B57] border border-[#E69B57]/20 text-xs font-semibold px-3 py-1.5 rounded-md mb-6 tracking-widest uppercase font-mono shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E69B57] animate-pulse"></span>
                Corporate Profile
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Precision methodologies for complex market environments.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
                We transform global consumer signals and niche professional data into high-conviction strategic intelligence, built on rigorous quality verification and empirical depth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-50/60 p-8 rounded-lg border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#4B1E73] tracking-widest uppercase font-mono mb-3">01 / Operational Mandate</div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To deliver empirical market data with uncompromising speed and precision. We eliminate methodological friction and sampling noise, providing enterprise leaders with verified, audit-ready intelligence when strategic stakes are highest.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center gap-2 text-xs font-mono text-gray-600">
                  <CheckCircle2 size={14} className="text-[#4B1E73]" /> Streamlined execution & live quality validation
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-50/60 p-8 rounded-lg border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#E69B57] tracking-widest uppercase font-mono mb-3">02 / Long-Term Trajectory</div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To establish our global advisory network as the definitive benchmark for reliability in market research. We build enduring client partnerships rooted in absolute methodological transparency, consistent execution, and scalable global reach.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center gap-2 text-xs font-mono text-gray-600">
                  <CheckCircle2 size={14} className="text-[#E69B57]" /> Pan-global panel architecture across 50+ countries
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-bold text-[#4B1E73] tracking-widest uppercase font-mono mb-3">Domain Specialization</h2>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Core Research Capabilities
              </p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg border-t-4 border-gray-200 border-t-[#4B1E73] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-md bg-[#4B1E73]/10 border border-[#4B1E73]/20 flex items-center justify-center text-[#4B1E73]">
                    <BarChart3 size={20} />
                  </div>
                  <span className="text-xs font-mono text-gray-400">QUANT-01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">Quantitative Intelligence</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Large-scale empirical studies engineered for high-granularity audience segmentation. We deploy robust statistical sampling to ensure data stability across global cohorts.
                </p>
                <div className="border-t border-gray-100 pt-4 space-y-2.5">
                  {['B2B Professional Sampling', 'B2C Consumer Tracking', 'Healthcare KOLs'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="text-[#4B1E73] shrink-0" size={14} /><span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg border-t-4 border-gray-200 border-t-[#E69B57] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-md bg-[#E69B57]/10 border border-[#E69B57]/20 flex items-center justify-center text-[#E69B57]">
                    <Layers size={20} />
                  </div>
                  <span className="text-xs font-mono text-gray-400">QUAL-02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">Qualitative Exploration</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  In-depth exploratory methodologies designed to surface the underlying behavioral drivers, decision-making friction points, and emotional triggers behind market trends.
                </p>
                <div className="border-t border-gray-100 pt-4 space-y-2.5">
                  {['Executive IDIs & Moderations', 'Focus Group Discussions', 'Ethnographic Studies'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="text-[#E69B57] shrink-0" size={14} /><span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* METRICS & REACH */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { label: 'Markets Covered', end: 50, suffix: '+', icon: Globe },
                { label: 'B2B Decision Makers', end: 200, suffix: 'K+', icon: Target },
                { label: 'Healthcare Experts', end: 30, suffix: 'K+', icon: Award },
                { label: 'Consumer Panelists', end: 1, suffix: 'M+', icon: Users },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={stat.label} variants={fadeInUp} className="bg-white p-6 rounded-lg border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Metric</span>
                      <Icon size={16} className="text-[#4B1E73]" />
                    </div>
                    {/* Vibrant Gradient Numbers */}
                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4B1E73] to-[#E69B57] tracking-tight mb-1">
                      <CountUp end={stat.end} duration={2} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 tracking-tight">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enterprise Data Table for Regional Breakdown */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">Geographic Panel Distribution</h3>
                  <p className="text-xs text-gray-500">Verified active respondents across primary operational theaters</p>
                </div>
                <span className="text-[11px] font-mono bg-white text-gray-600 px-3 py-1 rounded border border-gray-200 shadow-2xs">
                  Audit Status: Validated Q3
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-[11px] font-mono uppercase tracking-wider text-gray-500 bg-gray-50">
                      <th className="py-3.5 px-6 font-medium">Region / Theater</th>
                      <th className="py-3.5 px-6 font-medium">Panel Share</th>
                      <th className="py-3.5 px-6 font-medium hidden md:table-cell">Primary Industry Sectors</th>
                      <th className="py-3.5 px-6 font-medium text-right">Coverage Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm font-normal">
                    {REGION_BREAKDOWN.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900">{row.region}</td>
                        <td className={`py-4 px-6 font-mono font-bold ${row.color}`}>
                          <CountUp end={row.share} duration={2} suffix={row.suffix} enableScrollSpy scrollSpyOnce />
                        </td>
                        <td className="py-4 px-6 text-gray-600 hidden md:table-cell text-xs">{row.focus}</td>
                        <td className="py-4 px-6 text-right font-mono text-xs text-emerald-600 font-semibold">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> Active Fieldwork
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-bold text-[#4B1E73] tracking-widest uppercase font-mono mb-3">Executive Leadership</h2>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Advisory & Operations Governance
              </p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
              {TEAM.map((member) => (
                <motion.div key={member.name} variants={fadeInUp} className="group">
                  <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 h-full flex flex-col justify-between hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-5">
                      <TeamAvatar name={member.name} image={member.image} objectPosition={member.objectPosition} />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-0.5">{member.name}</h3>
                        <p className="text-xs font-mono text-[#4B1E73] uppercase tracking-wider font-semibold mb-4">{member.position}</p>
                        <p className="text-xs text-gray-600 leading-relaxed font-normal">&ldquo;{member.quote}&rdquo;</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase">
                      <span>Executive Governance</span>
                      <span>Survey Dive Advisory</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};