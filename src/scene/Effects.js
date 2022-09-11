import React from "react"
import { EffectComposer, Bloom, SSAO, Noise } from "@react-three/postprocessing"
const Effects = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={350} />
      <SSAO intensity={5} radius={0.1} luminanceInfluence={0} bias={0.035} />

      <Noise opacity={0.3} />
    </EffectComposer>
  )
}

export default Effects
