"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

/**
 * Wraps the application with a theme provider from `next-themes`.
 *
 * Separating this into its own component makes it easy to provide
 * sensible defaults (like enabling system preference) without
 * repeating the provider boilerplate in every file. The `props`
 * argument is spread onto the underlying provider allowing callers to
 * override behaviour if necessary.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}