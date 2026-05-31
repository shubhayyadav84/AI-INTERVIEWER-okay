/**
 * Average performance out of 10 from per-question scores (each 0–10).
 * average = (totalObtained / (count × 10)) × 10
 */
export function calculateAveragePerformance(scores) {
    if (!Array.isArray(scores) || scores.length === 0) return 0

    const normalized = scores.map((score) => {
        const num = Number(score)
        if (Number.isNaN(num)) return 0
        return Math.min(10, Math.max(0, num))
    })

    const totalObtained = normalized.reduce((sum, s) => sum + s, 0)
    const totalPossible = normalized.length * 10
    if (totalPossible === 0) return 0

    const average = (totalObtained / totalPossible) * 10
    return Math.round(average * 10) / 10
}
