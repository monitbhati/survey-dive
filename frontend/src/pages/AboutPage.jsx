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
                To deliver quality data with speed and efficiency, minimizing complexity while maximizing accuracy. We believe in streamlined processes that provide you with reliable insights when you need them most.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To expand our reach across markets and establish ourselves as the trusted and reliable research partner for life. We envision long-term partnerships built on consistent quality, transparency, and unwavering commitment to your success.
              </p>
            </div>
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