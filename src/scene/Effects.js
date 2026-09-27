import React from "react"
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

const Effects = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.2}
        luminanceThreshold={0.75}
        luminanceSmoothing={0.95}
        mipmapBlur
      />
      <Noise opacity={0.5} blendFunction={BlendFunction.SOFT_LIGHT} />
    </EffectComposer>
  )
}

export default Effects
