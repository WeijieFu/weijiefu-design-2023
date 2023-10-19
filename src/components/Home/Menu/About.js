import React from "react"
import styles from "../../../../styles/components/Menu/About.module.css"

const About = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1yUZLgC_qsqInaOtl8vfnMOzqEij6mZIl/view?usp=share_link",
      "_ blank"
    )
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["section"]}>
        <div className={styles["title"]}>About Me</div>
        <p className={styles["p"]}>
          I&apos;m an experience designer, professionally trained as an
          architect and tinkering with code on my own.
        </p>
        <p className={styles["p"]}>
          My background as an architect has taught me the importance of empathy
          and sensitivity for the environment in which users are immersed.
          During my work and study, I have gained experience in researching and
          designing on different scales: from an urban study on how to transform
          existing infrastructure to enhance cyclists’ experience in Shanghai,
          to user research about improving work efficiency by reinventing office
          landscapes.
        </p>
        <p className={styles["p"]}>
          As a product designer and self-taught web developer, I have designed
          and redesigned portals from the ground up. I know how to build with
          HTML, CSS, and JavaScript with a fresh perspective to maximize the
          user-centered experience. I am also enthusiastic about integrating
          VR/AR technology and architectural knowledge to push boundaries in the
          physical world.
        </p>
      </div>
      <div className={styles["section"]}>
        <div className={styles["button"]} onClick={handleDownload}>
          Download Resume
        </div>
      </div>
      <div className={styles["section"]}>
        <div className={styles["title"]}>Expertise</div>
        <p className={styles["p"]}>
          Design Research <br />
          Concept Development <br />
          Visual Design
          <br />
          Interaction Design
          <br />
          Wireframing and Prototyping <br />
          Speed Mockup Developing <br />
          3D Concept and Visualization <br />
          Cross-Reality Spacial Experience <br />
          Cross-Cultural Experience <br />
          Smart Home and City
        </p>
      </div>

      <div className={styles["section"]}>
        <div className={styles["title"]}>Language</div>
        <p className={styles["p"]}>
          Mandarin <br />
          English <br />
          German
          <br />
          Portuguese
        </p>
      </div>
    </div>
  )
}

export default About
