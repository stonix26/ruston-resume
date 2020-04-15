import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../../content/awards.json"

const AwardsPage = () => (
  <Layout>
    <SEO title={JSONData.title.toLowerCase()} />
    <h2>{JSONData.title}</h2>
    <ul className="awards">
      {JSONData.awards.map((data, i) => (
        <li key={i}>
          <FontAwesomeIcon icon={faTrophy} /> {data.name}
        </li>
      ))}
    </ul>
  </Layout>
)

export default AwardsPage
