import React from "react"
import styles from "./layout.module.css"
import { Link } from "gatsby"

const ListLink = props => (
  <li className={styles.linklistlink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <Link to="/" className={styles.homelink}>
        <h3>Gatsby Demo</h3>
      </Link>
      <ul className={styles.listlink}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/posts/">Posts</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
