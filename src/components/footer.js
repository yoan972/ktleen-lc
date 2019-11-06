import React from "react"
import logoIcon from "../assets/images/logo-icon.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
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
      <AniLink cover to="/" bg="black" direction="right">
        <div className="footer__logo">
          <img src={logoIcon} alt="KLC Logo" />
        </div>
      </AniLink>
    </footer>
  )
}

export default Footer
