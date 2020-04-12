import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import Text from '../shared/text'
import { formatDate } from './utils'
import { Career } from '../types'

const CompanyContainer = styled(Container)<{ full: boolean }>`
  display: inline-block;
  vertical-align: top;
  width: ${({ full }) => (full ? 100 : 40)}%;
`

export default function CompanySection({
  source: { name, start_date, end_date, position, summary },
  full,
}: {
  source: Pick<
    Career,
    'name' | 'start_date' | 'end_date' | 'position' | 'summary'
  >
  full: boolean
}) {
  return (
    <CompanyContainer full={full}>
      {name && (
        <Text size={4} bold margin="0 0 2px 0">
          {name}
        </Text>
      )}
      {position && (
        <Text bold margin="0 0 20px 0">
          {position}
        </Text>
      )}
      {(start_date || end_date) && (
        <Text alpha={0.8} bold margin="0 0 2px 0">
          {formatDate({ start_date, end_date })}
        </Text>
      )}
      {summary && (
        <Text alpha={0.9} lineHeight={1.63}>
          {summary}
        </Text>
      )}
    </CompanyContainer>
  )
}
