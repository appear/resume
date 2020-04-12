import React from 'react'

import Layout from '../components/layout'
import Bio from '../components/bio'
import Career from '../components/career'

interface IndexPageProps {
  location: Location
}

function IndexPage({ location }: IndexPageProps) {
  return (
    <Layout location={location}>
      <Bio />
      <Career />
    </Layout>
  )
}

export default IndexPage
