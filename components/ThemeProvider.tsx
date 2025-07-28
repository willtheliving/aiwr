"use client";

import * as React from "react";

/* --- FIXED IMPORTS --- */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes"; // separate `import type`

/**
 * Wraps the application with the `next‑themes` provider.
 * All props (attribute="class" etc.) are passed straight through.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
