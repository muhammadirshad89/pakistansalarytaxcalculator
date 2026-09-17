import { useState } from 'react';
import { calculateSalaryTax } from './utils/taxCalculator.js';
import taxRules from './data/tax-rules/2026-27.json';
import { text } from './text/en.js';
import SalaryForm from './components/SalaryForm.jsx';
import ResultsCard from './components/ResultsCard.jsx';
import CalculationBreakdown from './components/CalculationBreakdown.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactCta from './components/ContactCta.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SeoIntro from './components/SeoIntro.jsx';
import HowTaxIsCalculated from './components/HowTaxIsCalculated.jsx';
import TaxSlabsTable from './components/TaxSlabsTable.jsx';
import ExampleCalculation from './components/ExampleCalculation.jsx';
import FaqSection from './components/FaqSection.jsx';

function App() {
  // `result` is whatever calculateSalaryTax() last returned — this
  // component doesn't compute anything itself, it just decides what to
  // render based on result.status ('ok' | 'invalid' | 'unsupported-residency').
  const [result, setResult] = useState(null);

  function handleCalculate(inputs) {
    setResult(calculateSalaryTax(inputs, taxRules));
  }

  function handleReset() {
    setResult(null);
  }

  const errors = result?.status === 'invalid' ? result.errors : {};

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">{text.brand}</div>
          <h1>{text.page.h1}</h1>
          <p>{text.page.intro}</p>
        </div>
      </header>

      <main className="content">
        <SalaryForm onSubmit={handleCalculate} onReset={handleReset} errors={errors} />

        {result?.status === 'unsupported-residency' && (
          <div className="notice-card" role="status">
            <h2>{text.nonResident.heading}</h2>
            <p>{text.nonResident.message}</p>
          </div>
        )}

        {result?.status === 'ok' && (
          <>
            <ResultsCard result={result} />
            <CalculationBreakdown breakdown={result.breakdown} annualTax={result.annualTax} />
          </>
        )}

        <div className="card">
          <p className="disclaimer">{text.disclaimer}</p>
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
        </div>

        <SeoIntro />

        <HowTaxIsCalculated />

        <TaxSlabsTable />

        <ExampleCalculation />

        <FaqSection />

        <AboutSection />

        <ContactCta />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
