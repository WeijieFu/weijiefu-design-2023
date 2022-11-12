import React, { useEffect, useRef } from "react"
import styles from "../../../styles/components/Home/Intro.module.css"
import { POSITION_FRONT_CENTER } from "../../../constants/position"
import useCameraStore from "../../../state/camera"
import useStageStore from "../../../state/stage"
import gsap from "gsap"
import Border from "./Border"
const Intro = () => {
  const cameraState = useCameraStore()
  const stage = useStageStore()

  const container = useRef()
  const title = useRef()
  const subTitle = useRef()
  const button = useRef()
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        title.current,
        { y: "-1rem", opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        subTitle.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.5 },
        0.5
      )
      .fromTo(
        button.current,
        { x: "-1rem", opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      .to(
        container.current,
        { backgroundColor: `rgba(20, 0, 99, 0.353)` },
        "-=0.25"
      )
  }, [])
  useEffect(() => {
    if (stage.current === 1) {
      gsap.timeline().to(container.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          container.current.style.display = "none"
        },
      })
    }
  }, [stage.current])

  const handleEnterClick = () => {
    stage.setCurrent(1)
    cameraState.setPosition(POSITION_FRONT_CENTER)
  }
  const hoverAnimation = gsap
    .timeline()
    .fromTo(
      button.current,
      { x: 0 },
      { x: "0.5rem", duration: 0.2, ease: "none" }
    )

  const handleMouseEnter = () => {
    hoverAnimation.play()
  }
  const handleMouseLeave = () => {
    hoverAnimation.reverse()
  }
  return (
    <div className={styles["container"]} ref={container}>
      <Border />
      <div className={styles["title"]} ref={title}>
        Hi, I'm Weijie Fu
      </div>
      <div className={styles["sub-title"]} ref={subTitle}>
        Experience designer, architect, and web developer. Currently building
        world-class supply chain management tools for the jewellery industry{" "}
        <a className={styles["link"]} href="https://loupe.work" target="_blank">
          @Loupe
        </a>
        .{" "}
      </div>
      <div
        className={styles[`button`]}
        onClick={handleEnterClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={button}
      >
        ENTER&rarr;
      </div>
    </div>
  )
}

export default Intro
