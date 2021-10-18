import React from "react"
import { graphql } from "gatsby"
import { Company } from "../components/Company"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Company data={post} />
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        governor
        consul
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
