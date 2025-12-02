import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Users, 
  Target, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Zap,
  BarChart3
} from 'lucide-react';

export const OnlineSamplingPage = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Online Sampling
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90">
              Precision-targeted digital panels delivering authentic respondent engagement across B2B, B2C, and healthcare sectors worldwide
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 h-14">
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Online Sampling?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Online sampling connects you with verified, engaged respondents through our extensive digital panel network, ensuring quality data collection for your research objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Online Sampling Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Precise Targeting</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced profiling and screening criteria ensure we reach your exact target audience based on demographics, behaviors, and professional attributes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Demographic targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Psychographic profiling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Behavioral segmentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Multi-layered validation processes including fraud detection, attention checks, and behavioral analysis to ensure authentic, engaged respondents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Real-time fraud detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Attention check mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Response pattern analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-purple-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Access verified panelists across 50+ countries with local language support and cultural understanding for international research projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">50+ countries coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Multi-language surveys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Local market expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Deployment</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Rapid sample delivery with real-time monitoring dashboards allowing you to track fieldwork progress and response rates as they happen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Quick turnaround times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Real-time dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Progress tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Specialty Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">B2B Sampling</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Access decision-makers, professionals, and business leaders across industries with verified job titles and company profiles.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• C-Suite Executives</li>
                <li>• Department Heads</li>
                <li>• Industry Specialists</li>
                <li>• SME Owners</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-100">
              <BarChart3 className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">B2C Sampling</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reach consumers across all demographics, from general population studies to highly specific niche audience segments.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• General Population</li>
                <li>• Lifestyle Segments</li>
                <li>• Product Users</li>
                <li>• Brand Loyalists</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border-2 border-purple-100">
              <Shield className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare Sampling</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specialized panels of healthcare professionals, patients, and caregivers with verified medical credentials and conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Physicians & Specialists</li>
                <li>• Nurses & Allied Health</li>
                <li>• Patient Communities</li>
                <li>• Caregivers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sample Specification</h4>
                <p className="text-gray-600 leading-relaxed">We work with you to define precise targeting criteria, sample size, and quality requirements based on your research objectives.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Panel Matching</h4>
                <p className="text-gray-600 leading-relaxed">Our system identifies and pre-screens qualified panelists from our extensive network who match your target profile.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Survey Deployment</h4>
                <p className="text-gray-600 leading-relaxed">We deploy your survey with optimized invitation strategies and real-time monitoring to maximize response rates.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Control</h4>
                <p className="text-gray-600 leading-relaxed">Rigorous validation checks including fraud detection, attention monitoring, and response pattern analysis ensure data quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Data Delivery</h4>
                <p className="text-gray-600 leading-relaxed">Clean, validated data delivered in your preferred format with comprehensive quality reports and fieldwork documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Access Quality Online Samples?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your sample requirements and how we can support your research
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-lg px-8 h-14">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-slate-800 text-slate-800 hover:bg-slate-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};