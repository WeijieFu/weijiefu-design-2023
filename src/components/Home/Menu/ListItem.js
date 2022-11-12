import React, { forwardRef, useRef } from "react"
import { useRouter } from "next/router"
import styles from "../../../../styles/components/Menu/ListItem.module.css"
import gsap from "gsap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const ListItem = forwardRef(({ data, index }, ref) => {
  const router = useRouter()
  const label = useRef()
  const number = useRef()
  const title = useRef()
  const arrow = useRef()

  const handleMouseEnter = () => {
    gsap.fromTo(
      label.current,
      { height: 0, opacity: 0 },
      { height: "1.5rem", opacity: 1, duration: 0.5 }
    )
    gsap.fromTo(title.current, { opacity: 0.75 }, { opacity: 1, duration: 0.5 })
    gsap.fromTo(
      number.current,
      { opacity: 0.75 },
      { opacity: 1, duration: 0.5 }
    )
    gsap.fromTo(arrow.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }
  const handleMouseLeave = () => {
    gsap.fromTo(
      label.current,
      { height: "1.5rem", opacity: 1 },
      { height: 0, opacity: 0, duration: 0.5 }
    )
    gsap.fromTo(title.current, { opacity: 1, duration: 0.5 }, { opacity: 0.75 })
    gsap.fromTo(
      number.current,
      { opacity: 1, duration: 0.5 },
      { opacity: 0.75 }
    )
    gsap.fromTo(arrow.current, { opacity: 1 }, { opacity: 0, duration: 0.5 })
  }

  const handleClick = () => {
    window.open(`/project/${data.title.replaceAll(" ", "_")}`)
  }
  return (
    <div
      className={styles["container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={ref}
    >
      <div className={styles["left"]}>
        <div className={styles["index"]} ref={number}>
          0{index + 1}
        </div>
      </div>
      <div className={styles["middle"]}>
        <div className={styles["title"]} ref={title}>
          <span className={styles["text"]}> {data.title}</span>

          <span className={styles["arrow"]} ref={arrow}>
            <FontAwesomeIcon icon={["fa-solid", "fa-arrow-right"]} />
          </span>
        </div>
        <div className={styles["label-wrapper"]} ref={label}>
          {data.label.map((item, index) => {
            return (
              <span key={index}>
                {item}
                {index < data.label.length - 1 && ","}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
})

export default ListItem
