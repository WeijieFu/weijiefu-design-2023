import React from "react"
import styles from "../../../styles//components/Project/Intro.module.css"
import HomeButton from "./HomeButton"
const Intro = ({ year, title, summary, roles }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["year"]}>{year}</div>
      <div className={styles["title"]}>{title}</div>
      {summary && (
        <div className={styles["summary"]}>
          <div className={styles["subtitle"]}>Summary</div>
          {summary.map((paragraph, index) => {
            return (
              <p className={styles["paragraph"]} key={index}>
                {paragraph}
              </p>
            )
          })}
        </div>
      )}

      {roles && (
        <div className={styles["roles"]}>
          <div className={styles["subtitle"]}>My Role</div>
          {roles.map((paragraph, index) => {
            return (
              <p className={styles["line"]} key={index}>
                {paragraph}
              </p>
            )
          })}
        </div>
      )}
      <HomeButton />
    </div>
  )
}

export default Intro
