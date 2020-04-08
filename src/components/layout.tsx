import React from 'react'

import SEO from './seo'
import ResetStyle from './reset-style'
import getMetaData from './utils/get-meta-data'
import Container from './shared/container'
import Navbar from './navbar'
import ThemeProvider from './theme/theme-provider'

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const Layout = ({ children }: LayoutProps) => {
  const { title, subTitle } = getMetaData()

  return (
    <>
      <ResetStyle />
      <SEO title={title} subTitle={subTitle} />
      <ThemeProvider>
        <Navbar />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
