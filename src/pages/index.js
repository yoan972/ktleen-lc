import React from "react"
import "../styles/main.scss"
import Layout from "../components/layout"
import Logo from "../assets/images/logo.svg"
import handScroll from "../assets/images/hand-scroll.svg"
import logoIcon from "../assets/images/logo-icon.svg"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
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
          <li className="works-list__item">
            <div className="work">
              <Link to="/other" className="work__title">
                Explicite.info
              </Link>
              <div className="work__subtitle">
                <p>Brand content, adverstising</p>
              </div>
              <div className="work__img">
                <img
                  alt="preview project"
                  src="https://picsum.photos/id/337/680/379"
                />
              </div>
            </div>
          </li>
          <li className="works-list__item">
            <div className="work">
              <Link to="/other" className="work__title">
                Renault
              </Link>
              <div className="work__subtitle">
                <p>Brand content, adverstising</p>
              </div>
              <div className="work__img">
                <img
                  alt="preview project"
                  src="https://picsum.photos/id/337/680/379"
                />
              </div>
            </div>
          </li>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li className="works-list__item" key={node.id}>
              <div className="work">
                <Link to="/other" className="work__title">
                  {node.frontmatter.title}
                </Link>
                <div className="work__subtitle">
                  <p>{node.frontmatter.subtitle}</p>
                </div>
                <div className="work__img">
                  <img alt={node.frontmatter.alt} src={node.frontmatter.img} />
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
      <footer className="footer">
        <p>
          <a href="/" className="social">
            linkedin
          </a>
        </p>
        <p>
          <a href="/" className="social">
            instagram
          </a>
        </p>
        <p>
          <a href="/" className="social">
            pinterest
          </a>
        </p>
        <div className="footer__logo">
          <img src={logoIcon} alt="KLC Logo" />
        </div>
      </footer>
    </Layout>
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
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
