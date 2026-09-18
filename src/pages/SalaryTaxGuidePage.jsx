import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { calculateSalaryTax } from '../utils/taxCalculator.js';
import { formatPKR, formatPercent, describeSlabRange, describeSlabFormula } from '../utils/format.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';

const EXAMPLE_MONTHLY_SALARY = 85000;

export default function SalaryTaxGuidePage() {
  const content = text.salaryTaxGuide;

  useDocumentHead({
    title: content.metaTitle,
    description: content.metaDescription,
    canonical: content.canonical,
  });

  // Same engine, same tax-rules file the interactive calculator uses —
  // this example can never drift out of sync or be manually invented.
  const example = calculateSalaryTax(
    {
      salaryFrequency: 'monthly',
      grossSalary: EXAMPLE_MONTHLY_SALARY,
      annualBonus: 0,
      otherTaxableAllowances: 0,
      residency: 'resident',
    },
    taxRules
  );

  const taxFreeLimit = formatPKR(taxRules.slabs[0].maxIncome);

  const faqs = [
    {
      question: 'What is salary tax in Pakistan?',
      answer:
        "Salary tax in Pakistan is the income tax charged on a salaried employee's taxable income for a tax year, calculated using the slab rates announced under the applicable Finance Act.",
    },
    {
      question: 'How is salary tax calculated in Pakistan?',
      answer:
        "Salary tax is calculated by first determining your annual taxable income, then applying the tax slab that income falls into — using that slab's fixed amount plus a percentage of the income above the slab's threshold.",
    },
    {
      question: 'Is salary below the tax-free threshold taxable?',
      answer: `No. Annual taxable salary up to ${taxFreeLimit} is currently tax-free under the salaried-individual slabs used by this calculator.`,
    },
    {
      question: 'How do I calculate monthly salary tax?',
      answer:
        "Monthly tax is generally your estimated annual tax divided by 12 — Pakistan's salary tax is not calculated using a separate monthly rate.",
    },
    {
      question: 'Can my employer deduct salary tax every month?',
      answer:
        "Yes. Many employers withhold an estimated amount of income tax from salary each month as part of payroll and deposit it with FBR on the employee's behalf — this is separate from filing an annual tax return.",
    },
    {
      question: 'Can salary tax rules change during a tax year?',
      answer:
        'Tax rules are typically set for a tax year through a Finance Act, but government notifications or amendments can still occur. Always verify current rules if you are unsure.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">{text.brand}</div>
          <h1>{content.h1}</h1>
          <p>{content.intro}</p>
        </div>
      </header>

      <main className="content">
        <Link to="/" className="back-link">
          {text.nav.backToCalculator}
        </Link>

        <section className="card">
          <h2>{content.whatIsIt.heading}</h2>
          <p>{content.whatIsIt.body}</p>
        </section>

        <section className="card">
          <h2>{content.slabs.heading}</h2>
          <p>{content.slabs.intro}</p>
          <div className="table-scroll">
            <table className="tax-slabs-table">
              <caption className="sr-only">{content.slabs.heading}</caption>
              <thead>
                <tr>
                  <th scope="col">{content.slabs.columnRange}</th>
                  <th scope="col">{content.slabs.columnCalculation}</th>
                  <th scope="col">{content.slabs.columnRate}</th>
                </tr>
              </thead>
              <tbody>
                {taxRules.slabs.map((slab, index) => (
                  <tr key={index}>
                    <th scope="row">{describeSlabRange(slab)}</th>
                    <td>{describeSlabFormula(slab)}</td>
                    <td>{formatPercent(slab.rate, { decimals: 0 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card">
          <h2>{content.howCalculated.heading}</h2>
          <ol className="breakdown-list howcalc-list">
            {content.howCalculated.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p className="field-help">{content.howCalculated.note}</p>
        </section>

        {example.status === 'ok' && (
          <section className="card">
            <h2>{content.example.heading}</h2>
            <p>{content.example.intro(formatPKR(EXAMPLE_MONTHLY_SALARY))}</p>
            <ul className="info-list">
              <li>{content.example.monthlySalaryLine(formatPKR(EXAMPLE_MONTHLY_SALARY))}</li>
              <li>{content.example.annualSalaryLine(formatPKR(example.annualSalary))}</li>
              <li>{content.example.taxableIncomeLine(formatPKR(example.taxableIncome))}</li>
              <li>{content.example.annualTaxLine(formatPKR(example.annualTax))}</li>
              <li>{content.example.monthlyTaxLine(formatPKR(example.monthlyTax))}</li>
              <li>{content.example.takeHomeLine(formatPKR(example.estimatedMonthlyTakeHome))}</li>
            </ul>
          </section>
        )}

        <section className="card cta-section">
          <h2>{content.cta.heading}</h2>
          <p>{content.cta.body}</p>
          <Link to="/" className="submit-button cta-button">
            {content.cta.buttonLabel}
          </Link>
        </section>

        <section className="card">
          <h2>{content.important.heading}</h2>
          <ul className="info-list">
            {content.important.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>{content.faqHeading}</h2>
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

        <div className="card">
          <p>
            {content.links.privacyText}{' '}
            <Link to="/privacy-policy">{content.links.privacyLinkLabel}</Link>. {content.links.termsText}{' '}
            <Link to="/terms-and-conditions">{content.links.termsLinkLabel}</Link>.
          </p>
          <div className="source-block">
            <h3>{text.source.heading}</h3>
            <p>
              {text.source.lawLabel}
              <br />
              <a href={taxRules.legalSource.url} target="_blank" rel="noreferrer">
                {text.source.linkText}
              </a>
            </p>
          </div>
          <p className="table-source-note">
            {content.author.preparedByLabel}: {content.author.name}
            <br />
            {content.author.websiteLabel}: {content.author.websiteName}
          </p>
        </div>
      </main>
    </>
  );
}
