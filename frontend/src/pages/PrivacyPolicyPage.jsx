import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export const PrivacyPolicyPage = () => {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-[#A8ADB8]">Last updated: December 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border border-[#3E4F59] bg-[#2E3D47]/80 backdrop-blur-md shadow-2xl">
              <CardContent className="pt-10 pb-10 px-8 sm:px-12 prose prose-lg prose-invert max-w-none">
                
                <h2>1. Introduction</h2>
                <p>
                  Welcome to FACTUM RESEARCH. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you register as a panelist 
                  or interact with our services.
                </p>

                <h2>2. Information We Collect</h2>
                <p>When you register as a panelist, we collect:</p>
                <ul>
                  <li><strong>Personal Information:</strong> Name, email address, age, gender, and country</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                  <li><strong>Survey Responses:</strong> Your opinions and answers to research questions</li>
                  <li><strong>Usage Data:</strong> How you interact with our platform</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use your personal information to:</p>
                <ul>
                  <li>Match you with relevant research surveys</li>
                  <li>Communicate survey invitations and opportunities</li>
                  <li>Process rewards and incentives</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Conduct market research analysis (anonymized data)</li>
                </ul>

                <h2>4. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your data with:</p>
                <ul>
                  <li><strong>Research Clients:</strong> Only aggregated, anonymized data</li>
                  <li><strong>Service Providers:</strong> Trusted partners who assist in platform operations</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect rights</li>
                </ul>
                <p>
                  Your personally identifiable information (PII) is never shared with research clients. 
                  Only anonymized, aggregated data is used in research reports.
                </p>

                <h2>5. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data:</p>
                <ul>
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure password storage using industry-standard hashing</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                </ul>

                <h2>6. Your Rights</h2>
                <p>You have the right to access, correct, delete, or port your data, as well as object to processing. To exercise these rights, contact us at: <a href="mailto:rfq@factumresearch.com" className="text-[#DE7823] hover:underline">rfq@factumresearch.com</a></p>

                <h2>7. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience and analyze platform usage. 
                  You can control cookie settings through your browser preferences.
                </p>

                <h2>8. Data Retention</h2>
                <p>
                  We retain your personal data for as long as your account is active. Survey response data may be 
                  retained in anonymized form for research purposes even after account deletion.
                </p>

                <h2>9. International Data Transfers</h2>
                <p>
                  Your data may be processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your information.
                </p>

                <div className="bg-[#1A2329]/50 p-6 rounded-lg border border-[#3E4F59] mt-10">
                  <h3 className="text-white mt-0">Contact Us</h3>
                  <p>For questions or concerns, please contact:</p>
                  <p className="font-semibold text-[#DE7823]">FACTUM RESEARCH</p>
                  <p>Email: <a href="mailto:rfq@factumresearch.com" className="text-[#DE7823] hover:underline">rfq@factumresearch.com</a></p>
                  <p>Address: B2-1424 Tower-B2 DLF Mypad TCG 6/6, Vibhuti Khand, Gomti Nagar, Lucknow - Uttar Pradesh 226010</p>
                </div>

                <div className="bg-[#DE7823]/10 border-l-4 border-[#DE7823] p-4 mt-8">
                  <p className="text-sm text-white m-0">
                    <strong>Note:</strong> This privacy policy is part of our commitment to transparency. 
                    By using our services, you acknowledge that you have read and understood this policy.
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