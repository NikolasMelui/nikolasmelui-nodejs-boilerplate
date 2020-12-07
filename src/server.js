'use strict';

const http = require('http');
const { getApplicationHost, getApplicationPort } = require('./helpers');

const server = (host, port) => {
  http
    .createServer((req, res) => {
      res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
      res.end(
        `Hello from ${getApplicationHost(req)}:${getApplicationPort(
          req,
        )} and welcome to the nikolasmelui-node-boilerplate!`,
      );
    })
    .listen(port, host, () =>
      console.info(`Server is listening on http://${host}:${port}`),
    );
};

module.exports = server;
