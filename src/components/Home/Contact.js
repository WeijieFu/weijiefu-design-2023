import React, { useEffect, useState, useRef } from "react"
import styles from "../../../styles/components/Home/Contact.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import gsap from "gsap"

const Contact = () => {
  const LINK = {
    linkedin: "https://www.linkedin.com/in/weijie-fu-a16868a4/",
    instagram: "https://www.instagram.com/weijiefu_92/",
    dribbble: "https://dribbble.com/WeijieFu",
    twitter: "https://twitter.com/Weijie__Fu",
    github: "https://github.com/WeijieFu",
  }
  const [isLogoShown, setIsLogoShown] = useState(false)
  const linkedin = useRef()
  const dribbble = useRef()
  const instagram = useRef()
  const twitter = useRef()
  const github = useRef()
  const handleLogoToggle = () => {
    setIsLogoShown(!isLogoShown)
  }
  const DURATION = 0.2
  const DELAY = "-=0.1"
  const timeline = gsap
    .timeline({ paused: true })
    .fromTo(
      linkedin.current,
      { y: "0.5rem", opacity: 0, pointerEvents: "none" },
      { y: 0, opacity: 0.5, pointerEvents: "all", duration: DURATION },
      DELAY
    )
    .fromTo(
      instagram.current,
      { y: "0.5rem", opacity: 0, pointerEvents: "none" },
      { y: 0, opacity: 0.5, pointerEvents: "all", duration: DURATION },
      DELAY
    )
    .fromTo(
      dribbble.current,
      { y: "0.5rem", opacity: 0, pointerEvents: "none" },
      { y: 0, opacity: 0.5, pointerEvents: "all", duration: DURATION },
      DELAY
    )
    .fromTo(
      twitter.current,
      { y: "0.5rem", opacity: 0, pointerEvents: "none" },
      { y: 0, opacity: 0.5, pointerEvents: "all", duration: DURATION },
      DELAY
    )
    .fromTo(
      github.current,
      { y: "0.5rem", opacity: 0, pointerEvents: "none" },
      { y: 0, opacity: 0.5, pointerEvents: "all", duration: DURATION },
      DELAY
    )

  useEffect(() => {
    if (isLogoShown) {
      timeline.play()
    }
    if (!isLogoShown) {
      timeline.reverse()
    }
  }, [isLogoShown])
  const onMouseEnter = (item) => {
    gsap.to(item.current, { opacity: 1, duration: DURATION })
  }

  const onMouseLeave = (item) => {
    gsap.to(item.current, { opacity: 0.5, duration: DURATION })
  }

  const handleClick = (link) => {
    window.open(link, "_blank")
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["square"]} onClick={handleLogoToggle}>
        <div className={styles["square-outer"]}></div>
        <div className={styles["square-inner"]}></div>
      </div>
      <div
        className={styles["item"]}
        ref={linkedin}
        onMouseEnter={() => {
          onMouseEnter(linkedin)
        }}
        onMouseLeave={() => {
          onMouseLeave(linkedin)
        }}
        onClick={() => {
          handleClick(LINK.linkedin)
        }}
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </div>
      <div
        className={styles["item"]}
        ref={instagram}
        onMouseEnter={() => {
          onMouseEnter(instagram)
        }}
        onMouseLeave={() => {
          onMouseLeave(instagram)
        }}
        onClick={() => {
          handleClick(LINK.instagram)
        }}
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </div>
      <div
        className={styles["item"]}
        ref={dribbble}
        onMouseEnter={() => {
          onMouseEnter(dribbble)
        }}
        onMouseLeave={() => {
          onMouseLeave(dribbble)
        }}
        onClick={() => {
          handleClick(LINK.dribbble)
        }}
      >
        <FontAwesomeIcon icon={["fab", "dribbble"]} />
      </div>
      <div
        className={styles["item"]}
        ref={twitter}
        onMouseEnter={() => {
          onMouseEnter(twitter)
        }}
        onMouseLeave={() => {
          onMouseLeave(twitter)
        }}
        onClick={() => {
          handleClick(LINK.twitter)
        }}
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </div>
      <div
        className={styles["item"]}
        ref={github}
        onMouseEnter={() => {
          onMouseEnter(github)
        }}
        onMouseLeave={() => {
          onMouseLeave(github)
        }}
        onClick={() => {
          handleClick(LINK.github)
        }}
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </div>
    </div>
  )
}

export default Contact
