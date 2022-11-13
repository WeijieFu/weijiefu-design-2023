import React from "react"
import styles from "../../../styles/components/Project/External.module.css"

const External = ({ name, href, aspect, interactive }) => {
  const handleClick = () => {
    window.open(href, "_blank")
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["link"]} onClick={handleClick}>
        Enter {name} →
      </div>
      <iframe
        src={href}
        className={styles["frame"]}
        style={{
          aspectRatio: aspect,
          pointerEvents: interactive ? "all" : "none",
        }}
      />
    </div>
  )
}

export default External
