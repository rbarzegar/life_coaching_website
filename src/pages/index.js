import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import ThisIsMe from '../components/home/thisisme'

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>My Title</title>
      </Helmet>
      <Layout>
        <Hero />
        <ThisIsMe />
      </Layout>
    </>
  )
}

export default IndexPage
