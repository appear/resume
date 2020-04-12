import { useStaticQuery, graphql } from 'gatsby'

import { MetaData } from '../types'

export default function getMetaData(): MetaData {
  const {
    site: {
      siteMetadata: { title, introduce, author },
    },
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          introduce
          author
        }
      }
    }
  `)

  return { title, introduce, author }
}
