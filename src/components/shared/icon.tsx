import React from 'react'
import styled from 'styled-components'

import { ContactType } from '../types'

const ICONS: {
  [key in ContactType]?: string
} = {
  github: '/images/github.png',
  mail: '/images/mail.png',
  linkedIn: '/images/linkedin.png',
  blog: '',
  phone: '',
}

interface IconProps {
  type: ContactType
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
