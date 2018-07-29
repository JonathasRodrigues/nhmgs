const graphql = require('graphql');
const CitySchema = require('@schemas/CitySchema');
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: CitySchema
});