/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ishtakar | EU Central - New World`,
    description: 'Ishtakar server website of New world. Providing information, guides and in the future, company services',
    author: '@psykzz',
    siteUrl: `https://ishtakar.eu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/companies`,
        name: `companies`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-nprogress",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
}
