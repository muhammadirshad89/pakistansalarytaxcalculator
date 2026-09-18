import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { formatPKR, formatPercent } from '../utils/format.js';

export default function FaqSection() {
  const taxFreeLimit = formatPKR(taxRules.slabs[0].maxIncome);
  const topSlab = taxRules.slabs[taxRules.slabs.length - 1];
  const highestRate = formatPercent(topSlab.rate, { decimals: 0 });
  const highestThreshold = formatPKR(topSlab.minIncome);

  // A single source array drives both the visible FAQ list and the
  // JSON-LD below — they cannot disagree because they're built from
  // the same data.
  const faqs = [
    {
      question: text.seo.faq.taxFreeLimitQuestion,
      answer: text.seo.faq.taxFreeLimitAnswer(taxFreeLimit),
    },
    {
      question: text.seo.faq.monthlyOrAnnualQuestion,
      answer: text.seo.faq.monthlyOrAnnualAnswer,
    },
    {
      question: text.seo.faq.highestRateQuestion,
      answer: text.seo.faq.highestRateAnswer(highestRate, highestThreshold),
    },
    {
      question: text.seo.faq.autoAnnualQuestion,
      answer: text.seo.faq.autoAnnualAnswer,
    },
    {
      question: text.seo.faq.takeHomeQuestion,
      answer: text.seo.faq.takeHomeAnswer,
    },
    {
      question: text.seo.faq.officialQuestion,
      answer: text.seo.faq.officialAnswer,
    },
    {
      question: text.seo.faq.rulesChangeQuestion,
      answer: text.seo.faq.rulesChangeAnswer,
    },
    {
      question: text.seo.faq.otherIncomeQuestion,
      answer: text.seo.faq.otherIncomeAnswer,
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="card" id="faq">
      <h2>{text.seo.faq.heading}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
