import React from 'react'
import styled from 'styled-components'

import useBioQuery from '../query/use-bio-query'
import Container from '../shared/container'
import Badge from '../shared/badge'
import Text from '../shared/text'

export default function Bio() {
  const { name, job_search, introduce } = useBioQuery()

  return (
    <Container>
      <Container position="relative" margin="30px 0">
        <Text inline size={6} bold>
          {name}
        </Text>
        {job_search && (
          <Badge type="bio" size={0} margin="0 0 0 5px">
            구직중
          </Badge>
        )}
      </Container>
      <Text size={3} lineHeight={1.63} alpha={0.8}>
        {introduce}
      </Text>
    </Container>
  )
}
