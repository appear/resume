import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'

const NavbarFrame = styled.div`
  height: 72px;
  background: ${({ theme }) => theme.color.navbar.backgroundColor};
`
const NavbarContainer = styled(Container)``

const ThemeButton = styled.button``

function Navbar() {
  return (
    <NavbarFrame>
      <NavbarContainer>
        Nav
        <ThemeButton>🔆 🌙</ThemeButton>
      </NavbarContainer>
    </NavbarFrame>
  )
}

export default Navbar
