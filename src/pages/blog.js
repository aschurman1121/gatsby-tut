import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={'my blog posts'}>
            <ul>
                {data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))}
            </ul>
            </Layout> 
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
             name
        }
    }
  }`



export const Head = ( { data }) => <Seo title='my blog buddy'></Seo>

export default BlogPage