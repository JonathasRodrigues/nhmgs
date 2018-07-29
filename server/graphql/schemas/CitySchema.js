const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const CityType = require('@objects/CityType');
const City = require('@models/City');

const CitySchema = new GraphQLObjectType({
    name: 'CitySchema',
    fields: {
      city: {
        type: CityType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args){
         return City.findById(args.id);
        }
      },
      listCities: {
       type: CityType,
       resolve(parent, args){
        return City.find();
       }
     },
    }
  });

  module.exports = CitySchema;
 