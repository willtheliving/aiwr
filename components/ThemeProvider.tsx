"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/** 
 * Wraps the application with next‑themes.
 * We keep typing minimal so we never trip the compiler.
 */
interface ProviderProps {
  children: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({ children, ...props }: ProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
