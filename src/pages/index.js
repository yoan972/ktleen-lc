import React from "react"
import "../styles/main.scss"
import Logo from "../assets/images/logo.svg"
import handScroll from "../assets/images/hand-scroll.svg"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default ({ data }) => {
  const handleOpacityHoverEffect = elem => {
    elem.classList.contains("current")
      ? elem.classList.remove("current")
      : elem.classList.add("current")
    const workList = document.querySelectorAll(".work__title")
    workList.forEach(title => {
      title.classList.contains("lighter")
        ? title.classList.remove("lighter")
        : title.classList.add("lighter")
    })
  }
  return (
    <div className="wrapper">
      <nav className="menu">
        <div className="menu__item">works</div>
        <div className="menu__item">art director</div>
        <div className="menu__item">contact</div>
      </nav>
      <header className="header">
        <div className="header__logo">
          <img src={Logo} className="logo" alt="katleen lc main logo" />
        </div>
        <div className="header__hand-scroll">
          <img src={handScroll} alt="hand finger pointing down" />
        </div>
      </header>
      <section className="about section">
        <h2 className="section__title">about</h2>
        <p className="section__text bold">Hello everyone,</p>
        <h1 className="section__text">
          I’m Katleen, a french&nbsp;
          <span className="hoverlined">graphic and digital</span>
          <br />
          <span className="hoverlined">designer</span>&nbsp;based in Bordeaux !
        </h1>
      </section>
      <section className="work section">
        <h2 className="section__title" id="works">
          works
        </h2>
        <ul className="works-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li className="works-list__item" key={node.id}>
              <div className="work">
                <AniLink
                  cover
                  to={node.frontmatter.path}
                  bg="black"
                  direction="left"
                  className="work__title"
                  onMouseEnter={e => handleOpacityHoverEffect(e.target)}
                  onMouseLeave={e => handleOpacityHoverEffect(e.target)}
                >
                  {node.frontmatter.title}
                </AniLink>
                <div className="work__subtitle">
                  <p>{node.frontmatter.subtitle}</p>
                </div>
                <div className="work__img">
                  <Img
                    alt={node.frontmatter.alt}
                    fluid={node.frontmatter.img.childImageSharp.fluid}
                    style={{ display: "block" }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="profile" className="profile section">
        <h2 className="section__title">profile</h2>
        <p className="section__text">
          Iʼm a multidisplinary designer specializing in
          <br />
          <span className="hoverlined">UI Design, illustration &</span>{" "}
          <span className="hoverlined">brand design.</span>
        </p>
        <div className="profile__details">
          <div className="profile__about">
            <h3 className="profile__title">About</h3>
            <p className="profile__text">
              Throughout my 5 years of experience I have worked for various
              companies and agencies like Veepee (ex venteprivée.com), Le Figaro
              Digital, Dayuse.com, 5eme gauche.
              <br /> This last year, I have also been working as a freelancer
              collaborating with different clients.
            </p>
          </div>
          <div className="profile__other">
            <h3 className="profile__title">Skills</h3>
            <p className="profile__text">
              Art direction, UI Design, branding, Illustration, typography,
              photomontage, retouche photo…
            </p>
            <h3 className="profile__title">Contact</h3>
            <p className="profile__text profile__contact">
              contact@katleenlc.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date
            path
            img {
              childImageSharp {
                fluid(maxWidth: 680, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`
