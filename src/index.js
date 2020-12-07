'use strict';
const server = require('./server');

const { APPLICATION_HOST, APPLICATION_PORT } = require('./config');

(async () => {
  await server(APPLICATION_HOST, APPLICATION_PORT);
})();
