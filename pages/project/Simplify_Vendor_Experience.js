import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Paragraph from "../../src/components/Project/Paragraph"
import NextProject from "../../src/components/Project/NextProject"
import Showcase from "../../src/components/Project/Showcase"

import HeaderImage from "../../public/assets/img/ocean_blue_project/05 banner.jpg"
import Password from "../../src/components/Project/Password"

const Simplify_Vendor_Experience = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Password />
      <Intro
        year={2022}
        title={"Simplify Vendor Experience"}
        summary={["Not Ready Yet."]}
        roles={[
          "User Research",
          "Journey Mapping",
          "Wireframing",
          "Visual Design",
          "Interaction Design",
        ]}
      />

      <NextProject project="Build_Candle" />
    </div>
  )
}

export default Simplify_Vendor_Experience
