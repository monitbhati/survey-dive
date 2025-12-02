import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  ClipboardList, 
  Phone, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Target,
  CheckCircle,
  Mail,
  MapPin,
  PhoneCall,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Layers
} from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';

const iconMap = {
  ClipboardList,
  Phone,
  Users,
  TrendingUp,
  ShieldCheck,
  Award,
  Target
};

export const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for reaching out. Our team will respond within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
                  <BarChart3 className="text-white" size={24} strokeWidth={2.5} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                  <Layers className="text-white" size={12} strokeWidth={3} />
                </div>
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight text-gray-900">{mockData.company.name}</div>
                <div className="text-xs text-gray-500 tracking-wide">Market Intelligence</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-slate-900 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-slate-900 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-slate-900 transition-colors font-medium">Expertise</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-slate-900 transition-colors font-medium">FAQ</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-slate-800 hover:bg-slate-900 px-6">Get Started</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium">Services</button>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium">Expertise</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-slate-900 transition-colors py-2 font-medium">FAQ</button>
                <Button onClick={() => scrollToSection('contact')} className="bg-slate-800 hover:bg-slate-900 w-full">Get Started</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-6">
              Strategic Market Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {mockData.company.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {mockData.company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-800 hover:bg-slate-900 text-lg px-8 h-14"
              >
                Initiate Consultation <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 h-14 border-2 border-slate-800 text-slate-800 hover:bg-slate-50"
              >
                Explore Capabilities
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">{mockData.stats.projectsCompleted}</div>
              <div className="text-sm text-gray-600 font-medium">Strategic Projects</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">{mockData.stats.industriesServed}</div>
              <div className="text-sm text-gray-600 font-medium">Industry Sectors</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">{mockData.stats.clientSatisfaction}</div>
              <div className="text-sm text-gray-600 font-medium">Client Retention</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">{mockData.stats.yearsExperience}</div>
              <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Research Methodologies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated research frameworks engineered to extract actionable intelligence from complex market dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Strategic Advantages</h2>
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
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Initiate Engagement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with our research strategists to explore how we can support your intelligence requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Submit Inquiry</CardTitle>
                <CardDescription className="text-base">Our team responds to all inquiries within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Research Requirements *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your research objectives and intelligence needs..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900 h-12 text-base">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-slate-700" size={24} />
                    </div>
                    <div className="ml-5">
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <div className="text-gray-600">{mockData.company.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="text-slate-700" size={24} />
                    </div>
                    <div className="ml-5">
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <div className="text-gray-600">{mockData.company.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-slate-700" size={24} />
                    </div>
                    <div className="ml-5">
                      <div className="font-semibold text-gray-900 mb-1">Office Location</div>
                      <div className="text-gray-600">{mockData.company.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Office Hours</h4>
                <div className="text-gray-700 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400 rounded-lg flex items-center justify-center shadow-lg">
                    <BarChart3 className="text-white" size={24} strokeWidth={2.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                    <Layers className="text-white" size={12} strokeWidth={3} />
                  </div>
                </div>
                <div className="font-bold text-xl">{mockData.company.name}</div>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">{mockData.company.tagline}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Transforming market complexity into strategic clarity through precision research methodologies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('why-choose-us')} className="text-slate-400 hover:text-white transition-colors">Expertise</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-slate-400 hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Capabilities</h4>
              <ul className="space-y-3">
                <li className="text-slate-400">Survey Architecture</li>
                <li className="text-slate-400">CATI Excellence</li>
                <li className="text-slate-400">Qualitative Research</li>
                <li className="text-slate-400">Strategic Intelligence</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {mockData.company.name}. All rights reserved. | Strategic Market Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};