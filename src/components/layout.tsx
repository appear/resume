import React from 'react'
import styled from 'styled-components'

import SEO from './seo'
import ResetStyle from './reset-style'
import getMetaData from './utils/get-meta-data'
import { SectionContainer } from './shared/container'
import Navbar from './navbar'
import ThemeProvider from './theme/theme-provider'

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const ContentContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  transition: background ease 0.5s 0s;

  ${({ theme }) => `
    background-color: ${theme.color.backgroundColor};
    color: ${theme.color.text};
  `}
`

const Layout = ({ children }: LayoutProps) => {
  const { title, introduce } = getMetaData()

  return (
    <>
      <ResetStyle />
      <SEO title={title} introduce={introduce} />
      <ThemeProvider>
        <ContentContainer>
          <Navbar />
          <SectionContainer>{children}</SectionContainer>
        </ContentContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout
