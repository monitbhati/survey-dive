import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50"></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Page Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-yellow-200 shadow-xl">
              <CardContent className="pt-8 pb-8 prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Introduction</h2>
                <p className="text-gray-700">
                  Welcome to FACTUM RESEARCH. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you register as a panelist 
                  or interact with our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Information We Collect</h2>
                <p className="text-gray-700">When you register as a panelist, we collect:</p>
                <ul className="text-gray-700">
                  <li><strong>Personal Information:</strong> Name, email address, age, gender, and country</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                  <li><strong>Survey Responses:</strong> Your opinions and answers to research questions</li>
                  <li><strong>Usage Data:</strong> How you interact with our platform</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">3. How We Use Your Information</h2>
                <p className="text-gray-700">We use your personal information to:</p>
                <ul className="text-gray-700">
                  <li>Match you with relevant research surveys</li>
                  <li>Communicate survey invitations and opportunities</li>
                  <li>Process rewards and incentives</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Conduct market research analysis (anonymized data)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Data Sharing and Disclosure</h2>
                <p className="text-gray-700">
                  We do not sell your personal information. We may share your data with:
                </p>
                <ul className="text-gray-700">
                  <li><strong>Research Clients:</strong> Only aggregated, anonymized data</li>
                  <li><strong>Service Providers:</strong> Trusted partners who assist in platform operations</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect rights</li>
                </ul>
                <p className="text-gray-700">
                  Your personally identifiable information (PII) is never shared with research clients. 
                  Only anonymized, aggregated data is used in research reports.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Data Security</h2>
                <p className="text-gray-700">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="text-gray-700">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure password storage using industry-standard hashing</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Data backup and recovery procedures</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Your Rights</h2>
                <p className="text-gray-700">You have the right to:</p>
                <ul className="text-gray-700">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from survey invitations at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Object:</strong> Object to certain data processing activities</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, contact us at: <a href="mailto:rfq@factumresearch.com" className="text-purple-600 hover:underline">rfq@factumresearch.com</a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Cookies and Tracking</h2>
                <p className="text-gray-700">
                  We use cookies and similar technologies to enhance your experience, remember your preferences, 
                  and analyze platform usage. You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal data for as long as your account is active or as needed to provide services. 
                  You may request account deletion at any time. Survey response data may be retained in anonymized form 
                  for research purposes even after account deletion.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are intended for individuals aged 18 and above. We do not knowingly collect information 
                  from children under 18. If we discover such data, we will delete it promptly.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">10. International Data Transfers</h2>
                <p className="text-gray-700">
                  Your data may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">11. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy periodically. We will notify you of significant changes via email 
                  or through a prominent notice on our platform. Your continued use of our services after changes 
                  constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">12. Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions or concerns about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                  <p className="text-gray-900 font-semibold mb-2">FACTUM RESEARCH</p>
                  <p className="text-gray-700">Email: <a href="mailto:rfq@factumresearch.com" className="text-purple-600 hover:underline">rfq@factumresearch.com</a></p>
                  <p className="text-gray-700">Phone: +91 8690396627</p>
                  <p className="text-gray-700">Address: B2-1424 Tower-B2 DLF Mypad TCG 6/6, Vibhuti Khand, Gomti Nagar, Lucknow - Uttar Pradesh 226010</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This privacy policy is part of our commitment to transparency and data protection. 
                    By using our services, you acknowledge that you have read and understood this policy.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
