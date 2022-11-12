import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import styles from "../../styles/components/Navigation.module.css"
import { useRouter } from "next/router"
import useStageStore from "../../state/stage"
import useNavStore from "../../state/navigation"
import useCameraStore from "../../state/camera"
import { POSITION_FRONT_CENTER, POSITION_NAV } from "../../constants/position"
const Navigation = () => {
  const stage = useStageStore()
  const nav = useNavStore()
  const camera = useCameraStore()
  const router = useRouter()
  const uiux = useRef()
  const wd = useRef()
  const cd = useRef()
  const about = useRef()

  const DURATION = 0.4
  const DELAY = "-=0.3"

  useEffect(() => {
    if (stage.current === 1) {
      gsap
        .timeline({ delay: 2 })
        .fromTo(
          uiux.current,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 0.5, pointerEvents: "all", duration: DURATION },
          DELAY
        )
        .fromTo(
          wd.current,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 0.5, pointerEvents: "all", duration: DURATION },
          DELAY
        )
        .fromTo(
          cd.current,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 0.5, pointerEvents: "all", duration: DURATION },
          DELAY
        )
        .fromTo(
          about.current,
          { opacity: 0, pointerEvents: "none" },
          { opacity: 0.5, pointerEvents: "all", duration: DURATION },
          DELAY
        )
    }
  }, [stage.current])

  const onMouseEnter = (item) => {
    gsap.to(item.current, { opacity: 1, duration: DURATION })
  }

  const onMouseLeave = (item) => {
    gsap.to(item.current, { opacity: 0.5, duration: DURATION })
  }

  const handleNavClick = (target) => {
    stage.setCurrent(2)
    if (nav.current === target) {
      nav.setCurrent(null)
      camera.setPosition(POSITION_FRONT_CENTER)
    } else {
      nav.setCurrent(target)
      camera.setPosition(POSITION_NAV)
    }
  }

  return (
    <div className={styles["container"]}>
      <div
        className={styles["item"]}
        ref={uiux}
        onMouseEnter={() => {
          onMouseEnter(uiux)
        }}
        onMouseLeave={() => {
          onMouseLeave(uiux)
        }}
        onClick={() => {
          handleNavClick("uiux")
        }}
      >
        UI/UX
      </div>
      <div
        className={styles["item"]}
        ref={wd}
        onMouseEnter={() => {
          onMouseEnter(wd)
        }}
        onMouseLeave={() => {
          onMouseLeave(wd)
        }}
        onClick={() => {
          handleNavClick("webdev")
        }}
      >
        WEB DEV
      </div>
      <div
        className={styles["item"]}
        ref={cd}
        onMouseEnter={() => {
          onMouseEnter(cd)
        }}
        onMouseLeave={() => {
          onMouseLeave(cd)
        }}
        onClick={() => {
          handleNavClick("creativecoding")
        }}
      >
        CREATIVE CODING
      </div>
      <div
        className={styles["item"]}
        ref={about}
        onMouseEnter={() => {
          onMouseEnter(about)
        }}
        onMouseLeave={() => {
          onMouseLeave(about)
        }}
        onClick={() => {
          handleNavClick("about")
        }}
      >
        ABOUT
      </div>
    </div>
  )
}

export default Navigation
