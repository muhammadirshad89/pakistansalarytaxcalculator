// taxCalculator.js
//
// This file contains the ENTIRE tax calculation engine.
// It does not import React and does not know anything about the UI.
// That means we can test it on its own (see scripts/runTests.js) and
// re-use it later in a different UI, a Node script, or a different tax year.
//
// The only "knowledge" of tax law that lives in this file is the SHAPE
// of the calculation (how slabs work). The actual numbers (rates,
// thresholds, surcharge) always come from a tax-rules JSON file that is
// passed in as an argument. Never hard-code a rate or a rupee amount here.

// A generous sanity ceiling so we can catch obviously-wrong input
// (like someone pasting a phone number into the salary field) without
// guessing at a "real" upper limit for anyone's income.
export const MAX_REASONABLE_ANNUAL_AMOUNT = 10_000_000_000; // Rs. 10 billion/year

/**
 * Validates the raw form inputs before any calculation happens.
 * Returns { valid: true } or { valid: false, errors: { fieldName: message } }
 */
export function validateInputs(inputs) {
  const errors = {};

  // --- Gross salary (required) ---
  const rawSalary = inputs.grossSalary;

  if (rawSalary === '' || rawSalary === null || rawSalary === undefined) {
    errors.grossSalary = 'Enter your gross salary.';
  } else {
    const salaryNumber = Number(rawSalary);
    if (Number.isNaN(salaryNumber) || !Number.isFinite(salaryNumber)) {
      errors.grossSalary = 'Enter a valid number.';
    } else if (salaryNumber <= 0) {
      errors.grossSalary = 'Salary must be greater than zero.';
    } else if (salaryNumber > MAX_REASONABLE_ANNUAL_AMOUNT) {
      errors.grossSalary = 'That amount looks too large. Please double-check it.';
    }
  }

  // --- Annual bonus (optional, defaults to 0) ---
  errors.annualBonus = validateOptionalAmount(inputs.annualBonus);

  // --- Other taxable allowances (optional, defaults to 0) ---
  errors.otherTaxableAllowances = validateOptionalAmount(inputs.otherTaxableAllowances);

  // Remove any fields that came back with no error message
  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/** Shared validation for the two optional numeric fields. */
function validateOptionalAmount(rawValue) {
  if (rawValue === '' || rawValue === null || rawValue === undefined) {
    return null; // empty is fine, treated as 0
  }
  const number = Number(rawValue);
  if (Number.isNaN(number) || !Number.isFinite(number)) {
    return 'Enter a valid number.';
  }
  if (number < 0) {
    return 'This amount cannot be negative.';
  }
  if (number > MAX_REASONABLE_ANNUAL_AMOUNT) {
    return 'That amount looks too large. Please double-check it.';
  }
  return null;
}

/**
 * Finds the slab a given taxable income falls into.
 * A slab's range is (minIncome, maxIncome] except the first slab, which
 * includes minIncome (0). maxIncome === null means "no upper limit".
 */
function findSlab(taxableIncome, slabs) {
  return slabs.find((slab) => {
    const aboveMin = taxableIncome > slab.minIncome || slab.minIncome === 0;
    const withinMax = slab.maxIncome === null || taxableIncome <= slab.maxIncome;
    return aboveMin && withinMax;
  });
}

/**
 * Builds the "show your work" breakdown for the results screen.
 * This mirrors exactly how the tax figure was computed, using the same
 * slab that calculateSalaryTax() used, so the two can never disagree.
 */
function buildBreakdown(taxableIncome, slab) {
  const remainingAmount = taxableIncome - slab.minIncome;
  const marginalTax = round2(remainingAmount * slab.rate);

  return {
    taxableIncome,
    isZeroRateSlab: slab.rate === 0,
    priorThreshold: slab.minIncome,
    priorTax: slab.fixedAmount,
    remainingAmount,
    ratePercent: slab.rate * 100,
    marginalTax,
  };
}

/**
 * The main entry point. Takes the raw form inputs and the tax-rules
 * object loaded from a tax-years JSON file, and returns everything the
 * results screen needs to display.
 */
export function calculateSalaryTax(inputs, taxRules) {
  // 1. Residency gate — we do not attempt non-resident calculations.
  if (inputs.residency === 'non-resident') {
    return {
      status: 'unsupported-residency',
    };
  }

  // 2. Validate inputs.
  const validation = validateInputs(inputs);
  if (!validation.valid) {
    return {
      status: 'invalid',
      errors: validation.errors,
    };
  }

  // 3. Normalize numbers.
  const grossSalary = Number(inputs.grossSalary);
  const annualBonus = inputs.annualBonus ? Number(inputs.annualBonus) : 0;
  const otherTaxableAllowances = inputs.otherTaxableAllowances
    ? Number(inputs.otherTaxableAllowances)
    : 0;

  const annualSalary =
    inputs.salaryFrequency === 'monthly' ? grossSalary * 12 : grossSalary;

  const taxableIncome = annualSalary + annualBonus + otherTaxableAllowances;

  // 4. Find the applicable slab and compute tax.
  const slab = findSlab(taxableIncome, taxRules.slabs);
  const baseTax = slab.fixedAmount + slab.rate * (taxableIncome - slab.minIncome);

  // 5. Apply surcharge, if any (0 for Tax Year 2027, kept general for future years).
  const surchargeRate = taxRules.surcharge ? taxRules.surcharge.rate : 0;
  const surchargeAmount = baseTax * surchargeRate;

  const annualTax = round2(baseTax + surchargeAmount);
  const monthlyTax = round2(annualTax / 12);
  const estimatedMonthlyTakeHome = round2(annualSalary / 12 - annualTax / 12);
  const effectiveTaxRate = taxableIncome > 0 ? annualTax / taxableIncome : 0;

  return {
    status: 'ok',
    annualSalary,
    annualBonus,
    otherTaxableAllowances,
    taxableIncome,
    appliedSlab: slab,
    annualTax,
    monthlyTax,
    estimatedMonthlyTakeHome,
    effectiveTaxRate,
    breakdown: buildBreakdown(taxableIncome, slab),
  };
}

function round2(value) {
  return Math.round(value * 100) / 100;
}
