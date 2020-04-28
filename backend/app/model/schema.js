const {buildSchema} = require('graphql');

const schema = buildSchema(`
 type Query {
  news: [News!]!
 }
 type Mutation {
  createNews(title: String!, body: String!): News!
  updateNews(newsId: ID!, title: String, body: String): News!
  deleteNews(newsId: String!):News
  addNewsLike(newsId: String!): News!
  deleteNewsLike(newsId: String!): News!
  }

    type News {
    id: ID!
    title: String!
    body: String!
    likes: [User!]!
  }
  

type User {
    id: ID!
    name: String
    email: String
  }
`);

module.exports = schema;
