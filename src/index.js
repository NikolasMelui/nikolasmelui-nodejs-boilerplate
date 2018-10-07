import http from 'http';

const config = {
  port: 3000
};

http
  .createServer((req, res) => {
    global.console.log();
    res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
    res.end(
      `Hello from port: ${
        config.port
      } and welcome to multikey-node-boilerplate!`
    );
  })
  .listen(config.port, () =>
    global.console.log(`Server is listening on port ${config.port}`)
  );
