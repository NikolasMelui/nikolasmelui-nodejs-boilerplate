'use strict';
const server = require('./server');

const { APPLICATION_HOST, APPLICATION_PORT } = require('./config');

const host = process.env.APPLICATION_HOST || APPLICATION_HOST;
const port = process.env.APPLICATION_PORT || APPLICATION_PORT;

(async () => {
  await server(host, port);
})();
