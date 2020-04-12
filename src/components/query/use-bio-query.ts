import { useStaticQuery, graphql } from 'gatsby'

import { MetaData, Bio } from '../types'

export default function useBioQuery(): MetaData & Bio {
  const {
    dataJson: { bio },
    site: {
      siteMetadata: { introduce, author },
    },
  } = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          introduce
        }
      }
      dataJson {
        bio {
          name
          image
          job_search
        }
      }
    }
  `)

  return { ...bio, introduce, author }
}
