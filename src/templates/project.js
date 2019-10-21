import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import closeIcon from "../assets/images/close.svg"
import "../styles/project.scss"
import Footer from "../components/footer"

export default function Project({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div className="wrapper">
        <header className="header-project">
          <p className="header__page-index">Project 1-8</p>
          <div className="header__close">
            <Link to="/">
              <p className="close-text">close</p>
              <img src={closeIcon} className="close" alt="close cross" />
            </Link>
          </div>
        </header>
        <div className="project">
          <h1 className="project__title">{frontmatter.title}</h1>
          <h2 className="project__subtitle">{frontmatter.subtitle}</h2>
          <div className="project-content">
            <div
              className="project-content__info"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="project__image1">
              <Img
                fluid={frontmatter.image1.image.childImageSharp.fluid}
                alt={frontmatter.image1.alt}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        image1 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`