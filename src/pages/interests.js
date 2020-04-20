import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/interest.json"

const InterestsPage = () => {
  const { title, content } = JSONData
  return (
    <Layout>
      <SEO title={title.toLowerCase()} />
      <h2>{title}</h2>
      <p
        className="interest-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}
export default InterestsPage
