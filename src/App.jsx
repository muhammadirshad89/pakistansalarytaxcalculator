import { useRoute } from './router/router.js';
import SiteFooter from './components/SiteFooter.jsx';
import HomePage from './pages/HomePage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// A tiny switch on the current pathname — this is the entire "router
// config" for a 3-page site, no routing library needed.
function renderRoute(pathname) {
  switch (pathname) {
    case '/':
      return <HomePage />;
    case '/privacy-policy':
      return <PrivacyPolicyPage />;
    case '/terms-and-conditions':
      return <TermsAndConditionsPage />;
    default:
      return <NotFoundPage />;
  }
}

function App() {
  const pathname = useRoute();

  return (
    <div className="page">
      {renderRoute(pathname)}
      <SiteFooter />
    </div>
  );
}

export default App;
