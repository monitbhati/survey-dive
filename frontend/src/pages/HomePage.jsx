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
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc2NDcxNzE2Nnww&ixlib=rb-4.1.0&q=85" 
          alt="Data Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-pink-900/85 to-yellow-900/75"></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
        
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {mockData.company.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {mockData.company.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-yellow-200 text-center hover:shadow-xl transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-pink-700 bg-clip-text text-transparent mb-2">{mockData.stats.projectsCompleted}</div>
              <div className="text-sm text-gray-700 font-semibold">Strategic Projects</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-yellow-200 text-center hover:shadow-xl transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-pink-700 bg-clip-text text-transparent mb-2">{mockData.stats.industriesServed}</div>
              <div className="text-sm text-gray-700 font-semibold">Industry Sectors</div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-yellow-200 text-center hover:shadow-xl transition-all hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-pink-700 bg-clip-text text-transparent mb-2">{mockData.stats.clientSatisfaction}</div>
              <div className="text-sm text-gray-700 font-semibold">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">Strategic Advantages</h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Differentiated capabilities that transform market research into strategic intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mockData.whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={item.id} className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-yellow-200 hover:border-pink-400 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="text-white" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Transform Your Market Intelligence?
            </h2>
            <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Connect with our research strategists to explore how we can support your intelligence requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-400 hover:to-pink-600 text-lg px-8 h-14 shadow-2xl">
                  Initiate Consultation <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm">
                  Explore Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};