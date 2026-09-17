// runTests.js
//
// A plain Node.js script that tests the tax calculation engine directly,
// with no UI and no testing framework involved. This is deliberate: for
// a beginner project, a hand-written test runner is easier to read and
// trust than learning a testing library on day one.
//
// Run it with:   node scripts/runTests.js

import { calculateSalaryTax } from '../src/utils/taxCalculator.js';
import taxRules from '../src/data/tax-rules/2026-27.json' with { type: 'json' };

// Each entry is [annualTaxableIncome, expectedAnnualTax].
// These are the boundary values of every slab, plus one value comfortably
// inside the top slab. Expected values were hand-calculated from the
// verified Tax Year 2027 slab table before running the code, so this
// test catches the code being wrong, not just the code agreeing with itself.
const testCases = [
  [600000, 0],
  [600001, 0.01],
  [1200000, 6000],
  [1200001, 6000.11],
  [2200000, 116000],
  [2200001, 116000.2],
  [3200000, 316000],
  [3200001, 316000.25],
  [4100000, 541000],
  [4100001, 541000.29],
  [5600000, 976000],
  [5600001, 976000.32],
  [7000000, 1424000],
  [7000001, 1424000.35],
  [10000000, 2474000],
];

console.log('Pakistan Salary Tax Calculator — Tax Engine Test Run');
console.log('Tax Year:', taxRules.taxYear);
console.log('='.repeat(72));
console.log(
  padRight('Income (Rs.)', 16) +
    padRight('Expected', 14) +
    padRight('Calculated', 14) +
    'Result'
);
console.log('-'.repeat(72));

let passCount = 0;
let failCount = 0;

for (const [income, expectedTax] of testCases) {
  const result = calculateSalaryTax(
    {
      salaryFrequency: 'annual',
      grossSalary: income,
      annualBonus: 0,
      otherTaxableAllowances: 0,
      residency: 'resident',
    },
    taxRules
  );

  const calculatedTax = result.status === 'ok' ? result.annualTax : null;
  const pass = calculatedTax === expectedTax;
  if (pass) {
    passCount++;
  } else {
    failCount++;
  }

  console.log(
    padRight(formatNumber(income), 16) +
      padRight(formatNumber(expectedTax), 14) +
      padRight(formatNumber(calculatedTax), 14) +
      (pass ? 'PASS' : 'FAIL')
  );
}

console.log('-'.repeat(72));
console.log(`${passCount} passed, ${failCount} failed, out of ${testCases.length} test cases.`);

// A few extra checks for validation and the residency gate, since those
// matter just as much as the arithmetic.
console.log('\nAdditional checks:');

runCheck('Empty salary is rejected', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'monthly', grossSalary: '', residency: 'resident' },
    taxRules
  );
  return r.status === 'invalid' && !!r.errors.grossSalary;
});

runCheck('Zero salary is rejected', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'monthly', grossSalary: 0, residency: 'resident' },
    taxRules
  );
  return r.status === 'invalid' && !!r.errors.grossSalary;
});

runCheck('Negative salary is rejected', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'monthly', grossSalary: -50000, residency: 'resident' },
    taxRules
  );
  return r.status === 'invalid' && !!r.errors.grossSalary;
});

runCheck('Non-numeric salary is rejected', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'monthly', grossSalary: 'abc', residency: 'resident' },
    taxRules
  );
  return r.status === 'invalid' && !!r.errors.grossSalary;
});

runCheck('Extremely large salary is rejected', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'annual', grossSalary: 99999999999999, residency: 'resident' },
    taxRules
  );
  return r.status === 'invalid' && !!r.errors.grossSalary;
});

runCheck('Non-resident is blocked from calculation', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'monthly', grossSalary: 200000, residency: 'non-resident' },
    taxRules
  );
  return r.status === 'unsupported-residency';
});

runCheck('Monthly frequency is annualized correctly (Rs 100,000/month)', () => {
  const r = calculateSalaryTax(
    { salaryFrequency: 'monthly', grossSalary: 100000, residency: 'resident' },
    taxRules
  );
  return r.status === 'ok' && r.annualSalary === 1200000 && r.annualTax === 6000;
});

function runCheck(label, fn) {
  const pass = fn();
  if (pass) {
    passCount++;
  } else {
    failCount++;
  }
  console.log(`  [${pass ? 'PASS' : 'FAIL'}] ${label}`);
}

console.log('\n' + '='.repeat(72));
console.log(`TOTAL: ${passCount} passed, ${failCount} failed.`);
if (failCount > 0) {
  process.exitCode = 1;
}

function formatNumber(value) {
  if (value === null || value === undefined) return '—';
  return value.toLocaleString('en-US');
}

function padRight(text, width) {
  return String(text).padEnd(width, ' ');
}
