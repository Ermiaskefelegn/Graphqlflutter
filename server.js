const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./Typedefns/schema");
const { resolvers } = require("./Resolvers/resolver");
const db = require("./models/index");
const express = require("express");

const PORT = 4000;

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
  });
  try {
    await server.start();
    db.sequelize.authenticate().then(() => {
      console.log("database connection has been established successfully.");
      server.applyMiddleware({ app });
      app.listen({ port: PORT }, () => {
        console.log(
          `🚀🚀🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`
        );
      });
    });
  } catch (error) {
    return error;
  }
}
startApolloServer();
