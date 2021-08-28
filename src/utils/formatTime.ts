/**
 * Format time in seconds to mm:ss
 *
 * @param seconds time in seconds
 * @returns time in the format mm:ss
 *
 * @example
 *
 * formatTime(10) // 00:10
 * formatTime(1500) // 25:00
 */
export function formatTime(seconds: number): string {
  return new Date(seconds * 1000).toISOString().substr(14, 5)
}
