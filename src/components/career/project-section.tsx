import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'
import Badge from '../shared/badge'
import { Project } from '../types'
import { formatDate } from './utils'

const ProjectFrame = styled(Container)`
  display: inline-block;
  vertical-align: top;
  width: 65%;
`

const ProjectContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

export default function ProjectSection({ source = [] }: { source: Project[] }) {
  if (!source.length) {
    return null
  }

  return (
    <ProjectFrame>
      {source.map(
        (
          { name, start_date, end_date, experiences = [], summary, tags = [] },
          idx,
        ) => (
          <ProjectContainer key={idx}>
            <Text size={4} bold margin="0 0 5px 0">
              {name}
            </Text>
            {(start_date || end_date) && (
              <Text size={1} alpha={0.8}>
                {formatDate({ start_date, end_date })}
              </Text>
            )}
            <Text lineHeight={1.63} margin="20px 0">
              {summary}
            </Text>
            {experiences.map((experience, idx) => (
              <Text key={idx} lineHeight={1.63}>
                {experience}
              </Text>
            ))}
            {(tags || []).length > 0 && (
              <Container margin="20px 0 0 0 ">
                {tags.map((tag, idx) => (
                  <Badge key={idx} type="hash" size={0}>
                    # {tag}
                  </Badge>
                ))}
              </Container>
            )}
          </ProjectContainer>
        ),
      )}
    </ProjectFrame>
  )
}
