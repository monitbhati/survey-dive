import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ClipboardList, Phone, Users, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const iconMap = {
  ClipboardList,
  Phone,
  Users
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Research Methodologies
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Integrated research frameworks engineered to extract actionable intelligence from complex market dynamics
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {mockData.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-slate-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-slate-800 group-hover:to-slate-700 transition-all duration-300">
                      <IconComponent className="text-slate-700 group-hover:text-white transition-colors" size={32} strokeWidth={2} />
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-slate-600 mr-3 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Descriptions */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {mockData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  <div className="md:w-1/3">
                    <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="text-slate-700" size={64} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={18} strokeWidth={2.5} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Discuss Your Research Requirements
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to design a custom research solution for your specific needs
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};