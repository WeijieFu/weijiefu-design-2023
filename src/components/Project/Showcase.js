import React from "react"
import styles from "../../../styles/components/Project/Showcase.module.css"

const Showcase = ({ theme, title, text, video, layout }) => {
  return (
    <div
      className={`${styles["container"]} ${
        layout === "right" && styles["container-reverse"]
      }`}
      style={{
        backgroundColor: theme,
      }}
    >
      <div className={styles["column"]}>
        {title && (
          <div
            className={styles["title"]}
            style={title.style === "light" ? { color: "white" } : {}}
          >
            {title.content}
          </div>
        )}
        {text &&
          text.map((p, index) => {
            return (
              <p
                className={styles["paragraph"]}
                style={p.style === "light" ? { color: "white" } : {}}
                key={index}
              >
                {p.content}
              </p>
            )
          })}
      </div>
      <div className={styles["column"]}>
        <video autoPlay loop="loop" muted="muted">
          <source src={video} />
        </video>
      </div>
    </div>
  )
}

export default Showcase
