import React from "react"
import styles from "../../../styles/components/Project/Quote.module.css"

const Quote = ({ children }) => (
  <blockquote className={styles.container}>
    <p className={styles.text}>“{children}”</p>
  </blockquote>
)

export default Quote
