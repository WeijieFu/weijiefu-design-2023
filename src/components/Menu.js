import React, { useRef, useEffect } from "react"
import styles from "../../styles/components/Menu.module.css"
import useNavStore from "../../state/navigation"
import useCameraStore from "../../state/camera"
import { POSITION_FRONT_CENTER } from "../../constants/position"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MENUCOLOR } from "../../constants/colors.js"

import gsap from "gsap"

import List from "./Home/Menu/List"
import About from "../components/Home/Menu/About"

const Menu = () => {
  const menu = useRef()
  const nav = useNavStore()
  const cameraState = useCameraStore()

  useEffect(() => {
    if (nav.current) {
      gsap.fromTo(
        menu.current,
        { x: "0", opacity: 0 },
        {
          x: "-50vw",
          duration: 0.5,
          ease: "power2",
          opacity: 1,
        }
      )
    }
    if (!nav.current) {
      gsap.fromTo(
        menu.current,
        { x: "-50vw", opacity: 1 },
        {
          x: "0",
          duration: 0.5,
          ease: "power2",
          opacity: 0,
        }
      )
    }
  }, [nav.current])

  const handleBackClick = () => {
    nav.setCurrent(null)
    cameraState.setPosition(POSITION_FRONT_CENTER)
  }
  return (
    <div
      className={styles["container"]}
      ref={menu}
      style={{ backgroundColor: MENUCOLOR[nav.current] }}
    >
      <div className={styles["back"]} onClick={handleBackClick}>
        <FontAwesomeIcon icon={["fa-solid", "fa-angles-right"]} />
      </div>
      {nav.current !== "about" && <List />}
      {nav.current === "about" && <About />}
    </div>
  )
}

export default Menu
