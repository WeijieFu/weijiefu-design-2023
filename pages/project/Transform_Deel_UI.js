import React from "react"
import Head from "next/head"
import styles from "../../styles/Project.module.css"

import Intro from "../../src/components/Project/Intro"
import Picture from "../../src/components/Project/Picture"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Paragraph from "../../src/components/Project/Paragraph"
import NextProject from "../../src/components/Project/NextProject"

import HeaderImage from "../../public/assets/img/transform_deel_ui/00_header.png"
import ComponentOptimization from "../../public/assets/img/transform_deel_ui/01_component_optimization.png"
import ComponentRedefinition from "../../public/assets/img/transform_deel_ui/02_component_redefinition.png"
import Tokenization from "../../public/assets/img/transform_deel_ui/03_tokenization.png"
import Rebranding from "../../public/assets/img/transform_deel_ui/04_rebranding.png"
import ColorPalette from "../../public/assets/img/transform_deel_ui/05_color_palette.png"
import Accessibility from "../../public/assets/img/transform_deel_ui/06_accessibility.png"
import DarkMode from "../../public/assets/img/transform_deel_ui/08_dark_mode.png"
import DensityMode from "../../public/assets/img/transform_deel_ui/09_density_mode.png"
import Plugins from "../../public/assets/img/transform_deel_ui/10_plugins.png"
import Zeroheight from "../../public/assets/img/transform_deel_ui/11_zeroheight.png"
import Contribution from "../../public/assets/img/transform_deel_ui/12_contribution.png"
import Survey from "../../public/assets/img/transform_deel_ui/13_survey.png"
import Prototype from "../../public/assets/img/namet/07_prototype.png"

const Transform_Deel_UI = () => {
  return (
    <div className={styles["container"]}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Password /> */}
      <Intro
        year={"2023 - 2024"}
        title={"Transform Deel UI"}
        summary={[
          "This isn’t a typical case study; it’s more of a journal documenting my journey in transforming the Design System at Deel. This catalog-like article spans a wide range of topics, including component optimization, tokenization, design system governance, and design process automation. If any specific topic piques your interest and you’d like to discuss it in detail, please feel free to reach out to me via email.",
        ]}
        roles={["Design System Designer and Strategist"]}
      />
      <Picture layout="center" src={HeaderImage} alt="Header Image" />

      <SectionHeader
        index="01"
        title="Component Optmization"
        text={[
          "Creating variants can feel like casting a magic spell for design system designers. Many design systems end up with a massive matrix of variants within a single component set, aiming to cover every possible scenario. However, this often leads to a rude awakening when designers frequently run out of memory in relatively small files. After all, Figma is a web application running in a browser. It’s only when this memory issue starts slowing down the entire team that design system designers realize usability is just as crucial as the components themselves.",
          "By strategically designing the component using “related components,” “boolean,” and “instance swap” properties, I was able to reduce the component layer size by an average of 80%. Since then, no one has complained about memory limit issues.",
        ]}
      />

      <Picture
        layout="center"
        src={ComponentOptimization}
        alt="Component Optimization"
      />

      <SectionHeader
        index="02"
        title="Component Redefinition"
        text={[
          "Before I joined Deel, the product design team had experienced rapid growth without centralized guidelines for most components. Different feature teams created variations of components in silos. While this approach enabled the company to quickly deliver new services to end users, it also led to inconsistencies and confusion among designers. The redundancy soon became a bottleneck during design reviews, as there was no single source of truth regarding which variant should be used in each scenario.",
          "Redefinition became the top priority for the first 12 months, as I firmly believe that a scalable design system should be a lean one. I audited the use cases for each component in our development environment, consolidated them into distinct scenarios, documented the usage guidelines, and reflected these guidelines in the component designs.",
        ]}
      />

      <Picture
        layout="center"
        src={ComponentRedefinition}
        alt="Component Redefinition"
      />

      <SectionHeader
        index="03"
        title="Tokenization"
        text={[
          "Design Tokens have become the most fundamental elements since Figma started to support them natively as Variables. I led the team in defining design tokens, migrating the existing color system to the new tokenized structure, and onboarding both designers and frontend engineers to use tokens.",
          "As a bridge between design and engineering of the UI, design tokens must not only meet product requirements but also be easy to implement in our frontend tech stack. We chose to mimic the palette structure from MUI, the core library for our UI components. This approach allows us to quickly adopt new features from MUI components while bridging the communication gap between designers and engineers. At the same time, it provides maximum flexibility in facing new design challenges, enabling Deel UI to serve as a foundation for all features.",
        ]}
      />

      <Picture layout="center" src={Tokenization} alt="Tokenization" />

      <Paragraph
        title="Deel Rebranding"
        text={[
          {
            style: "dark",
            content:
              "Implementing design tokens significantly simplifies the process of rebranding a product. Design tokens serve as the single source of truth for all design decisions, encapsulating key elements like colors, typography, spacing, and more into standardized variables.",
          },
          {
            style: "dark",
            content:
              "The rebranding project not only revitalized the product’s look and feel but also provided a strategic opportunity to eliminate technical debt and fully integrate design tokens into the engineering workflow, setting a solid foundation for future growth and agility.",
          },
        ]}
      />
      <Picture layout="center" src={Rebranding} alt="Rebranding" />

      <Paragraph
        title="Accessibility"
        text={[
          {
            style: "dark",
            content:
              "Rebranding also gave us the opportunity to revisit and enhance the product's accessibility. A more flexible and accessible color system was created based on brand colors.",
          },
        ]}
      />
      <Picture layout="center" src={ColorPalette} alt="Color Palette" />

      <Paragraph
        text={[
          {
            style: "dark",
            content:
              "By establishing a color palette that is both brand-aligned and accessible, the product is better prepared for future updates, ensuring that new features or design changes do not inadvertently introduce accessibility barriers.",
          },
        ]}
      />
      <Picture layout="center" src={Accessibility} alt="Accessiblity Roadmap" />

      <Paragraph
        title="Dark Mode"
        text={[
          {
            style: "dark",
            content:
              "Introducing dark mode as part of the tokenization project was a strategic move that leveraged the power of design tokens to seamlessly integrate this new feature into our design system. The tokenized approach not only facilitated the seamless integration of dark mode but also set the stage for future flexibility and scalability in our design system.",
          },
        ]}
      />
      <Picture layout="center" src={DarkMode} alt="Dark Mode" />

      <Paragraph
        title="Density Mode"
        text={[
          {
            style: "dark",
            content:
              "Introducing density mode as part of the tokenization project was another strategic enhancement that allowed us to provide users with more control over their experience, without disrupting the existing design system.",
          },
        ]}
      />
      <Picture layout="center" src={DensityMode} alt="Density Mode" />

      <Paragraph
        title="White Label"
        text={[
          {
            style: "dark",
            content:
              "By leveraging our tokenized design system, we were able to efficiently enable white-label features, providing a customizable product experience that meets the specific needs of different brands. This approach not only simplifies the process of creating and managing multiple branded versions but also ensures consistency, scalability, and cost-effectiveness across the entire product ecosystem.",
          },
        ]}
      />

      <SectionHeader
        index="04"
        title="Figma Plugins"
        text={[
          "While a comprehensive component library and documentation are vital, they may not fully address the challenges of adopting and correctly using complex components like Data Grid. By leveraging Figma APIs to automate the setup and usage process, I was able to uplift adoption and ensure consistent, correct usage of these components across the design system. This approach not only enhances the efficiency of the design process but also improves the overall quality and consistency of the product.",
        ]}
      />
      <Picture layout="center" src={Plugins} alt="Plugins" />

      <SectionHeader
        index="05"
        title="Documentation"
        text={[
          "Creating centralized documentation in Zeroheight allowed me to cover all aspects of our design system, from foundational elements and components to workflows and design patterns. This centralized, interactive resource has become an essential tool for ensuring consistency, improving efficiency, and facilitating collaboration across the team.",
        ]}
      />
      <Picture layout="center" src={Zeroheight} alt="Prototype" />

      <SectionHeader
        index="06"
        title="Design System Operation"
        text={[
          "Working on design system operations involves a blend of strategic management, hands-on coordination, and continuous engagement with both the design and development teams. Here’s how I handle various aspects of design system operations:",
        ]}
      />

      <Paragraph
        title="Requests & Contribution"
        text={[
          {
            style: "dark",
            content:
              "I’ve created and maintain clear guidelines for contributing to the design system. These guidelines cover everything from how to propose a new component to the process for submitting design assets or code.",
          },
        ]}
      />

      <Picture layout="center" src={Contribution} alt="Contribution" />

      {/* <Paragraph
        title="Advocates"
        text={[
          {
            style: "dark",
            content:
              "A set of ready-made components is also availble to create plugins that are also compliant with the Figma UI style.",
          },
        ]}
      /> */}

      {/* <Picture layout="center" src={Prototype} alt="Prototype" /> */}

      <Paragraph
        title="Design System Metrics"
        text={[
          {
            style: "dark",
            content:
              "I monitor the usage of the design system library through tools like Figma’s analytics, tracking metrics such as component usage frequency, adoption rates, and version control. This data helps identify which components are most popular, which are underutilized, and where there might be gaps or issues; I also conduct regular surveys among designers, developers, and other stakeholders to gather qualitative feedback on the design system. This includes questions about usability, satisfaction, pain points, and suggestions for improvement.",
          },
          {
            style: "dark",
            content:
              "Feedback from surveys and analytics is used to make informed decisions about updates, prioritize new features, and address any issues within the design system. This continuous loop of feedback and iteration is crucial for the system’s long-term success.",
          },
        ]}
      />

      <Picture layout="center" src={Survey} alt="Metrics" />

      <NextProject project="Build_Candle" />
    </div>
  )
}

export default Transform_Deel_UI
