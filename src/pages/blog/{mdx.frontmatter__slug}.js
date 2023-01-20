import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'
import { useState, useEffect } from "react"


const BlogPost = ( {data, children}) => {

  const URL = 'https://place.dog'

  const [dog, setDog] = useState()


  useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(URL)
        result.json().then( json => {
          console.log(json);
          setDog(json.whatever.whatever)
        })
        // console.log(result)

      }
      fetchData(); 
  }, [])

    const image = getImage(data.mdx.frontmatter.hero_image)
    
    return (
        <Layout pageTitle={data.mdx.frontmatter.title} > 
            <p> posted: {data.mdx.frontmatter.date} </p>
            <GatsbyImage 
                image={image}
                alt= {data.mdx.frontmatter.hero_image_alt} />
            <p>
              <div> 
                Here is a dog: {dog} 

              </div>
              Photo Credit:{ " " }
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
            {/* {children} */}
        </Layout>
    )
} 


export const query = graphql`
query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`


export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost;
