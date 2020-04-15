import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/experience.json"

const ExperiencePage = () => (
  <Layout>
    <SEO title={JSONData.title.toLowerCase()} />
    <h2>{JSONData.title}</h2>
    {JSONData.content.map((data, i) => (
      <div className="exp-container" key={i}>
        <p className="duration">{data.duration}</p>
        <h3 className="position">
          {data.position} - <span>{data.company}</span>
        </h3>
        <p className="description">{data.description}</p>
      </div>
    ))}
  </Layout>
)

export default ExperiencePage
