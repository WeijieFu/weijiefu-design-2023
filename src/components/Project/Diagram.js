import React from "react"
import styles from "../../../styles/components/Project/Diagram.module.css"

import Image from "next/image"

const Diagram = ({ layout, diagrams }) => {
  return (
    <div className={styles["container"]}>
      {diagrams.map((diagram, index) => {
        if (diagram.img.src.includes(".svg")) {
          return (
            <div className={styles["column"]} key={index}>
              <img
                src={diagram.img.src}
                alt={diagram.title}
                className={styles["image"]}
              />
              <div className={styles["title"]}>{diagram.title}</div>
              <div className={styles["text"]}>{diagram.text}</div>
            </div>
          )
        } else {
          return (
            <div className={styles["column"]} key={index}>
              <Image src={diagram.img} alt={diagram.title} />
              <div className={styles["title"]}>{diagram.title}</div>
              <div className={styles["text"]}>{diagram.text}</div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Diagram
