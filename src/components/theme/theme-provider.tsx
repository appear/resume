import { createContext, useContext, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import whiteTheme from './white'
import darkTheme from './dark'

const Context = createContext({
  isDark: false,
})

export default function ThemeProviderWrapper({
  chilren,
}: {
  chilren: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false)

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
        {chilren}
      </ThemeProvider>
    </Context.Provider>
  )
}

export function useThemeContext() {
  return useContext(Context)
}
