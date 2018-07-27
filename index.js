const hapi = require('hapi');
require('dotenv').config();
const DataBaseConnection = require('./server/config/database');
const routes = require('./server/routes');

const server = hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
})

const init = async () => {
  DataBaseConnection();
  server.route(routes);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`)
}

init();