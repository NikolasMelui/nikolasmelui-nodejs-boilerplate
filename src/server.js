'use strict';

const http = require('http');
const { APPLICATION_HOST, APPLICATION_PORT } = require('./config');
const { getApplicationHost, getApplicationPort } = require('./helpers');

http
  .createServer((req, res) => {
    res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
    res.end(
      `Hello from ${getApplicationHost(req)}:${getApplicationPort(
        req,
      )} and welcome to the nikolasmelui-node-boilerplate!`,
    );
  })
  .listen(APPLICATION_PORT, APPLICATION_HOST, () =>
    console.log(
      `Server is listening on ${APPLICATION_HOST}:${APPLICATION_PORT}`,
    ),
  );
