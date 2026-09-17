// format.js
//
// Presentation-only helpers. Nothing in this file makes a tax decision —
// it only decides how numbers that the calculation engine already
// produced should look on screen (commas, "Rs." prefix, % sign).

export function formatPKR(value, { decimals = 0 } = {}) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return '—';
  }
  const formatted = Number(value).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `Rs. ${formatted}`;
}

export function formatNumber(value, { decimals = 0 } = {}) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return '—';
  }
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatPercent(rateAsFraction, { decimals = 2 } = {}) {
  if (rateAsFraction === null || rateAsFraction === undefined || Number.isNaN(rateAsFraction)) {
    return '—';
  }
  return `${(rateAsFraction * 100).toFixed(decimals)}%`;
}

/**
 * Builds a human-readable label for a slab, e.g. "Rs. 1,200,001 – Rs. 2,200,000"
 * or "Above Rs. 7,000,000". This is display formatting only — it reads the
 * slab's own minIncome/maxIncome/rate rather than hardcoding any figure.
 */
export function describeSlabRange(slab) {
  if (slab.maxIncome === null) {
    return `Above ${formatPKR(slab.minIncome)}`;
  }
  if (slab.minIncome === 0) {
    return `Up to ${formatPKR(slab.maxIncome)}`;
  }
  return `${formatPKR(slab.minIncome + 1)} – ${formatPKR(slab.maxIncome)}`;
}
