import React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => (
    <div>
        <h1>{ data.wpPost.title }</h1>

        <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }}>

        </div>
    </div>
)
export default BlogPostTemplate

export const query = graphql`
    query($id: String!){
        wpPost(id: {eq: $id}) {
            title
            content
          }
    }
`