"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Simple wrapper around next‑themes’ ThemeProvider.
 * We **do not** import ThemeProviderProps – that avoids the compile error.
 */
export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: string;
  enableSystem?: boolean;
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
