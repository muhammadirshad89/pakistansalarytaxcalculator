import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { calculateSalaryTax } from '../utils/taxCalculator.js';
import { formatPKR, describeSlabRange, describeSlabFormula } from '../utils/format.js';

const EXAMPLE_MONTHLY_SALARY = 85000;

/**
 * This example calls the exact same calculateSalaryTax() function the
 * interactive calculator above uses, with a fixed sample input. Nothing
 * here is a hardcoded number pretending to be a calculation — if the
 * tax rules ever change, this example recalculates itself and can
 * never drift out of sync with the real calculator.
 */
export default function ExampleCalculation() {
  const result = calculateSalaryTax(
    {
      salaryFrequency: 'monthly',
      grossSalary: EXAMPLE_MONTHLY_SALARY,
      annualBonus: 0,
      otherTaxableAllowances: 0,
      residency: 'resident',
    },
    taxRules
  );

  if (result.status !== 'ok') {
    return null;
  }

  return (
    <section className="card">
      <h2>{text.seo.example.heading}</h2>
      <p>{text.seo.example.intro(formatPKR(EXAMPLE_MONTHLY_SALARY))}</p>
      <ul className="info-list">
        <li>{text.seo.example.annualSalaryLine(formatPKR(result.annualSalary))}</li>
        <li>
          {text.seo.example.slabLine(
            describeSlabRange(result.appliedSlab),
            describeSlabFormula(result.appliedSlab)
          )}
        </li>
        <li>{text.seo.example.annualTaxLine(formatPKR(result.annualTax))}</li>
        <li>{text.seo.example.monthlyTaxLine(formatPKR(result.monthlyTax))}</li>
      </ul>
      <p className="field-help">{text.seo.example.note}</p>
    </section>
  );
}
