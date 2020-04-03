import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const { profileImage } = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="profile-container">
        <Img
          className="profile"
          fluid={profileImage.childImageSharp.fluid}
          alt="Ruston Emperua"
        />
      </div>

      <p>
        <Link to="/">about</Link>
      </p>
      <p>
        <Link to="/experience/">experience</Link>
      </p>
      <p>
        <Link to="/education/">education</Link>
      </p>
      <p>
        <Link to="/skills/">skills</Link>
      </p>
      <p>
        <Link to="/interests/">interests</Link>
      </p>
      <p>
        <Link to="/awards/">awards</Link>
      </p>
    </header>
  )
}

export default Header
