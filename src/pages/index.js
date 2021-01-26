import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import ThisIsMe from '../components/home/thisisme'

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <ThisIsMe />
      </Layout>
    </>
  )
}

export default IndexPage
