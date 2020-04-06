import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  config.autoAddCss = false

  return (
    <footer>
      © {new Date().getFullYear()}, Built during the pandemic.
      {` `}
      <a href="https://github.com/stonix26/ruston-resume">
        <FontAwesomeIcon icon={faCodeBranch} />
      </a>
    </footer>
  )
}

export default Footer
