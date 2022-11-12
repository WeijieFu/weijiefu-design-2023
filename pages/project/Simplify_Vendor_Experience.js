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

const Simplify_Vendor_Experience = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro
        year={2022}
        title={"Simplify Vendor Experience"}
        summary={[
          "Ocean Blue Project.inc is a grassroots environmental non profit. Their mission is to protect and conserve the world's ocean, beaches, and rivers, through education and awareness, by providing service learning projects, enhancing wildlife habitat, cleaning beaches and rivers, and by reducing pollution. This is an unsolicited project on Catchafire.org. The goal is to design a mobile app to improve how it delivers services and information to their beneficiaries, connects with supporters, or promotes events and programs.",
        ]}
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
