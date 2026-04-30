"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// নিচে সরাসরি টাইপ ইমপোর্ট করা হয়েছে যা টাইপস্ক্রিপ্ট সহজেই খুঁজে পাবে
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}