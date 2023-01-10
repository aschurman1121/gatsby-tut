import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'


const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p> this is following the tutu I found</p>
      <StaticImage 
      src="../images/spaniel.jpg"
      alt="cocker spaniel with flower"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage