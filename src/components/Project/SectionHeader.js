import React from "react"
import styles from "../../../styles/components/Project/SectionHeader.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SectionHeader = ({ index, title, icons, text }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["index"]}>{index}</div>
      <div className={styles["title"]}>{title}</div>
      {icons && (
        <div className={styles["icons"]}>
          {icons.map((icon, index) => {
            return (
              <div className={styles["icon-wrapper"]} key={index}>
                <div className={styles["icon"]}>
                  <FontAwesomeIcon icon={icon.icon} />
                </div>
                <div className={styles["label"]}>{icon.label}</div>
              </div>
            )
          })}
        </div>
      )}

      {text && (
        <div className={styles["text"]}>
          {text.map((paragraph, index) => {
            return (
              <p className={styles["paragraph"]} key={index}>
                {paragraph}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SectionHeader
