import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'

const NavbarFrame = styled.div`
  height: 120px;
`
const NavbarContainer = styled(Container)``

function Navbar() {
  return (
    <NavbarFrame>
      <NavbarContainer>Nav</NavbarContainer>
    </NavbarFrame>
  )
}

export default Navbar
