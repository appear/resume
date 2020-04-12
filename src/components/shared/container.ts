import styled from 'styled-components'
import csstype from 'csstype'

import { margin, Margin, padding, Padding } from './mixins'

interface ContainerProps {
  overflow?: csstype.OverflowProperty
  position?: csstype.PositionProperty
  margin?: Margin
  padding?: Padding
}

export default styled.div<ContainerProps>`
  box-sizing: border-box;

  ${margin}
  ${padding}

  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ position }) => position && `position: ${position};`}
`
