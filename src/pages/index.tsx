import React from 'react'

import Layout from '../components/layout'
import Bio from '../components/bio'

interface IndexPageProps {
  location: Location
}

function IndexPage({ location }: IndexPageProps) {
  return (
    <Layout location={location}>
      <Bio />
    </Layout>
  )
}

export default IndexPage
