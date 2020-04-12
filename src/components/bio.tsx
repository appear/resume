import React from 'react'

import useBioQuery from './query/use-bio-query'
import Container from './shared/container'

export default function Bio() {
  const { name, image, job_search, introduce } = useBioQuery()

  return <Container>Hello Bio</Container>
}
