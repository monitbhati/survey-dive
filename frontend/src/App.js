import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";;
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { JoinUsPage } from "./pages/JoinUsPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { QuantitativeResearchPage } from "./pages/services/QuantitativeResearchPage";
import { CATIPage } from "./pages/services/CATIPage";
import { QualitativePage } from "./pages/services/QualitativePage";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";
import LogoShowcase from "./pages/LogoShowcase";
import { Toaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sample1Page } from "./pages/samples/Sample1Page";
import { Sample2Page } from "./pages/samples/Sample2Page";
import { Sample3Page } from "./pages/samples/Sample3Page";
import { CareersPage } from "./pages/CareersPage";
import { QualityPage } from "./pages/QualityPage";
import { PanelFaqPage } from "./pages/PanelFaqPage";
import { Sample4Page } from "./pages/samples/Sample4Page";
import { Sample5Page } from "./pages/samples/Sample5Page";
import { Sample6Page } from "./pages/samples/Sample6Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Sample3Page />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Navigate to="/" replace />} />
          <Route path="/services/quantitative-research" element={<QuantitativeResearchPage />} />
          <Route path="/services/cati-excellence" element={<CATIPage />} />
          <Route path="/services/qualitative-deep-dives" element={<QualitativePage />} />
          <Route path="/services/survey-designing" element={<Navigate to="/" replace />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/logo-showcase" element={<LogoShowcase />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/sample-1" element={<Sample1Page />} />
          <Route path="/sample-2" element={<Sample2Page />} />
          <Route path="/sample-3" element={<Sample3Page />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/panel-faq" element={<PanelFaqPage />} />
          <Route path="/sample-4" element={<Sample4Page />} />
          <Route path="/sample-5" element={<Sample5Page />} />
          <Route path="/sample-6" element={<Sample6Page />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;