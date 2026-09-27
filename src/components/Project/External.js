import React from "react"
import styles from "../../../styles/components/Project/External.module.css"

const External = ({ name, href, aspect, interactive, embed = true }) => {
  return (
    <div className={styles["container"]}>
      <a className={styles["link"]} href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
        Enter {name} →
      </a>
      {embed && <iframe
        title={name}
        src={href}
        className={styles["frame"]}
        style={{
          aspectRatio: aspect,
          pointerEvents: interactive ? "all" : "none",
        }}
      />}
    </div>
  )
}

export default External
