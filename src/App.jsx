import { useRoute } from './router/router.js';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx';
import SalaryTaxGuidePage from './pages/SalaryTaxGuidePage.jsx';
import IncomeTaxSlabsPage from './pages/IncomeTaxSlabsPage.jsx';
import SalaryTaxCalculatorPkPage from './pages/SalaryTaxCalculatorPkPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// A tiny switch on the current pathname — this is the entire "router
// config" for a small site, no routing library needed.
function renderRoute(pathname) {
  switch (pathname) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/privacy-policy':
      return <PrivacyPolicyPage />;
    case '/terms-and-conditions':
      return <TermsAndConditionsPage />;
    case '/salary-tax-2026-27':
      return <SalaryTaxGuidePage />;
    case '/income-tax-slabs-2026-27':
      return <IncomeTaxSlabsPage />;
    case '/salary-tax-calculator-pakistan':
      return <SalaryTaxCalculatorPkPage />;
    default:
      return <NotFoundPage />;
  }
}

function App() {
  const pathname = useRoute();

  return (
    <div className="page">
      <SiteHeader />
      {renderRoute(pathname)}
      <SiteFooter />
    </div>
  );
}

export default App;
