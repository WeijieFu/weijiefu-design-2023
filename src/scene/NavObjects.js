import React from "react"
import Heartbutton from "./Heartbutton.js"
import Toggle from "./Toggle.js"
import Jslogo from "./Jslogo"
import Code from "./Code.js"
import Goggle from "./Goggle.js"

const NavObjects = (props) => {
  return (
    <group {...props}>
      <Heartbutton />
      <Toggle />
      <Jslogo />
      <Code />
      <Goggle />
    </group>
  )
}

export default NavObjects
