import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'
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
  const { author } = getMetaData()

  return (
    <NavbarFrame position="relative">
      <Text size={6} bold lineHeight="72" ellipsis>
        {author}
      </Text>
      <ThemeButton onClick={() => setIsDark(!isDark)}>
        {isDark ? '🌙' : '🔆'}
      </ThemeButton>
    </NavbarFrame>
  )
}

export default Navbar
