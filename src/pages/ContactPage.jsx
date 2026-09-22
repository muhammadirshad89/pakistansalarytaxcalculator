import { text } from '../text/en.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';
import WhatsappButton from '../components/WhatsappButton.jsx';

export default function ContactPage() {
  const content = text.contactPage;

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
          <section className="legal-section">
            <h2>{content.contactHeading}</h2>
            <p>{content.contactBody}</p>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-label">Phone / WhatsApp:</span>
                <a href={`tel:${text.footer.phoneTel}`} className="contact-link">
                  {text.footer.phoneDisplay}
                </a>
              </div>
              <div className="contact-row">
                <WhatsappButton
                  number={text.footer.whatsappNumber}
                  message={text.footer.whatsappMessage}
                  label={text.footer.whatsappLabel}
                />
              </div>
            </div>

            <p className="field-help">
              {text.footer.developedByLabel}{' '}
              <strong>{text.footer.developerName}</strong>
              {' — '}{text.footer.developerRole}
            </p>
          </section>

          <section className="legal-section">
            <h2>{content.customProjectsHeading}</h2>
            <p>{content.customProjectsBody}</p>
          </section>

          <section className="legal-section">
            <h2>Legal and Privacy</h2>
            <p>
              {content.legalNote}{' '}
              <Link to="/privacy-policy">{content.privacyLinkLabel}</Link>.
            </p>
            <p>
              {content.termsNote}{' '}
              <Link to="/terms-and-conditions">{content.termsLinkLabel}</Link>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
