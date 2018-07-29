const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  })
});

module.exports = CityType;
