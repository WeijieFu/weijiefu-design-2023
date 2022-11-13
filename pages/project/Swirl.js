import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import NextProject from "../../src/components/Project/NextProject"
import External from "../../src/components/Project/External"

const Swirl = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro year={2020} title={"Swirl"} />
      <External
        name="Swirl"
        href="https://musing-leavitt-544406.netlify.app/"
        aspect="16/9"
        interactive={true}
      />

      <NextProject project="Triangle_Tunnel" />
    </div>
  )
}

export default Swirl
