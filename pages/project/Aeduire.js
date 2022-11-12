import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import NextProject from "../../src/components/Project/NextProject"
import External from "../../src/components/Project/External"

import Image01 from "../../public/assets/img/aeduire/01.png"
import Image02 from "../../public/assets/img/aeduire/02.png"
import Image03 from "../../public/assets/img/aeduire/03.png"
import Image04 from "../../public/assets/img/aeduire/04.png"

const Aeduire = () => {
  return (
    <div className={styles["container"]} style={{ backgroundColor: "#eee" }}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro
        year={2022}
        title={"Aeduire"}
        summary={[
          "Aeduire is an innovative shopping concept that is placed between experience stores with art installations and online stores that echo each other. The website is a collaboration with graphic designer Lin Tao.",
        ]}
        roles={["Interaction Design", "Web Development", "CMS"]}
      />
      <External name="AEDUIRE" href="https://www.aeduire.com" aspect="16/9" />

      <Picture layout="center" src={Image01} alt="Image01" style={"shadow"} />
      <Picture layout="center" src={Image02} alt="Image02" style={"shadow"} />
      <Picture layout="center" src={Image03} alt="Image03" style={"shadow"} />
      <Picture layout="center" src={Image04} alt="Image04" style={"shadow"} />

      <NextProject project="Swon" />
    </div>
  )
}

export default Aeduire
