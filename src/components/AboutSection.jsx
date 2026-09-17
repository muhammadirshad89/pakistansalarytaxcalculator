import { text } from '../text/en.js';

export default function AboutSection() {
  return (
    <section className="card">
      <h2>{text.about.heading}</h2>
      <p>{text.about.body}</p>
    </section>
  );
}
