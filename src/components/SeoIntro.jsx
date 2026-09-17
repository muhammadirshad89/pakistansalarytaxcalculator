import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';

export default function SeoIntro() {
  return (
    <section className="card">
      <h2>{text.seo.intro.heading}</h2>
      <p>{text.seo.intro.body(taxRules.displayLabel)}</p>
    </section>
  );
}
