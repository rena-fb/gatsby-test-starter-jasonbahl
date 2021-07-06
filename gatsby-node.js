const path = require(`path`)
exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPostTemplate.js")

  const result = await graphql (`
  {
    allWpPost (limit: 10) {
      edges {
        node {
          uri
          id
        }
      }
    }
  }  
  `)
    
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allWpPost.edges.forEach(element => {
    console.log (element.node.uri)  
    createPage ({ 
          path: element.node.uri,
          component: BlogPostTemplate,
          context: { 
              id: element.node.id
          }
       })
  });
}