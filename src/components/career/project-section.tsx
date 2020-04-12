import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'
import { Project } from '../types'
import { formatDate } from './utils'

const ProjectContainer = styled(Container)`
  display: inline-block;
  width: 60%;
`

export default function ProjectSection({ source = [] }: { source: Project[] }) {
  if (!source.length) {
    return null
  }

  return (
    <ProjectContainer>
      {source.map(
        (
          { name, start_date, end_date, experiences = [], summary, tags = [] },
          idx,
        ) => (
          <Container key={idx}>
            <Text>{name}</Text>
            {(start_date || end_date) && (
              <Text>{formatDate({ start_date, end_date })}</Text>
            )}
            <Text>{summary}</Text>
            {experiences.map((experience, idx) => (
              <Text key={idx}>{experience}</Text>
            ))}
            {tags.map((tag, idx) => (
              <Text key={idx}>{tag}</Text>
            ))}
          </Container>
        ),
      )}
    </ProjectContainer>
  )
}
