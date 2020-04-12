import React from 'react'
import styled from 'styled-components'

import useBioQuery from '../query/use-bio-query'
import Container from '../shared/container'
import Text from '../shared/text'

const TextContainer = styled(Container)``
const Badge = styled.span`
  ${({ theme }) => `
    background: ${theme.color.bio_tag};
    color: #fff;
    font-size: ${theme.fontSize[1]}px;
  `};
  display: inline-block;
  padding: 3px 6px;
  border-radius: 2px;
  margin-bottom: 5px;
`

export default function Bio() {
  const { name, job_search, introduce } = useBioQuery()

  return (
    <Container>
      <TextContainer>
        <Text size={6} margin="0 0 5px 0" bold>
          {name}
        </Text>
        {job_search && <Badge>구직중</Badge>}
        <Text size={3} lineHeight={1.63} alpha={0.8}>
          {introduce}
        </Text>
      </TextContainer>
    </Container>
  )
}
