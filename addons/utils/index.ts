import { None, Option, Some } from "ts-results";

/**
 * Promise resolved after `ms`.
 */
export function sleep(ms = 100): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * ```ts
 * if (isInRadius(getItem))
 * ```
 * Check is `a` in `radius` of `b`.
 * @param a Cords A
 * @param b Cords B
 * @param radius Default value is `1`. If set to `0`,
 *        to return `true` `a` and `b` have to be exactly the same.
 */
export function isInRadius(
  a: Margonem.Cords,
  b: Margonem.Cords,
  radius = 1
): boolean {
  return Math.abs(a.x - b.x) <= radius && Math.abs(a.x - b.x) <= radius;
}