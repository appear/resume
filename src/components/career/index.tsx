import React from 'react'

import Container from '../shared/container'
import Text from '../shared/text'
import ProjectSection from './project-section'
import CompanySection from './company-section'
import useCareerQuery from '../query/use-career-query'

export default function Career() {
  const careers = useCareerQuery()

  return (
    <Container>
      <Text size={5} bold>
        경력
      </Text>
      {careers.map(
        (
          {
            name,
            start_date,
            end_date,
            department,
            position,
            summary,
            projects,
          },
          idx,
        ) => (
          <Container key={idx}>
            <CompanySection
              source={{
                name,
                start_date,
                end_date,
                department,
                position,
                summary,
              }}
            />
            <ProjectSection source={projects} />
          </Container>
        ),
      )}
    </Container>
  )
}
