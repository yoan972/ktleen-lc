import React from "react"
import "../styles/main.scss"
import Layout from "../components/layout"
import Logo from "../assets/images/logo.svg"
import handScroll from "../assets/images/hand-scroll.svg"
import { Link } from "gatsby"

export default () => {
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
              <Link to="/" className="work__title">
                Explicite.info
              </Link>
            </div>
          </li>
          <li className="works-list__item">
            <div className="work">
              <Link to="/" className="work__title">
                Renault
              </Link>
            </div>
          </li>
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
            <h3 className="profile__title">contact</h3>
            <p className="profile__text profile__contact">
              contact@katleenlc.com
            </p>
          </div>
        </div>
      </section>
      <footer></footer>
    </Layout>
  )
}
