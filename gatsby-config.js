require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `S4DC Gatsby Boilerplate`,
    siteUrl: `https://gatsbyboilerplatemaster.gatsbyjs.io/`,
  },

  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // url: process.env.WPGRAPHQL_URL || `https://onmed-cms.com/graphql/`,
        url: `https://nathanh85.sg-host.com/graphql`,
        useACF: true,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `dominantColor`,
          quality: 75,
          breakpoints: [768, 992, 1200, 1400],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/favicon/favicon.svg",
      },
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    `gatsby-plugin-client-side-redirect`, // keep it in last in list
  ],
}
