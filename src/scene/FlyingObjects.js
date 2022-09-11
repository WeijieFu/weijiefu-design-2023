import React, { useRef } from "react"
import Cube from "./Cube"
import Cone from "./Cone"
const FlyingObjects = (props) => {
  const group = useRef()

  return (
    <group {...props} ref={group}>
      <Cube scale={[1, 1, 1]} position={[0.9, 0, 3]} />
      <Cone scale={[1, 1, 1]} position={[-0.9, 0, 3]} />
    </group>
  )
}

export default FlyingObjects
