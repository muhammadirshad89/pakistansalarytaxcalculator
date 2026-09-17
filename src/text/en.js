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

  seo: {
    intro: {
      heading: 'Pakistan Salary Tax Calculator 2026-27',
      body: (taxYearLabel) =>
        `This Pakistan Salary Tax Calculator estimates salary income tax for salaried individuals in Pakistan for ${taxYearLabel}. Enter your monthly or annual salary above to see your estimated annual tax, monthly tax, and take-home salary based on the current salaried tax slabs.`,
    },

    howCalculated: {
      heading: 'How Pakistan Salary Tax Is Calculated',
      points: [
        'If you enter a monthly salary, it is first converted to an annual figure by multiplying it by 12 — Pakistan\'s salary tax is calculated on annual taxable income, not a monthly amount.',
        'Pakistan uses a progressive tax slab system for salaried individuals: income is divided into brackets, and each bracket has its own tax rate.',
        'Only the portion of your income that falls within a higher slab is taxed at that slab\'s rate — the lower slabs below it are still taxed at their own (lower) rates, not retroactively at the higher one.',
        'Based on this slab-by-slab calculation, the calculator works out your estimated annual tax, then divides it to show a monthly tax figure and an estimated monthly take-home salary.',
      ],
    },

    slabs: {
      heading: 'Pakistan Salary Tax Slabs 2026-27',
      columnIncome: 'Annual Taxable Income',
      columnCalculation: 'Tax Calculation',
      sourceNote:
        'Source: Federal Board of Revenue (FBR) / Finance Act 2026. Tax rules may change; verify applicable rules before filing.',
    },

    example: {
      heading: 'Example of Salary Tax Calculation',
      intro: (monthlySalary) =>
        `Consider a salaried individual earning ${monthlySalary} per month, with no bonus or other taxable allowances.`,
      annualSalaryLine: (annual) => `Annual salary: ${annual}`,
      slabLine: (slabRange, formula) =>
        `This falls in the ${slabRange} slab, calculated as: ${formula}.`,
      annualTaxLine: (tax) => `Estimated annual tax: ${tax}`,
      monthlyTaxLine: (tax) => `Estimated monthly tax: ${tax}`,
      note: 'This example is for illustration only — it is calculated by the same engine used above, so it will stay accurate if tax rules change. Use the calculator above with your own salary for a personal estimate.',
    },

    faq: {
      heading: 'Frequently Asked Questions',
      taxFreeLimitQuestion: 'What is the tax-free salary limit in Pakistan for 2026-27?',
      taxFreeLimitAnswer: (limit) =>
        `Annual taxable salary up to ${limit} is tax-free for Tax Year 2027 under the current salaried tax slabs.`,
      monthlyOrAnnualQuestion: 'Is salary tax calculated monthly or annually?',
      monthlyOrAnnualAnswer:
        "Pakistan's salary tax is calculated on annual taxable income. If you enter a monthly salary, this calculator automatically converts it to an annual figure before applying the tax slabs.",
      highestRateQuestion: 'What is the highest salaried tax rate for 2026-27?',
      highestRateAnswer: (rate, threshold) =>
        `The highest salaried tax rate for Tax Year 2027 is ${rate}, which applies to annual taxable income above ${threshold}.`,
      autoAnnualQuestion: 'Does entering monthly salary automatically calculate annual salary?',
      autoAnnualAnswer:
        'Yes. Selecting "Monthly" and entering your gross monthly salary automatically multiplies it by 12 to determine your annual taxable salary for the calculation.',
      takeHomeQuestion: 'What is take-home salary?',
      takeHomeAnswer:
        "Take-home salary is your salary after income tax is deducted. This calculator's take-home figure does not include EOBI, provident fund, professional tax, or other payroll deductions your employer may apply.",
      officialQuestion: 'Is this calculator an official FBR calculator?',
      officialAnswer:
        'No. This is an independent calculator built to help estimate salary tax and is not an official FBR or Government of Pakistan calculator.',
      rulesChangeQuestion: 'Can tax rules change during the year?',
      rulesChangeAnswer:
        'Yes. Tax laws in Pakistan can be revised through Finance Acts, SROs, or other government notifications. Always verify current rules with FBR or a qualified tax professional before filing.',
      otherIncomeQuestion: 'Does this calculator cover business income or other income heads?',
      otherIncomeAnswer:
        'No. This calculator currently covers salaried individuals only. Business income, freelance/export income, capital gains, and other income heads are not supported yet.',
    },

    understanding: {
      heading: 'Understanding Your Salary & Tax in Pakistan',
      intro:
        'Before using this salary tax calculator, it helps to understand a few basic salary and tax terms used in Pakistan. Here is a simple explanation of each, in plain English.',
      terms: [
        {
          term: 'Gross Salary',
          definition:
            'Gross salary is your total salary before any tax or deductions are subtracted — the full amount agreed with your employer, including basic pay and any taxable allowances.',
        },
        {
          term: 'Annual Salary',
          definition:
            'Annual salary is your total salary for the full year. If you are paid monthly, your annual salary is simply your monthly salary multiplied by 12 — and salary tax 2026-27 is calculated on this annual figure, not on a single month\'s pay.',
        },
        {
          term: 'Taxable Income',
          definition:
            'Taxable income is the portion of your annual salary that tax is actually calculated on — generally your gross annual salary plus any taxable bonus or allowances. This is the figure that determines taxable income Pakistan tax slabs apply to.',
        },
        {
          term: 'Salary Income Tax',
          definition:
            'Salary income tax is the income tax on salary that a salaried person owes, charged on taxable income under the Income Tax Ordinance, 2001, using the rates announced for each tax year. This calculator estimates Pakistan salary tax using the current officially notified slabs.',
        },
        {
          term: 'Monthly Tax vs Annual Tax',
          definition:
            'Annual tax is the total income tax owed for the full tax year, calculated on annual taxable income. Monthly tax shown here is simply that annual figure divided by 12 — it is not calculated separately using a different rate.',
        },
        {
          term: 'Take-Home Salary',
          definition:
            'Take-home salary is what an employee actually receives after income tax is subtracted. Actual take-home salary Pakistan employees receive may be slightly lower once employer-side payroll deductions — such as provident fund or EOBI — are also applied, which this calculator does not include.',
        },
        {
          term: 'Progressive Tax Slabs',
          definition:
            'Pakistan uses a progressive tax slab system: taxable income is divided into brackets, and each bracket is taxed at its own rate. Only the portion of income within a given slab is taxed at that slab\'s rate, so moving into a higher slab does not increase the tax rate on your entire income.',
        },
      ],
    },

    examples: {
      heading: 'Salary Tax Examples in Pakistan 2026-27',
      intro:
        'Wondering about the tax on a 100,000 salary in Pakistan, or the tax on a 150,000 or 200,000 monthly salary? The table below shows estimated salary tax 2026-27 for a few common monthly salary amounts, calculated using the exact same engine as the calculator above.',
      columnMonthly: 'Monthly Salary',
      columnAnnual: 'Annual Salary',
      columnAnnualTax: 'Estimated Annual Tax',
      columnMonthlyTax: 'Estimated Monthly Tax',
      columnTakeHome: 'Estimated Monthly Take-Home',
      note: 'These examples assume no bonus or other taxable allowances, and a resident salaried individual. Enter your own salary in the calculator above for a personal estimate — actual take-home salary Pakistan employers pay may differ slightly due to provident fund, EOBI, or other payroll deductions not included here.',
    },
  },
};
