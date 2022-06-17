/**
 *
 * @param completedCount completeted todos count
 * @param allCount todos count
 * @returns number - percentages completeted todos
 */
export function PercentageOfCompleted(
  completedCount: number,
  allCount: number
): number {
  if (completedCount <= 0 || allCount <= 0) {
    return 0;
  }

  return Math.round(100 / (allCount / completedCount));
}
