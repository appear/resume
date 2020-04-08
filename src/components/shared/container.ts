import steyld from 'styled-components'
import csstype from 'csstype'

import { margin, Margin, padding, Padding } from './mixins'

interface ContainerProps {
  overflow?: csstype.OverflowProperty
  position?: csstype.PositionProperty
  margin?: Margin
  padding?: Padding
}

export default steyld.div<ContainerProps>`
  max-width: 860px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;

  ${margin}
  ${padding}

  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ position }) => position && `position: ${position};`}
`
