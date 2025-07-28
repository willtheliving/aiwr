import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A convenience function that merges Tailwind classes with `clsx` and
 * `tailwind-merge`. Use this instead of manually joining class strings
 * throughout your components. See:
 * https://github.com/lukeed/clsx and https://github.com/dcastil/tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}