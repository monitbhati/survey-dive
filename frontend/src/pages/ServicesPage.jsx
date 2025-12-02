import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ClipboardList, Phone, Users, CheckCircle, PenTool, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const services = [
  {
    id: 1,
    title: 'Online Sampling',
    icon: Users,
    description: 'Comprehensive online sampling solutions delivering precise audience targeting across B2B, B2C, and healthcare sectors. Our advanced panel network ensures you reach the right respondents with verified profiles and quality engagement.',
    highlights: [
      'B2B Professional Panels',
      'B2C Consumer Audiences',
      'Healthcare Specialized Sampling',
      'Global Reach Across 50+ Countries',
      'Real-Time Quality Monitoring'
    ],
    slug: 'online-sampling'
  },
  {
    id: 2,
    title: 'CATI Excellence',
    icon: Phone,
    description: 'Computer Assisted Telephone Interviewing with trained professionals who conduct high-quality phone surveys. Our state-of-the-art call center technology combined with experienced interviewers ensures superior data collection and respondent engagement.',
    highlights: [
      'Professional Trained Interviewers',
      'Multi-Language Support',
      'Real-Time Call Monitoring',
      'Advanced CATI Software',
      'Quality Control Protocols'
    ],
    slug: 'cati-excellence'
  },
  {
    id: 3,
    title: 'Qualitative Deep Dives',
    icon: PenTool,
    description: 'In-depth qualitative research methodologies that uncover the "why" behind consumer behaviors. Our expert moderators facilitate meaningful conversations through IDIs, focus groups, and ethnographic studies to reveal insights beyond numbers.',
    highlights: [
      'In-Depth Interviews (IDI)',
      'Focus Group Discussions',
      'Ethnographic Research',
      'Expert Moderators',
      'Detailed Thematic Analysis'
    ],
    slug: 'qualitative-deep-dives'
  },
  {
    id: 4,
    title: 'Survey Designing',
    icon: ClipboardList,
    description: 'Expertly crafted survey instruments designed to capture accurate data and actionable insights. Our research specialists create questionnaires that balance respondent experience with data quality, ensuring optimal completion rates and reliable results.',
    highlights: [
      'Custom Questionnaire Development',
      'Survey Flow Optimization',
      'Question Logic Programming',
      'Mobile-Responsive Design',
      'Pilot Testing & Refinement'
    ],
    slug: 'survey-designing'
  }
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Comprehensive research solutions tailored to deliver facts that matter and insights that count
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="border-2 border-orange-100 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="text-orange-600" size={32} strokeWidth={2} />
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-teal-500 mr-3 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to={`/services/${service.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600">
                        Learn More <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-gray-600">Quality, expertise, and reliability in every project</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-layered validation systems ensure data integrity at every touchpoint, delivering reliable and accurate results you can trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced research professionals with deep industry knowledge and methodological expertise across all service areas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored research methodologies designed specifically for your unique business challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss which research solution best fits your needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-lg px-8 h-14">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};