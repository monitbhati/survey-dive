import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { TrendingUp, ShieldCheck, Award, Target } from 'lucide-react';
import { mockData } from '../mock';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Award,
  Target
};

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About FACTUM RESEARCH
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              A premier market research consultancy transforming complex market dynamics into strategic clarity through precision methodologies and actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with strategic market intelligence that drives informed decision-making. We bridge the gap between raw data and actionable insights through methodological excellence and deep industry expertise.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted partner for organizations seeking to understand market complexities and unlock competitive advantages through precision research and strategic intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Differentiated capabilities that transform market research from data collection into strategic intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {mockData.whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-slate-700" size={26} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing common inquiries about our methodologies and engagement models
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {mockData.faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={`item-${index}`} className="bg-white border-2 border-gray-100 rounded-xl px-6 hover:border-slate-300 transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-slate-800 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your research objectives
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