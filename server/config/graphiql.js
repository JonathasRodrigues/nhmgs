const { graphiqlHapi } = require('apollo-server-hapi');

const config = { 
  plugin: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: process.env.API_GRAPHQL
    },
    route: {
      cors: true
    }
  }
};

module.exports = config;