import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  ClipboardList, 
  Layout, 
  Smartphone, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Zap,
  TestTube
} from 'lucide-react';

export const SurveyDesigningPage = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url(https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1920)',
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
              Survey Designing
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-700">
              Expertly crafted survey instruments that balance respondent experience with data quality, ensuring optimal completion rates and actionable insights
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Survey Designing?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Survey designing is the art and science of creating questionnaires that accurately capture data while providing a positive respondent experience. A well-designed survey yields reliable, actionable insights that drive business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Design Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Survey Design Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Layout className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Question Development</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Crafting clear, unbiased questions that capture accurate data while avoiding common pitfalls like leading questions or double-barreling.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Objective question wording</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Appropriate scale selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Response option optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Question order logic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Settings className="text-green-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Survey Logic Programming</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complex skip patterns, piping, and randomization ensure each respondent sees only relevant questions in the right sequence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Skip logic implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Text piping & substitution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Randomization & rotation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Quota management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <Smartphone className="text-purple-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Optimization</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Responsive design ensures seamless survey experience across all devices, from smartphones to desktop computers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Mobile-first design approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Touch-friendly interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Fast loading times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Cross-device testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-8 pb-8">
                <TestTube className="text-orange-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Testing & Refinement</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Rigorous pilot testing identifies issues before launch, ensuring smooth fieldwork and high-quality data collection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Soft launch testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Logic validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Timing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Respondent feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Design Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respondent-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize user experience to keep respondents engaged and motivated throughout the survey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Quality Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Every design decision is made with data integrity and analytical requirements in mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Best Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                We follow industry standards and academic research principles in all our survey designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Survey Design Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Objectives Briefing</h4>
                <p className="text-gray-600 leading-relaxed">We start by understanding your research goals, target audience, and key metrics to inform survey structure and content.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Questionnaire Development</h4>
                <p className="text-gray-600 leading-relaxed">Our researchers craft questions, select scales, and structure the survey flow to optimize data quality and completion rates.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Programming & Logic</h4>
                <p className="text-gray-600 leading-relaxed">Complex survey logic, randomization, and piping are programmed and tested to ensure proper functionality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Pilot Testing</h4>
                <p className="text-gray-600 leading-relaxed">Soft launch with small sample identifies issues, timing concerns, and areas for improvement before full deployment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Refinement & Launch</h4>
                <p className="text-gray-600 leading-relaxed">Based on pilot results, we refine the survey and launch full fieldwork with confidence in data quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Question Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Question Types We Design</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Multiple Choice</h4>
              <p className="text-gray-600 text-sm">Single or multi-select options for categorical data</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Rating Scales</h4>
              <p className="text-gray-600 text-sm">Likert, semantic differential, and numeric scales</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Open-Ended</h4>
              <p className="text-gray-600 text-sm">Text responses for qualitative insights</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Matrix Questions</h4>
              <p className="text-gray-600 text-sm">Efficient multi-item rating grids</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">Ranking Questions</h4>
              <p className="text-gray-600 text-sm">Drag-and-drop or numbered preference ranking</p>
            </div>
            <div className=" p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-gray-900 mb-2">MaxDiff & Conjoint</h4>
              <p className="text-gray-600 text-sm">Advanced trade-off analysis designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Create a High-Quality Survey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our survey design experts help you craft the perfect questionnaire
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
  );
};
