import React from 'react'

import useBioQuery from '../query/use-bio-query'
import Container from '../shared/container'
import ShadowContainer from '../shared/shadow-container'
import SectionTitle from '../title'
import Badge from '../shared/badge'
import Text from '../shared/text'

export default function Bio() {
  const { name, job_search, introduce } = useBioQuery()

  return (
    <ShadowContainer>
      <SectionTitle>{name}</SectionTitle>
      {job_search && (
        <Badge type="bio" size={0} margin="0 0 0 5px">
          구직중
        </Badge>
      )}
      <Text size={3} lineHeight={1.63} alpha={0.8}>
        {introduce}
      </Text>
    </ShadowContainer>
  )
}
