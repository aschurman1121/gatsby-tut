import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'


const BlogPage = ({ data }) => {

console.log({data})


    return (
        <Layout pageTitle='my blog posts'>
            <ul>
                {data.allMdx.nodes.map(node => (
                    <article key={node.name}>
                        <h2> 
                            <Link to={`/blog/${node.frontmatter.slug}`} >
                                {node.frontmatter.title}
                            </Link>
                            </h2>
                        <p> posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt} </p>
                    </article>
                ))}
            </ul>
            </Layout> 
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
              frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                slug
              }
              id
              excerpt

            }
          }
  }`



export const Head = ( ) => <Seo title='my blog buddy'></Seo>

export default BlogPage