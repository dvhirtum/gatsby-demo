import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./post.module.css"

export default ({ data: { prismicPage } }) => {
  const { data, last_publication_date } = prismicPage
  return (
    <Layout>
      <h1 className={styles.title}>
        {data.title.text} <span>— {last_publication_date}</span>
      </h1>
      <p>{data.summary.text}</p>
      {data.body.map(element => {
        if (element.__typename === "PrismicPageBodyQuote") {
          return (
            <div key={element.id} className={styles.quote}>
              {element.primary.quote.text}
              <span>— {element.primary.name_of_the_author.text}</span>
            </div>
          )
        } else {
          return (
            <div
              key={element.id}
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: element.primary.text.html }}
            />
          )
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  query($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        summary {
          text
        }
        body {
          __typename
          ... on PrismicPageBodyText {
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPageBodyQuote {
            id
            primary {
              name_of_the_author {
                text
              }
              quote {
                text
              }
            }
          }
        }
      }
      last_publication_date(fromNow: true)
    }
  }
`
