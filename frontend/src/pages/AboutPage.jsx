import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Globe, 
  Users, 
  CheckCircle, 
  Target, 
  Shield, 
  Cpu, 
  Award,
  ArrowRight
} from 'lucide-react';
import { BsGraphUp } from 'react-icons/bs';

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const PANEL_STATS = [
  { label: 'Countries Covered', end: 50, suffix: '+', icon: Globe },
  { label: 'B2B Professionals', end: 200, suffix: 'K+', icon: Target },
  { label: 'Healthcare Experts', end: 30, suffix: 'K+', icon: Award },
  { label: 'Consumer Panelists', end: 1, suffix: 'M+', icon: Users },

];

const REGION_BREAKDOWN = [
  { label: 'North America', end: 35, suffix: '%', colorClass: 'text-[#DE7823]' },
  { label: 'Europe', end: 30, suffix: '%', colorClass: 'text-[#BF4A3B]' },
  { label: 'Asia Pacific', end: 20, suffix: '%', colorClass: 'text-[#A8294B]' },
  { label: 'Latin America', end: 10, suffix: '%', colorClass: 'text-[#A31E52]' },
  { label: 'Middle East & Africa', end: 5, suffix: '%', colorClass: 'text-[#A31E52]' }
];

const TEAM = [
  {
    name: 'Anuj Kumar',
    position: 'Founder',
    image: '/team/founder.png',
    objectPosition: 'center center',
    quote: 'Our mission is to revolutionize market research by delivering authentic insights that drive meaningful business decisions. Quality and integrity are at the heart of everything we do.'
  },
  {
    name: 'Ayush Bhatnagar',
    position: 'Sales and Business Development',
    image: '/team/client-services.png',
    objectPosition: '60% center',
    quote: "Building lasting partnerships is what drives us. We believe in understanding our clients' unique challenges and delivering tailored research solutions that exceed expectations."
  },
  {
    name: 'Anand Yadav',
    position: 'Operations Head',
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const noiseTexture = (rgb, alpha) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 ${rgb.r}  0 0 0 0 ${rgb.g}  0 0 0 0 ${rgb.b}  0 0 0 ${alpha} 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const TeamAvatar = ({ name, image, objectPosition }) => {
  const [failed, setFailed] = React.useState(false);
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('');

  if (failed) {
    return (
      <div className="w-24 h-24 rounded-full flex-shrink-0 border-4 border-[#BF4A3B] shadow-lg bg-[#3E4F59] flex items-center justify-center text-white text-xl font-bold">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#BF4A3B] shadow-lg">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover"
        style={{ objectPosition }}
        onError={() => setFailed(true)}
      />
    </div>
  );
};

// ---------------------------------------------------------------------------
// Animation Variants for Framer Motion
// ---------------------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// ---------------------------------------------------------------------------
// Section Components
// ---------------------------------------------------------------------------

const HeroSection = () => (
  <section
    className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 animate-gradient"
    style={{
      backgroundImage: `${noiseTexture({ r: 1, g: 0.55, b: 0.15 }, 0.3)}, linear-gradient(135deg, rgba(222,120,35,0.88) 0%, rgba(191,74,59,0.88) 50%, rgba(163,30,82,0.88) 100%)`,
    }}
  >
    <div className="container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">About Us</h1>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
          A premier market research consultancy transforming complex market dynamics into strategic clarity through precision methodologies and actionable intelligence.
        </p>
      </motion.div>
    </div>
  </section>
);

const MissionVisionSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#2E3D47] p-10 rounded-2xl border border-[#3E4F59] shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.3)] hover:border-[#BF4A3B] transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-[#A8ADB8] leading-relaxed">
            To deliver quality data with speed and efficiency, minimizing complexity while maximizing accuracy. We believe in streamlined processes that provide you with reliable insights when you need them most.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#2E3D47] p-10 rounded-2xl border border-[#3E4F59] shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.3)] hover:border-[#BF4A3B] transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-[#A8ADB8] leading-relaxed">
            To expand our reach across markets and establish ourselves as the trusted and reliable research partner for life. We envision long-term partnerships built on consistent quality, transparency, and unwavering commitment to your success.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
        <p className="text-lg text-[#A8ADB8]">Specialized capabilities that set us apart</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div variants={fadeInUp}>
          <Card className="border border-[#3E4F59] bg-[#2E3D47] hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(222,120,35,0.3)] hover:border-[#DE7823] transition-all duration-300">
            <CardContent className="pt-8 pb-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B]">
                <Users className="text-white" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Quantitative Research</h3>
              <p className="text-[#A8ADB8] mb-4 leading-relaxed">
                Comprehensive quantitative research solutions across diverse audience segments, delivering precise targeting and high-quality respondent engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#A8ADB8]">
                  <CheckCircle className="text-[#BF4A3B] mr-2 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-sm">B2B Professional Sampling</span>
                </li>
                <li className="flex items-center text-[#A8ADB8]">
                  <CheckCircle className="text-[#BF4A3B] mr-2 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-sm">B2C Consumer Research</span>
                </li>
                <li className="flex items-center text-[#A8ADB8]">
                  <CheckCircle className="text-[#BF4A3B] mr-2 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-sm">Healthcare Specialized Panels</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border border-[#3E4F59] bg-[#2E3D47] hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(163,30,82,0.3)] hover:border-[#A31E52] transition-all duration-300">
            <CardContent className="pt-8 pb-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#A8294B] to-[#A31E52]">
                <Target className="text-white" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Qualitative Research</h3>
              <p className="text-[#A8ADB8] mb-4 leading-relaxed">
                Deep-dive qualitative methodologies that uncover insights beyond numbers, revealing the 'why' behind consumer behaviors and market trends.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#A8ADB8]">
                  <CheckCircle className="text-[#A31E52] mr-2 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-sm">In-Depth Interviews (IDI)</span>
                </li>
                <li className="flex items-center text-[#A8ADB8]">
                  <CheckCircle className="text-[#A31E52] mr-2 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-sm">Focus Group Discussions</span>
                </li>
                <li className="flex items-center text-[#A8ADB8]">
                  <CheckCircle className="text-[#A31E52] mr-2 flex-shrink-0" size={18} aria-hidden="true" />
                  <span className="text-sm">Ethnographic Studies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const UniqueStrengthsSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">What Makes Us Unique</h2>
        <p className="text-lg text-[#A8ADB8]">Distinctive advantages that define our approach</p>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8"
      >
        <motion.div variants={fadeInUp} className="text-center bg-[#2E3D47] p-8 rounded-2xl border border-[#3E4F59] shadow-xl hover:-translate-y-2 hover:border-[#DE7823] transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B]">
            <Target className="text-white" size={32} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Niche Audience Access</h3>
          <p className="text-[#A8ADB8] leading-relaxed">
            Exclusive access to hard-to-reach professionals and specialized audience segments that others struggle to find.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center bg-[#2E3D47] p-8 rounded-2xl border border-[#3E4F59] shadow-xl hover:-translate-y-2 hover:border-[#BF4A3B] transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#BF4A3B] to-[#A8294B]">
            <Globe className="text-white" size={32} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
          <p className="text-[#A8ADB8] leading-relaxed">
            Pan-global panel network spanning 50+ countries with verified panelists across all major markets.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center bg-[#2E3D47] p-8 rounded-2xl border border-[#3E4F59] shadow-xl hover:-translate-y-2 hover:border-[#A31E52] transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#A8294B] to-[#A31E52]">
            <Shield className="text-white" size={32} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Strict Quality Checks</h3>
          <p className="text-[#A8ADB8] leading-relaxed">
            Multi-layered quality assurance protocols ensuring every data point meets the highest standards of accuracy and reliability.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const SampleQualitySection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">What Makes Our Sample Quality Better</h2>
        <p className="text-lg text-[#A8ADB8]">Three pillars of excellence</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8"
      >
        <motion.div variants={fadeInUp}>
          <Card className="border border-[#3E4F59] hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(222,120,35,0.3)] hover:border-[#DE7823] transition-all duration-300 bg-[#2E3D47]">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#DE7823] to-[#BF4A3B]">
                <Shield className="text-white" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rigorous QC Protocols</h3>
              <p className="text-[#A8ADB8] leading-relaxed">
                Real-time quality monitoring, behavioral validation, and fraud detection systems ensure pristine data integrity.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border border-[#3E4F59] hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(191,74,59,0.3)] hover:border-[#BF4A3B] transition-all duration-300 bg-[#2E3D47]">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#BF4A3B] to-[#A8294B]">
                <Users className="text-white" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Recruitment Team</h3>
              <p className="text-[#A8ADB8] leading-relaxed">
                Specialized panel recruitment professionals who source and verify niche audiences across industries and demographics.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border border-[#3E4F59] hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(163,30,82,0.3)] hover:border-[#A31E52] transition-all duration-300 bg-[#2E3D47]">
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#A8294B] to-[#A31E52]">
                <Cpu className="text-white" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Technology</h3>
              <p className="text-[#A8ADB8] leading-relaxed">
                Cutting-edge sampling platforms, AI-powered quality checks, and automated validation systems for superior accuracy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const PanelNetworkSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Our Global Panelist Network</h2>
        <p className="text-lg text-[#A8ADB8]">Connecting you with the right audience, anywhere in the world</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        {PANEL_STATS.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <motion.div key={stat.label} variants={fadeInUp}>
              <Card className="border border-[#3E4F59] bg-[#2E3D47] hover:border-[#BF4A3B] hover:-translate-y-2 transition-all duration-300">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-gradient-to-br from-[#DE7823] to-[#A31E52]">
                    <IconComponent className="text-white" size={24} aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 bg-gradient-to-r from-[#DE7823] to-[#A31E52] bg-clip-text text-transparent">
                    <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-sm text-[#A8ADB8]">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#2E3D47] p-8 rounded-2xl border border-[#3E4F59] mb-8"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Truly Global Presence</h3>
          <p className="text-[#A8ADB8]">Our panelists span across continents, industries, and demographics</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {REGION_BREAKDOWN.map((region) => (
            <div key={region.label}>
              <div className={`text-2xl font-bold mb-1 ${region.colorClass}`}>
                <CountUp end={region.end} duration={2.5} suffix={region.suffix} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm text-[#A8ADB8]">{region.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <a href="/panel-reach-presentation.html" target="_blank" rel="noopener noreferrer">
        </a>
      </div>
    </div>
  </section>
);

const LeadershipSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
        <p className="text-lg text-[#A8ADB8]">Experienced professionals driving excellence</p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8"
      >
        {TEAM.map((member) => (
          <motion.div key={member.name} variants={fadeInUp}>
            <Card className="border border-[#3E4F59] bg-[#2E3D47] hover:border-[#BF4A3B] transition-colors duration-300 h-full">
              <CardContent className="pt-8 pb-8 h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <TeamAvatar
                    name={member.name}
                    image={member.image}
                    objectPosition={member.objectPosition}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-[#BF4A3B] font-semibold mb-3">{member.position}</p>
                    <p className="text-[#A8ADB8] text-sm leading-relaxed italic">&ldquo;{member.quote}&rdquo;</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CtaSection = () => (
  <section
    className="py-20 px-4 sm:px-6 lg:px-8 animate-gradient"
    style={{
      backgroundImage: `${noiseTexture({ r: 0.55, g: 0.3, b: 0.1 }, 0.35)}, linear-gradient(135deg, #DE7823 0%, #BF4A3B 50%, #A31E52 100%)`,
    }}
  >
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="container mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Ready to Work Together?
      </h2>
      <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
        Let's discuss how we can support your research objectives
      </p>
      <Link to="/contact">
        <Button size="lg" className="bg-[#26323A] hover:bg-[#2E3D47] text-white text-lg px-8 h-14 shadow-2xl hover:scale-105 transition-transform duration-300">
          Contact Us Today
        </Button>
      </Link>
    </motion.div>
  </section>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#26323A] relative">
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1920"
          alt="Business Analytics"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `${noiseTexture({ r: 0.15, g: 0.19, b: 0.22 }, 0.5)}, linear-gradient(180deg, rgba(38,50,58,0.94) 0%, rgba(38,50,58,0.9) 50%, rgba(38,50,58,0.96) 100%)`,
            backgroundRepeat: 'repeat, no-repeat'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MissionVisionSection />
        <ExpertiseSection />
        <UniqueStrengthsSection />
        <SampleQualitySection />
        <PanelNetworkSection />
        <LeadershipSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
};