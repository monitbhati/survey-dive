import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Phone, 
  Headphones, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Globe,
  BarChart3,
  Clock
} from 'lucide-react';

export const CATIPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/7709291/pexels-photo-7709291.jpeg" 
          alt="CATI Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-pink-900/85 to-yellow-900/75"></div>
      </div>
      
      <div className="relative z-10">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              CATI Excellence
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-100 drop-shadow-md">
              Computer Assisted Telephone Interviewing with trained professionals delivering high-quality phone surveys and deep respondent engagement
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14">
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">What is CATI?</h2>
            <p className="text-lg text-gray-100 drop-shadow-md max-w-3xl mx-auto">
              CATI (Computer Assisted Telephone Interviewing) combines professional telephone interviewers with advanced software systems to conduct structured phone surveys, ensuring consistent data collection and superior respondent experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose CATI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Why Choose CATI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-6 pb-6 text-center">
                <Users className="text-pink-700 mx-auto mb-3" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">Personal Touch</h3>
                <p className="text-sm text-gray-600">Human interaction builds rapport and encourages detailed responses</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-6 pb-6 text-center">
                <Shield className="text-green-600 mx-auto mb-3" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">High Quality</h3>
                <p className="text-sm text-gray-600">Live monitoring ensures data accuracy and proper interview conduct</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-6 pb-6 text-center">
                <Globe className="text-purple-600 mx-auto mb-3" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">Complex Topics</h3>
                <p className="text-sm text-gray-600">Ideal for detailed, technical, or sensitive research subjects</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-6 pb-6 text-center">
                <BarChart3 className="text-orange-600 mx-auto mb-3" size={40} />
                <h3 className="font-bold text-gray-900 mb-2">Better Response</h3>
                <p className="text-sm text-gray-600">Higher completion rates compared to self-administered surveys</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our CATI Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Our CATI Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <Headphones className="text-pink-700 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Interviewers</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our trained telephone interviewers undergo rigorous screening and continuous training to ensure professional, consistent, and empathetic interview conduct.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Extensive interview training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Subject matter expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Soft skills assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Performance monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <Phone className="text-green-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced CATI Software</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  State-of-the-art CATI platforms with intelligent skip logic, real-time data validation, and automated callback scheduling for optimal efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Smart question routing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Automatic data validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Callback management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Real-time reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <Shield className="text-purple-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Control Systems</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Multi-layered quality assurance including live call monitoring, call recording review, and interviewer performance evaluation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Live supervisor monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Call recording & review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Validation callbacks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Performance metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <Globe className="text-orange-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Language Support</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Native-speaking interviewers across multiple languages enabling international research with cultural sensitivity and linguistic accuracy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Native language interviewers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Cultural adaptation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Localized scripts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Global coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Our CATI Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Script Development</h4>
                <p className="text-gray-600 leading-relaxed">We work with you to create conversational interview scripts optimized for telephone delivery while maintaining research rigor.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Interviewer Training</h4>
                <p className="text-gray-600 leading-relaxed">Project-specific training sessions ensure interviewers understand context, terminology, and proper interview techniques for your study.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Soft Launch</h4>
                <p className="text-gray-600 leading-relaxed">We conduct a controlled pilot phase to test scripts, identify issues, and refine approach before full-scale deployment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Full Fieldwork</h4>
                <p className="text-gray-600 leading-relaxed">Structured calling schedule with optimal contact strategies, callback management, and continuous quality monitoring throughout fieldwork.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Verification</h4>
                <p className="text-gray-600 leading-relaxed">Post-fieldwork validation including callback verification, data cleaning, and comprehensive quality assurance documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Ideal Use Cases for CATI</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-gray-900 mb-2">B2B Research</h4>
              <p className="text-gray-600 text-sm">Reaching busy professionals and decision-makers who prefer phone communication</p>
            </div>
            <div className=" p-6 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-gray-900 mb-2">Complex Surveys</h4>
              <p className="text-gray-600 text-sm">Technical or detailed questionnaires requiring explanation and probing</p>
            </div>
            <div className=" p-6 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-gray-900 mb-2">Sensitive Topics</h4>
              <p className="text-gray-600 text-sm">Research on personal or confidential subjects benefiting from human rapport</p>
            </div>
            <div className=" p-6 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-gray-900 mb-2">Low Digital Access</h4>
              <p className="text-gray-600 text-sm">Audiences with limited internet access or technology literacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-6">
            Ready to Launch Your CATI Study?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to discuss your telephone interviewing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-yellow-800 text-slate-800 hover:">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};