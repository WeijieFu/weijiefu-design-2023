import React from "react"
import Head from "next/head"
import styles from "../../styles/Project.module.css"

import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Paragraph from "../../src/components/Project/Paragraph"
import Diagram from "../../src/components/Project/Diagram"
import NextProject from "../../src/components/Project/NextProject"

import HeaderImage from "../../public/assets/img/foodviction/01_cover.png"
import SiteAudit from "../../public/assets/img/foodviction/02_site_audit.jpg"
import CurrentSiteMap from "../../public/assets/img/foodviction/03_current_site_map.svg"
import BrandAttributes from "../../public/assets/img/foodviction/04_brand_attributes.svg"
import CompetitorAnalysis from "../../public/assets/img/foodviction/05_competitor.png"
import UserProfile1 from "../../public/assets/img/foodviction/06_userprofile_1.svg"
import UserProfile2 from "../../public/assets/img/foodviction/06_userprofile_2.svg"
import UserProfile3 from "../../public/assets/img/foodviction/06_userprofile_3.svg"
import Onboarding1 from "../../public/assets/img/foodviction/07_onboarding_1.svg"
import Onboarding2 from "../../public/assets/img/foodviction/07_onboarding_2.svg"
import Onboarding3 from "../../public/assets/img/foodviction/07_onboarding_3.svg"
import SiteMap from "../../public/assets/img/foodviction/08_site_map.svg"
import Wireframe from "../../public/assets/img/foodviction/09_wireframe.png"
import ColorScheme from "../../public/assets/img/foodviction/10_color_scheme.svg"
import Typography from "../../public/assets/img/foodviction/11_typography.svg"
import Prototype from "../../public/assets/img/foodviction/12_prototype_home_x.png"
import Booking from "../../public/assets/img/foodviction/13_prototype_booking.png"
import PrototypeRest from "../../public/assets/img/foodviction/14_prototype_rest_x.png"

const Foodviction = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro
        year={2019}
        title={"Foodviction"}
        summary={[
          "Foodviction is an online nutrition consultation agency, where customers browse different service packages, book online appointments and read nutritionist's health blog. Through site audit and competitor anlysis, we were able to identify the problems on the existing website--confusing onboarding experience and lack of coherent visual language. We worked closely with the client, helped them achieve better user experience and build visual identity system and eventually increase the conversion rate.",
        ]}
        roles={["User Research", "Visual Design", "Interaction Design"]}
      />

      <Picture
        layout="center"
        src={HeaderImage}
        alt="Foodviction Header Image"
      />

      <SectionHeader index="01" title="Problem Space" />

      <Paragraph
        title="Site Audit"
        text={[
          {
            style: "dark",
            content:
              "Before we started our ideation session, we conducted site audit on client's exsiting website. It is a very amateurishly built website with elementor and wordpress. But there are some points we appreciate, such as the orange/green color palette and the representation of healthy food.",
          },
        ]}
      />

      <Picture layout="center" src={SiteAudit} alt="Site Audit" />

      <Paragraph
        title="Current User Flow"
        text={[
          {
            style: "dark",
            content:
              "The exisiting information architecture was very chaotic. A very import product list was burried deep in the sub-link, and the categories didn't do the job to differentiate each service package. There were quetionaire and agreement pages not fit into the user flow. And the arrangement of call to actions makes user lost before they sign up a session. We decided to help the owner of Foodviction to work on a better version of service packages as well as onboarding experience.",
          },
        ]}
      />

      <Picture layout="center" src={CurrentSiteMap} alt="Current Site Map" />

      <SectionHeader
        index="02"
        title="Research"
        icons={[
          {
            icon: ["fa-solid", "fa-clipboard-question"],
            label: "Stakeholder Interview",
          },
          {
            icon: ["fa-solid", "fa-tag"],
            label: "Brand Attributes",
          },
          {
            icon: ["fa-solid", "fa-code-compare"],
            label: "Competitor Analysis",
          },
          {
            icon: ["fa-solid", "fa-person"],
            label: "User Persona",
          },
        ]}
      />

      <Paragraph
        title="Stakeholder Interview"
        text={[
          {
            style: "dark",
            content: "Key Focus Area",
          },
          {
            style: "light",
            content: "1. How would you measure success for this project?",
          },
          {
            style: "light",
            content: "2. What are you trying to communicate?",
          },
          {
            style: "light",
            content: "3. What are your challenges?",
          },
          {
            style: "light",
            content:
              "4. What have you done so far? What has worked? What hasn’t?",
          },
          {
            style: "light",
            content:
              "5. What should your customer accomplish with your website?",
          },
        ]}
      />

      <Paragraph
        title="Brand Attributes"
        text={[
          {
            style: "dark",
            content:
              "Brand Attributes are the core values that define the overall nature of the company and represent the essence of the brand, it helps to portray the brand characteristics of the company and helps in formulating the brand identity. After long discussion with the owner of Foodviction, we have concluded 3 top brand attributes representing Foodviction.",
          },
        ]}
      />

      <Picture
        layout="half-center"
        src={BrandAttributes}
        alt="Brand Attributes"
      />

      <Paragraph
        title="Competitor Analysis"
        text={[
          {
            style: "dark",
            content:
              "Together with the client, we looked into our competitors' strength and weakness strategically to see what helps to build brand identity in this industry and unsuccessful features to avoid. We picked 3 US-based nutritionists and their business websites.",
          },
        ]}
      />

      <Picture
        layout="center"
        src={CompetitorAnalysis}
        alt="Competitor Analysis"
      />

      <Paragraph
        title="Stakeholder Interview"
        text={[
          {
            style: "dark",
            content: "Key Findings",
          },
          {
            style: "light",
            content:
              "1. Length. The home pages of three competitors' websites are almost half of the length of our existing websites. The information is very compact and well proportioned. User can finish reading on 3-4 scrolls, and still have impression of all the content.",
          },
          {
            style: "light",
            content:
              "2. Graphics of healthy food. One image tells a thousand words. Using images of food as visual focus helps user to know immediately what the website is about.",
          },
          {
            style: "light",
            content:
              "3. Image of Smile. The smiley face of the nutritionist can convey authenticity and build trust. The smile with a success story, can eliminate the suspicious and hesitant feeling of the user.",
          },
          {
            style: "light",
            content:
              "4. Clear Information of Service Packages. Clear descriptions and instructions help user to navigate to the place they want, without causing the sense of lost. And it's the most read part in the whole onbarding experience.",
          },
          {
            style: "light",
            content:
              "5. Call to Action. Strategically laid out call to actions fit in the user flow and onboarding narrative and help customer conversion.",
          },
        ]}
      />

      <Paragraph
        title="User Persona"
        text={[
          {
            style: "dark",
            content:
              "Based on data from Foodviction's clients database and our research on nutrition consultation industry, we are able to point out 3 main properties of target audience.",
          },
        ]}
      />

      <Diagram
        layout="trio"
        diagrams={[
          {
            img: UserProfile1,
            title: "Health Issue",
            text:
              "Our target clients are peole who are having problems with their health. They are looking for a natural and holistic way of improving their health problems and guidance to a healthier life style.",
          },
          {
            img: UserProfile2,
            title: "Ready to Change",
            text:
              "OThey have to be willing and ready to change! We educate, guide, and encourage our clients to a customized and realistic change to a better health.",
          },
          {
            img: UserProfile3,
            title: "Age Range",
            text:
              "The age ranges between mid-30s to 60s, especially 39-65 (typically are facing health problems like diabetes, hight blood pressure, high cholesterol, heart problems, stroke and medicine takers). Audience is men and women.",
          },
        ]}
      />

      <SectionHeader
        index="03"
        title="A Better Onboarding"
        text={[
          "After identify onboarding experience as pain point, we decided to seperate user groups into 3 categories. The regular user who has already booked our service before and known very well about the content and the package to choose. The first-time user who lands on our website for the first time with a goal to find themselves a nutritionist and doesn't know what to expect. And the first-timers who are skeptical or comparing our service with other nutritionists at the same time.",
          "Having these 3 categories in mind, the story telling of onboarding experience is extremely important. We have to come up with one narrative that responds to all the users' need and lead them smoothly to the information we want to present.",
        ]}
      />

      <Paragraph
        title="Regular User"
        text={[
          {
            style: "dark",
            content:
              "Provide instant access to regular users who already know what they are doing with the website.",
          },
        ]}
      />

      <Picture layout="center" src={Onboarding1} alt="Onboarding 1" />

      <Paragraph
        title="First-time User"
        text={[
          {
            style: "dark",
            content:
              "Quickiest way to let the user have a grasp of what this website is about and what services they can find.",
          },
        ]}
      />

      <Picture layout="center" src={Onboarding2} alt="Onboarding 2" />

      <Paragraph
        title="Skeptical First-time User"
        text={[
          {
            style: "dark",
            content:
              "Build trustworthiness with facts and testmonials for skeptical users.",
          },
        ]}
      />

      <Picture layout="center" src={Onboarding3} alt="Onboarding 3" />

      <Paragraph
        title="Optimize Site Map"
        text={[
          {
            style: "dark",
            content:
              "By optimizing the onboarding experience, we have seen the neccesity to simplify the whole site structure. We decided to reduce the layering of the existing structure and keep each page more accessible.",
          },
        ]}
      />

      <Picture layout="center" src={SiteMap} alt="Site Map" />

      <SectionHeader
        index="04"
        title="Wireframe"
        text={[
          "I sketched out several possible layouts according to the new site map. After the discussion with the client, we decided to create a minimalistic and functional wireframe.",
        ]}
      />

      <Picture layout="center" src={Wireframe} alt="Wireframe" />

      <SectionHeader index="05" title="Style Guide" />

      <Paragraph
        title="Color Scheme"
        text={[
          {
            style: "dark",
            content:
              "We created this new color scheme for Foodviction, based on the original orange-green combination. The original colors are very popping out, but difficult to utilize. It's hard to read with bright orange or green background and the colors are very distracting from the images and text content. So we decided to tune down the saturation and add 2 different grey color as secondary colors.",
          },
        ]}
      />

      <Picture layout="center" src={ColorScheme} alt="Color Scheme" />

      <Paragraph title="Typography" />

      <Picture layout="center" src={Typography} alt="Typography" />

      <SectionHeader index="06" title="Prototype" />

      <Paragraph title="Onboarding" />

      <Picture layout="center" src={Prototype} alt="Prototype" />

      <Paragraph title="Booking" />

      <Picture layout="center" src={Booking} alt="Booking" />

      <Picture layout="center" src={PrototypeRest} alt="Prototype" />

      <NextProject project="Ocean_Blue_Project" />
    </div>
  )
}

export default Foodviction
