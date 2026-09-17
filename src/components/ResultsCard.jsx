import { text } from '../text/en.js';
import { formatPKR, formatPercent, describeSlabRange } from '../utils/format.js';

/**
 * Displays the output of calculateSalaryTax(). This component does not
 * perform any tax math itself — every number it shows was already
 * calculated by src/utils/taxCalculator.js and passed in via `result`.
 */
export default function ResultsCard({ result }) {
  const {
    taxableIncome,
    annualTax,
    monthlyTax,
    estimatedMonthlyTakeHome,
    effectiveTaxRate,
    appliedSlab,
  } = result;

  return (
    <section className="card" aria-live="polite">
      <h2>{text.results.heading}</h2>

      <div className="stat-grid">
        <div className="stat">
          <div className="stat-label">{text.results.taxableIncomeLabel}</div>
          <div className="stat-value">{formatPKR(taxableIncome)}</div>
        </div>

        <div className="stat">
          <div className="stat-label">{text.results.annualTaxLabel}</div>
          <div className="stat-value">{formatPKR(annualTax)}</div>
        </div>

        <div className="stat">
          <div className="stat-label">{text.results.monthlyTaxLabel}</div>
          <div className="stat-value">{formatPKR(monthlyTax)}</div>
        </div>

        <div className="stat">
          <div className="stat-label">{text.results.takeHomeLabel}</div>
          <div className="stat-value">{formatPKR(estimatedMonthlyTakeHome)}</div>
          <div className="stat-note">{text.results.takeHomeNote}</div>
        </div>
      </div>

      <div className="applied-slab">
        <div style={{ marginBottom: '8px' }}>
          <strong>{text.results.effectiveRateLabel}:</strong> {formatPercent(effectiveTaxRate)}
        </div>
        <div>
          <strong>{text.results.appliedSlabLabel}:</strong> {describeSlabRange(appliedSlab)}{' '}
          (
          {appliedSlab.rate === 0
            ? 'tax-free'
            : `${formatPercent(appliedSlab.rate, { decimals: 0 })} above ${formatPKR(appliedSlab.minIncome)}`}
          )
        </div>
      </div>
    </section>
  );
}
