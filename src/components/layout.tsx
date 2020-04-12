import React from 'react'
import styled from 'styled-components'

import SEO from './seo'
import ResetStyle from './reset-style'
import useMetaData from './query/use-meta-data'
import Section from './shared/section'
import Navbar from './navbar'
import ThemeProvider from './theme/theme-provider'

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const ContentContainer = styled.div`
  box-sizing: border-box;
  transition: background ease 0.5s 0s;
  padding-bottom: 100px;

  ${({ theme }) => `
    background-color: ${theme.color.background_color};
    color: ${theme.color.text};
  `}
`

const Layout = ({ children }: LayoutProps) => {
  const { title, introduce } = useMetaData()

  return (
    <>
      <ResetStyle />
      <SEO title={title} introduce={introduce} />
      <ThemeProvider>
        <ContentContainer>
          <Navbar />
          <Section>{children}</Section>
        </ContentContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout
