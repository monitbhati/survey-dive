import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { toast } from 'sonner';
import { Wallet, Clock, ShieldCheck, Globe, Bell, CheckCircle2, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export const JoinUsPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid corporate or personal email address.');
      return;
    }

    setLoading(true);
    // Simulate API registration for the priority launch queue
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('You have been added to the priority onboarding queue.');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#4B1E73] selection:text-white flex flex-col relative">
      <Header />

      <main className="flex-grow pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Hero & Launch Announcement */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            
            {/* Left Column: Authoritative Copy */}
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#4B1E73]/10 text-[#4B1E73] border border-[#4B1E73]/20 text-xs font-semibold px-3 py-1.5 rounded-md mb-6 tracking-widest uppercase font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B1E73] animate-pulse"></span>
                System Upgrade // Q3 Deployment
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Global Panelist Portal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B1E73] to-[#E69B57]">Launching Soon.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal mb-8 max-w-2xl">
                We are currently upgrading our respondent infrastructure to support real-time payout telemetry, enhanced data anonymity protocols, and automated multi-currency compensation across 50+ global markets.
              </motion.p>

              {/* Feature Preview Grid */}
              <motion.div variants={staggerContainer} className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200/80">
                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="w-10 h-10 rounded-md bg-[#4B1E73]/10 border border-[#4B1E73]/20 flex items-center justify-center text-[#4B1E73]">
                    <Wallet size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm tracking-tight">Instant Payouts</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Direct telemetry to global wallets upon survey audit completion.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="w-10 h-10 rounded-md bg-[#E69B57]/10 border border-[#E69B57]/20 flex items-center justify-center text-[#E69B57]">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm tracking-tight">Absolute Flexibility</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Participate entirely on your schedule with zero mandatory quotas.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <div className="w-10 h-10 rounded-md bg-[#4B1E73]/10 border border-[#4B1E73]/20 flex items-center justify-center text-[#4B1E73]">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm tracking-tight">Audit-Ready Privacy</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Enterprise-grade encryption protecting all PII and demographic data.</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Priority Waitlist Card */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white border border-gray-200/80 shadow-lg rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4B1E73] to-[#E69B57]" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Access Status</span>
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> Restricted
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
                  Request Priority Access
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Join the onboarding waitlist. Vetted panelists will receive early credentials and sign-up bonus allocations when the portal goes live.
                </p>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <CheckCircle2 className="text-green-600 mx-auto mb-3" size={32} />
                    <h3 className="font-bold text-green-900 text-base mb-1">Onboarding Reserved</h3>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Your address has been logged in our priority database. We will notify you via encrypted briefing prior to public rollout.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@company.com or personal email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 px-4 rounded-md border border-gray-300 bg-gray-50/50 text-gray-900 focus:bg-white focus:border-[#4B1E73] focus:ring-1 focus:ring-[#4B1E73] text-sm transition-all"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-12 bg-[#4B1E73] hover:bg-[#3D1860] text-white font-semibold text-sm rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? 'Registering Queue...' : (
                        <>
                          <Bell size={16} /> Notify Me at Launch
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-gray-400 text-center leading-normal pt-2">
                      By submitting, you agree to receive a one-time onboarding invitation. Zero spam or external data sharing.
                    </p>
                  </form>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Target: 50,000 Seats</span>
                  <span>Phase 1 Rollout</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Infrastructure Banner */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4B1E73]/10 flex items-center justify-center text-[#4B1E73] shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 tracking-tight">Are you an enterprise client looking to commission research?</h3>
                <p className="text-sm text-gray-600">Our advisory and fieldwork operations remain fully active during this panel upgrade.</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/contact'}
              className="whitespace-nowrap font-semibold text-xs uppercase tracking-wider px-6 h-11 border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            >
              Commission a Study <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};