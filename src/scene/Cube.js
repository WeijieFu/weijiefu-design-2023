/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF, useMatcapTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
export default function Cube(props) {
  const { nodes, materials } = useGLTF("/assets/model/cube.glb")
  const [matcap, url] = useMatcapTexture("787165_DAD9CD_9DC0CE_36302A", 512)
  const cube = useRef()
  useFrame((state) => {
    const time = state.clock.elapsedTime
    cube.current.position.y = Math.sin(time / 2) * 0.2
    cube.current.rotation.x += 0.02
    cube.current.rotation.z += 0.02
  })
  return (
    <group {...props} dispose={null} ref={cube}>
      <mesh geometry={nodes.Cube.geometry}>
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/assets/model/cube.glb")