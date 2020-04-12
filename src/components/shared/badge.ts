import styled from 'styled-components'

export type Badge = 'hash' | 'bio'

import { margin, padding, Margin, Padding } from './mixins'

export default styled.span<{
  type: Badge
  size: number
  margin?: Margin
  padding?: Padding
}>`
  color: #fff;
  padding: 3px 6px;
  border-radius: 2px;
  font-weight: bold;

  ${margin}
  ${padding}

  ${({ theme, type, size }) => `
    background: ${theme.color[`${type}_tag`]};
    font-size: ${theme.fontSize[size]}px;
  `};

  &:not(:last-child) {
    margin-right: 5px;
  }
`
