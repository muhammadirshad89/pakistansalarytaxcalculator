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

  nav: {
    home: 'Calculator',
    privacyPolicy: 'Privacy Policy',
    termsAndConditions: 'Terms & Conditions',
    about: 'About',
    contact: 'Contact',
    backToCalculator: '← Back to Calculator',
  },

  legal: {
    effectiveDate: '17 September 2026',

    privacyPolicy: {
      metaTitle: 'Privacy Policy – Pakistan Salary Tax Calculator',
      metaDescription:
        'Read the Privacy Policy for Pakistan Salary Tax Calculator, including information about calculator usage, data privacy, cookies, advertising and user choices.',
      canonical: 'https://pakistansalarytaxcalculator.vercel.app/privacy-policy',
      h1: 'Privacy Policy',
      intro: 'This Privacy Policy explains how Pakistan Salary Tax Calculator handles information when you use this website.',
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'Pakistan Salary Tax Calculator is an independent, informational website that helps salaried individuals in Pakistan estimate their income tax, monthly tax, and take-home salary for a given tax year. It is not an official FBR or Government of Pakistan website or service.',
          ],
        },
        {
          heading: 'Information You Enter Into the Calculator',
          paragraphs: [
            'To produce an estimate, the calculator asks for your salary frequency (monthly or annual), gross salary, an optional annual bonus, optional other taxable allowances, and your residency status. None of these fields ask for your name, CNIC, address, bank details, or any other identifying information, and the calculator does not require any of that to work.',
          ],
        },
        {
          heading: 'How Calculator Inputs Are Handled',
          paragraphs: [
            'All tax calculations on this website run entirely in your own web browser, using JavaScript. The salary figures you enter are not sent to, stored on, or processed by any server or database operated by this website — there is currently no backend, no account system, and no server-side storage of any kind behind this calculator.',
            'Because nothing is saved, the numbers you enter are lost as soon as you refresh the page, close the tab, or navigate away. If you want to keep a record of a calculation, you will need to note it down or take a screenshot yourself.',
          ],
        },
        {
          heading: 'Please Avoid Entering Unnecessary Sensitive Information',
          paragraphs: [
            'Although calculator inputs are not stored or transmitted, we recommend entering only the salary figures the calculator actually asks for, and avoiding pasting in payslips, CNIC numbers, bank statements, or other sensitive personal documents — the calculator does not need this information to produce an estimate.',
          ],
        },
        {
          heading: 'Cookies and Website Technologies',
          paragraphs: [
            'This website does not currently use cookies, browser local storage, or any tracking or analytics technology to identify or follow visitors. The only third-party technical resource currently loaded by this website is Google Fonts (used to display the site\'s typefaces), which may cause your browser to make a request to Google\'s font-delivery servers when the page loads, in line with Google\'s own practices for that service.',
            'This website is hosted using Vercel, which may process standard technical information (such as IP address, browser type, and request logs) purely as part of delivering the website to your browser, in line with Vercel\'s own hosting and privacy practices — this website itself does not access or store this information separately.',
          ],
        },
        {
          heading: 'Advertising (Google AdSense) Disclosure',
          paragraphs: [
            'This website does not currently display Google AdSense or any other advertising. If advertising services such as Google AdSense are enabled on this website in the future, third-party vendors may use cookies or similar technologies to provide, personalize, measure, or improve advertising, subject to their applicable policies and your choices.',
            'If that happens, personalized advertising choices may be available to you through Google\'s Ads Settings, and this Privacy Policy will be updated to describe the change before or at the time it takes effect.',
          ],
        },
        {
          heading: 'Third-Party Services',
          paragraphs: [
            'Beyond Google Fonts and standard website hosting through Vercel, described above, this website does not currently integrate any other third-party analytics, advertising, payment, or data-processing services. If that changes, this section will be updated to accurately reflect any new service in use.',
          ],
        },
        {
          heading: "Children's Privacy",
          paragraphs: [
            'This website is a general-audience financial information tool and is not directed at children. It does not knowingly collect any information from children, in line with the fact that it does not collect personal information from any visitor.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          paragraphs: [
            'This Privacy Policy may be updated from time to time — for example, if new features, tools, or advertising services are added to the website. Any changes will be reflected on this page along with an updated effective date.',
          ],
        },
        {
          heading: 'Contact Us',
          paragraphs: [
            'If you have any questions about this Privacy Policy, you can contact Syyed Irshad Aslam, the developer of this website, via WhatsApp or phone at +92 321 8100537.',
          ],
        },
      ],
    },

    termsAndConditions: {
      metaTitle: 'Terms & Conditions – Pakistan Salary Tax Calculator',
      metaDescription:
        'Read the Terms & Conditions for using Pakistan Salary Tax Calculator, including calculator estimates, user responsibilities, limitations and website usage.',
      canonical: 'https://pakistansalarytaxcalculator.vercel.app/terms-and-conditions',
      h1: 'Terms & Conditions',
      intro: 'Please read these Terms & Conditions carefully before using Pakistan Salary Tax Calculator.',
      sections: [
        {
          heading: 'Introduction',
          paragraphs: [
            'These Terms & Conditions govern your use of Pakistan Salary Tax Calculator (this "website"). By using this website, you agree to these terms. If you do not agree with any part of these terms, please do not use this website.',
          ],
        },
        {
          heading: 'Use of the Website',
          paragraphs: [
            'This website provides a free, browser-based calculator that estimates salary income tax, monthly tax, and take-home salary for salaried individuals in Pakistan, along with related educational content about how Pakistani salary tax works.',
          ],
        },
        {
          heading: 'Calculator Estimates',
          paragraphs: [
            'All figures produced by this calculator — including annual taxable income, estimated annual tax, estimated monthly tax, effective tax rate, and estimated take-home salary — are estimates provided for general informational purposes only. They are not a substitute for an official tax calculation, a payslip, or a filed tax return.',
          ],
        },
        {
          heading: 'Accuracy and Tax Responsibility',
          paragraphs: [
            'Tax calculations may depend on applicable Pakistani tax laws, rules, amendments, exemptions, deductions, and individual circumstances that this calculator does not account for. While reasonable care is taken to keep the tax rules used by this calculator accurate and up to date, no guarantee is made that every calculation will be correct, current, or suitable for every individual tax situation.',
            'You are responsible for independently verifying applicable tax rules — directly with the Federal Board of Revenue (FBR) or a qualified tax professional — before filing a tax return or making any financial decision.',
          ],
        },
        {
          heading: 'No Professional Tax or Financial Advice',
          paragraphs: [
            'Nothing on this website constitutes professional tax, accounting, financial, or legal advice, and this website is not a substitute for consulting a qualified tax practitioner, chartered accountant, or advocate. This website is an independent tool and is not affiliated with, endorsed by, or operated by the FBR or the Government of Pakistan.',
          ],
        },
        {
          heading: 'User Responsibility',
          paragraphs: [
            'You are responsible for the accuracy of the information you enter into the calculator, and for how you choose to use the results it produces. Any decisions you make based on this website are made at your own discretion and risk.',
          ],
        },
        {
          heading: 'Acceptable Use',
          paragraphs: [
            'You agree not to misuse this website — for example, by attempting to disrupt its normal operation, attempting unauthorized access to any part of it, or using it in any way that violates applicable law.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'The design, layout, original written content, and branding of this website are the property of its developer, Syyed Irshad Aslam, unless otherwise stated. You may use the calculator for personal, non-commercial informational purposes, but may not copy, reproduce, or republish the website\'s content or code without permission.',
          ],
        },
        {
          heading: 'Third-Party Services and Links',
          paragraphs: [
            'This website may reference or link to official third-party resources, such as FBR publications, or may load third-party technical resources such as Google Fonts, as described in the Privacy Policy. This website is not responsible for the content, accuracy, or availability of any third-party website it links to.',
          ],
        },
        {
          heading: 'Website Availability',
          paragraphs: [
            'This website is provided on an "as available" basis. No guarantee is made that the website will be available at all times, free of interruptions, or free of errors.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'To the fullest extent permitted by applicable law, the developer of this website shall not be liable for any loss, damage, tax penalty, or other consequence arising from your use of, or reliance on, this website or the estimates it produces.',
          ],
        },
        {
          heading: 'Changes to the Website',
          paragraphs: [
            'The tax rules, calculators, content, and features of this website may be updated, added to, or removed at any time — for example, when applicable Pakistani tax rules change, or when a new tax year begins.',
          ],
        },
        {
          heading: 'Changes to These Terms',
          paragraphs: [
            'These Terms & Conditions may be updated from time to time. Continued use of this website after any changes are published constitutes acceptance of the updated terms.',
          ],
        },
        {
          heading: 'Contact Information',
          paragraphs: [
            'If you have any questions about these Terms & Conditions, you can contact Syyed Irshad Aslam, the developer of this website, via WhatsApp or phone at +92 321 8100537.',
          ],
        },
      ],
    },
  },

  salaryTaxGuide: {
    metaTitle: 'Pakistan Salary Tax 2026-27 – Calculate Salary Income Tax',
    metaDescription:
      'Learn how Pakistan salary tax is calculated for 2026-27, view applicable tax slabs, understand taxable income and estimate annual and monthly salary tax.',
    canonical: 'https://pakistansalarytaxcalculator.vercel.app/salary-tax-2026-27',
    h1: 'Pakistan Salary Tax 2026-27',
    intro:
      'Every salaried employee in Pakistan whose annual taxable income exceeds the tax-free threshold needs to understand how salary income tax is calculated. This guide explains how Pakistan salary tax works for Tax Year 2027 (2026-27), how the applicable tax slabs apply to your taxable income, and how to estimate your own annual tax, monthly tax, and take-home salary.',

    whatIsIt: {
      heading: 'What Is Salary Income Tax?',
      body: 'Salary income tax is the tax a salaried employee pays on income earned from employment, calculated under the Income Tax Ordinance, 2001, using the slab rates announced for each tax year. It is charged on annual taxable income — not on gross salary in isolation — and is separate from other income heads such as business or rental income.',
    },

    slabs: {
      heading: 'Pakistan Salary Tax Slabs 2026-27',
      intro:
        "The table below shows the salaried-individual tax slabs currently used by this website's calculator for Tax Year 2027. Tax applies to your taxable income according to whichever slab it falls into — only the portion of income within a higher slab is taxed at that slab's rate, not your entire income.",
      columnRange: 'Taxable Income Range',
      columnCalculation: 'Tax Calculation',
      columnRate: 'Tax Rate',
    },

    howCalculated: {
      heading: 'How Salary Tax Is Calculated',
      steps: [
        'Determine your annual salary income — if you are paid monthly, multiply your monthly salary by 12.',
        'Identify your applicable taxable income, generally your annual salary plus any taxable bonus or allowances.',
        'Apply the relevant tax slab based on where your taxable income falls in the table above.',
        "Calculate your estimated annual tax using that slab's fixed amount plus its percentage rate.",
        'Divide the estimated annual tax by 12 to get an estimated monthly tax amount.',
        'Subtract the estimated monthly tax from your monthly salary to estimate your monthly take-home salary.',
      ],
      note: "Actual payroll deductions can differ from this estimate depending on your employer's payroll process, provident fund or EOBI contributions, and your individual circumstances.",
    },

    example: {
      heading: 'Example Salary Tax Calculation',
      intro: (monthly) =>
        `Here is a worked example using a monthly salary of ${monthly}, calculated using the same calculation engine used by the calculator on this website — not a manually invented figure.`,
      monthlySalaryLine: (v) => `Monthly salary: ${v}`,
      annualSalaryLine: (v) => `Annual salary: ${v}`,
      taxableIncomeLine: (v) => `Applicable taxable income: ${v}`,
      annualTaxLine: (v) => `Estimated annual tax: ${v}`,
      monthlyTaxLine: (v) => `Estimated monthly tax: ${v}`,
      takeHomeLine: (v) => `Estimated monthly take-home salary: ${v}`,
    },

    cta: {
      heading: 'Use Our Pakistan Salary Tax Calculator',
      body: 'Enter your own monthly or annual salary into the calculator on our homepage to get an estimated annual tax, monthly tax, and take-home salary based on your own figures.',
      buttonLabel: 'Calculate Your Salary Tax',
    },

    important: {
      heading: 'Important Things Employees Should Know',
      points: [
        "Annual salary vs. monthly salary: Pakistan's salary tax is calculated on annual taxable income, not a single month's pay — your monthly salary is simply multiplied by 12 to arrive at the annual figure used for tax slabs.",
        'Taxable income vs. gross salary: taxable income is generally your gross annual salary plus any taxable bonus or allowances. Specific exemptions or allowances may reduce this figure depending on your circumstances, which this calculator does not currently account for.',
        "Employer withholding: many employers deduct estimated income tax from salary each month and deposit it with FBR on the employee's behalf, so your actual monthly payslip deduction may not exactly match this calculator's estimate.",
        'Tax rules can change: Pakistani tax rates, slabs, and rules can be revised through a Finance Act or other government notification, sometimes with effect from a new tax year.',
        "Individual circumstances matter: deductions, credits, exemptions, and your specific employment situation can all affect your final tax position beyond what a general calculator can estimate.",
      ],
    },

    faqHeading: 'Frequently Asked Questions',

    links: {
      privacyText: 'For details on how this calculator handles the information you enter, see our',
      privacyLinkLabel: 'Privacy Policy',
      termsText: 'Full terms of use are available in our',
      termsLinkLabel: 'Terms & Conditions',
    },

    author: {
      preparedByLabel: 'Prepared and maintained by',
      name: 'Syyed Irshad Aslam',
      websiteLabel: 'Website',
      websiteName: 'Pakistan Salary Tax Calculator',
    },
  },

  incomeTaxSlabsPage: {
    metaTitle: 'Pakistan Income Tax Slabs 2026-27 – Tax Year 2027',
    metaDescription:
      'View the Pakistan income tax slabs for salaried individuals for Tax Year 2027 (2026-27), with a clear breakdown of each slab, applicable rates and example calculations.',
    canonical: 'https://pakistansalarytaxcalculator.vercel.app/income-tax-slabs-2026-27',
    h1: 'Pakistan Income Tax Slabs 2026-27',
    intro:
      'This page lists the income tax slabs that apply to salaried individuals in Pakistan for Tax Year 2027 (1 July 2026 – 30 June 2027), with a plain-language explanation of how each slab works and a worked example for every bracket.',

    tableSection: {
      heading: 'Salaried Individual Tax Slabs for Tax Year 2027',
      intro:
        'These are the same slab rates used by the calculator on this website. Tax is progressive: only the portion of your taxable income that falls within a given slab is taxed at that slab\'s rate.',
      columnRange: 'Taxable Income Range',
      columnCalculation: 'Tax Calculation',
      columnRate: 'Tax Rate',
    },

    readingSection: {
      heading: 'How to Read the Tax Slab Table',
      body: "Each row applies only to the portion of your income that falls inside that row's range. If your annual taxable income is, for example, Rs. 1,800,000, you don't pay the third slab's rate on the full amount — you pay nothing on the first Rs. 600,000, 1% on the next slice up to Rs. 1,200,000, and the third slab's rate only on the remaining amount above Rs. 1,200,000. The 'Tax Calculation' column already accounts for this by including a fixed amount carried over from the lower slabs.",
    },

    slabExamplesSection: {
      heading: 'Slab-by-Slab Explanation',
      intro:
        'To make each slab concrete, here is what the estimated tax works out to for someone whose annual taxable income sits exactly at the top of each bracket, calculated using the same engine as the calculator on this website.',
      zeroRateLine: (range) => `${range}: no tax is payable at this level of income.`,
      exampleLine: (range, incomeAtTop, taxAtTop) =>
        `${range}: someone with an annual taxable income of ${incomeAtTop} (the top of this slab) would pay an estimated ${taxAtTop} in tax.`,
      openEndedLine: (range, rate) =>
        `${range}: income in this slab is taxed at a flat ${rate} on the amount above the slab's starting threshold, with no upper limit.`,
    },

    faqHeading: 'Frequently Asked Questions About Income Tax Slabs',

    cta: {
      heading: 'Calculate Your Exact Tax',
      body: 'These slabs show the general structure — enter your own salary in the calculator to see exactly which slab applies to you and what your estimated tax works out to.',
      buttonLabel: 'Calculate Your Salary Tax',
    },

    links: {
      guideText: 'For a full walkthrough of how salary tax is calculated, see our',
      guideLinkLabel: 'Pakistan Salary Tax 2026-27 guide',
      privacyText: 'For details on how this calculator handles the information you enter, see our',
      privacyLinkLabel: 'Privacy Policy',
      termsText: 'Full terms of use are available in our',
      termsLinkLabel: 'Terms & Conditions',
    },

    author: {
      preparedByLabel: 'Prepared and maintained by',
      name: 'Syyed Irshad Aslam',
      websiteLabel: 'Website',
      websiteName: 'Pakistan Salary Tax Calculator',
    },
  },

  salaryTaxCalculatorPk: {
    metaTitle: 'Pakistan Salary Tax Calculator 2026-27 – Calculate Salary Tax Online',
    metaDescription:
      'Calculate Pakistan salary income tax for 2026-27. Estimate annual tax, monthly tax, take-home salary and effective tax rate using the current tax rules.',
    canonical: 'https://pakistansalarytaxcalculator.vercel.app/salary-tax-calculator-pakistan',
    h1: 'Pakistan Salary Tax Calculator 2026-27',

    intro: {
      heading: 'Who Is This Calculator For?',
      body: 'This salary tax calculator is for salaried employees in Pakistan who want to quickly estimate their income tax, monthly tax deduction, and take-home salary for Tax Year 2027 (1 July 2026 – 30 June 2027). Whether you receive a monthly payslip or are comparing a job offer, it estimates your tax position using the current salaried-individual tax slabs announced under the Finance Act 2026.',
    },

    concepts: {
      heading: 'Key Salary and Tax Terms Explained',
      items: [
        {
          term: 'Monthly vs Annual Salary',
          explanation:
            "Pakistan's salary income tax is calculated on annual taxable income, not on a single month in isolation. If you earn a fixed monthly salary, the calculator multiplies it by 12 to arrive at your annual figure before applying any slab.",
        },
        {
          term: 'Taxable Income',
          explanation:
            'Taxable income is generally your gross annual salary plus any taxable bonus or allowances. Specific exemptions — such as a portion of medical allowance — can reduce taxable income in some cases, but this calculator uses gross salary plus any amounts you enter as a conservative estimate.',
        },
        {
          term: 'Progressive Tax Slabs',
          explanation:
            "Pakistan uses a progressive slab system: only the portion of your income within a given slab is taxed at that slab's rate. Moving into a higher slab does not increase the rate applied to your entire income — just the slice above the threshold.",
        },
        {
          term: 'Annual Tax',
          explanation:
            "Annual tax is the total estimated income tax owed for the full tax year, calculated by applying the relevant slab to your annual taxable income. It's the baseline figure from which monthly tax and take-home salary are derived.",
        },
        {
          term: 'Monthly Tax',
          explanation:
            'Monthly tax shown here is your estimated annual tax divided by 12. Many employers deduct a similar amount from salary each month and deposit it with FBR, but your employer may use a slightly different basis — so payslip deductions may not match exactly.',
        },
        {
          term: 'Take-Home Salary',
          explanation:
            "Estimated take-home salary is your monthly gross salary minus your estimated monthly income tax. It does not include EOBI, provident fund contributions, professional tax, or any other payroll deductions your employer may apply — so your actual take-home salary from a payslip is typically slightly lower.",
        },
        {
          term: 'Effective Tax Rate',
          explanation:
            'The effective tax rate is your total annual tax as a percentage of your annual taxable income. It is always lower than the highest slab rate that applies to you, because lower slabs — including the 0% bracket — are applied first.',
        },
      ],
    },

    examples: {
      heading: 'Salary Tax Examples for Tax Year 2027',
      intro:
        'The table below shows estimated tax for six common monthly salaries, calculated live using the same engine as the calculator on this website — not hardcoded figures.',
      columnMonthly: 'Monthly Salary',
      columnAnnual: 'Annual Salary',
      columnAnnualTax: 'Annual Tax',
      columnMonthlyTax: 'Monthly Tax',
      columnTakeHome: 'Monthly Take-Home',
      columnEffectiveRate: 'Effective Rate',
      note: 'Assumes no bonus or other taxable allowances, resident salaried individual. Take-home figures exclude EOBI, provident fund, and other payroll deductions.',
    },

    howCalculated: {
      heading: 'How Pakistan Salary Tax Is Calculated',
      steps: [
        { label: 'Annual income', detail: 'Monthly salary × 12 (or enter an annual amount directly).' },
        { label: 'Taxable income', detail: 'Annual salary + any taxable bonus or allowances you add.' },
        { label: 'Apply slabs', detail: 'Each slice of taxable income is taxed at the rate for its bracket.' },
        { label: 'Annual tax', detail: 'Sum of the tax on each slice, using the slab table.' },
        { label: 'Monthly tax', detail: 'Annual tax ÷ 12.' },
        { label: 'Take-home', detail: 'Monthly salary − monthly tax (before other payroll deductions).' },
      ],
      slabNote:
        'The slab rates used by this calculator are sourced from the Finance Act 2026. For the full slab table with per-bracket examples, see the',
      slabLinkLabel: 'Income Tax Slabs 2026-27',
    },

    limitsHeading: 'What This Calculator Does and Does Not Cover',
    limits: [
      'It covers salaried individuals who are resident in Pakistan for tax purposes.',
      'It applies the salaried-individual slab table from the Finance Act 2026 for Tax Year 2027.',
      'It does not currently account for Zakat, approved pension fund contributions, or the teacher/researcher tax reduction — any of which may reduce your actual tax.',
      'It does not handle non-resident salaried tax treatment, business income, freelance/export income, or capital gains.',
      'Actual payroll deductions on your payslip may differ depending on your employer and individual circumstances.',
    ],

    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is a Pakistan salary tax calculator?',
        a: 'A Pakistan salary tax calculator estimates the income tax owed by a salaried employee based on their annual taxable salary and the applicable tax slabs. This one uses the salaried-individual slab rates from the Finance Act 2026 for Tax Year 2027.',
      },
      {
        q: 'Is this an official FBR salary tax calculator?',
        a: 'No. This is an independent tool built to help employees estimate their tax position. It is not an official FBR or Government of Pakistan calculator. Always verify your final tax liability with FBR or a qualified tax professional.',
      },
      {
        q: 'How accurate are the salary tax estimates?',
        a: "The estimates are based on the current salaried-individual tax slabs and assume your full gross salary plus any amounts you add is taxable. They do not account for specific exemptions, credits, or deductions that might apply to your situation. They're useful as a starting point, not as a final tax assessment.",
      },
      {
        q: 'Can I use this to estimate tax on a job offer salary?',
        a: 'Yes — enter the monthly salary shown in a job offer to see an estimated annual tax, monthly tax deduction, and approximate take-home salary. Keep in mind that provident fund contributions and other deductions will further reduce your actual net pay.',
      },
      {
        q: 'Does the calculator work for bonus income?',
        a: 'Yes. There is an optional annual bonus field in the calculator. The bonus amount is added to your annual taxable salary before the tax slabs are applied.',
      },
      {
        q: 'What is the minimum salary to pay income tax in Pakistan?',
        a: 'Under the current slabs, annual taxable salary up to Rs. 600,000 falls in the 0% bracket and carries no income tax liability.',
      },
    ],

    internalLinks: {
      homeCta: {
        heading: 'Use the Calculator',
        body: 'Enter your own monthly or annual salary to get a personalised estimate — including a slab-by-slab breakdown of exactly how the figure was arrived at.',
        buttonLabel: 'Go to the Calculator',
      },
      guideLink: 'For a full explanation of how Pakistan salary tax works, see our',
      guideLinkLabel: 'Pakistan Salary Tax 2026-27 guide',
      slabsLink: 'To view all current tax slabs with per-bracket examples, see',
      slabsLinkLabel: 'Pakistan Income Tax Slabs 2026-27',
      legalLine: (privacyLabel, termsLabel) =>
        `See our ${privacyLabel} and ${termsLabel} for details on how this calculator works and its limitations.`,
    },

    source: {
      preparedByLabel: 'Prepared and maintained by',
      name: 'Syyed Irshad Aslam',
      websiteLabel: 'Website',
      websiteName: 'Pakistan Salary Tax Calculator',
    },
  },
};
