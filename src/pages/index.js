import React from "react"
import "../styles/main.scss"
import Layout from "../components/layout"
import Logo from "../assets/images/logo.svg"
import handScroll from "../assets/images/hand-scroll.svg"

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
    </Layout>
  )
}
