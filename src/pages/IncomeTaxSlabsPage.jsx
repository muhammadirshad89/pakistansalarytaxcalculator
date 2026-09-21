import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { calculateSalaryTax } from '../utils/taxCalculator.js';
import { formatPKR, formatPercent, describeSlabRange, describeSlabFormula } from '../utils/format.js';
import { useDocumentHead } from '../hooks/useDocumentHead.js';
import { Link } from '../router/Link.jsx';

export default function IncomeTaxSlabsPage() {
  const content = text.incomeTaxSlabsPage;

  useDocumentHead({
    title: content.metaTitle,
    description: content.metaDescription,
    canonical: content.canonical,
  });

  // One illustrative sentence per slab, using the real calculation engine
  // to find the tax at the top of each bracket — nothing here is a
  // hand-typed number.
  const slabExampleLines = taxRules.slabs.map((slab) => {
    const range = describeSlabRange(slab);

    if (slab.rate === 0) {
      return content.slabExamplesSection.zeroRateLine(range);
    }

    if (slab.maxIncome === null) {
      return content.slabExamplesSection.openEndedLine(range, formatPercent(slab.rate, { decimals: 0 }));
    }

    const result = calculateSalaryTax(
      {
        salaryFrequency: 'annual',
        grossSalary: slab.maxIncome,
        annualBonus: 0,
        otherTaxableAllowances: 0,
        residency: 'resident',
      },
      taxRules
    );

    if (result.status !== 'ok') return null;

    return content.slabExamplesSection.exampleLine(range, formatPKR(slab.maxIncome), formatPKR(result.annualTax));
  });

  const taxFreeLimit = formatPKR(taxRules.slabs[0].maxIncome);
  const slabCount = taxRules.slabs.length;
  const topSlab = taxRules.slabs[slabCount - 1];
  const topRate = formatPercent(topSlab.rate, { decimals: 0 });

  const faqs = [
    {
      question: 'What are the current income tax slabs in Pakistan for 2026-27?',
      answer:
        'For Tax Year 2027 (2026-27), salaried individuals in Pakistan are taxed under a set of progressive slabs, shown in the table above, ranging from 0% on income up to the tax-free threshold to a top rate on income above the highest threshold.',
    },
    {
      question: 'How many tax slabs are there for salaried individuals in 2026-27?',
      answer: `There are ${slabCount} income tax slabs for salaried individuals for Tax Year 2027, as shown in the table above.`,
    },
    {
      question: 'What is the tax-free income slab in Pakistan?',
      answer: `Annual taxable salary up to ${taxFreeLimit} falls in the 0% slab and is currently tax-free for Tax Year 2027.`,
    },
    {
      question: 'What is the highest income tax slab rate in Pakistan?',
      answer: `The highest slab rate for salaried individuals in Tax Year 2027 is ${topRate}, which applies to the portion of annual taxable income above ${formatPKR(topSlab.minIncome)}.`,
    },
    {
      question: 'Do income tax slabs apply to my entire salary or only part of it?',
      answer:
        "Only part of it. Pakistan's tax slabs are progressive, meaning each slab's rate applies only to the portion of your income that falls within that slab — not to your entire income at the rate of the slab you end up in.",
    },
    {
      question: 'Are these tax slabs the same for filers and non-filers?',
      answer:
        'These income tax slabs apply to calculating annual salary tax for salaried individuals generally. Filer and non-filer status can affect other matters, such as withholding tax rates on certain transactions, which this calculator does not currently cover.',
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
          <h2>{content.tableSection.heading}</h2>
          <p>{content.tableSection.intro}</p>
          <div className="table-scroll">
            <table className="tax-slabs-table">
              <caption className="sr-only">{content.tableSection.heading}</caption>
              <thead>
                <tr>
                  <th scope="col">{content.tableSection.columnRange}</th>
                  <th scope="col">{content.tableSection.columnCalculation}</th>
                  <th scope="col">{content.tableSection.columnRate}</th>
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
          <h2>{content.readingSection.heading}</h2>
          <p>{content.readingSection.body}</p>
        </section>

        <section className="card">
          <h2>{content.slabExamplesSection.heading}</h2>
          <p>{content.slabExamplesSection.intro}</p>
          <ul className="info-list">
            {slabExampleLines.filter(Boolean).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="card cta-section">
          <h2>{content.cta.heading}</h2>
          <p>{content.cta.body}</p>
          <Link to="/" className="submit-button cta-button">
            {content.cta.buttonLabel}
          </Link>
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
            {content.links.guideText} <Link to="/salary-tax-2026-27">{content.links.guideLinkLabel}</Link>.
          </p>
          <p>
            {content.links.calculatorText}{' '}
            <Link to="/salary-tax-calculator-pakistan">{content.links.calculatorLinkLabel}</Link>.
          </p>
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
