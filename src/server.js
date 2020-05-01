'use strict';

// Libraries
const http = require('http');

// DonEnv
const dotenv = require('dotenv');
dotenv.config();
const { APPLICATION_HOST, APPLICATION_PORT } = process.env;

// Helpers
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
