import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  Users, 
  Target, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Zap,
  BarChart3
} from 'lucide-react';

export const QuantitativeResearchPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" 
          alt="Quantitative Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-pink-900/85 to-yellow-900/85"></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Quantitative Research
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed drop-shadow-md">
              Large-scale quantitative studies delivering statistically significant insights across diverse populations and market segments
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14">
                Request a Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">What is Quantitative Research?</h2>
            <p className="text-lg text-gray-100 drop-shadow-md max-w-3xl mx-auto">
              Quantitative research employs statistical methods and large sample sizes to measure, analyze, and quantify market behaviors, preferences, and trends with mathematical precision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Our Quantitative Research Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="text-pink-700" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Statistical Rigor</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced statistical methodologies and sampling techniques ensure representative data with measurable confidence intervals and significance levels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Representative sampling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Confidence intervals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Significance testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Validation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive data cleaning and validation protocols including outlier detection, consistency checks, and statistical verification processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Outlier detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Consistency validation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Statistical verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-purple-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale & Coverage</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Large-scale data collection capabilities across multiple markets and demographics, ensuring robust sample sizes for reliable statistical analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Large sample sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Multi-market studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Cross-demographic analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-300 bg-white/95 backdrop-blur-md">
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="text-orange-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sophisticated analytical tools and techniques including multivariate analysis, segmentation, and predictive modeling for deeper insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Multivariate analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Statistical modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">Predictive insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Research Methodologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-blue-200">
              <Users className="text-pink-700 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Survey Research</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive survey methodologies including online, telephone, and mixed-mode approaches for maximum reach and response quality.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Online Surveys</li>
                <li>• Telephone Interviews</li>
                <li>• Mixed-Mode Studies</li>
                <li>• Panel Research</li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-green-200">
              <BarChart3 className="text-green-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Market Measurement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Precise market sizing, brand tracking, and performance measurement studies with statistical accuracy and trend analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Market Sizing</li>
                <li>• Brand Tracking</li>
                <li>• Usage & Attitude</li>
                <li>• Competitive Analysis</li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border-2 border-purple-200">
              <Shield className="text-purple-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Statistical Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced statistical techniques including regression analysis, factor analysis, and clustering for deep data insights.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Regression Analysis</li>
                <li>• Factor Analysis</li>
                <li>• Cluster Analysis</li>
                <li>• Conjoint Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-12 text-center">Our Research Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Research Design</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">We collaborate with you to design the optimal research methodology, sample size calculations, and statistical framework for your objectives.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Sampling Strategy</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Implementation of statistically sound sampling techniques ensuring representative coverage and minimizing bias across target populations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Data Collection</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Systematic data gathering using validated instruments with real-time quality monitoring and response rate optimization.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Statistical Analysis</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Comprehensive statistical analysis including descriptive statistics, inferential testing, and advanced modeling techniques.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-pink-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</div>
              <div>
                <h4 className="text-xl font-bold text-white drop-shadow-md mb-2">Insights & Reporting</h4>
                <p className="text-gray-100 drop-shadow-sm leading-relaxed">Detailed analytical reports with statistical significance testing, confidence intervals, and actionable business recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-6">
            Ready to Launch Your Quantitative Study?
          </h2>
          <p className="text-lg text-gray-100 drop-shadow-md mb-8 max-w-2xl mx-auto">
            Let's discuss your research objectives and design a statistically robust study
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-yellow-600 hover:to-pink-800 text-lg px-8 h-14">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-white text-white hover:bg-white/10">
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