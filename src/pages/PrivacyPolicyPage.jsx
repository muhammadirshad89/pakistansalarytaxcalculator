import { text } from '../text/en.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';

export default function PrivacyPolicyPage() {
  const content = text.legal.privacyPolicy;

  useDocumentHead({
    title: content.metaTitle,
    description: content.metaDescription,
    canonical: content.canonical,
  });

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">{text.brand}</div>
          <h1>{content.h1}</h1>
          <p>{content.intro}</p>
        </div>
      </header>

      <main className="content">
        <Link to="/" className="back-link">
          {text.nav.backToCalculator}
        </Link>

        <div className="card legal-content">
          <p className="legal-effective-date">Effective date: {text.legal.effectiveDate}</p>

          {content.sections.map((section) => (
            <section key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
