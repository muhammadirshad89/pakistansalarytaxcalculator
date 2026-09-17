import { text } from '../text/en.js';
import WhatsappButton from './WhatsappButton.jsx';

export default function ContactCta() {
  return (
    <section className="card contact-cta" id="contact">
      <h2>{text.contactCta.heading}</h2>
      <p>{text.contactCta.body}</p>
      <WhatsappButton
        number={text.footer.whatsappNumber}
        message={text.contactCta.whatsappMessage}
        label={`${text.contactCta.whatsappLabel} — ${text.footer.phoneDisplay}`}
      />
    </section>
  );
}
