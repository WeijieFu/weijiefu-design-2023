import React, { useRef, useEffect } from "react"
import styles from "../../../styles/components/Home/Border.module.css"
import gsap from "gsap"

import useCameraStore from "../../../state/camera"
import { POSITION_FRONT_CENTER } from "../../../constants/position"
const Border = () => {
  const cameraState = useCameraStore()
  const tlh = useRef()
  const tlv = useRef()
  const trh = useRef()
  const trv = useRef()
  const blh = useRef()
  const blv = useRef()
  const brh = useRef()
  const brv = useRef()
  const DURATION = 1.5
  const LENGTH = 50
  useEffect(() => {
    gsap.fromTo(
      tlh.current,
      {
        x: "25vw",
        duration: DURATION,
      },
      {
        x: 0,
        backgroundColor: "#fff",
      }
    )
    gsap.fromTo(
      tlv.current,
      {
        y: "25vh",
        duration: DURATION,
      },
      {
        y: "0",
        backgroundColor: "#fff",
      }
    )
    gsap.fromTo(
      trh.current,
      {
        x: "-25vw",
        duration: DURATION,
      },
      { x: 0, backgroundColor: "#fff" }
    )
    gsap.fromTo(
      trv.current,
      {
        y: "25vh",
        duration: DURATION,
      },
      { y: 0, backgroundColor: "#fff" }
    )
    gsap.fromTo(
      blh.current,
      {
        x: "25vw",

        duration: DURATION,
      },
      { x: 0, backgroundColor: "#fff" }
    )
    gsap.fromTo(
      blv.current,
      {
        y: "-25vh",
        duration: DURATION,
      },
      { y: 0, backgroundColor: "#fff" }
    )
    gsap.fromTo(
      brh.current,
      {
        x: "-25vw",
        duration: DURATION,
      },
      { x: 0, backgroundColor: "#fff" }
    )
    gsap.fromTo(
      brv.current,
      {
        y: "25vh",
        duration: DURATION,
      },
      {
        y: 0,
        backgroundColor: "#fff",
      }
    )
  }, [])
  useEffect(() => {
    if (cameraState.position === POSITION_FRONT_CENTER) {
      gsap.to(tlh.current, { x: "0", width: LENGTH, duration: DURATION * 0.5 })
      gsap.to(tlv.current, { y: "0", height: LENGTH, duration: DURATION * 0.5 })
      gsap.to(trh.current, { x: "0", width: LENGTH, duration: DURATION * 0.5 })
      gsap.to(trv.current, { y: "0", height: LENGTH, duration: DURATION * 0.5 })
      gsap.to(blh.current, { x: "0", width: LENGTH, duration: DURATION * 0.5 })
      gsap.to(blv.current, { y: "0", height: LENGTH, duration: DURATION * 0.5 })
      gsap.to(brh.current, { x: "0", width: LENGTH, duration: DURATION * 0.5 })
      gsap.to(brv.current, { y: "0", height: LENGTH, duration: DURATION * 0.5 })
    }
  }, [cameraState.position])

  return (
    <div className={styles["container"]}>
      <div className={styles[`top-left-horizontal`]} ref={tlh}></div>
      <div className={styles[`top-left-vertical`]} ref={tlv}></div>
      <div className={styles[`top-right-horizontal`]} ref={trh}></div>
      <div className={styles[`top-right-vertical`]} ref={trv}></div>
      <div className={styles[`bottom-left-horizontal`]} ref={blh}></div>
      <div className={styles[`bottom-left-vertical`]} ref={blv}></div>
      <div className={styles[`bottom-right-horizontal`]} ref={brh}></div>
      <div className={styles[`bottom-right-vertical`]} ref={brv}></div>
    </div>
  )
}

export default Border
