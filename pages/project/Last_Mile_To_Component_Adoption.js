import React from "react"
import Head from "next/head"
import styles from "../../styles/Project.module.css"

import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Paragraph from "../../src/components/Project/Paragraph"
import Carousel from "../../src/components/Project/Carousel"
import NextProject from "../../src/components/Project/NextProject"
import Showcase from "../../src/components/Project/Showcase"

import Pre1 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-1.webp"
import Pre2 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-2.webp"
import Pre3 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-3.webp"
import Pre4 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-4.webp"
import Pre5 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-5.webp"
import Pre6 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-6.webp"
import Pre7 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-7.webp"
import Pre8 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-8.webp"
import Pre9 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-9.webp"
import Pre10 from "../../public/assets/img/last_mile/[Config] 2025 Submission - Design Crafts-images-10.webp"

const Last_Mile_To_Component_Adoption = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro
        year={2024}
        title={"Last Mile To Component Adoption"}
        summary={["Use private plugin to scaffold complex component."]}
        roles={["Design System Designer", "Figma Plugin Developer"]}
      />
      <Picture layout="center" src={Pre1} alt="Problem Statement" />
      <Picture layout="center" src={Pre2} alt="Problem Statement" />
      <Picture layout="center" src={Pre3} alt="Problem Statement" />
      <Picture layout="center" src={Pre4} alt="Problem Statement" />
      <Picture layout="center" src={Pre5} alt="Problem Statement" />
      <Picture layout="center" src={Pre6} alt="Problem Statement" />
      <Picture layout="center" src={Pre7} alt="Problem Statement" />
      <Picture layout="center" src={Pre8} alt="Problem Statement" />
      <Picture layout="center" src={Pre9} alt="Problem Statement" />
      <Picture layout="center" src={Pre10} alt="Problem Statement" />

      <NextProject project="Transform_Deel_UI" />
    </div>
  )
}

export default Last_Mile_To_Component_Adoption
