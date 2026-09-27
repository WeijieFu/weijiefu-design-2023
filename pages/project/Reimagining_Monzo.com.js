import Head from "next/head"
import styles from "../../styles/Project.module.css"
import Intro from "../../src/components/Project/Intro"
import NextProject from "../../src/components/Project/NextProject"
import External from "../../src/components/Project/External"

export default function ReimaginingMonzo() {
return <div className={styles.container}>
<Head><title>Reimagining Monzo.com | WEIJIEFU DESIGN</title><meta name="description" content={"Building a modular, high-fidelity web design system that scales."} /></Head>
<Intro year="2026" title={"Reimagining Monzo.com"} summary={["Building a modular, high-fidelity web design system that scales."]} />
{/* Monzo blocks iframe embedding; retain the shared external-project link. */}
<External name={"Reimagining Monzo.com"} href={"https://monzo.com/blog/reimagining-monzo-com-building-a-modular-high-fidelity-web-design-system-that-scales"} embed={false} />
<NextProject project="Rebuilding_Colour_as_Shared_Infrastructure" />
</div>
}
