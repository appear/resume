import styled from 'styled-components'

import { Margin, margin } from './mixins'

export default styled.div<{
  size?: number
  margin?: Margin
}>`
  ${margin}

  ${({ size = 0, theme }) =>
    size !== undefined &&
    `
        font-size: ${theme.fontSize[size]};
    `}
`
