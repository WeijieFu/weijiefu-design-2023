const { library, config } = require("@fortawesome/fontawesome-svg-core")
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import {
  faTwitter,
  faDribbble,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import {
  faAnglesRight,
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faClipboardQuestion,
  faCodeCompare,
  faEye,
  faFolderTree,
  faLayerGroup,
  faMicroscope,
  faMobile,
  faMobileRetro,
  faMobileScreen,
  faPerson,
  faTag,
  faTimeline,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faTwitter,
  faDribbble,
  faInstagram,
  faLinkedin,
  faGithub,
  faAnglesRight,
  faArrowRight,
  faClipboardQuestion,
  faUserTie,
  faMicroscope,
  faMobileScreen,
  faChevronLeft,
  faChevronRight,
  faTimeline,
  faMobileRetro,
  faFolderTree,
  faMobile,
  faTag,
  faCodeCompare,
  faPerson,
  faLayerGroup,
  faArrowLeft,
  faEye
)
