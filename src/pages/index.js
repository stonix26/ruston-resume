import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [gitIconColor, setGitIconColor] = useState(false)
  const [linkedinIconColor, setLinkedinIconColor] = useState(false)
  const [twitterIconColor, setTwitterIconColor] = useState(false)
  const [facebookIconColor, setFacebookIconColor] = useState(false)

  return (
    <Layout>
      <SEO title="about" />
      <h1 className="glitch" data-text="Ruston Emperua">
        Ruston Emperua
      </h1>
      <p>
        Cebu City, Philippines, 6000{" | "}
        <a href="mailto:ruston2601@gmail.com">ruston2601@gmail.com</a>
      </p>
      <p>
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </p>
      <div className="social-container">
        <a
          href="https://github.com/stonix26"
          onMouseEnter={() => setGitIconColor(true)}
          onMouseLeave={() => setGitIconColor(false)}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={gitIconColor ? "colored-icons" : "icons"}
          />
        </a>
        <a
          href="https://linkedin.com"
          onMouseEnter={() => setLinkedinIconColor(true)}
          onMouseLeave={() => setLinkedinIconColor(false)}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={linkedinIconColor ? "colored-icons" : "icons"}
          />
        </a>
        <a
          href="https://twitter.com"
          onMouseEnter={() => setTwitterIconColor(true)}
          onMouseLeave={() => setTwitterIconColor(false)}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={twitterIconColor ? "colored-icons" : "icons"}
          />
        </a>
        <a
          href="https://facebook.com"
          onMouseEnter={() => setFacebookIconColor(true)}
          onMouseLeave={() => setFacebookIconColor(false)}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={facebookIconColor ? "colored-icons" : "icons"}
          />
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
