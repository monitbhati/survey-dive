import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-[#26323A] flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-[#A8ADB8]">Last updated: December 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-2xl">
              <CardContent className="pt-10 pb-10 px-8 sm:px-12 prose prose-lg prose-invert max-w-none">
                
                <h2>1. Agreement to Terms</h2>
                <p>
                  By registering as a panelist with FACTUM RESEARCH, you agree to be bound by these Terms and Conditions. 
                  If you do not agree with any part of these terms, please do not register or use our services.
                </p>

                <h2>2. Eligibility</h2>
                <p>To participate as a panelist, you must:</p>
                <ul>
                  <li>Be at least 18 years of age</li>
                  <li>Provide accurate and truthful information during registration</li>
                  <li>Have legal capacity to enter into binding agreements</li>
                  <li>Not be prohibited from using our services under applicable laws</li>
                </ul>

                <h2>3. Account Registration</h2>
                <p>When creating an account, you agree to:</p>
                <ul>
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Maintain the security and confidentiality of your password</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h2>4. Panelist Responsibilities</h2>
                <p>As a panelist, you agree to:</p>
                <ul>
                  <li>Provide honest and thoughtful responses</li>
                  <li>Not use automated tools, bots, or scripts</li>
                  <li>Not share survey links or discuss survey content</li>
                  <li>Complete surveys personally</li>
                </ul>

                <h2>5. Rewards and Incentives</h2>
                <p>
                  Participation in research surveys may be rewarded with incentives at our discretion. 
                  Rewards are provided for complete and quality responses only. We reserve the right to 
                  withhold rewards for fraudulent or low-quality activity.
                </p>

                <h2>6. Quality Control</h2>
                <p>
                  We employ multi-layered validation systems to ensure data integrity. Responses failing 
                  consistency checks, or displaying suspicious patterns, may be rejected. Repeated 
                  violations may lead to account termination.
                </p>

                <h2>7. Intellectual Property</h2>
                <p>
                  All content, trademarks, and materials are the property of FACTUM RESEARCH. By participating, 
                  you grant us the right to use your anonymized responses for research and client reporting.
                </p>

                <h2>8. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject 
                  to the exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.
                </p>

                <div className="bg-[#1A2329]/50 p-6 rounded-lg border border-[#3E4F59] mt-10">
                  <h3 className="text-white mt-0">Contact Information</h3>
                  <p>For questions, please contact:</p>
                  <p className="font-semibold text-[#DE7823]">FACTUM RESEARCH</p>
                  <p>Email: <a href="mailto:rfq@factumresearch.com" className="text-[#DE7823] hover:underline">rfq@factumresearch.com</a></p>
                  <p>Address: B2-1424 Tower-B2 DLF Mypad TCG 6/6, Vibhuti Khand, Gomti Nagar, Lucknow - Uttar Pradesh 226010</p>
                </div>

                <div className="bg-[#DE7823]/10 border-l-4 border-[#DE7823] p-4 mt-8">
                  <p className="text-sm text-white m-0">
                    <strong>Important:</strong> By clicking "Create Account," you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};