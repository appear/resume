import React from 'react'
import { createContext, useContext, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import whiteTheme from './white'
import darkTheme from './dark'

const Context = createContext({
  isDark: false,
})

export default function ThemeProviderWrapper({
  children,
  initialTheme = false,
}: React.PropsWithChildren<{
  initialTheme?: boolean
}>) {
  const [isDark, setIsDark] = useState(initialTheme)

  const value = useMemo(
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
