import React, { useState, useRef } from "react"
import gsap from "gsap"
import styles from "../../../styles/components/Project/Password.module.css"
const Password = () => {
  const container = useRef()
  const input = useRef()
  const [password, setPassword] = useState("password")
  const handleVerify = () => {
    if (password === "lessismore") {
      gsap.to(container.current, {
        opacity: 0,
        duration: 0.2,
        height: 0,
        onComplete: () => {
          container.current.style.display = "none"
        },
      })
    } else {
      input.current.value = ""
    }
  }
  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className={styles["container"]} ref={container}>
      <div className={styles["wrapper"]}>
        <input
          type="text"
          className={styles["input"]}
          onChange={handleChange}
          ref={input}
        />
        <div
          className={styles["button"]}
          onClick={handleVerify}
          value={password}
        >
          <span>ENTER</span>
        </div>
      </div>
    </div>
  )
}

export default Password
