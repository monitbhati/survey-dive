import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Users, 
  MessageCircle, 
  Target, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  FileText
} from 'lucide-react';

export const QualitativePage = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url(https://images.unsplash.com/photo-1573878587306-c6723c815090?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Qualitative Deep Dives
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-700">
              Uncover the "why" behind behaviors through expert-led in-depth interviews, focus groups, and ethnographic research that reveal insights beyond numbers
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-lg px-8 h-14">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Qualitative Research?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qualitative research explores the deeper meaning, motivations, and contexts behind human behavior. Through open-ended conversations and observations, we uncover rich insights that quantitative methods cannot capture.
            </p>
          </div>
        </div>
      </section>

      {/* Research Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Qualitative Methods</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <MessageCircle className="text-blue-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">In-Depth Interviews (IDI)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One-on-one conversations that dive deep into individual perspectives, experiences, and decision-making processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Structured & semi-structured formats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">45-90 minute sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Expert moderators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Audio/video recording</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Users className="text-green-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Focus Group Discussions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Moderated group discussions where participants interact, share viewpoints, and build on each other's ideas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">6-10 participants per group</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Professional facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Client observation rooms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Live streaming options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Eye className="text-purple-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ethnographic Research</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Observational research in natural environments to understand behaviors, contexts, and cultural influences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">In-home observations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Shop-alongs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Workplace studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Contextual inquiry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Qualitative Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Target className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Moderators</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our moderators bring years of experience, deep listening skills, and the ability to probe beneath surface responses to uncover true insights. They create comfortable environments that encourage candid sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Lightbulb className="text-green-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Thematic Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  We employ rigorous analytical frameworks to identify patterns, themes, and insights across qualitative data. Our analysis goes beyond reporting quotes to synthesizing strategic implications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <FileText className="text-purple-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Full transcriptions, detailed field notes, and video recordings preserve the richness of qualitative data for deep analysis and future reference.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Users className="text-orange-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Recruitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Careful participant screening ensures we recruit individuals who can articulate experiences and provide rich, meaningful contributions to your research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Qualitative Research Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Research Design</h4>
                <p className="text-gray-600 leading-relaxed">We collaborate with you to define research objectives, develop discussion guides, and select appropriate qualitative methods for your needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Participant Recruitment</h4>
                <p className="text-gray-600 leading-relaxed">Targeted recruitment with detailed screeners ensures participants match your specifications and can provide valuable insights.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fieldwork Execution</h4>
                <p className="text-gray-600 leading-relaxed">Expert moderators conduct interviews or groups with appropriate probing, creating environments that encourage authentic sharing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Analysis & Synthesis</h4>
                <p className="text-gray-600 leading-relaxed">Rigorous thematic analysis identifies patterns, key themes, and strategic insights from your qualitative data.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Strategic Reporting</h4>
                <p className="text-gray-600 leading-relaxed">Comprehensive reports with rich verbatims, thematic insights, and actionable recommendations tied to your business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Qualitative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">When to Choose Qualitative Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Exploratory Research</h4>
              <p className="text-gray-600 text-sm">Understanding new markets, emerging trends, or unexplored consumer territories</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Understanding "Why"</h4>
              <p className="text-gray-600 text-sm">Uncovering motivations, emotions, and decision-making processes behind behaviors</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Concept Testing</h4>
              <p className="text-gray-600 text-sm">Evaluating new products, messaging, or ideas with rich feedback and reactions</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Complex Topics</h4>
              <p className="text-gray-600 text-sm">Exploring sensitive subjects or complicated issues requiring nuanced discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Uncover Deeper Insights?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how qualitative research can reveal the "why" behind your questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-lg px-8 h-14">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-slate-800 text-slate-800 hover:">
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
