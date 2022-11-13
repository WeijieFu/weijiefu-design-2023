import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import NextProject from "../../src/components/Project/NextProject"
import External from "../../src/components/Project/External"

const HotSummer = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro year={2020} title={"Hot Summer"} />
      <External
        name="Hot Summer"
        href="https://brave-perlman-c64a71.netlify.app/"
        aspect="16/9"
        interactive={true}
      />

      <NextProject project="Movie_Night" />
    </div>
  )
}

export default HotSummer
