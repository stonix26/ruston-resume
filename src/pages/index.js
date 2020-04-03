import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
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
  </Layout>
)

export default IndexPage
