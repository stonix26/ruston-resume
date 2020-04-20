import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/experience.json"

const ExperiencePage = () => {
  const { title, content } = JSONData
  return (
    <Layout>
      <SEO title={title.toLowerCase()} />
      <h2>{title}</h2>
      {content.map((data, i) => (
        <div className="exp-container" key={i}>
          <p className="duration">{data.duration}</p>
          <h3 className="position">
            {data.position} - <span>{data.company}</span>
          </h3>
          {data.responsibilities.map((responsibility, i) => (
            <ul className="responsibilities" key={i}>
              <li>{responsibility.desc}</li>
            </ul>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export default ExperiencePage
