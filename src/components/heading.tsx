import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import getColor from './share/color'
import media from './share/media'
import CoverImage from './share/cover-image'

const Content = styled(Container)<{
  topSpancing?: number
  mobileTopSpancing?: number
}>`
  z-index: 1;
  background: ${getColor('white')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 92.09%;
  max-width: 64rem;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  bottom: 0;

  ${({ topSpancing }) =>
    topSpancing &&
    `  
    top: ${topSpancing}rem;
    bottom: auto;`}

  @media ${media.md} {
    ${({ mobileTopSpancing }) =>
      mobileTopSpancing &&
      `
      top: ${mobileTopSpancing}rem;
      bottom: auto;
    `}
  }  
`

const HeadingFrame = styled(Container)<{ mobileHeight?: number }>`
  @media ${media.md} {
    ${({ mobileHeight }) =>
      mobileHeight &&
      `
      height: ${mobileHeight}rem;
    `}
  }
`

interface HeadingProps {
  textAlign?: string
  image: string
  mobileHeight?: number
  imageHeight?: number
  children?: React.ReactNode
  padding?: string
  topSpancing?: number
  mobileTopSpancing?: number
  opacity?: number
}

function Heading({
  image,
  mobileHeight = 5,
  imageHeight = 15,
  topSpancing,
  mobileTopSpancing,
  opacity,
  children,
}: HeadingProps) {
  return (
    <HeadingFrame
      position="relative"
      height={imageHeight}
      mobileHeight={mobileHeight}
    >
      <CoverImage
        src={image}
        opacity={opacity}
        height={imageHeight}
        mobileHeight={mobileHeight}
      />
      <Content
        textAlign="left"
        topSpancing={topSpancing}
        mobileTopSpancing={mobileTopSpancing}
      >
        {children}
      </Content>
    </HeadingFrame>
  )
}

export default Heading
