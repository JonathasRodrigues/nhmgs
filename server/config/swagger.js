const { graphqlHapi } = require('apollo-server-hapi');
const Inert = require('inert');
const Vision = require('Vision');
const HapiSwagger = require('hapi-swagger');

const config  =  [
  Inert,
  Vision,
  { 
    plugin: HapiSwagger,
    options: {
     info: {
       title: 'NHMGS API Documentation',
       version: '0.1'
     }
    }
  }];

module.exports = config;