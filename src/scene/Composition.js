import styles from "../../styles/scene/Composition.module.css"

import { OrbitControls, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Effects from "./Effects"
import Scene from "./Scene"

import useCameraStore from "../../state/camera"

// Three.js r155 changed light units and point-light decay. These values preserve
// the scene's original illumination after upgrading from the legacy renderer.
const LEGACY_LIGHT_SCALE = Math.PI
// import { getProject } from "@theatre/core"
// import studio from "@theatre/studio"
// import extension from "@theatre/r3f/dist/extension"
// import { SheetProvider } from "@theatre/r3f"

// studio.initialize()
// studio.extend(extension)

// const demoSheet = getProject("Demo Project").sheet("Demo Sheet")

function Composition() {
  const cameraState = useCameraStore()
  return (
    <div className={styles.container}>
      <Canvas
        camera={{
          fov: 60,
          position: [
            cameraState.position.x,
            cameraState.position.y,
            cameraState.position.z,
          ],
        }}
      >
        <ambientLight intensity={0.3 * LEGACY_LIGHT_SCALE} />
        <pointLight
          position={[0, 5, 0]}
          intensity={0.2 * LEGACY_LIGHT_SCALE}
          decay={0}
        />
        <pointLight
          position={[-10, 0, 5]}
          intensity={1 * LEGACY_LIGHT_SCALE}
          decay={0}
        />
        {/* <OrbitControls /> */}
        <Scene />
        {/* <Stats /> */}
        <Effects />
      </Canvas>
    </div>
  )
}

export default Composition
