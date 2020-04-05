import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
        <Link to="/" activeClassName="active">
          about
        </Link>
      </p>
      <p>
        <Link to="/experience" activeClassName="active">
          experience
        </Link>
      </p>
      <p>
        <Link to="/education" activeClassName="active">
          education
        </Link>
      </p>
      <p>
        <Link to="/skills" activeClassName="active">
          skills
        </Link>
      </p>
      <p>
        <Link to="/interests" activeClassName="active">
          interests
        </Link>
      </p>
      <p>
        <Link to="/awards" activeClassName="active">
          awards
        </Link>
      </p>
    </header>
  )
}

export default Header
