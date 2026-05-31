/**
 * Average performance out of 10 from per-question scores (each 0–10).
 * average = (totalObtained / (count × 10)) × 10
 */
export function calculateAveragePerformance(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return 0;

  const normalized = scores.map((score) => {
    const num = Number(score);
    if (Number.isNaN(num)) return 0;
    return Math.min(10, Math.max(0, num));
  });

  const totalObtained = normalized.reduce((sum, s) => sum + s, 0);
  const totalPossible = normalized.length * 10;
  if (totalPossible === 0) return 0;

  const average = (totalObtained / totalPossible) * 10;
  return Math.round(average * 10) / 10;
}

export function formatPerformanceScore(score) {
  const n = Number(score);
  if (Number.isNaN(n)) return "0";
  const rounded = Math.round(n * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

/** Always derive from per-question scores — never use DB overallScore (AI often returns the sum). */
export function getOverallPerformanceFromInterview(interview) {
  const scores = (interview?.questions ?? [])
    .map((q) => q?.score)
    .filter((s) => s != null && s !== "" && !Number.isNaN(Number(s)));

  if (scores.length === 0) return 0;
  return calculateAveragePerformance(scores);
}
