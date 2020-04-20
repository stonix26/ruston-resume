import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import "../utils/fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/skills.json"

const SkillsPage = () => {
  const [hoverEffect, setHoverEffect] = useState(false)
  const [iconIndex, setIconIndex] = useState(null)

  const { title, languages_and_tools, workflow } = JSONData

  return (
    <Layout>
      <SEO title={title.toLowerCase()} />
      <h2>{title}</h2>
      <div className="skill-container">
        <h3>Programming Languages &amp; Tools</h3>
        <div className="skill-icons">
          {languages_and_tools.map((data, i) => (
            <FontAwesomeIcon
              key={i}
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
              title={data.name}
            />
          ))}
        </div>
      </div>
      <div className="workflow-container">
        <h3>Workflow</h3>
        <ul>
          {workflow.map((data, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={faCheck} /> {data.name}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default SkillsPage
