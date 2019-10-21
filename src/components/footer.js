import React from "react"
import logoIcon from "../assets/images/logo-icon.svg"

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
      <div className="footer__logo">
        <img src={logoIcon} alt="KLC Logo" />
      </div>
    </footer>
  )
}

export default Footer
