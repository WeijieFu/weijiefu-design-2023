/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import useNavStore from "../../state/navigation"
import gsap from "gsap"
export default function Model(props) {
  const { nodes, materials } = useGLTF("/assets/model/goggle.glb")
  const model = useRef()
  const nav = useNavStore()
  useEffect(() => {
    if (nav.current === "creativecoding") {
      gsap.to(model.current.position, {
        z: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    } else {
      gsap.to(model.current.position, {
        y: 1,
        z: 1,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }, [nav.current])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleMouseMove = (e) => {
    const state = { pointer: {} }
    state.pointer.x = (e.clientX - window.innerWidth * 0.5) / window.innerWidth
    state.pointer.y =
      -(e.clientY - window.innerHeight * 0.5) / window.innerHeight
    model.current.rotation.y = 0.025 * state.pointer.x
    model.current.rotation.x = -0.025 * state.pointer.y
  }
  return (
    <group
      {...props}
      dispose={null}
      scale={[3, 3, 3]}
      position={[-2.3, -0.33, 0]}
    >
      <group position={[0, -0.33, 0]}>
        <group ref={model}>
          <mesh geometry={nodes.Lens.geometry}>
            <meshStandardMaterial color="grey" />
          </mesh>
          <mesh geometry={nodes.Plane.geometry}>
            <meshStandardMaterial color="grey" />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/assets/model/goggle.glb")
