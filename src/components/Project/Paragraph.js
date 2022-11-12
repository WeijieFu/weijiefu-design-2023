import React from "react"
import styles from "../../../styles/components/Project/Paragraph.module.css"
const Paragraph = ({ title, text }) => {
  return (
    <div className={styles["container"]}>
      {title && <div className={styles["title"]}>{title}</div>}
      {text &&
        text.map((p, index) => {
          return (
            <p
              className={styles["paragraph"]}
              style={p.style === "light" ? { opacity: 0.5 } : {}}
              key={index}
            >
              {p.content}
            </p>
          )
        })}
    </div>
  )
}

export default Paragraph
