import { css } from 'styled-components'

export type Margin = string
export type Padding = string

export const margin = ({ margin }: { margin?: Margin }) =>
  margin &&
  css`
    margin: ${margin};
  `

export const padding = ({ padding }: { padding?: Padding }) =>
  padding &&
  css`
    padding: ${padding};
  `
