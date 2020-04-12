import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Section from '../shared/section'
import Text from '../shared/text'
import { useThemeContext } from '../theme/theme-provider'
import useBioQuery from '../query/use-bio-query'

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
  const { name } = useBioQuery()

  return (
    <NavbarFrame position="relative">
      <Container>
        <Text size={6} lineHeight="72" bold ellipsis>
          {name}
        </Text>
      </Container>
      <FloatContainer>
        <ThemeButton onClick={() => setIsDark(!isDark)}>
          {isDark ? '🌙' : '🔆'}
        </ThemeButton>
      </FloatContainer>
    </NavbarFrame>
  )
}

export default Navbar
