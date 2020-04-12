import React from 'react'
import styled from 'styled-components'

import { SectionContainer } from '../shared/container'
import Text from '../shared/text'
import { useThemeContext } from '../theme/theme-provider'
import getMetaData from '../utils/get-meta-data'
import { useContactQuery } from '../useQuery'
import Icon from '../shared/icon'
import { ContactType } from '../types'

const NavbarFrame = styled(SectionContainer)`
  height: 72px;
`

const ThemeButton = styled.button``

const FloatContainer = styled.div``

function Navbar() {
  const { isDark, setIsDark } = useThemeContext()
  const { author } = getMetaData()
  const contact = useContactQuery()

  return (
    <NavbarFrame position="relative">
      <Text size={6} bold lineHeight="72" ellipsis>
        {author}
      </Text>
      <FloatContainer>
        <ThemeButton onClick={() => setIsDark(!isDark)}>
          {isDark ? '🌙' : '🔆'}
        </ThemeButton>
        {Object.keys(contact).map((key) => (
          <Icon type={key as ContactType} size={40} />
        ))}
      </FloatContainer>
    </NavbarFrame>
  )
}

export default Navbar
