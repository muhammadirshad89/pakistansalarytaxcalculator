import { text } from '../text/en.js';

export default function UnderstandingSalaryTax() {
  return (
    <section className="card">
      <h2>{text.seo.understanding.heading}</h2>
      <p>{text.seo.understanding.intro}</p>
      <div className="glossary-list">
        {text.seo.understanding.terms.map((item) => (
          <div className="glossary-item" key={item.term}>
            <h3>{item.term}</h3>
            <p>{item.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
