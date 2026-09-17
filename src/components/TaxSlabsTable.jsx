import { text } from '../text/en.js';
import taxRules from '../data/tax-rules/2026-27.json';
import { describeSlabRange, describeSlabFormula } from '../utils/format.js';

/**
 * Every row here is generated from taxRules.slabs — the same JSON file
 * the interactive calculator reads. If the tax rules are ever updated
 * for a new year, this table updates itself automatically; no number
 * in this file is typed by hand.
 */
export default function TaxSlabsTable() {
  return (
    <section className="card">
      <h2>{text.seo.slabs.heading}</h2>
      <div className="table-scroll">
        <table className="tax-slabs-table">
          <caption className="sr-only">{text.seo.slabs.heading}</caption>
          <thead>
            <tr>
              <th scope="col">{text.seo.slabs.columnIncome}</th>
              <th scope="col">{text.seo.slabs.columnCalculation}</th>
            </tr>
          </thead>
          <tbody>
            {taxRules.slabs.map((slab, index) => (
              <tr key={index}>
                <th scope="row">{describeSlabRange(slab)}</th>
                <td>{describeSlabFormula(slab)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-source-note">{text.seo.slabs.sourceNote}</p>
    </section>
  );
}
