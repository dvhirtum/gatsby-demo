import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./posts.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1 className={styles.header}>Posts</h1>
        <h4>{data.allPrismicPage.totalCount} Posts</h4>
        {data.allPrismicPage.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.uid} className={styles.link}>
              <h3>
                {node.data.title.text}{" "}
                <span>— {node.last_publication_date}</span>
              </h3>
              <p>{node.data.summary.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicPage(sort: { fields: [last_publication_date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            summary {
              text
            }
          }
          last_publication_date(fromNow: true)
        }
      }
    }
  }
`
