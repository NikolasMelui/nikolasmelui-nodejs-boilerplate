'use strict';

// Tests
const { equal } = require('.');

// Mock data
const serverData = require('./mocks/serverData');

const { getApplicationHost, getApplicationPort } = require('../helpers');

equal(
  'Should output the application host',
  getApplicationHost(serverData),
  '127.0.0.1',
);

equal(
  'Should output the application port',
  getApplicationPort(serverData),
  '3000',
);
