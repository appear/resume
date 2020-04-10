import { css } from 'styled-components'
import csstype from 'csstype'

export type Margin = string
export type Padding = string
export type Display = csstype.DisplayProperty

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

export const display = ({ display }: { display?: Display }) =>
  display &&
  css`
    display: ${display};
  `
