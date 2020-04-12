import React from 'react'
import styled from 'styled-components'

type ICON = 'github' | 'mail' | 'linkedIn'

const ICONS: {
  [key in ICON]?: string
} = {
  github: '/images/github.png',
  mail: '/images/mail.png',
  linkedIn: '/images/linkedin.png',
}

interface IconProps {
  type: ICON
  size: number
}

const IconBase = styled.img<{ size?: number }>`
  ${({ size }) =>
    size &&
    `
    width: ${size}px;
    height: ${size}px;
  `}
`

export default function Icon({ type, size }: IconProps) {
  return <IconBase src={ICONS[type]} size={size} />
}
