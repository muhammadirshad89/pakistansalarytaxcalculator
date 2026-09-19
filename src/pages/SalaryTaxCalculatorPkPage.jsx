import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { calculateSalaryTax } from '../utils/taxCalculator.js';
import { formatPKR, formatPercent, describeSlabRange } from '../utils/format.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';

const EXAMPLE_SALARIES = [50000, 75000, 85000, 100000, 150000, 200000];

// Compute all example rows once at module level — they're deterministic
// and don't depend on any runtime state. Every number here comes from
// the real calculateSalaryTax() function and 2026-27.json; nothing is
// typed by hand.
const EXAMPLE_ROWS = EXAMPLE_SALARIES.map((monthly) => {
  const result = calculateSalaryTax(
    {
      salaryFrequency: 'monthly',
      grossSalary: monthly,
      annualBonus: 0,
      otherTaxableAllowances: 0,
      residency: 'resident',
    },
    taxRules
  );
  return result.status === 'ok' ? { monthly, result } : null;
}).filter(Boolean);

// Top two slabs from the rules file used in the summary — no hardcoded
// numbers, just reads what's in the JSON.
const ZERO_SLAB = taxRules.slabs[0];
const TOP_SLAB = taxRules.slabs[taxRules.slabs.length - 1];

export default function SalaryTaxCalculatorPkPage() {
  const content = text.salaryTaxCalculatorPk;

  useDocumentHead({
    title: content.metaTitle,
    description: content.metaDescription,
    canonical: content.canonical,
  });

  const faqs = content.faqs;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">{text.brand}</div>
          <h1>{content.h1}</h1>
          <p>
            Use this free salary tax calculator to estimate your Pakistan income tax, monthly tax
            deduction, take-home salary, and effective tax rate for Tax Year 2027 (2026-27).
          </p>
        </div>
      </header>

      <main className="content">
        <Link to="/" className="back-link">
          {text.nav.backToCalculator}
        </Link>

        {/* ── CTA ── */}
        <section className="card cta-section">
          <h2>{content.internalLinks.homeCta.heading}</h2>
          <p>{content.internalLinks.homeCta.body}</p>
          <Link to="/" className="submit-button cta-button">
            {content.internalLinks.homeCta.buttonLabel}
          </Link>
        </section>

        {/* ── Who is this for ── */}
        <section className="card">
          <h2>{content.intro.heading}</h2>
          <p>{content.intro.body}</p>
        </section>

        {/* ── Live examples table ── */}
        <section className="card">
          <h2>{content.examples.heading}</h2>
          <p>{content.examples.intro}</p>
          <div className="table-scroll">
            <table className="tax-slabs-table salary-examples-table">
              <caption className="sr-only">{content.examples.heading}</caption>
              <thead>
                <tr>
                  <th scope="col">{content.examples.columnMonthly}</th>
                  <th scope="col">{content.examples.columnAnnual}</th>
                  <th scope="col">{content.examples.columnAnnualTax}</th>
                  <th scope="col">{content.examples.columnMonthlyTax}</th>
                  <th scope="col">{content.examples.columnTakeHome}</th>
                  <th scope="col">{content.examples.columnEffectiveRate}</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE_ROWS.map(({ monthly, result }) => (
                  <tr key={monthly}>
                    <th scope="row">{formatPKR(monthly)}</th>
                    <td>{formatPKR(result.annualSalary)}</td>
                    <td>{formatPKR(result.annualTax)}</td>
                    <td>{formatPKR(result.monthlyTax)}</td>
                    <td>{formatPKR(result.estimatedMonthlyTakeHome)}</td>
                    <td>{formatPercent(result.effectiveTaxRate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-source-note">{content.examples.note}</p>
        </section>

        {/* ── Key concepts ── */}
        <section className="card">
          <h2>{content.concepts.heading}</h2>
          <div className="glossary-list">
            {content.concepts.items.map((item) => (
              <div className="glossary-item" key={item.term}>
                <h3>{item.term}</h3>
                <p>{item.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How salary tax is calculated ── */}
        <section className="card">
          <h2>{content.howCalculated.heading}</h2>
          <div className="howcalc-steps">
            {content.howCalculated.steps.map((step, index) => (
              <div className="howcalc-step" key={index}>
                <div className="howcalc-step-number" aria-hidden="true">{index + 1}</div>
                <div>
                  <strong>{step.label}:</strong> {step.detail}
                </div>
              </div>
            ))}
          </div>
          <p className="field-help">
            {content.howCalculated.slabNote}{' '}
            <Link to="/income-tax-slabs-2026-27">{content.howCalculated.slabLinkLabel}</Link>.
          </p>
        </section>

        {/* ── Slab summary ── */}
        <section className="card">
          <h2>Pakistan Salary Tax Slabs 2026-27 — Summary</h2>
          <p>
            Pakistan uses a progressive slab system for salaried individuals. The current slabs run
            from{' '}
            <strong>
              {describeSlabRange(ZERO_SLAB)} at {formatPercent(ZERO_SLAB.rate, { decimals: 0 })}
            </strong>{' '}
            up to{' '}
            <strong>
              {describeSlabRange(TOP_SLAB)} at {formatPercent(TOP_SLAB.rate, { decimals: 0 })}
            </strong>
            . For the complete table with worked examples for every bracket, see{' '}
            <Link to="/income-tax-slabs-2026-27">{content.internalLinks.slabsLinkLabel}</Link>.
          </p>
        </section>

        {/* ── What the calculator covers and doesn't ── */}
        <section className="card">
          <h2>{content.limitsHeading}</h2>
          <ul className="info-list">
            {content.limits.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ── */}
        <section className="card">
          <h2>{content.faqHeading}</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
          {/* eslint-disable-next-line react/no-danger */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </section>

        {/* ── Source + legal + attribution ── */}
        <div className="card">
          <p>
            {content.internalLinks.guideLink}{' '}
            <Link to="/salary-tax-2026-27">{content.internalLinks.guideLinkLabel}</Link>.
          </p>
          <p>
            {content.internalLinks.legalLine(
              <Link to="/privacy-policy">Privacy Policy</Link>,
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            )}
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
            {content.source.preparedByLabel}: {content.source.name}
            <br />
            {content.source.websiteLabel}: {content.source.websiteName}
          </p>
        </div>
      </main>
    </>
  );
}
