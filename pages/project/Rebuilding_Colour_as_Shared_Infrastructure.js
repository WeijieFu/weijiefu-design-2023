import React from "react"
import Head from "next/head"
import styles from "../../styles/Project.module.css"
import Intro from "../../src/components/Project/Intro"
import NextProject from "../../src/components/Project/NextProject"
import Picture from "../../src/components/Project/Picture"
import Paragraph from "../../src/components/Project/Paragraph"
import Quote from "../../src/components/Project/Quote"
import SectionHeader from "../../src/components/Project/SectionHeader"
import Password from "../../src/components/Project/Password"


export default function RebuildingColour({ project, images }) {
  if (!project) return <div className={styles.container}>
    <Head><title>Rebuilding Colour as Shared Infrastructure | WEIJIEFU DESIGN</title></Head>
    <Intro year="2026" title="Rebuilding Colour as Shared Infrastructure" />
    <Password endpoint="/api/colour-unlock" />
  </div>

  let sectionIndex = 0
  const paragraph = (title, text) => <Paragraph title={title} text={text.map(content => ({ style: "dark", content }))} />
  const picture = item => <Picture layout={item.layout || "half-center"} src={images[item.source]} alt={item.alt} />

  return <div className={styles.container}>
    <Head><title>{project.title} | WEIJIEFU DESIGN</title><meta name="description" content={project.summary} /></Head>
    <Intro year={project.year} title={project.title} summary={project.caseStudy.intro} />
    {project.caseStudy.sections.map((section, index) => <React.Fragment key={index}>
      {section.type === "text" && <SectionHeader index={String(++sectionIndex).padStart(2, "0")} title={section.title} text={section.paragraphs} />}
      {section.type === "media" && <>
        {section.title && paragraph(section.title, section.description || [])}
        {picture(section)}
        {section.credit && <Paragraph text={[{style: "light", content: <a href={section.credit.href} target="_blank" rel="noreferrer">{section.credit.label}</a>}]} />}
      </>}
      {(section.type === "mediaPair" || section.type === "mediaRow") && <Picture layout="row" images={section.items.map(item => ({ src: images[item.source], alt: item.alt, caption: item.caption }))} />}
      {section.type === "paragraph" && paragraph(section.title, section.paragraphs)}
      {section.type === "quote" && <Quote>{section.quote}</Quote>}
      {section.type === "comparison" && <Paragraph
        title={section.title}
        text={section.rows.map(([finding, meaning]) => ({
          style: "dark",
          content: <><strong>{finding}</strong><br />{meaning}</>,
        }))}
      />}
    </React.Fragment>)}
    <NextProject project="Last_Mile_To_Component_Adoption" />
  </div>
}

export async function getServerSideProps({ req, res }) {
  res.setHeader("Cache-Control", "private, no-store")
  if (req.cookies.colour_access !== "granted") return { props: { project: null, images: {} } }
  const { access, ...project } = require("../../src/content/shared-colour-foundation.json")
  const images = {
    "/assets/img/colour_foundation/16-predictable-colour-contrast.png": require("../../public/assets/img/colour_foundation/16-predictable-colour-contrast.png").default,
    "/assets/img/colour_foundation/17-custom-theming.png": require("../../public/assets/img/colour_foundation/17-custom-theming.png").default,
    "/assets/img/colour_foundation/18-third-party-brand-palettes.png": require("../../public/assets/img/colour_foundation/18-third-party-brand-palettes.png").default,

    "/assets/img/colour_foundation/monzo-01.png": { ...require("../../public/assets/img/colour_foundation/monzo-01.png").default, unoptimized: true },
    "/assets/img/colour_foundation/monzo-03.png": { ...require("../../public/assets/img/colour_foundation/monzo-03.png").default, unoptimized: true },
    "/assets/img/colour_foundation/monzo-02.png": { ...require("../../public/assets/img/colour_foundation/monzo-02.png").default, unoptimized: true },
    "/assets/img/colour_foundation/03-mobile-figma-variables.png": require("../../public/assets/img/colour_foundation/03-mobile-figma-variables.png").default,
    "/assets/img/colour_foundation/04-web-figma-variables.png": require("../../public/assets/img/colour_foundation/04-web-figma-variables.png").default,
    "/assets/img/colour_foundation/01-current-colour-model.png": require("../../public/assets/img/colour_foundation/01-current-colour-model.png").default,
    "/assets/img/colour_foundation/05-current-distribution-model.png": require("../../public/assets/img/colour_foundation/05-current-distribution-model.png").default,
    "/assets/img/colour_foundation/13-harmonised-tonal-palette.png": require("../../public/assets/img/colour_foundation/13-harmonised-tonal-palette.png").default,
    "/assets/img/colour_foundation/11-palette-generator-tool.png": require("../../public/assets/img/colour_foundation/11-palette-generator-tool.png").default,
    "/assets/img/colour_foundation/14-future-distribution-model.png": require("../../public/assets/img/colour_foundation/14-future-distribution-model.png").default,
    "/assets/img/colour_foundation/06-ios-code-audit.png": require("../../public/assets/img/colour_foundation/06-ios-code-audit.png").default,
  }
  // Server-only imports provide dimensions; serve files from their public paths.
  Object.keys(images).forEach(source => { images[source].src = source })
  return { props: { project, images } }
}
