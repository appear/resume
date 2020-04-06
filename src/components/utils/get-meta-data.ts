import { useStaticQuery, graphql } from 'gatsby'

import { MetaData } from '../types'

export default function getMetaData(): MetaData {
  const {
    site: {
      siteMetadata: { title, subTitle, introduce, author },
    },
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          subTitle
          introduce
          author
        }
      }
    }
  `)

  return { title, subTitle, introduce, author }
}
