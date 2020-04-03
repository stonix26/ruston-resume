import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="layout-container">
    <Header />
    <main>
      <div className="content-container">{children}</div>
      <Footer />
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
