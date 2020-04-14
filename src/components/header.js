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

  const links = [
    {
      name: "about",
      url: "/",
    },
    {
      name: "experience",
      url: "/experience",
    },
    {
      name: "education",
      url: "/education",
    },
    {
      name: "skills",
      url: "/skills",
    },
    {
      name: "interests",
      url: "/interests",
    },
    {
      name: "awards",
      url: "/awards",
    },
  ]
  return (
    <header>
      <div className="profile-container">
        <Img
          className="profile"
          fluid={profileImage.childImageSharp.fluid}
          alt="Ruston Emperua"
        />
      </div>

      {links.map((link, i) => (
        <p key={i}>
          <Link to={link.url} activeClassName="active">
            {link.name}
          </Link>
        </p>
      ))}
    </header>
  )
}

export default Header
