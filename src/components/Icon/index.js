import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faDocker,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPython,
  faReact,
  faTwitter,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(
  faApple,
  faAws,
  faDocker,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPython,
  faReact,
  faTwitter,
  faVuejs
)

const Icon = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

export default Icon
