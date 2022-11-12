import React, { useState } from "react"
import styles from "../../../styles/components/Project/Carousel.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Carousel = ({ folder, name, length }) => {
  const [current, setCurrent] = useState(1)
  const handlePrevClick = () => {
    if (current > 1) setCurrent(current - 1)
    else setCurrent(length)
  }
  const handleNextClick = () => {
    if (current < length) setCurrent(current + 1)
    else setCurrent(1)
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["arrow"]} onClick={handlePrevClick}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
      </div>
      <div className={styles["wrapper"]}>
        <img src={`${folder}/${name.replace("#", current)}`} />
        <div className={styles["index"]}> {`${current} / ${length}`}</div>
      </div>
      <div className={styles["arrow"]} onClick={handleNextClick}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </div>
    </div>
  )
}

export default Carousel
