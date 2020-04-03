import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface HeadProps {
  description?: string
  lang?: string
  meta?: any[]
  title: string
  keywords?: string[]
}

export default function Head({
  description,
  lang = 'ko',
  meta = [],
  keywords = [],
  title,
}: HeadProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          content: '/images/logo.png',
        },
        {
          name: 'og:image:width',
          content: '800',
        },
        {
          name: 'og:image:height',
          content: '400',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'og:locale',
          content: 'ko_KR',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    >
      <link rel="icon" href="/images/fav-32@3x.png" />
    </Helmet>
  )
}
