import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import NextProject from "../../src/components/Project/NextProject"
import External from "../../src/components/Project/External"

import Image01 from "../../public/assets/img/ozhu/01.png"
import Image02 from "../../public/assets/img/ozhu/02.png"
import Image03 from "../../public/assets/img/ozhu/03.png"
import Image04 from "../../public/assets/img/ozhu/04.png"
import Image05 from "../../public/assets/img/ozhu/05.png"
import Image06 from "../../public/assets/img/ozhu/06.png"

const Office_Zhu = () => {
  return (
    <div className={styles["container"]} style={{ backgroundColor: "#eee" }}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro
        year={2022}
        title={"Office Zhu"}
        summary={[
          "Office ZHU is a Chinese-Dutchcompany founded in 2015 in Rotterdam & Shanghai. The official website project is a collaborartion with graphic designer Lin Tao. In the design, we used 'grid' as the main visual concept and displayed projects with interactive 3d models.",
        ]}
        roles={["Interaction Design", "Web Development", "WebGL"]}
      />
      <External name="O-ZHU" href="https://www.o-zhu.com" aspect="11/8" />

      <Picture layout="center" src={Image01} alt="Image01" style={"shadow"} />
      <Picture layout="center" src={Image02} alt="Image02" style={"shadow"} />
      <Picture layout="center" src={Image03} alt="Image03" style={"shadow"} />
      <Picture layout="center" src={Image04} alt="Image04" style={"shadow"} />
      <Picture layout="center" src={Image05} alt="Image05" style={"shadow"} />
      <Picture layout="center" src={Image06} alt="Image06" style={"shadow"} />

      <NextProject project="Aeduire" />
    </div>
  )
}

export default Office_Zhu
