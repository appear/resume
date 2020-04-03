import React from 'react'

import Layout from '../components/layout'

interface IndexPageProps {
  location: Location
}

function IndexPage({ location }: IndexPageProps) {
  return <Layout location={location}>Hello</Layout>
}

export default IndexPage
