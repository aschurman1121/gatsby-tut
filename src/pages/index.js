import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p> this is following the tutu I found</p>
      <StaticImage 
      alt='cocker spaniel with flower'
      src='https://as1.ftcdn.net/v2/jpg/02/75/98/22/1000_F_275982235_xzqfvupzoy03oAiWf7iFTpTcpvVaR4TF.jpg'
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage