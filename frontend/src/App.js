import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { JoinUsPage } from "./pages/JoinUsPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { OnlineSamplingPage } from "./pages/services/OnlineSamplingPage";
import { CATIPage } from "./pages/services/CATIPage";
import { QualitativePage } from "./pages/services/QualitativePage";
import { SurveyDesigningPage } from "./pages/services/SurveyDesigningPage";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";
import LogoShowcase from "./pages/LogoShowcase";
import { Toaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/online-sampling" element={<OnlineSamplingPage />} />
          <Route path="/services/cati-excellence" element={<CATIPage />} />
          <Route path="/services/qualitative-deep-dives" element={<QualitativePage />} />
          <Route path="/services/survey-designing" element={<SurveyDesigningPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/logo-showcase" element={<LogoShowcase />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;