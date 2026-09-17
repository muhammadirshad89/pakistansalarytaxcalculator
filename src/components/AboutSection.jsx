import { text } from '../text/en.js';

export default function AboutSection() {
  return (
    <section className="card" id="about">
      <h2>{text.about.heading}</h2>
      <p>{text.about.body}</p>
    </section>
  );
}
