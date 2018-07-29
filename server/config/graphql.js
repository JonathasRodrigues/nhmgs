const { graphqlHapi } = require('apollo-server-hapi');
const schema = require('@server/graphql/schema');

const config  =  { 
  plugin: graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema
    },
    route: {
      cors: true
    }
  }
};

module.exports = config;