import React, { useRef } from "react"
import Figure from "./Figure"

import FlyingObjects from "./FlyingObjects"
const Scene = () => {
  return (
    <group>
      <Figure scale={[3, 3, 3]} position={[0, -1, 0]} />
      <FlyingObjects />
    </group>
  )
}

export default Scene
