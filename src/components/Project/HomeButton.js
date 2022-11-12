import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../../styles/components/Project/HomeButton.module.css"
import { useRouter } from "next/router"
const HomeButton = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/")
  }
  return (
    <div className={styles["container"]} onClick={handleClick}>
      <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
    </div>
  )
}

export default HomeButton
