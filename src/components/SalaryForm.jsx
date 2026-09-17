import { useState } from 'react';
import { text } from '../text/en.js';

const initialFormState = {
  salaryFrequency: 'monthly',
  grossSalary: '',
  annualBonus: '',
  otherTaxableAllowances: '',
  residency: 'resident',
};

/**
 * Strips anything that isn't a digit or a decimal point, so the state
 * never contains commas or currency symbols — that keeps the value safe
 * to hand straight to the calculation engine (which expects plain numbers).
 */
function sanitizeNumericInput(rawValue) {
  return rawValue.replace(/[^0-9.]/g, '');
}

export default function SalaryForm({ onSubmit, onReset, errors = {} }) {
  const [form, setForm] = useState(initialFormState);

  function updateField(field, value) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function handleNumericChange(field) {
    return (event) => updateField(field, sanitizeNumericInput(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...form });
  }

  function handleReset() {
    setForm(initialFormState);
    onReset();
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2>{text.form.heading}</h2>

      {hasErrors && (
        <div className="form-error-banner" role="alert">
          {text.errors.formHasErrors}
        </div>
      )}

      <div className="field-group">
        <label id="salary-frequency-label">{text.form.salaryFrequencyLabel}</label>
        <div className="radio-row" role="radiogroup" aria-labelledby="salary-frequency-label">
          <div className="radio-option">
            <input
              type="radio"
              id="frequency-monthly"
              name="salaryFrequency"
              value="monthly"
              checked={form.salaryFrequency === 'monthly'}
              onChange={() => updateField('salaryFrequency', 'monthly')}
            />
            <label htmlFor="frequency-monthly">{text.form.salaryFrequencyMonthly}</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="frequency-annual"
              name="salaryFrequency"
              value="annual"
              checked={form.salaryFrequency === 'annual'}
              onChange={() => updateField('salaryFrequency', 'annual')}
            />
            <label htmlFor="frequency-annual">{text.form.salaryFrequencyAnnual}</label>
          </div>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="gross-salary">{text.form.grossSalaryLabel}</label>
        <input
          type="text"
          inputMode="decimal"
          id="gross-salary"
          className={errors.grossSalary ? 'has-error' : ''}
          placeholder={text.form.grossSalaryPlaceholder}
          value={form.grossSalary}
          onChange={handleNumericChange('grossSalary')}
          aria-invalid={Boolean(errors.grossSalary)}
          aria-describedby={errors.grossSalary ? 'gross-salary-error' : undefined}
        />
        {errors.grossSalary && (
          <p className="error-text" id="gross-salary-error">
            {errors.grossSalary}
          </p>
        )}
      </div>

      <div className="field-group">
        <label htmlFor="annual-bonus">{text.form.annualBonusLabel}</label>
        <input
          type="text"
          inputMode="decimal"
          id="annual-bonus"
          className={errors.annualBonus ? 'has-error' : ''}
          placeholder={text.form.annualBonusPlaceholder}
          value={form.annualBonus}
          onChange={handleNumericChange('annualBonus')}
          aria-invalid={Boolean(errors.annualBonus)}
          aria-describedby={errors.annualBonus ? 'annual-bonus-error' : undefined}
        />
        {errors.annualBonus && (
          <p className="error-text" id="annual-bonus-error">
            {errors.annualBonus}
          </p>
        )}
      </div>

      <div className="field-group">
        <label htmlFor="other-allowances">{text.form.otherAllowancesLabel}</label>
        <input
          type="text"
          inputMode="decimal"
          id="other-allowances"
          className={errors.otherTaxableAllowances ? 'has-error' : ''}
          placeholder={text.form.otherAllowancesPlaceholder}
          value={form.otherTaxableAllowances}
          onChange={handleNumericChange('otherTaxableAllowances')}
          aria-invalid={Boolean(errors.otherTaxableAllowances)}
          aria-describedby="other-allowances-help"
        />
        <p className="field-help" id="other-allowances-help">
          {errors.otherTaxableAllowances || text.form.otherAllowancesHelp}
        </p>
      </div>

      <div className="field-group">
        <label id="residency-label">{text.form.residencyLabel}</label>
        <div className="radio-row" role="radiogroup" aria-labelledby="residency-label">
          <div className="radio-option">
            <input
              type="radio"
              id="residency-resident"
              name="residency"
              value="resident"
              checked={form.residency === 'resident'}
              onChange={() => updateField('residency', 'resident')}
            />
            <label htmlFor="residency-resident">{text.form.residencyResident}</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="residency-non-resident"
              name="residency"
              value="non-resident"
              checked={form.residency === 'non-resident'}
              onChange={() => updateField('residency', 'non-resident')}
            />
            <label htmlFor="residency-non-resident">{text.form.residencyNonResident}</label>
          </div>
        </div>
      </div>

      <div className="button-row">
        <button type="submit" className="submit-button">
          {text.form.submitButton}
        </button>
        <button type="button" className="submit-button button-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
