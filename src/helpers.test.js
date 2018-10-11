import { getServerHost, getServerPort } from './helpers';

test('should output the server hostname', () => {
  const serverHost = getServerHost({
    headers: {
      host: 'localhost:3000'
    }
  });
  expect(serverHost).toBe('localhost');
});

test('should output the server port', () => {
  const serverPort = getServerPort({
    headers: {
      host: 'localhost:3000'
    }
  });
  expect(serverPort).toBe('3000');
});
