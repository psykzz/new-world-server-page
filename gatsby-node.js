const path = require("path")
exports.createPages = async ({ actions, graphql, reporter }) => {
    await buildCompanyPages({ actions, graphql, reporter });
}

const buildCompanyPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const template = path.resolve(`src/templates/company.js`)
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/company/${node.frontmatter.slug}`,
        component: template,
        context: {
            slug: node.frontmatter.slug
        }
      })
    })
}