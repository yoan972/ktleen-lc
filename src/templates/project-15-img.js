import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import closeIcon from "../assets/images/close.svg"
import "../styles/project.scss"
import Footer from "../components/footer"
import Logo from "../assets/images/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class Project5 extends Component {
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
            <AniLink
              cover
              to="/"
              bg="black"
              direction="right"
              className="header__page-index"
            >
              <img src={Logo} alt="KLC Logo" />
            </AniLink>
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
            <div id="fade" className="project__image5">
              <Img
                fadeIn={false}
                fluid={frontmatter.image5.image.childImageSharp.fluid}
                alt={frontmatter.image5.alt}
              />
            </div>
            <div id="fade" className="project__image6">
              <Img
                fadeIn={false}
                fluid={frontmatter.image6.image.childImageSharp.fluid}
                alt={frontmatter.image6.alt}
              />
            </div>
            <div id="fade" className="project__image7">
              <Img
                fadeIn={false}
                fluid={frontmatter.image7.image.childImageSharp.fluid}
                alt={frontmatter.image7.alt}
              />
            </div>
            <div id="fade" className="project__image8">
              <Img
                fadeIn={false}
                fluid={frontmatter.image8.image.childImageSharp.fluid}
                alt={frontmatter.image8.alt}
              />
            </div>
            <div id="fade" className="project__image9">
              <Img
                fadeIn={false}
                fluid={frontmatter.image9.image.childImageSharp.fluid}
                alt={frontmatter.image9.alt}
              />
            </div>
            <div id="fade" className="project__image10">
              <Img
                fadeIn={false}
                fluid={frontmatter.image10.image.childImageSharp.fluid}
                alt={frontmatter.image10.alt}
              />
            </div>
            <div id="fade" className="project__image11">
              <Img
                fadeIn={false}
                fluid={frontmatter.image11.image.childImageSharp.fluid}
                alt={frontmatter.image11.alt}
              />
            </div>
            <div id="fade" className="project__image12">
              <Img
                fadeIn={false}
                fluid={frontmatter.image12.image.childImageSharp.fluid}
                alt={frontmatter.image12.alt}
              />
            </div>
            <div id="fade" className="project__image13">
              <Img
                fadeIn={false}
                fluid={frontmatter.image13.image.childImageSharp.fluid}
                alt={frontmatter.image13.alt}
              />
            </div>
            <div id="fade" className="project__image14">
              <Img
                fadeIn={false}
                fluid={frontmatter.image14.image.childImageSharp.fluid}
                alt={frontmatter.image14.alt}
              />
            </div>
            <div id="fade" className="project__image15">
              <Img
                fadeIn={false}
                fluid={frontmatter.image15.image.childImageSharp.fluid}
                alt={frontmatter.image15.alt}
              />
            </div>
          </div>
        </div>
        <div className="next">
          <p className="next__project-title">{frontmatter.nextProject.name}</p>

          <p className="next__project">
            <AniLink
              cover
              to={frontmatter.nextProject.path}
              bg="black"
              direction="right"
            >
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
        nextProject {
          name
          path
        }
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
        image6 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image7 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image8 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image9 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image10 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image11 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image12 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image13 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image14 {
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        image15 {
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
