import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data: { prismicLanding } }) => (
  <Layout>
    <h1>{prismicLanding.data.title.text}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: prismicLanding.data.content.html }}
    />
  </Layout>
)

export const query = graphql`
  query {
    prismicLanding {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
