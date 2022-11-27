import React from "react"
import styles from "../../styles/Project.module.css"
import Head from "next/head"
import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Paragraph from "../../src/components/Project/Paragraph"
import NextProject from "../../src/components/Project/NextProject"
import Showcase from "../../src/components/Project/Showcase"
import Password from "../../src/components/Project/Password"

import HeaderImage from "../../public/assets/img/simplify_vendor_experience/00_header.png"
import CurrentUserFLow from "../../public/assets/img/simplify_vendor_experience/01_current_user_flow.png"
import CurrentScreens from "../../public/assets/img/simplify_vendor_experience/02_current_screens.png"
import Interview from "../../public/assets/img/simplify_vendor_experience/03_interview.png"
import PLS from "../../public/assets/img/simplify_vendor_experience/04_pls.png"
import Catalogue from "../../public/assets/img/simplify_vendor_experience/05_catalogue.png"
import CreateQuotation from "../../public/assets/img/simplify_vendor_experience/06_create_quotation.png"
import PDP from "../../public/assets/img/simplify_vendor_experience/07_pdp.png"

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
        summary={[
          "Simplify Vendor Experience , aka Catalogue, is a project initiated in February 2022, aiming to improve the workflow for one of the major account types on the Loupe platform Vendors. I took part in the user research and led the design for the new assortment managing interfaces.",
        ]}
        roles={[
          "User Research",
          "User Flow",
          "Wireframing",
          "User Testing",
          "Prototyping",
        ]}
      />

      <Picture layout="center" src={HeaderImage} alt="Header Image" />

      <SectionHeader
        index="01"
        title="Problem Discovery"
        text={[
          "Due to the nature of supply chain, the feedbacks of upstream users, Vendor, could be easily drawn in the ocean of feature requests, as the major vendors are passive adopters.",
          "As the product strategy evolves this year, a better UX is needed for more medium to small independent vendors to sign up.",
        ]}
      />

      <Paragraph
        title="Voice of the User"
        text={[
          {
            style: "dark",
            content:
              "From ProductBoard, where we collect user insights and feedbacks, we were able to summarize these primary problems:",
          },

          {
            style: "light",
            content:
              "1. 3 different places to manage products in different states.",
          },

          {
            style: "light",
            content:
              "2. 3 different product detail pages (PDP) with data in different granularity.",
          },
          {
            style: "light",
            content:
              "3. Creating quotation through single-used Selection cannot meet all the needs.",
          },

          {
            style: "light",
            content: "4. Lack of a data-rich overview of my assortment.",
          },
        ]}
      />

      <SectionHeader
        index="02"
        title="Research"
        text={[
          "The features involved in this redesign are mostly built at the early stage of the company. In order to understand the problems our users are facing, we decided to establish the current user flow before we go talk to the users.",
          "Luckily we have a committee of vendors that agreed to be deeply involved in the product development phase, so we scheduled testing and interviews regarding various of topics for this project.",
        ]}
        icons={[
          {
            icon: ["fa-solid", "fa-timeline"],
            label: "User Flow",
          },
          {
            icon: ["fa-solid", "fa-clipboard-question"],
            label: "Interview",
          },
        ]}
      />

      <Picture layout="full-width" src={CurrentScreens} alt="Current Screens" />

      <Paragraph
        title="Current User Flow"
        text={[
          {
            style: "dark",
            content:
              "Below is a high level user flow for the vendor from creating a sample to completing a deal with retailer. The current flow reflects some major areas to improve:",
          },
          {
            style: "light",
            content:
              "1. The same product lives in three different spaces exposing different information. In Masterline, the samples are grouped on the style level, but in Showroom and Running Line, the products are grouped at metal purity level.",
          },
          {
            style: "light",
            content:
              "2. The actions to the same sample/product are divided inside three different Detail Pages. It's a higher learning curve for the user to learn which action is in which section.",
          },
          {
            style: "light",
            content:
              "3. The customer pricing in Showroom is for all connected buyers, but in Running Line is only for buyers who convert this product to their assortments.",
          },
          {
            style: "light",
            content:
              "4. Quotation can only be initiated from Showroom and the selection is user agnostic which blocks vendors to create quotations symanteneously",
          },
        ]}
      />

      <Picture layout="center" src={CurrentUserFLow} alt="Current User Flow" />

      <Paragraph
        title="Interview with Vendor Committee"
        text={[
          {
            style: "dark",
            content:
              "With the questions from above, we talked to some of the major vendors from different continents, as well as the custoemr success team in Loupe, who face the customers everyday. We were able to gather comprehensive feedbacks to all the details in their workflow. In conclusion, the vendors confirmed out hypothesis of points of improvements and also shared their thoughts of how Loupe and better assist their daiy work.",
          },
        ]}
      />

      <Picture layout="full-width" src={Interview} alt="Interview Report" />

      <SectionHeader
        index="03"
        title="Ideation to Action"
        text={[
          "After the research phase, the project moves to the solution territory. The goal for the solution is to reduce confusion and time to complete tasks for the user, as well as reduce the UI inconsistency caused by different generations of front-end engineering.",
        ]}
      />

      <Paragraph
        title="Introduce Product Lifecycle Stage"
        text={[
          {
            style: "dark",
            content:
              "The distinction between a sample and a product has been considered through out the application. But it has already evolved into a more complex multi-status system. We introduced the product lifecycle stage to create a simple representation of the status of an item in the assortment.",
          },
          {
            style: "dark",
            content:
              "With Product Lifecycle Stage, we can streamline different stage of products on a single page.",
          },
        ]}
      />

      <Picture layout="center" src={PLS} alt="Product Lifecycle Stage" />

      <Paragraph
        title="Catalogue"
        text={[
          {
            style: "dark",
            content:
              "Now we turned Masterline, Showroom and Running Line into one single page. User can easily understand the status of the a product and investigate user specific data with customer view.",
          },
          {
            style: "dark",
            content:
              "Besides the visual-rich tile layout, we also introduced table layout, so the user can view all critial product attributes on one page without opening PDP one by one.",
          },
        ]}
      />

      <Picture layout="full-width" src={Catalogue} alt="Catalogue" />

      <Paragraph
        title="Create Quote Directly"
        text={[
          {
            style: "dark",
            content:
              "Instead of adding the items in the Selection first, user now can create quotation directly with the selected items in Catalogue. They will create draft quotations and the commodity prices can be set differently for every individual quote.",
          },
        ]}
      />
      <Picture
        layout="full-width"
        src={CreateQuotation}
        alt="Create Quotation"
      />

      <Paragraph
        title="Single Product Detail Page"
        text={[
          {
            style: "dark",
            content:
              "Now user can access the product details from just one click. The customer pricing, bill of materials and the retail data are all nested in one page. As a result of introducing product lifecycle stage, the vendors can easily view how this product progesses in the retailer workflow and quote prices for different stages.",
          },
        ]}
      />

      <Picture layout="full-width" src={PDP} alt="Product Detail Page" />

      <SectionHeader
        index="04"
        title="Continuous Improvement"
        text={[
          "The new interfaces for Catalogue have been tested by the users and now under development. The next steps are to monitor feature adoption rate and gather more user feedbacks.",

          "A positibe NPS has already shown in the user testing, and the most important learning in this project is, to make complex simple.",
          "Less is more.",
        ]}
      />

      <NextProject project="Build_Candle" />
    </div>
  )
}

export default Simplify_Vendor_Experience
