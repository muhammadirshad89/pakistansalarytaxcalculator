import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { Link } from '../router/Link.jsx';

export default function SeoIntro() {
  return (
    <section className="card">
      <h2>{text.seo.intro.heading}</h2>
      <p>{text.seo.intro.body(taxRules.displayLabel)}</p>
      <p>
        If you would like to browse estimated tax amounts for a range of common salaries without
        entering your own figures, see our{' '}
        <Link to="/salary-tax-calculator-pakistan">Pakistan salary tax calculator reference</Link>.
      </p>
    </section>
  );
}
