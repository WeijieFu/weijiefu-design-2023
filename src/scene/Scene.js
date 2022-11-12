import React, { useRef, useEffect, useState } from "react"
import GUI from "lil-gui"
import { useFrame } from "@react-three/fiber"
import { useThree } from "@react-three/fiber"
import Figure from "./Figure"
import FlyingObjects from "./FlyingObjects"
import useCameraStore from "../../state/camera"
import useStageStore from "../../state/stage"
import gsap from "gsap"
import { POSITION_INIT, POSITION_FRONT_CENTER } from "../../constants/position"
import NavObjects from "./NavObjects"
const Scene = () => {
  const { camera } = useThree()
  const cameraState = useCameraStore()
  const stage = useStageStore()
  useEffect(() => {
    gsap.to(camera.position, {
      x: cameraState.position.x,
      y: cameraState.position.y,
      z: cameraState.position.z,
      duration: stage.current < 2 ? 3 : 1,
      ease: "power2.out",
    })
  }, [cameraState.position])
  // const params = {
  //   camera: {
  //     fov: 60,
  //     position: { x: 0, y: 0, z: 5 },
  //   },
  // }
  // useEffect(() => {
  //   const gui = new GUI()
  //   const cameraFolder = gui.addFolder("Camera")

  //   cameraFolder.add(params.camera, "fov", 0, 100, 2)
  //   cameraFolder.add(params.camera.position, "x", -10, 10)
  //   cameraFolder.add(params.camera.position, "y", -10, 10)
  //   cameraFolder.add(params.camera.position, "z", -10, 10)
  // }, [])

  useFrame((state) => {
    // state.camera.fov = params.camera.fov
    // state.camera.position.x = params.camera.position.x
    // state.camera.position.y = params.camera.position.y
    // state.camera.position.z = params.camera.position.z
    state.camera.lookAt(0, 0, 0)
    state.camera.updateProjectionMatrix()
  })

  return (
    <group>
      <Figure scale={[3, 3, 3]} position={[0, -1, 0]} />
      <FlyingObjects />
      <NavObjects />
    </group>
  )
}

export default Scene
