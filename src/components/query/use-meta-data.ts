import { useStaticQuery, graphql } from 'gatsby'

import { MetaData } from '../types'

export default function useMetaData(): MetaData {
  const {
    site: {
      siteMetadata: { title, introduce },
    },
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          introduce
        }
      }
    }
  `)

  return { title, introduce }
}
