import React from "react"
import styles from "../../../styles/components/Project/External.module.css"

const External = ({ name, href, aspect }) => {
  const handleClick = () => {
    window.open(href, "_blank")
  }
  return (
    <div class={styles["container"]}>
      <div className={styles["link"]} onClick={handleClick}>
        Enter {name} →
      </div>
      <iframe
        src={href}
        className={styles["frame"]}
        style={{ aspectRatio: aspect }}
      />
    </div>
  )
}

export default External
