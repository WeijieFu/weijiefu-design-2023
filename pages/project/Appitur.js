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

import HeaderImage from "../../public/assets/img/appitur/01_header.png"
import LeanCycle from "../../public/assets/img/appitur/02_lean_cycle.jpg"
import InterviewKeyFinding from "../../public/assets/img/appitur/03_interview_key_finding.png"
import Stakeholder from "../../public/assets/img/appitur/04_stakeholder.png"
import UserTesting from "../../public/assets/img/appitur/05_user_testingx.png"
import UserFlowOld from "../../public/assets/img/appitur/07_user_flow_old.svg"
import UserFlowNew from "../../public/assets/img/appitur/08_user_flow_new.svg"
import Wireframe from "../../public/assets/img/appitur/09_wireframex.png"
import DesignSystem from "../../public/assets/img/appitur/10_design_systemx.png"

const Appitur = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro
        year={2020}
        title={"Appitur"}
        summary={[
          "Appitur is a white-label mobile education and assessment platform, allows other premier educators to connect consumers with their learning resources and create insights for both learners and trainers. We helped Appitur rethink the users' needs to increase user engagement and conversion, eventually to increase profitability.",
        ]}
        roles={[
          "User Research",
          "User Interview",
          "Journey Mapping",
          "Wireframing",
          "Visual Design",
          "Interaction Design",
        ]}
      />
      <Picture layout="center" src={HeaderImage} alt="Appitur Header Image" />
      <SectionHeader index="01" title="Problem Space" />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "Appitur's three mobile apps are losing users and generating less revenue, due to a myriad of reasons:",
          },
          {
            style: "light",
            content:
              "1. Confusing navigation : Navigating in the app is very confusing and important call to action buttons are often missing or ignored by the users.",
          },
          {
            style: "light",
            content:
              "2. User flow mismatching user needs : The existing app didn't take special needs from the target customers into consideration, therefore the function is less tailored or hard to use.",
          },
          {
            style: "light",
            content:
              "3. Outdated UI : The existing app needs a visual upgrade to create professional and trustworthy impression.",
          },
          {
            style: "light",
            content:
              "4. Lack of engagement : Besides plain study and exam materials, the existing app doesn't offer much positive feedback to comply with user's learning curve.",
          },
        ]}
      />
      <SectionHeader
        index="02"
        title="Lean Cycle"
        text={[
          "By working closely with the shareholders and developer team, we implemented a Lean Cycle developing schedule, where the process is iterative and measurable.",
        ]}
      />
      <Picture layout="full-width" src={LeanCycle} alt="Lean Cycle" />
      <Paragraph
        title="Initial Usability Research Phase"
        text={[
          {
            style: "dark",
            content:
              "Identify pain points and critical user needs. Understand the base APIs from the engineer.  Save nice-to-have features for further development.",
          },
        ]}
      />
      <Paragraph
        title="Project Foundation Phase"
        text={[
          {
            style: "dark",
            content:
              "Implement findings from critical pain points, redesign and develop basic user interface for the initial launch.",
          },
        ]}
      />
      <Paragraph
        title="Iteration Phase"
        text={[
          {
            style: "dark",
            content:
              "Getting feedbacks and make improvements on top of the initial design, develop and launch new features.",
          },
        ]}
      />
      <SectionHeader
        index="03"
        title="Research"
        icons={[
          {
            icon: ["fa-solid", "fa-clipboard-question"],
            label: "Semi-structured Interview",
          },
          {
            icon: ["fa-solid", "fa-user-tie"],
            label: "Stakeholder Interview",
          },
          {
            icon: ["fa-solid", "fa-microscope"],
            label: "Usability Testing",
          },
          {
            icon: ["fa-solid", "fa-mobile-screen"],
            label: "Case Study",
          },
        ]}
      />
      <Paragraph
        title="Semi-structured Interview"
        text={[
          {
            style: "dark",
            content:
              "In oder to get a clear picture of how our primary users are studying for the exams, we started with a round of semi-structured interviews with the target users to understand their's motivation and expectation about online education and assessment services.",
          },
        ]}
      />
      <Picture
        layout="center"
        src={InterviewKeyFinding}
        alt="Interview Findings"
      />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "Since the existing Appitur apps are for people who are doing professional certification exams (CIA, CMA, etc) and Appitur's clients are established training and education institutions in the field, our target users are professionals in their 20s or 30s looking for career breakthroughs. We gathered a group of 5 to ask how they prepare for professional exams both online and offline, the differences and the frustrations they've encountered.",
          },
        ]}
      />
      <Paragraph
        text={[
          {
            style: "dark",
            content: "Key Findings:",
          },
        ]}
      />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "How do people study for professional certification exams?",
          },
          {
            style: "light",
            content: "- Official study guide book from exam institutes",
          },
          {
            style: "light",
            content: "- Third party IRL classes",
          },
          {
            style: "light",
            content: "- Third party study guide book",
          },
          {
            style: "light",
            content: "- Mock exams and Tests from third party",
          },
          {
            style: "light",
            content:
              "- Flashcards either made by themselves or from third party",
          },
        ]}
      />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "Behavioural pattern found among target users. Key quotes :",
          },
          {
            style: "light",
            content: "- can't study much on weekdays while I am working",
          },
          {
            style: "light",
            content: "- 100 hours of study is my goal",
          },
          {
            style: "light",
            content:
              "- I like to mark questions I got wrong for further review",
          },
          {
            style: "light",
            content: "- I prefer 20 questions at a time",
          },
          {
            style: "light",
            content: "- time management is crucial to exam prep",
          },
          {
            style: "light",
            content: "- put my phone away when I study on my computer",
          },
        ]}
      />
      <Paragraph
        title="Stakeholder Interview"
        text={[
          {
            style: "dark",
            content:
              "To understand the business goal for this app, we talked to Kevin, who is the content provider of Hock CIA and CMA apps, and Tom, the founder of Appitur E-learning Platform. Due to Covid-19 regulation, all interviews were conducted online.",
          },
        ]}
      />
      <Picture layout="center" src={Stakeholder} alt="Stakeholder Interview" />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "From our talk with Kevin, we came to understand the interest of Appitur's clients. Kevin, who already has a brand Hock International, would like the app to be an addition to the whole family package (books, videos and test questions) he is offering to his students. In the long term, he hopes the Appitur app could somehow inherit their brand identity. He also shared with us some concerns his students have:",
          },
          {
            style: "light",
            content:
              "- Provide more explanations (already in database) on all four choices, both right answers and wrong answers.",
          },
          {
            style: "light",
            content: "- Add flashcards.",
          },
          {
            style: "light",
            content:
              "- For performance session, it would be helpful if they can be broken down topic by topic.",
          },
          {
            style: "light",
            content: "- Sign-up and Log-in is confusing on app.",
          },
        ]}
      />
      <Paragraph
        title="Usability Testing"
        text={[
          {
            style: "dark",
            content:
              "We conducted usability tests with five participants to test the existing product, understand user behaviour and define success for both the users and the stakeholders.",
          },
        ]}
      />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "The test session is designed to gather general information from the participants and test usability of Appitur apps. In this case, we are testing the HOCK CIA (Certified Internal Auditor) app since all four apps are quite similar.",
          },
        ]}
      />
      <Picture layout="center" src={UserTesting} alt="Stakeholder Interview" />
      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "Due to covid-19 regulation, the usability tests are conducted via online meeting with interactive web prototypes. The participants could interact with the prototype as they interact with a regular app.",
          },
        ]}
      />
      <Carousel
        folder="/assets/img/appitur/06_user_testing_report"
        name="UTR - #.png"
        length={30}
      />
      <SectionHeader
        index="04"
        title="Ideation"
        icons={[
          {
            icon: ["fa-solid", "fa-timeline"],
            label: "User Flow",
          },
          {
            icon: ["fa-solid", "fa-mobile-retro"],
            label: "Wireframe",
          },
        ]}
      />
      <Paragraph
        title={"User Flow"}
        text={[
          {
            style: "dark",
            content:
              "How might we improve the current user flow that reduce user's frustration, and also build a system which is able to incoporate more features through development cycles without spending a lot of efforts on changing what is already done. A minimal, lean and flexible model is required to create this new user flow.",
          },
        ]}
      />
      <Paragraph
        text={[
          {
            style: "dark",
            content: "Existing User Flow",
          },
        ]}
      />
      <Picture layout="full-width" src={UserFlowOld} alt="Existing User Flow" />
      <Paragraph
        text={[
          {
            style: "dark",
            content: "New User Flow",
          },
        ]}
      />
      <Picture layout="full-width" src={UserFlowNew} alt="New User Flow" />
      <Paragraph title={"Wireframe"} />
      <Picture layout="full-width" src={Wireframe} alt="Wireframe" />
      <SectionHeader
        index="05"
        title="Ideation to Action"
        icons={[
          {
            icon: ["fa-solid", "fa-folder-tree"],
            label: "Design System",
          },
          {
            icon: ["fa-solid", "fa-mobile"],
            label: "Prototype",
          },
        ]}
      />
      <Paragraph
        title={"Design System"}
        text={[
          {
            style: "dark",
            content:
              "I started by building a comprehensive components library within Figma that would later reflect in various parts of the app, i.e., colors, typography, setting the grid etc. This included icons, buttons, form elements, error and empty states, show choices cards and content cards. For achieving vertical rhythm, text aligns to a 4px baseline grid and elements align to a 8px baseline grid.",
          },
        ]}
      />
      <Picture layout="full-width" src={DesignSystem} alt="Wireframe" />
      <Paragraph title={"Prototype"} />
      <Showcase
        title={{ style: "dark", content: "Onboarding" }}
        theme={"#eee"}
        text={[
          {
            style: "dark",
            content:
              "First-time user will be shown the onboarding tutorial. The tutorial helps them to understand the main feature of the app and ease them in the study pace. No login is needed when they just want to 'have a look of the app' and are not sure if they will pay money for more content. We are not scaring the users away with all the sign up forms, so that we can have lower bounce rate and more conversion later on in the long run.",
          },
        ]}
        layout={"left"}
        video={"/assets/img/appitur/11_onboardingx.mp4"}
      />
      <Showcase
        title={{ style: "dark", content: "Study Session" }}
        theme={"#eee"}
        text={[
          {
            style: "dark",
            content:
              "From the user interview and testing, we concluded that progress tracking is an essential function for the users, because it helps them to see the bigger picture of where they are at and helps manage their time. The progess bars are added to the overall progress and also for each section, subsection, so that the users can always be in control of the pace of study. Another important feature is to show the feedbacks for the wrong answers. Compared to the old version, user can have thorough understanding of the knowledge point from looking at both sides of the questions.",
          },
        ]}
        layout={"right"}
        video={"/assets/img/appitur/12_studyx.mp4"}
      />

      <Showcase
        title={{ style: "dark", content: "Exam Session" }}
        theme={"#eee"}
        text={[
          {
            style: "dark",
            content:
              "User can use the exam session to test their knowledge and track performance. The user is given the flexibility to choose how long the exam session can be, in order to fit the excercise into their schedule. The performance tracking provides the overview of a selected time range, so that they always have the learning progress at heart.",
          },
        ]}
        layout={"left"}
        video={"/assets/img/appitur/13_exam.mp4"}
      />

      <NextProject project="Foodviction" />
    </div>
  )
}

export default Appitur
