import React from "react"
import Head from "next/head"
import styles from "../../styles/Project.module.css"

import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Paragraph from "../../src/components/Project/Paragraph"
import NextProject from "../../src/components/Project/NextProject"
import Showcase from "../../src/components/Project/Showcase"

import HeaderImage from "../../public/assets/img/build_candle/01_headder.png"
import Audit01 from "../../public/assets/img/build_candle/02_crayon_01.png"
import Audit02 from "../../public/assets/img/build_candle/02_crayon_02.png"
import Questionnaire from "../../public/assets/img/build_candle/02_questionnaire.png"
import Teams from "../../public/assets/img/build_candle/02_teams.png"
import AuditStorybook from "../../public/assets/img/build_candle/03_storybook.png"
import AtomicDesign from "../../public/assets/img/build_candle/04_atomic_design.png"
import Hierarchy from "../../public/assets/img/build_candle/04_hierarchy.png"
import Registration from "../../public/assets/img/build_candle/05_registration.png"
import Tokens from "../../public/assets/img/build_candle/06_tokens.png"
import StyleSheet from "../../public/assets/img/build_candle/06_stylesheet.png"
import Component01 from "../../public/assets/img/build_candle/07_component_01.png"
import Overview from "../../public/assets/img/build_candle/08_overview.png"
import Password from "../../src/components/Project/Password"

const Build_Candle = () => {
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
        title={"Build Candle"}
        summary={[
          "Candle is the upgraded version of Loupe's design system 'Crayon'. Due to the nature of a start-up, the design team has to deliver at speed without too much care to the consistency of the visuals. The design system at the time was loosly put together and not well-documented, which has led to a series of UI inconsistency and broken patterns.",
          "Facing the challenge of company up-scale, I helped the team to identify that a robust design system is one of the most import OKR that can lead us to healthy growth and better designer experience. I led the project in February and still act as the main contributor and maintainer of the design system.",
        ]}
        roles={[
          "Project Lead",
          "Design System Stewardess",
          "Interaction Design",
          "Design Ops",
        ]}
      />
      <Picture
        layout="center"
        src={HeaderImage}
        alt="Build Candle Header Image"
      />
      <SectionHeader
        index="01"
        title="Problem Statement"
        text={[
          "1. Components are created before figma variants and auto-layout feature, legacy components are designed in an our-dated way which is hard to use.",
          "2. All components are in one file with unclear organization",
          "3. Components documentation (style guide) are not complete ",
          "4. Components are not 100% synced with code base. Storybook is hard to use and not maintained regularly",
          "5. Component changes are not communicated effectively",
        ]}
      />
      <Paragraph
        title="Goals"
        text={[
          {
            style: "dark",
            content:
              "1. Create a system to organize existing components and allow space for upscaling.",
          },
          {
            style: "dark",
            content:
              "2. create an effective way to sync with code base, use Storybook as a single source of truth.",
          },
          {
            style: "dark",
            content:
              "3. Increase awareness of design system and its benefits between designers and engineers.",
          },
        ]}
      />

      <SectionHeader
        index="02"
        title="Research"
        icons={[
          {
            icon: ["fa-solid", "fa-eye"],
            label: "System Audit",
          },
          {
            icon: ["fa-solid", "fa-clipboard-question"],
            label: "Questionnaire",
          },
        ]}
      />

      <Paragraph
        title="Audit existing components"
        text={[
          {
            style: "dark",
            content:
              "First thing I decided to do is to put together a sheet with all the existing components and their variants, cross check with the application to see if they are still in use or built correctly. Then I organized a review with my fellow designers to evaluate if certain components can be merged, reorganized or updated according to the latest requirements.",
          },
        ]}
      />

      <Picture layout="center" src={Audit01} alt="Audit Existing Components" />
      <Picture layout="center" src={Audit02} alt="Audit Existing Components" />

      <Paragraph
        title="Audit code base and component browser"
        text={[
          {
            style: "dark",
            content:
              "The component browser is an important bridge between designers and engineers. It’s a place for for both parties to make sure that the design is built and reused as it meant to be. Maintaining a component browser can be treated as a high-invest-low-short-term-return task, especially when the primary goal for a start-up company is to release features as fast as possible. But the long-term value of a robust component library is exponential. It’s a foundation to scale up your design and engineering team.",
          },
        ]}
      />
      <Picture layout="center" src={AuditStorybook} alt="Audit Storybook" />

      <Paragraph
        title="Questionnaire and Interviews"
        text={[
          {
            style: "dark",
            content:
              "The component library we have currently plays very limited role in the product delivery process. According to the questionnaire across the product design and scrum teams, the current state of the component library adds very little value during their day-to-day work. Sadly some new hires were not even aware of its existence. Because of the absence of a single source of truth and the opaqueness of coded components to designers, QA often needs to raise design tickets to confirm the details of a component design and both front-end engineers and designers waste time on repetitive discussions.",
          },
        ]}
      />
      <Picture layout="center" src={Questionnaire} alt="Questionnaire" />

      <Paragraph
        title="Prioritize and Get Started"
        text={[
          {
            style: "dark",
            content:
              "Design sysetem is teamwork. We have gathered a group of designers, product managers and engineers to be involved in this project as the Design System core team. We collected the needs from different team and plan and prioritize the tasks.",
          },
        ]}
      />
      <Picture layout="center" src={Teams} alt="Teams Needs" />

      <SectionHeader
        index="03"
        title="From Crayon to Candle"
        text={[
          "There are several principles implemented to make the new design system more organised, easier to use for every team and more maintainable.",
        ]}
      />

      <Paragraph
        title="1. Atomic Design Methodology"
        text={[
          {
            style: "dark",
            content:
              "Atomic Design is one of the most popular design phylosophies to create a system for design components. Considering the complexity of the production code right now, we didn't want to go full on. In the first phase, we will rebuild components on atom, molecule and organism level. In the audit sheet, we assigned every existing components its new hierarchy and deprecated the ones are no longer in use.",
          },
        ]}
      />

      <Picture layout="center" src={AtomicDesign} alt="Atomic Design" />
      <Picture layout="center" src={Hierarchy} alt="Component Hierarchy" />

      <Paragraph
        title="2. Naming Convention & Registration Sheet"
        text={[
          {
            style: "dark",
            content:
              "Consistent naming is the easiest and the hardest thing to do when collaborating across the company. In order to make sure everyone is on the same page on every step we move forward, a centralized registration sheet was made and shared across the teams. In the spreadsheet, every component are named and indexed following an agreed format, and all the versions are tracked.",
          },
        ]}
      />

      <Picture layout="center" src={Registration} alt="Registration Sheet" />

      <Paragraph
        title="3. Tokenization"
        text={[
          {
            style: "dark",
            content:
              "Besides components, we also needed a lower-level elements/values to construct and maintain the design system -- spacing, color, typography, etc. Implementing design tokens has never been easier after Jan Six's Figma Tokens plugin.",
          },
          {
            style: "dark",
            content:
              "Implementing tokens requires the teamwork. To get every team onboard, we took sessions to educate what tokens are, how to use figma tokens and how tokens can help designers better work with engineers. We converted the existing colors and styles into a set of base tokens and we use the alias tokens to capture the design decisions to create a set of semantic tokens.",
          },
        ]}
      />

      <Picture layout="center" src={Tokens} alt="Figma Tokens" />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "In the style guide, we specified where and which tokens are used for every component.",
          },
        ]}
      />
      <Picture layout="center" src={StyleSheet} alt="Style Sheet" />

      <Paragraph
        title="4. Component API"
        text={[
          {
            style: "dark",
            content:
              "We put a lot of thoughts to create our new components. First, we communicated with the FE developer who is designated to build and maintain the component, how to relect the APIs in the AngularJS components in the design system as well. In this way, we are able keep a consistent component design from the start to end.",
          },
        ]}
      />
      <Picture layout="center" src={Component01} alt="Component API" />

      <Paragraph
        title="5. Monthly Update Newletter"
        text={[
          {
            style: "dark",
            content:
              "We update the latest changes to the design system in monthly sync meeting across the scrum teams and publish newsletters to the entire company.",
          },
          {
            style: "dark",
            content:
              "By the time of creating this case study, we have 44 components documented and number is growing.",
          },
        ]}
      />
      <Picture layout="center" src={Overview} alt="Overview" />
      <SectionHeader
        index="04"
        title="Impact"
        text={[
          "1. Easier onboarding new designers and new front-end engineers.",
          "2. Easier communication between designers, front-end engineers and PMs.",
          "3. Reduce Design to Development Time (Handoff)",
          "4. Increase Average Task Completion Time.",
          "Positive NPS across the borad :)",
        ]}
      />

      <NextProject project="Namet" />
    </div>
  )
}

export default Build_Candle
