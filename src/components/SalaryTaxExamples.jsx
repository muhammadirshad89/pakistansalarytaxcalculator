import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { calculateSalaryTax } from '../utils/taxCalculator.js';
import { formatPKR } from '../utils/format.js';

const EXAMPLE_MONTHLY_SALARIES = [50000, 75000, 100000, 150000, 200000, 300000, 500000];

/**
 * Every row is produced by calling the real calculateSalaryTax() function
 * with a fixed monthly salary — the exact same function and tax-rules
 * file the interactive calculator above uses. No tax figure in this
 * table is typed by hand, so it can never drift out of sync with the
 * actual calculator or with the underlying tax rules.
 */
export default function SalaryTaxExamples() {
  const rows = EXAMPLE_MONTHLY_SALARIES.map((monthlySalary) => {
    const result = calculateSalaryTax(
      {
        salaryFrequency: 'monthly',
        grossSalary: monthlySalary,
        annualBonus: 0,
        otherTaxableAllowances: 0,
        residency: 'resident',
      },
      taxRules
    );
    return { monthlySalary, result };
  }).filter((row) => row.result.status === 'ok');

  return (
    <section className="card">
      <h2>{text.seo.examples.heading}</h2>
      <p>{text.seo.examples.intro}</p>

      <div className="table-scroll">
        <table className="tax-slabs-table salary-examples-table">
          <caption className="sr-only">{text.seo.examples.heading}</caption>
          <thead>
            <tr>
              <th scope="col">{text.seo.examples.columnMonthly}</th>
              <th scope="col">{text.seo.examples.columnAnnual}</th>
              <th scope="col">{text.seo.examples.columnAnnualTax}</th>
              <th scope="col">{text.seo.examples.columnMonthlyTax}</th>
              <th scope="col">{text.seo.examples.columnTakeHome}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ monthlySalary, result }) => (
              <tr key={monthlySalary}>
                <th scope="row">{formatPKR(monthlySalary)}</th>
                <td>{formatPKR(result.annualSalary)}</td>
                <td>{formatPKR(result.annualTax)}</td>
                <td>{formatPKR(result.monthlyTax)}</td>
                <td>{formatPKR(result.estimatedMonthlyTakeHome)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="table-source-note">{text.seo.examples.note}</p>
    </section>
  );
}
