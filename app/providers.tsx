'use client'

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import { AuthProvider } from '@/context/AuthContext'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...themeProps}
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </NextThemesProvider>
  )
}
