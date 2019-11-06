/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ktleen Lc`,
    description: `I’m Katleen, a french graphic and digital
    designer based in Bordeaux !`,
    author: `Ktleen Lc`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/projects/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/projets/`
      }
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ktleen Lc`,
        short_name: `Ktleen Lc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        description: `I’m Katleen, a french graphic and digital
        designer based in Bordeaux !`,
        lang: `en`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
