import { useStaticQuery, graphql } from 'gatsby'

import { Contact } from '../types'

export default function useContactQuery(): Contact {
  const {
    dataJson: { contacts },
  } = useStaticQuery(graphql`
    query ContactQuery {
      dataJson {
        contacts {
          blog
          mail
          github
          phone
        }
      }
    }
  `)

  return contacts
}
