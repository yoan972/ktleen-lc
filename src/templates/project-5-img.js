import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import closeIcon from "../assets/images/close.svg"
import "../styles/project.scss"
import Footer from "../components/footer"
import Logo from "../assets/images/logo.svg"

export default function Project5({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div className="wrapper">
        <header className="header-project">
          <p className="header__page-index">
            <img src={Logo} alt="KLC Logo" />
          </p>
          <div className="header__close">
            <Link to="/">
              <p className="close-text">close</p>
              <img src={closeIcon} className="close" alt="close cross" />
            </Link>
          </div>
        </header>
      </div>
      <div className="project">
        <div className="wrapper">
          <h1 className="project__title">{frontmatter.title}</h1>
          <h2 className="project__subtitle">{frontmatter.subtitle}</h2>
          <div className="project-content">
            <div
              className="project-content__info"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
        <div id={frontmatter.theme}>
          <div className="project__image1">
            <Img
              fluid={frontmatter.image1.image.childImageSharp.fluid}
              alt={frontmatter.image1.alt}
            />
          </div>
          <div className="project__image2">
            <Img
              fluid={frontmatter.image2.image.childImageSharp.fluid}
              alt={frontmatter.image2.alt}
            />
          </div>
          <div className="project__image3">
            <Img
              fluid={frontmatter.image3.image.childImageSharp.fluid}
              alt={frontmatter.image3.alt}
            />
          </div>
          <div className="project__image4">
            <Img
              fluid={frontmatter.image4.image.childImageSharp.fluid}
              alt={frontmatter.image4.alt}
            />
          </div>
          <div className="project__image5">
            <Img
              fluid={frontmatter.image5.image.childImageSharp.fluid}
              alt={frontmatter.image5.alt}
            />
          </div>
        </div>
      </div>
      <div className="next">
        <p className="next__project-title">{frontmatter.title}</p>

        <p className="next__project">
          <Link to="/">Next project</Link>
        </p>
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
        theme
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
        image2 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image3 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image4 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image5 {
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
