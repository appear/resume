import React from 'react'

import SEO from './seo'
import ResetStyle from './reset-style'
import getMetaData from './utils/get-meta-data'
import Container from './shared/container'
import Navbar from './navbar'

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
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
