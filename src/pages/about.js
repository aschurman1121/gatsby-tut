import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'


const AboutPage = () => {
    return (
    <Layout pageTitle='About Me'>
        <p> this is the about me</p>
      </Layout>
    )
}

export const Head = () => <Seo title="about meeee" />


export default AboutPage