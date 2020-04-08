import React from 'react'
import { createContext, useContext, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import whiteTheme from './white'
import darkTheme from './dark'
import { Theme } from './types'

interface ThemeContext {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

const Context = createContext<ThemeContext>({
  isDark: false,
  setIsDark: () => {},
})

export default function ThemeProviderWrapper({
  children,
  initialTheme = false,
}: React.PropsWithChildren<{
  initialTheme?: boolean
}>) {
  const [isDark, setIsDark] = useState(initialTheme)

  const value: ThemeContext = useMemo(
    () => ({
      isDark,
      setIsDark,
    }),
    [isDark, setIsDark],
  )

  return (
    <Context.Provider value={value}>
      <ThemeProvider theme={isDark ? darkTheme : whiteTheme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}

export function useThemeContext() {
  return useContext(Context)
}
