import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/about.json"

const IndexPage = () => {
  const [hoverEffect, setHoverEffect] = useState(false)
  const [iconIndex, setIconIndex] = useState(null)

  return (
    <Layout>
      <SEO title={JSONData.title.toLowerCase()} />
      <h1 className="glitch" data-text={JSONData.name}>
        {JSONData.name}
      </h1>
      <p>
        {JSONData.address}
        {" | "}
        <a href={`mailto:${JSONData.email}`}>{JSONData.email}</a>
      </p>
      <p>{JSONData.description}</p>
      <div className="social-container">
        {JSONData.socialSites.map((data, i) => (
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
