"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, ...props }: ProvidersProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
