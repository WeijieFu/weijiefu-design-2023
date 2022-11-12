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
import Problem from "../../public/assets/img/ocean_blue_project/01 problem.svg"
import InformationArchitecture from "../../public/assets/img/ocean_blue_project/02 information_architecture.svg"
import Wireframe from "../../public/assets/img/ocean_blue_project/03 wireframe.svg"

const Ocean_Blue_Project = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro
        year={2019}
        title={"Ocean Blue Project"}
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

      <Picture
        layout="center"
        src={HeaderImage}
        alt="Ocean Blue Project Header Image"
      />

      <SectionHeader
        index="01"
        title="Problem Space"
        text={[
          "Ocean Blue Porject was founded in 2012 in Newport, Oregon. The members and volunteers clean up beaches and river banks while restoring by planting native vegetation. Since then, Ocean Blue Project has removed 173,302 pounds of debris from beaches and waterways. Most noteworthy, 82,582 pounds was removed in 2019 alone. 5,800 students and volunteers are involved each year. The growing community needs a online portal for educaton, communication, events organization and dataset documentation.",
        ]}
      />

      <Picture layout="center" src={Problem} alt="Problem" />

      <SectionHeader
        index="02"
        title="Research"
        icons={[
          {
            icon: ["fa-solid", "fa-layer-group"],
            label: "Info Architecture",
          },
          {
            icon: ["fa-solid", "fa-timeline"],
            label: "User Flow",
          },
        ]}
      />
      <Paragraph
        title="Information Architecture"
        text={[
          {
            style: "dark",
            content:
              "The main framework of this application contains 5 parts, which will share an intersection module with each other, namely the CleanUp session. A CleanUp session can be shared in the social feeds, and the status of a current CleanUp can be managed in the message and profile section. The structure of the app enables a fluent flow for user to share, join, organize CleanUps.",
          },
        ]}
      />

      <Picture
        layout="center"
        src={InformationArchitecture}
        alt="Information Architecture"
      />

      <SectionHeader index="03" title="Wireframe" />

      <Picture layout="full-width" src={Wireframe} alt="Wireframe" />

      <SectionHeader index="04" title="Prototype" />

      <Showcase
        title={{
          style: "light",
          content: "Navigate using five tabs",
        }}
        theme={"#3ccaff"}
        text={[
          {
            style: "light",
            content:
              "User can navigate through 5 seperate tabs. Daily tab gives user information about daily updates of the current marine pollution situation and featured articles. Social tab let user interact with others and share stories as well as recent cleanups. Map tab is the main portal to CleanUp sessions. Message tab shows the status of CleanUps and coversations among individules or groups. Profile tab stores all the information about the user, such as upcoming events, previous posts and app settings.",
          },
        ]}
        layout={"right"}
        video={"/assets/img/ocean_blue_project/01 tabs.mp4"}
      />

      <Showcase
        title={{
          style: "light",
          content: "Browse CleanUp in the map",
        }}
        theme={"#3ccaff"}
        text={[
          {
            style: "light",
            content:
              "Map is the main place where user can find CleanUps near their location. CleanUps are divided into 3 types: to be started, to be approved, recruiting. User can also report a beach by uploading photos, and the beach will be shown on the map as to be started.",
          },
        ]}
        layout={"left"}
        video={"/assets/img/ocean_blue_project/02 map.mp4"}
      />

      <Showcase
        title={{
          style: "light",
          content: "Start a CleanUp in the map",
        }}
        theme={"#3ccaff"}
        text={[
          {
            style: "light",
            content:
              "By selecting a to be started location, user can start a CleanUp. User will be led into the process for starting a CleanUp, such as filling up the organizer information, setting up requirement for participants and equipments and signing up agreements. The CleanUp will be shown as to be approved on the map, and the status will be shown in Message tab, user can track the progress of approvement.",
          },
        ]}
        layout={"right"}
        video={"/assets/img/ocean_blue_project/03 cleanup.mp4"}
      />

      <Showcase
        title={{
          style: "light",
          content: "Organize your CleanUp",
        }}
        theme={"#3ccaff"}
        text={[
          {
            style: "light",
            content:
              "User can access Dashboard in Message or Profile tab to view and manage the CleanUp team. The organizer will have the authority to assign different roles to team membersand divide CleanUp territories. Each territory consists of four functional roles, a team leader, reporter, security and supply manageer. Reporters are responsible for taking pictures and writing description of the debris, then the report will be sent to the databank of Ocean Blue Project.",
          },
        ]}
        layout={"left"}
        video={"/assets/img/ocean_blue_project/04 start cleanup.mp4"}
      />

      <NextProject project="Simplify_Vendor_Experience" />
    </div>
  )
}

export default Ocean_Blue_Project
