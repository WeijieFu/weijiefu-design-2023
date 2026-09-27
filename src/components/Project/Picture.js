import React from "react"
import Image from "next/legacy/image"
import styles from "../../../styles/components/Project/Picture.module.css"
const Picture = ({ style, layout, src, alt, images }) => {
  if (layout === "row") {
    return (
      <div className={`${styles.container} ${styles.row}`} style={{ "--image-columns": images.length, ...style }}>
        {images.map((image, index) => (
          <figure className={styles.item} key={index}>
            {image.src.src.includes(".svg") ? (
              <img src={image.src.src} alt={image.alt} className={styles.image} />
            ) : (
              <Image src={image.src} alt={image.alt} layout="responsive" unoptimized={image.src.unoptimized} />
            )}
            {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    )
  }
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
          : layout === "three-quarter"
          ? { paddingLeft: "12.5vw", paddingRight: "12.5vw" }
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
