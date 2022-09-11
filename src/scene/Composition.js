import styles from "../../styles/components/scene/Composition.module.css"

import { OrbitControls, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Effects from "./Effects"
import Scene from "./Scene"

function Composition() {
  return (
    <div className={styles.container}>
      <Canvas camera={{ fov: 60 }}>
        {/* <ambientLight intensity={0.1} />
        <pointLight position={[0, 5, 0]} intensity={0.1} />
        <pointLight position={[2.5, 0, 5]} intensity={0.3} /> */}
        {/* <OrbitControls /> */}
        <Scene />
        <Stats />
        <Effects />
      </Canvas>
    </div>
  )
}

export default Composition
