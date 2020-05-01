'use strict';

const getApplicationHost = (req) => req.headers.host.split(':')[0];
const getApplicationPort = (req) => req.headers.host.split(':').pop();

module.exports = { getApplicationHost, getApplicationPort };
