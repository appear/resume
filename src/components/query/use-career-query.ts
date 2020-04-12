import { useStaticQuery, graphql } from 'gatsby'

import { Career } from '../types'

export default function useCareerQuery(): Career[] {
  const {
    dataJson: { careers },
  } = useStaticQuery(graphql`
    query CareerQuery {
      dataJson {
        careers {
          end_date
          name
          position
          projects {
            summary
            start_date
            name
            link
            end_date
            experiences
            tags
          }
          start_date
          summary
        }
      }
    }
  `)

  return careers
}
