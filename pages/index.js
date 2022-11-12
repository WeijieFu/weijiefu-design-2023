import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useEffect, useRef } from "react"
import Composition from "../src/scene/Composition"

import Background from "../src/components/Home/Background"
import Intro from "../src/components/Home/Intro"
import Border from "../src/components/Home/Border"
import Navigation from "../src/components/Navigation"
import Slogan from "../src/components/Home/Slogan"
import Contact from "../src/components/Home/Contact"
import Menu from "../src/components/Menu"

import useNavStore from "../state/navigation"
import gsap from "gsap"
import { BACKGROUNDCOLOR } from "../constants/colors"

export default function Home() {
  const nav = useNavStore()
  const container = useRef()

  useEffect(() => {
    gsap.to(container.current, {
      backgroundColor: BACKGROUNDCOLOR[`${nav.current}`],
      duration: 1,
    })
  }, [nav.current])
  return (
    <div className={styles.container} ref={container}>
      <Head>
        <title>WEIJIEFU DESIGN</title>
        <meta name="description" content="Weijie Fu Design Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Composition />
      <Background />
      <Border />
      <Navigation />
      <Slogan />
      <Contact />
      <Menu />
    </div>
  )
}
