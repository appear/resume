import React from 'react'
import styled from 'styled-components'

import Text from './shared/text'
import media from './shared/media'

const Title = styled(Text)`
  margin: 40px 0 30px 0;

  @media ${media.mo} {
    margin: 10px 0 20px 0;
  }
`

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Title inline size={6} bold>
      {children}
    </Title>
  )
}
