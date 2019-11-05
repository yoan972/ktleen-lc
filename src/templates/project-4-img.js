import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import closeIcon from "../assets/images/close.svg"
import "../styles/project.scss"
import Footer from "../components/footer"
import Logo from "../assets/images/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class Project4 extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const images = document.querySelectorAll("#fade")
    images.forEach(image => {
      const bounding = image.getBoundingClientRect()
      if (bounding.top <= window.innerHeight / 1.5 && bounding.bottom >= 0) {
        image.classList.add("fade-in")
      } else {
        image.classList.remove("fade-in")
      }
    })
  }

  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark

    return (
      <div style={{ backgroundColor: "white" }}>
        <div className="wrapper">
          <header className="header-project">
            <p className="header__page-index">
              <img src={Logo} alt="KLC Logo" />
            </p>
            <div className="header__close">
              <AniLink cover to="/" bg="black" direction="right">
                <p className="close-text">close</p>
                <img src={closeIcon} className="close" alt="close cross" />
              </AniLink>
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
            <div id="fade" className="project__image1">
              <Img
                fadeIn={false}
                fluid={frontmatter.image1.image.childImageSharp.fluid}
                alt={frontmatter.image1.alt}
              />
            </div>
            <div id="fade" className="project__image2">
              <Img
                fadeIn={false}
                fluid={frontmatter.image2.image.childImageSharp.fluid}
                alt={frontmatter.image2.alt}
              />
            </div>
            <div id="fade" className="project__image3">
              <Img
                fadeIn={false}
                fluid={frontmatter.image3.image.childImageSharp.fluid}
                alt={frontmatter.image3.alt}
              />
            </div>
            <div id="fade" className="project__image4">
              <Img
                fadeIn={false}
                fluid={frontmatter.image4.image.childImageSharp.fluid}
                alt={frontmatter.image4.alt}
              />
            </div>
          </div>
        </div>
        <div className="next">
          <p className="next__project-title">{frontmatter.title}</p>

          <p className="next__project">
            <AniLink cover to="/" bg="black" direction="left">
              Next project
            </AniLink>
          </p>
        </div>
        <Footer />
      </div>
    )
  }
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
      }
    }
  }
`
