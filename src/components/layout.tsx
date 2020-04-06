import React from 'react'
import steyld from 'styled-components'

import SEO from './seo'
import ResetStyle from './reset-style'
import getMetaData from './utils/get-meta-data'

const Conatiner = steyld.div`
  max-width: 768px;
  width: 100%;  
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1024px;
  }
`

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
      <Conatiner>{children}</Conatiner>
    </>
  )
}

export default Layout
