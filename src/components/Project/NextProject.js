import React from "react"
import styles from "../../../styles/components/Project/NextProject.module.css"

import { useRouter } from "next/router"
const NextProject = ({ project }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/project/${project}`)
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["label"]}>next project</div>
      <div className={styles["title"]} onClick={handleClick}>
        {project.split("_").join(" ")}
      </div>
    </div>
  )
}

export default NextProject
