import Head from "next/head"
import styles from "../styles/Home.module.css"

import Composition from "../src/scene/Composition"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Composition />
      {/* <div className={styles.title}>WEIJIE FU</div> */}
      <div className={styles["shape-wrapper"]}>
        <span className={styles["shape-1"]}></span>
        <span className={styles["shape-2"]}></span>
        <span className={styles["shape-3"]}></span>
        <span className={styles["shape-4"]}></span>
      </div>
    </div>
  )
}
