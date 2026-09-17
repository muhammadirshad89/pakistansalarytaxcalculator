// en.js
//
// Every piece of user-facing text lives here, not inside components or
// the calculation engine. When we add Urdu later, we create a matching
// ur.js with the same keys and swap which file gets imported — nothing
// in taxCalculator.js or the components themselves needs to change.

export const text = {
  brand: 'Pakistan Tax & Finance Assistant',

  page: {
    title: 'Pakistan Salary Tax Calculator 2026-27 – Calculate Income Tax Online',
    metaDescription:
      'Free Pakistan Salary Tax Calculator 2026-27. Calculate estimated annual income tax, monthly tax and take-home salary based on your salary.',
    h1: 'Pakistan Salary Tax Calculator 2026–27',
    intro:
      'Estimate your income tax for Tax Year 2027 (1 July 2026 to 30 June 2027) as a salaried individual in Pakistan. Enter your salary below to see your estimated annual and monthly tax, your effective tax rate, and exactly how that number was calculated.',
  },

  form: {
    heading: 'Enter your salary details',
    salaryFrequencyLabel: 'Salary frequency',
    salaryFrequencyMonthly: 'Monthly',
    salaryFrequencyAnnual: 'Annual',
    grossSalaryLabel: 'Gross salary (PKR)',
    grossSalaryPlaceholder: 'e.g. 150,000',
    annualBonusLabel: 'Annual bonus (optional)',
    annualBonusPlaceholder: '0',
    otherAllowancesLabel: 'Other taxable allowances (optional)',
    otherAllowancesPlaceholder: '0',
    otherAllowancesHelp:
      'Enter the total of any other allowances or payments that are fully taxable. Leave blank if not applicable.',
    residencyLabel: 'Residency status',
    residencyResident: 'Resident of Pakistan',
    residencyNonResident: 'Non-resident',
    submitButton: 'Calculate tax',
    recalculateButton: 'Recalculate',
  },

  errors: {
    grossSalaryRequired: 'Enter your gross salary.',
    invalidNumber: 'Enter a valid number.',
    mustBePositive: 'Salary must be greater than zero.',
    cannotBeNegative: 'This amount cannot be negative.',
    tooLarge: 'That amount looks too large. Please double-check it.',
    formHasErrors: 'Please fix the highlighted fields before calculating.',
  },

  nonResident: {
    heading: 'Non-resident tax treatment not yet supported',
    message:
      'Non-resident tax treatment is not currently supported by this calculator. Please consult a qualified tax professional or FBR for your specific situation.',
  },

  results: {
    heading: 'Your estimated tax — Tax Year 2027',
    taxableIncomeLabel: 'Annual Taxable Income',
    annualTaxLabel: 'Estimated Annual Tax',
    monthlyTaxLabel: 'Estimated Monthly Tax',
    takeHomeLabel: 'Estimated Monthly Take-Home',
    takeHomeNote:
      'Estimated monthly take-home before EOBI, provident fund, professional tax and other payroll deductions.',
    effectiveRateLabel: 'Effective Tax Rate',
    appliedSlabLabel: 'Applied Tax Slab',
  },

  breakdown: {
    heading: 'How this was calculated',
    taxableIncomeLine: 'Taxable income',
    zeroRateLine:
      'Your taxable income falls within the tax-free bracket (up to Rs. 600,000), so no tax is payable.',
    priorAmountLine: (formattedAmount) => `First Rs. ${formattedAmount}`,
    priorTaxLine: (formattedAmount) => `Rs. ${formattedAmount} tax`,
    remainingLabel: 'Remaining',
    remainingCalcLine: (remaining, ratePercent, tax) =>
      `Rs. ${remaining} × ${ratePercent}% = Rs. ${tax}`,
    totalLine: 'Estimated annual tax',
  },

  disclaimer:
    'This calculator provides an estimated salary tax calculation for informational purposes only. Actual tax liability may vary depending on applicable tax laws, exemptions, allowances, deductions, employer payroll calculations and individual circumstances. Please verify your final tax liability with the latest applicable tax rules or a qualified tax professional.',

  source: {
    heading: 'Tax rules source',
    lawLabel: 'Finance Act 2026 / FBR — Tax Year 2027',
    linkText: 'View the official FBR Budget 2026-27 page',
  },

  about: {
    heading: 'About This Calculator',
    body:
      'This Pakistan Salary Tax Calculator is designed to help salaried individuals quickly estimate their annual taxable income, estimated annual tax, monthly tax, and monthly take-home salary for Tax Year 2027 (1 July 2026 – 30 June 2027), based on the salaried-individual tax slabs introduced under the Finance Act 2026. It is an independent tool built for convenience and is not an official FBR or Government of Pakistan calculator.',
  },

  contactCta: {
    heading: 'Need a Custom Website or Calculator?',
    body: 'Have a project in mind? Contact Syyed Irshad Aslam.',
    whatsappLabel: 'Chat on WhatsApp',
    whatsappMessage: "Hi Irshad, I found your Pakistan Salary Tax Calculator and I'd like to discuss a project.",
  },

  footer: {
    lastUpdated: 'Tax rules last verified: 16 September 2026',
    developedByLabel: 'Developed by',
    developerName: 'Syyed Irshad Aslam',
    developerRole: 'Graphics Designer & Digital Creative',
    phoneDisplay: '+92 321 8100537',
    phoneTel: '+923218100537',
    whatsappNumber: '923218100537',
    whatsappLabel: 'WhatsApp',
    whatsappMessage: "Hi Irshad, I'm reaching out from your Pakistan Salary Tax Calculator website.",
  },
};
