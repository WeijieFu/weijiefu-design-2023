import { useEffect, useMemo, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useMatcapTexture } from "@react-three/drei"
import gsap from "gsap"
import { TEXTURE, TEXTURE_OPTIONS } from "../../constants/texture"
import useNavStore from "../../state/navigation"

const SECTION_ORDER = ["home", "uiux", "webdev", "creativecoding", "about"]
const SECTION_TO_INDEX = SECTION_ORDER.reduce((result, key, index) => {
  result[key] = index
  return result
}, {})
const TEXTURE_IDS = Array.from(
  new Set(Object.values(TEXTURE_OPTIONS).flat())
)
const ACTIVE_TEXTURE = {
  home: TEXTURE.home,
  uiux: TEXTURE.uiux,
  webdev: TEXTURE.webdev,
  creativecoding: TEXTURE.creativecoding,
  about: TEXTURE.about,
}
const TRANSITION_MODES = {
  diagonal: 0,
  radial: 1,
  vertical: 2,
  dissolve: 3,
}
let activeSection = "home"

const TRANSITION_SHADER = {
  vertexHeader: "varying vec3 vTransitionPosition;\n",
  vertexBody:
    "#include <worldpos_vertex>\n  vTransitionPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
  fragmentHeader: `
uniform sampler2D matcapFrom;
uniform sampler2D matcapTo;
uniform float matcapProgress;
uniform float matcapSoftness;
uniform float matcapDirection;
uniform float matcapMode;
varying vec3 vTransitionPosition;

float random(vec3 value) {
  return fract(sin(dot(value, vec3(12.9898, 78.233, 37.719))) * 43758.5453123);
}
`,
}

function getSectionKey(current) {
  return current && TEXTURE_OPTIONS[current] ? current : "home"
}

function getTransitionDirection(fromKey, toKey) {
  return SECTION_TO_INDEX[toKey] >= SECTION_TO_INDEX[fromKey] ? 1 : -1
}

function getRandomTextureId(section, previousTextureId) {
  const options = TEXTURE_OPTIONS[section] || TEXTURE_OPTIONS.home
  const availableOptions =
    options.length > 1
      ? options.filter((textureId) => textureId !== previousTextureId)
      : options

  return availableOptions[Math.floor(Math.random() * availableOptions.length)]
}

function syncActiveTexture(section) {
  if (section === activeSection) {
    return
  }

  const previousTextureId = ACTIVE_TEXTURE[activeSection]
  ACTIVE_TEXTURE[section] = getRandomTextureId(section, previousTextureId)
  activeSection = section
}

function getTransitionMode() {
  if (typeof window === "undefined") {
    return TRANSITION_MODES.diagonal
  }

  const params = new URLSearchParams(window.location.search)
  const mode = params.get("transition")
  return TRANSITION_MODES[mode] ?? TRANSITION_MODES.diagonal
}

export default function TransitionMatcapMaterial({
  transitionSoftness = 0.28,
  transitionDuration = 2,
  transitionDelay = 0,
  ...props
}) {
  const nav = useNavStore()
  const material = useRef()
  const shader = useRef()
  const progress = useRef({ value: 1 })
  const fromSection = useRef(getSectionKey(nav.current))
  const toSection = useRef(getSectionKey(nav.current))
  const fromTextureId = useRef(ACTIVE_TEXTURE[getSectionKey(nav.current)])
  const toTextureId = useRef(ACTIVE_TEXTURE[getSectionKey(nav.current)])
  const currentSection = getSectionKey(nav.current)
  const direction = useRef(1)
  const transitionMode = useRef(getTransitionMode())
  const [displayTextureId, setDisplayTextureId] = useState(
    ACTIVE_TEXTURE[currentSection]
  )
  const [showWireframe, setShowWireframe] = useState(
    currentSection === "creativecoding"
  )

  const [matcap01] = useMatcapTexture(TEXTURE_IDS[0], 512)
  const [matcap02] = useMatcapTexture(TEXTURE_IDS[1], 512)
  const [matcap03] = useMatcapTexture(TEXTURE_IDS[2], 512)
  const [matcap04] = useMatcapTexture(TEXTURE_IDS[3], 512)
  const [matcap05] = useMatcapTexture(TEXTURE_IDS[4], 512)
  const [matcap06] = useMatcapTexture(TEXTURE_IDS[5], 512)
  const [matcap07] = useMatcapTexture(TEXTURE_IDS[6], 512)
  const [matcap08] = useMatcapTexture(TEXTURE_IDS[7], 512)
  const [matcap09] = useMatcapTexture(TEXTURE_IDS[8], 512)
  const [matcap10] = useMatcapTexture(TEXTURE_IDS[9], 512)
  const [matcap11] = useMatcapTexture(TEXTURE_IDS[10], 512)
  const [matcap12] = useMatcapTexture(TEXTURE_IDS[11], 512)
  const [matcap13] = useMatcapTexture(TEXTURE_IDS[12], 512)

  const matcaps = useMemo(
    () => ({
      [TEXTURE_IDS[0]]: matcap01,
      [TEXTURE_IDS[1]]: matcap02,
      [TEXTURE_IDS[2]]: matcap03,
      [TEXTURE_IDS[3]]: matcap04,
      [TEXTURE_IDS[4]]: matcap05,
      [TEXTURE_IDS[5]]: matcap06,
      [TEXTURE_IDS[6]]: matcap07,
      [TEXTURE_IDS[7]]: matcap08,
      [TEXTURE_IDS[8]]: matcap09,
      [TEXTURE_IDS[9]]: matcap10,
      [TEXTURE_IDS[10]]: matcap11,
      [TEXTURE_IDS[11]]: matcap12,
      [TEXTURE_IDS[12]]: matcap13,
    }),
    [
      matcap01,
      matcap02,
      matcap03,
      matcap04,
      matcap05,
      matcap06,
      matcap07,
      matcap08,
      matcap09,
      matcap10,
      matcap11,
      matcap12,
      matcap13,
    ]
  )

  useEffect(() => {
    const previousSection = toSection.current
    const nextSection = currentSection
    let wireframeDelay
    let displayTextureDelay
    syncActiveTexture(nextSection)
    const previousTextureId = ACTIVE_TEXTURE[previousSection]
    const nextTextureId = ACTIVE_TEXTURE[nextSection]

    if (
      (previousSection === nextSection && previousTextureId === nextTextureId) ||
      !matcaps[previousTextureId] ||
      !matcaps[nextTextureId]
    ) {
      setShowWireframe(nextSection === "creativecoding")
      return
    }

    setDisplayTextureId(previousTextureId)

    if (nextSection === "creativecoding") {
      wireframeDelay = gsap.delayedCall(transitionDuration * 0.45, () => {
        setShowWireframe(true)
      })
    } else {
      setShowWireframe(false)
    }

    fromSection.current = previousSection
    toSection.current = nextSection
    fromTextureId.current = previousTextureId
    toTextureId.current = nextTextureId
    direction.current = getTransitionDirection(previousSection, nextSection)
    progress.current.value = 0

    gsap.to(progress.current, {
      value: 1,
      duration: transitionDuration,
      delay: transitionDelay,
      ease: "power2.out",
    })

    displayTextureDelay = gsap.delayedCall(
      transitionDelay + transitionDuration,
      () => {
        setDisplayTextureId(nextTextureId)
      }
    )

    return () => {
      wireframeDelay?.kill()
      displayTextureDelay?.kill()
    }
  }, [currentSection, matcaps, transitionDelay, transitionDuration])

  useFrame(() => {
    if (!shader.current) {
      return
    }

    const uniforms = shader.current.uniforms
    uniforms.matcapFrom.value = matcaps[fromTextureId.current] || matcaps[TEXTURE.home]
    uniforms.matcapTo.value = matcaps[toTextureId.current] || matcaps[TEXTURE.home]
    uniforms.matcapProgress.value = progress.current.value
    uniforms.matcapSoftness.value = transitionSoftness
    uniforms.matcapDirection.value = direction.current
    uniforms.matcapMode.value = transitionMode.current
  })

  return (
    <meshMatcapMaterial
      ref={material}
      matcap={matcaps[displayTextureId] || matcaps[TEXTURE.home]}
      wireframe={showWireframe}
      onBeforeCompile={(compiledShader) => {
        shader.current = compiledShader
        compiledShader.uniforms.matcapFrom = { value: null }
        compiledShader.uniforms.matcapTo = { value: null }
        compiledShader.uniforms.matcapProgress = { value: 1 }
        compiledShader.uniforms.matcapSoftness = { value: transitionSoftness }
        compiledShader.uniforms.matcapDirection = { value: direction.current }
        compiledShader.uniforms.matcapMode = { value: transitionMode.current }

        compiledShader.vertexShader = compiledShader.vertexShader
          .replace("void main() {", `${TRANSITION_SHADER.vertexHeader}void main() {`)
          .replace("#include <worldpos_vertex>", TRANSITION_SHADER.vertexBody)

        compiledShader.fragmentShader = compiledShader.fragmentShader
          .replace(
            "void main() {",
            `${TRANSITION_SHADER.fragmentHeader}\nvoid main() {`
          )
          .replace(
            "vec4 matcapColor = texture2D( matcap, uv );",
            `
  vec4 matcapFromColor = texture2D(matcapFrom, uv);
  vec4 matcapToColor = texture2D(matcapTo, uv);
  float diagonalAxis = dot(vTransitionPosition, normalize(vec3(0.9, 0.45, 0.2))) * 0.35 * matcapDirection;
  float diagonalEdge = mix(1.2, -1.2, matcapProgress);
  float diagonalMask = smoothstep(
    diagonalEdge - matcapSoftness,
    diagonalEdge + matcapSoftness,
    diagonalAxis
  );
  float radialAxis = length(vTransitionPosition.xy * vec2(0.38, 0.58));
  float radialEdge = mix(-0.15, 1.2, matcapProgress);
  float radialMask = smoothstep(
    radialEdge - matcapSoftness,
    radialEdge + matcapSoftness,
    radialAxis
  );
  float verticalAxis = vTransitionPosition.y * 0.55;
  float verticalEdge = mix(0.8, -0.8, matcapProgress);
  float verticalMask = smoothstep(
    verticalEdge - matcapSoftness,
    verticalEdge + matcapSoftness,
    verticalAxis
  );
  float dissolveNoise = random(floor(vTransitionPosition * 18.0));
  float dissolveMask = smoothstep(
    matcapProgress - matcapSoftness,
    matcapProgress + matcapSoftness,
    dissolveNoise
  );
  float transitionMask = diagonalMask;
  transitionMask = matcapMode > 0.5 && matcapMode < 1.5 ? radialMask : transitionMask;
  transitionMask = matcapMode > 1.5 && matcapMode < 2.5 ? verticalMask : transitionMask;
  transitionMask = matcapMode > 2.5 ? dissolveMask : transitionMask;
  transitionMask = mix(matcapProgress, transitionMask, 0.72);
  transitionMask = matcapProgress < 0.02 ? 0.0 : transitionMask;
  transitionMask = matcapProgress > 0.98 ? 1.0 : transitionMask;
  vec4 matcapColor = mix(matcapFromColor, matcapToColor, transitionMask);
`
          )
      }}
      {...props}
    />
  )
}
