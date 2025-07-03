"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const useTheme = () => {
    const { setTheme, theme } = useNextTheme();
    return {
        theme,
        setTheme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark")
    }
}
