import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import NightSky from './night-sky'
import { useThemeContext } from '../theme/theme-provider'

const NavbarFrame = styled.div`
  position: relative;
  height: 150px;
  background: ${({ theme }) => theme.color.navbar.backgroundColor};
`
const NavbarContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const ThemeButton = styled.button`
  font-size: 52px;
  position: absolute;
  top: 12px;
  right: 0;
`

function Navbar() {
  const { isDark, setIsDark } = useThemeContext()
  return (
    <NavbarFrame>
      {isDark ? <NightSky /> : null}
      <NavbarContainer>
        <Container position="relative">
          <ThemeButton onClick={() => setIsDark(!isDark)}>
            {isDark ? '🌙' : '🔆'}
          </ThemeButton>
        </Container>
      </NavbarContainer>
    </NavbarFrame>
  )
}

export default Navbar
