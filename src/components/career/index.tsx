import React from 'react'
import styled from 'styled-components'

import Text from '../shared/text'
import ShadowContainer from '../shared/shadow-container'
import ProjectSection from './project-section'
import CompanySection from './company-section'
import useCareerQuery from '../query/use-career-query'

const CareerContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

export default function Career() {
  const careers = useCareerQuery()

  return (
    <ShadowContainer>
      <Text size={5} bold margin="40px 0 30px 0">
        경력
      </Text>
      {careers.map(
        ({ name, start_date, end_date, position, summary, projects }, idx) => (
          <CareerContainer key={idx}>
            <CompanySection
              source={{
                name,
                start_date,
                end_date,
                position,
                summary,
              }}
              full={(projects || []).length === 0}
            />
            <ProjectSection source={projects} />
          </CareerContainer>
        ),
      )}
    </ShadowContainer>
  )
}
