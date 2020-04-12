import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'
import { formatDate } from './utils'
import { Career } from '../types'

const CompanyContainer = styled(Container)`
  display: inline-block;
  width: 40%;
`

export default function CompanySection({
  source: { name, start_date, end_date, department, position, summary },
}: {
  source: Pick<
    Career,
    'name' | 'start_date' | 'end_date' | 'department' | 'position' | 'summary'
  >
}) {
  return (
    <CompanyContainer>
      {name && <Text>{name}</Text>}
      {(start_date || end_date) && (
        <Text>{formatDate({ start_date, end_date })}</Text>
      )}
      {department && <Text>{department}</Text>}
      {position && <Text>{position}</Text>}
      {summary && <Text>{summary}</Text>}
    </CompanyContainer>
  )
}
