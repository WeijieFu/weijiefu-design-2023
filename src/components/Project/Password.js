import React, { useState, useRef } from "react"
import gsap from "gsap"
import styles from "../../../styles/components/Project/Password.module.css"
const Password = ({ endpoint }) => {
  const container = useRef()
  const input = useRef()
  const [password, setPassword] = useState("password")
  const handleVerify = async () => {
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        })
        if (response.ok) window.location.reload()
        else { input.current.value = ""; setPassword(""); setError("Incorrect password. Please try again.") }
      } catch {
        setError("Unable to connect. Please try again.")
      }
      return
    }
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
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleVerify()
    }
  }
  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  const [error, setError] = useState("")
  return (
    <div className={styles["container"]} ref={container}>
      <div className={styles["panel"]}>
      <h1>Protected case study</h1>
      <p className={styles["description"]}>Enter the project password to read this case study.</p>
      <div className={styles["wrapper"]}>
        <input
          type="password"
          aria-label="Project password"
          className={styles["input"]}
          onChange={handleChange}
          onKeyDown={handleEnter}
          ref={input}
        />
        <div
          className={styles["button"]}
          onClick={handleVerify}
          value={password}
        >
          <span>ENTER</span>
        </div>
        {error && <p role="alert">{error}</p>}
      </div>
      </div>
    </div>
  )
}

export default Password
