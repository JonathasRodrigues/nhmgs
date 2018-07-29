require('module-alias/register');
require('dotenv').config();

const hapi = require('hapi');
const DataBaseConnection = require('@config/database');
const routes = require('@routes');
const graphiql = require('@config/graphiql');
const graphql = require('@config/graphql');


const server = hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
});

const init = async () => {
  try {
    DataBaseConnection();
    await server.register(graphiql);
    await server.register(graphql);
    server.route(routes);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
  } catch(error) {
    console.log(error);
  }
};

init();