import React from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight,
  User
} from 'lucide-react';

export const AboutPage = () => {
  const panelStats = [
    { label: 'Countries Covered', value: '50+', icon: Globe },
    { label: 'B2B Professionals', value: '2M+', icon: Target },
    { label: 'Healthcare Experts', value: '500K+', icon: Award }
  ];

  const team = [
    {
      name: 'Anuj Kumar',
      position: 'Founder',
      image: '/team/founder.png',
      quote: 'Our mission is to revolutionize market research by delivering authentic insights that drive meaningful business decisions. Quality and integrity are at the heart of everything we do.'
    },
    {
      name: 'Ayush Bhatnagar',
      position: 'Sales and Business Development',
      image: '/team/client-services.png',
      quote: 'Building lasting partnerships is what drives us. We believe in understanding our clients\' unique challenges and delivering tailored research solutions that exceed expectations.'
    },
    {
      name: 'Anand Yadav',
      position: 'Operations Head',
      image: '/team/operations-head.jpeg',
      quote: 'Excellence in execution is our standard. From project inception to final delivery, our team ensures every detail meets the highest quality benchmarks through rigorous processes.'
    },
    {
      name: 'Neeraj Saxena',
      position: 'Chief Financial Officer',
      image: '/team/cfo.png',
      quote: 'Sustainable growth through strategic investments in technology and talent enables us to maintain competitive pricing while delivering premium research quality to our clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/7947756/pexels-photo-7947756.jpeg" 
          alt="Business Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-pink-900/85 to-yellow-900/85"></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Page Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">About Us</h1>
              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-md">
                A premier market research consultancy transforming complex market dynamics into strategic clarity through precision methodologies and actionable intelligence.
              </p>
            </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-md p-10 rounded-2xl border-2 border-yellow-400 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To deliver quality data with speed and efficiency, minimizing complexity while maximizing accuracy. We believe in streamlined processes that provide you with reliable insights when you need them most.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-10 rounded-2xl border-2 border-pink-400 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To expand our reach across markets and establish ourselves as the trusted and reliable research partner for life. We envision long-term partnerships built on consistent quality, transparency, and unwavering commitment to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-100 drop-shadow-md">Specialized capabilities that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quantitative Research</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Comprehensive quantitative research solutions across diverse audience segments, delivering precise targeting and high-quality respondent engagement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span className="text-sm">B2B Professional Sampling</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span className="text-sm">B2C Consumer Research</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span className="text-sm">Healthcare Specialized Panels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-purple-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Qualitative Research</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Deep-dive qualitative methodologies that uncover insights beyond numbers, revealing the 'why' behind consumer behaviors and market trends.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span className="text-sm">In-Depth Interviews (IDI)</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span className="text-sm">Focus Group Discussions</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={18} />
                    <span className="text-sm">Ethnographic Studies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Strengths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">What Makes Us Unique</h2>
            <p className="text-lg text-gray-100 drop-shadow-md">Distinctive advantages that define our approach</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-300 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Niche Audience Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Exclusive access to hard-to-reach professionals and specialized audience segments that others struggle to find.
              </p>
            </div>
            <div className="text-center bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-pink-300 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-700 leading-relaxed">
                Pan-global panel network spanning 50+ countries with verified panelists across all major markets.
              </p>
            </div>
            <div className="text-center bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-yellow-300 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strict Quality Checks</h3>
              <p className="text-gray-700 leading-relaxed">
                Multi-layered quality assurance protocols ensuring every data point meets the highest standards of accuracy and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Quality */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">What Makes Our Sample Quality Better</h2>
            <p className="text-lg text-gray-100 drop-shadow-md">Three pillars of excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-pink-300 hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-red-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rigorous QC Protocols</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time quality monitoring, behavioral validation, and fraud detection systems ensure pristine data integrity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-300 hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-pink-700" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Recruitment Team</h3>
                <p className="text-gray-700 leading-relaxed">
                  Specialized panel recruitment professionals who source and verify niche audiences across industries and demographics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-300 hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cutting-edge sampling platforms, AI-powered quality checks, and automated validation systems for superior accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Panelist Network */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Our Global Panelist Network</h2>
            <p className="text-lg text-gray-100 drop-shadow-md">Connecting you with the right audience, anywhere in the world</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {panelStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-pink-700" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Visual Representation */}
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-pink-300 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Truly Global Presence</h3>
              <p className="text-gray-700">Our panelists span across continents, industries, and demographics</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">35%</div>
                <div className="text-sm text-gray-700">North America</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
                <div className="text-sm text-gray-700">Europe</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">20%</div>
                <div className="text-sm text-gray-700">Asia Pacific</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-700 mb-1">10%</div>
                <div className="text-sm text-gray-700">Latin America</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600 mb-1">5%</div>
                <div className="text-sm text-gray-700">Middle East & Africa</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/panel-reach-presentation.html" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-orange-700 hover:to-red-600">
                View/Download Our Panel Book <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-100 drop-shadow-md">Experienced professionals driving excellence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-yellow-400 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{ 
                          objectPosition: member.name === 'Ayush Bhatnagar' ? '60% center' : 'center center'
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-pink-700 font-semibold mb-3">{member.position}</p>
                      <p className="text-gray-700 text-sm leading-relaxed italic">"{member.quote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-100 drop-shadow-md mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your research objectives
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14 shadow-2xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
        </section>

      <Footer />
      </div>
    </div>
  );
};