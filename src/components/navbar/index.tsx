import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import { useThemeContext } from '../theme/theme-provider'
import getMetaData from '../utils/get-meta-data'

const NavbarFrame = styled(Container)`
  height: 72px;
`

const ThemeButton = styled.button`
  font-size: 52px;
  position: absolute;
  top: 12px;
  right: 0;
`

function Navbar() {
  const { isDark, setIsDark } = useThemeContext()
  const { title } = getMetaData()

  return (
    <NavbarFrame position="relative">
      {title}
      <ThemeButton onClick={() => setIsDark(!isDark)}>
        {isDark ? '🌙' : '🔆'}
      </ThemeButton>
    </NavbarFrame>
  )
}

export default Navbar
