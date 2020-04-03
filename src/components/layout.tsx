import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import ResetStyle from './reset-style'

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const Layout = ({ children, location }: LayoutProps) => {
  const { pathname } = location

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ResetStyle />
      <SEO title={data.site.siteMetadata.title} />
      <div>{children}</div>
    </>
  )
}

export default Layout
