import React from 'react'
import styled from 'styled-components'

import Section from '../shared/section'
import { useThemeContext } from '../theme/theme-provider'

const NavbarFrame = styled(Section)`
  height: 72px;
`

const ThemeButton = styled.button`
  font-size: 32px;
`

const FloatContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  text-align: right;
`

function Navbar() {
  const { isDark, setIsDark } = useThemeContext()

  return (
    <NavbarFrame position="relative">
      <FloatContainer>
        <ThemeButton onClick={() => setIsDark(!isDark)}>
          {isDark ? '🌙' : '🔆'}
        </ThemeButton>
      </FloatContainer>
    </NavbarFrame>
  )
}

export default Navbar
