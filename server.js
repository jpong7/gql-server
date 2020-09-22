var express = require('express')
var express_graphql = require('express-graphql').graphqlHTTP
var { buildSchema } = require('graphql')

//GraphQL Schema
var schema = buildSchema(`
  type Query {
    message: String
  }
`)

var root = {
  message: () => 'Hello World',
}

// Create express server and GQL Endpoint
var app = express()
app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

app.listen(4000, () => console.log('Express GQL Now Running On localhost:4000/graphql'))
