import React from "react"
import styles from "../../../styles/components/Home/Background.module.css"
const Background = () => {
  return (
    <div className={styles["shape-wrapper"]}>
      <span className={styles["shape-1"]}></span>
      <span className={styles["shape-2"]}></span>
      <span className={styles["shape-3"]}></span>
      <span className={styles["shape-4"]}></span>
    </div>
  )
}

export default Background
