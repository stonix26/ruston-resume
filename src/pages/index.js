import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/about.json"

const IndexPage = () => {
  const [hoverEffect, setHoverEffect] = useState(false)
  const [iconIndex, setIconIndex] = useState(null)

  const { title, name, address, email, description, socialSites } = JSONData

  return (
    <Layout>
      <SEO title={title.toLowerCase()} />
      <h1 className="glitch" data-text={name}>
        {name}
      </h1>
      <p>
        {address}
        {" | "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <div className="social-container">
        {socialSites.map((data, i) => (
          <a key={i} href={data.url}>
            <FontAwesomeIcon
              icon={["fab", `${data.icon}`]}
              onMouseEnter={() => {
                setHoverEffect(true)
                setIconIndex(i)
              }}
              onMouseLeave={() => {
                setHoverEffect(false)
                setIconIndex(null)
              }}
              className={
                hoverEffect && iconIndex === i ? "colored-icons" : "icons"
              }
            />
          </a>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
