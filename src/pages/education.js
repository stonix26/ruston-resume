import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/education.json"

const EducationPage = () => (
  <Layout>
    <SEO title={JSONData.title.toLowerCase()} />
    <h2>{JSONData.title}</h2>
    {JSONData.content.map((data, i) => (
      <div key={i} className="educ-container">
        <h3>{data.school}</h3>
        <h4>{data.major}</h4>
        <p className="sy">{data.sy}</p>
      </div>
    ))}
  </Layout>
)

export default EducationPage
