import React from "react"
import Image from "next/image"
import styles from "../../../styles/components/Project/Picture.module.css"
const Picture = ({ style, layout, src, alt }) => {
  return (
    <div
      className={`${styles["container"]}`}
      style={
        layout === "center"
          ? {}
          : layout === "full-width"
          ? { paddingLeft: 0, paddingRight: 0 }
          : layout === "half-center"
          ? { paddingLeft: "30vw", paddingRight: "30vw" }
          : {}
      }
    >
      {src.src.includes(".svg") ? (
        <img src={src.src} alt={alt} className={styles["image"]} />
      ) : (
        <Image src={src} alt={alt} />
      )}
    </div>
  )
}

export default Picture
