import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
        <AniLink fade to="/" activeClassName="active">
          about
        </AniLink>
      </p>
      <p>
        <AniLink fade to="/experience" activeClassName="active">
          experience
        </AniLink>
      </p>
      <p>
        <AniLink fade to="/education" activeClassName="active">
          education
        </AniLink>
      </p>
      <p>
        <AniLink fade to="/skills" activeClassName="active">
          skills
        </AniLink>
      </p>
      <p>
        <AniLink fade to="/interests" activeClassName="active">
          interests
        </AniLink>
      </p>
      <p>
        <AniLink fade to="/awards" activeClassName="active">
          awards
        </AniLink>
      </p>
    </header>
  )
}

export default Header
