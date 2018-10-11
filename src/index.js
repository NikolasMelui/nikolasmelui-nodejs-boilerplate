import http from 'http';
import {} from 'dotenv/config';
import { getClientHost, getClientPort } from './helpers';

http
  .createServer((req, res) => {
    res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
    res.end(
      `Hello from ${getClientHost(req)}:${getClientPort(
        req
      )} and welcome to the multikey-node-boilerplate!`
    );
  })
  .listen(process.env.SERVER_PORT, () =>
    console.log(`Server is listening on port ${process.env.SERVER_PORT}`)
  );
