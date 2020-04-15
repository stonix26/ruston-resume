import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/interest.json"

const InterestsPage = () => (
  <Layout>
    <SEO title={JSONData.title.toLowerCase()} />
    <h2>{JSONData.title}</h2>
    <p className="interest-content">{JSONData.content}</p>
  </Layout>
)

export default InterestsPage
