import steyld from 'styled-components'
import csstype from 'csstype'

interface ContainerProps {
  overflow?: csstype.OverflowProperty
  position?: csstype.PositionProperty
}

export default steyld.div<ContainerProps>`
  max-width: 768px;
  width: 100%;  
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;

  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ position }) => position && `position: ${position};`}

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`
