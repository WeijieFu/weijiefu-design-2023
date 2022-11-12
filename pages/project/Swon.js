import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import NextProject from "../../src/components/Project/NextProject"
import External from "../../src/components/Project/External"

import Image01 from "../../public/assets/img/swon/01.png"
import Image02 from "../../public/assets/img/swon/02.png"
import Image03 from "../../public/assets/img/swon/03.png"
import Image04 from "../../public/assets/img/swon/04.png"
import Image05 from "../../public/assets/img/swon/05.png"
import Image06 from "../../public/assets/img/swon/06.png"
import Image07 from "../../public/assets/img/swon/07.png"

const Swon = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro
        year={2020}
        title={"SWON"}
        summary={[
          "SWON is a canadian architecture firm. We designed and developed this website with a touch of WebGL, which added a third dimension to the screen. The landing page is designed to be a audio-visual experience to tell the story of the architect's philosophy on the history and context of the architecture. In the project page, user can interact with a textureless 3d model, demonstrating the primitive form of the architectural space.",
        ]}
        roles={["Creatie Direction", "Web Design", "Web Development"]}
      />
      <External name="SWON" href="https://swon.ca" aspect="16/9" />

      <Picture layout="center" src={Image01} alt="Image01" />
      <Picture layout="center" src={Image02} alt="Image02" />
      <Picture layout="center" src={Image03} alt="Image03" />
      <Picture layout="center" src={Image04} alt="Image04" />
      <Picture layout="center" src={Image05} alt="Image05" />
      <Picture layout="center" src={Image06} alt="Image06" />
      <Picture layout="center" src={Image07} alt="Image07" />

      <NextProject project="Office_Zhu" />
    </div>
  )
}

export default Swon
