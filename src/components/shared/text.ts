import styled from 'styled-components'

import { Margin, margin } from './mixins'

export default styled.div<{
  size?: number
  bold?: boolean
  inline?: boolean
  margin?: Margin
  lineHeight?: number | string
  ellipsis?: boolean
}>`
  line-height: 1.5;

  ${margin}

  ${({ ellipsis }) =>
    ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${({ lineHeight = 1.5 }) => `
    line-height: ${
      typeof lineHeight === 'number' ? lineHeight : `${lineHeight}px`
    };
  `}

  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
  `}

  ${({ bold }) =>
    bold &&
    `
    font-weight: bold;
  `}

  ${({ size = 2, theme }) =>
    size !== undefined &&
    `
        font-size: ${theme.fontSize[size]}px;
    `}
`
