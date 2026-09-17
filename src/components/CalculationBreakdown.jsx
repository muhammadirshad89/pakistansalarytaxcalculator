import { text } from '../text/en.js';
import { formatPKR } from '../utils/format.js';

/**
 * Renders the slab-by-slab explanation of how the tax figure was reached.
 * Every number here comes from result.breakdown, which taxCalculator.js
 * builds using the exact same slab it used to compute the tax itself —
 * so this explanation can never disagree with the headline number.
 */
export default function CalculationBreakdown({ breakdown, annualTax }) {
  const { taxableIncome, isZeroRateSlab, priorThreshold, priorTax, remainingAmount, ratePercent, marginalTax } =
    breakdown;

  return (
    <section className="card">
      <h2>{text.breakdown.heading}</h2>

      {isZeroRateSlab ? (
        <p>{text.breakdown.zeroRateLine}</p>
      ) : (
        <ol className="breakdown-list">
          <li>
            {text.breakdown.taxableIncomeLine}:{' '}
            <span className="breakdown-amount">{formatPKR(taxableIncome)}</span>
          </li>
          <li>
            {text.breakdown.priorAmountLine(formatNumberOnly(priorThreshold))}:{' '}
            <span className="breakdown-amount">{text.breakdown.priorTaxLine(formatNumberOnly(priorTax))}</span>
          </li>
          <li>
            {text.breakdown.remainingLabel}:{' '}
            <span className="breakdown-amount">
              {text.breakdown.remainingCalcLine(
                formatNumberOnly(remainingAmount),
                ratePercent,
                formatNumberOnly(marginalTax)
              )}
            </span>
          </li>
          <li>
            {text.breakdown.totalLine}:{' '}
            <span className="breakdown-amount">{formatPKR(annualTax)}</span>
          </li>
        </ol>
      )}
    </section>
  );
}

function formatNumberOnly(value) {
  return Number(value).toLocaleString('en-US');
}
