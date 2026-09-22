import { text } from '../text/en.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';

export default function AboutPage() {
  const content = text.aboutPage;

  useDocumentHead({
    title: content.metaTitle,
    description: content.metaDescription,
    canonical: content.canonical,
  });

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <h1>{content.h1}</h1>
          <p>{content.intro}</p>
        </div>
      </header>

      <main className="content">
        <Link to="/" className="back-link">
          {text.nav.backToCalculator}
        </Link>

        <div className="card legal-content">
          {content.sections.map((section) => (
            <section key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="legal-section">
            <h2>Learn More</h2>
            <p>
              To use the salary tax calculator, visit the{' '}
              <Link to="/">Pakistan Salary Tax Calculator</Link>.
              For more information about applicable tax rules, see our{' '}
              <Link to="/salary-tax-2026-27">Salary Tax Guide</Link> or the{' '}
              <Link to="/income-tax-slabs-2026-27">Income Tax Slabs 2026-27</Link>.
            </p>
            <p>
              Read our <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link> for
              full details on how this website works and its limitations.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
