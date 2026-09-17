import { text } from '../text/en.js';

export default function HowTaxIsCalculated() {
  return (
    <section className="card">
      <h2>{text.seo.howCalculated.heading}</h2>
      <ul className="info-list">
        {text.seo.howCalculated.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
