import { text } from '../text/en.js';
import WhatsappButton from './WhatsappButton.jsx';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-credit">
          <p>
            {text.footer.developedByLabel} <strong>{text.footer.developerName}</strong>
          </p>
          <p className="footer-role">{text.footer.developerRole}</p>
        </div>

        <div className="footer-contact">
          <a href={`tel:${text.footer.phoneTel}`} className="footer-phone">
            {text.footer.phoneDisplay}
          </a>
          <WhatsappButton
            number={text.footer.whatsappNumber}
            message={text.footer.whatsappMessage}
            label={text.footer.whatsappLabel}
            className="whatsapp-button-small"
          />
        </div>
      </div>

      <p className="footer-meta">{text.footer.lastUpdated}</p>
    </footer>
  );
}
