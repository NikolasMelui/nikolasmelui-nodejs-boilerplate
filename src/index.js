import http from 'http';
import {} from 'dotenv/config';

http
  .createServer((req, res) => {
    res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
    res.end(
      `Hello from port ${
        process.env.SERVER_PORT
      } and welcome to multikey-node-boilerplate!`
    );
  })
  .listen(process.env.SERVER_PORT, () =>
    console.log(`Server is listening on port ${process.env.SERVER_PORT}`)
  );
