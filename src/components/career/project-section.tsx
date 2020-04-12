import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'
import { Project } from '../types'
import { formatDate } from './utils'

const ProjectContainer = styled(Container)`
  display: inline-block;
  vertical-align: top;
  width: 60%;
`

const Tag = styled.span`
  color: #fff;
  padding: 3px 6px;
  border-radius: 2px;
  font-weight: bold;

  ${({ theme }) => `
    background: ${theme.color.hash_tag};
    font-size: ${theme.fontSize[1]}px;
  `};

  &:not(:last-child) {
    margin-right: 5px;
  }
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
                  <Tag key={idx}># {tag}</Tag>
                ))}
              </Container>
            )}
          </Container>
        ),
      )}
    </ProjectContainer>
  )
}
