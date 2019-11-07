import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <main>
    <Helmet>
      <html lang="en"></html>
      <meta charSet="utf-8" />
      <title>Katleen Lc</title>
      <meta
        name="description"
        content="I’m Katleen, a french graphic and digital designer based in Bordeaux !"
      />
      <meta property="og:title" content="Katleen Lc" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="../../static/icon.svg" />
      <meta
        property="og:description"
        content="I’m Katleen, a french graphic and digital designer based in Bordeaux !"
      />
    </Helmet>
    <div>{children}</div>
  </main>
)
