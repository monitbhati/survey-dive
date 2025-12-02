import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, TrendingUp, ShieldCheck, Award, Target } from 'lucide-react';
import { mockData } from '../mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Award,
  Target
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {mockData.company.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {mockData.company.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">{mockData.stats.projectsCompleted}</div>
              <div className="text-sm text-gray-600 font-medium">Strategic Projects</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">{mockData.stats.industriesServed}</div>
              <div className="text-sm text-gray-600 font-medium">Industry Sectors</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">{mockData.stats.clientSatisfaction}</div>
              <div className="text-sm text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">{mockData.stats.yearsExperience}</div>
              <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Strategic Advantages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Differentiated capabilities that transform market research into strategic intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mockData.whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-orange-600" size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Market Intelligence?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Connect with our research strategists to explore how we can support your intelligence requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-lg px-8 h-14">
                  Initiate Consultation <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-orange-600 text-orange-600 hover:bg-white">
                  Explore Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};