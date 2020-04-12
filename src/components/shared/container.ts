import styled from 'styled-components'
import csstype from 'csstype'

import { margin, Margin, padding, Padding } from './mixins'

interface ContainerProps {
  overflow?: csstype.OverflowProperty
  position?: csstype.PositionProperty
  margin?: Margin
  padding?: Padding
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;

  ${margin}
  ${padding}

  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ position }) => position && `position: ${position};`}
`

export const SectionContainer = styled(Container)`
  max-width: 860px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`
