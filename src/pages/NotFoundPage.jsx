import { text } from '../text/en.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';

export default function NotFoundPage() {
  useDocumentHead({
    title: 'Page Not Found – Pakistan Salary Tax Calculator',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">{text.brand}</div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or may have moved.</p>
        </div>
      </header>

      <main className="content">
        <div className="card">
          <Link to="/" className="back-link">
            {text.nav.backToCalculator}
          </Link>
        </div>
      </main>
    </>
  );
}
