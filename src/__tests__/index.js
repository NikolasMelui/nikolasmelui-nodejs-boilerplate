'use strict';

const fs = require('fs').promises;
const path = require('path');
const assert = require('assert').strict;

const tests = {
  equal: (description, actual, expected) => {
    console.log(`Description: ${description}`);
    try {
      assert.equal(actual, expected);
      console.log(
        '\x1b[32m',
        `Test passed with result - '${actual}'`,
        '\x1b[0m',
      );
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};

module.exports = tests;

(async () => {
  try {
    const tests = (await fs.readdir(__dirname)).filter((filename) =>
      filename.includes('.test.js'),
    );
    for (const test of tests) {
      console.info(`Test: ${test}`);
      const testPath = path.resolve(__dirname, test);
      require(testPath);
    }
  } catch (error) {
    console.error(error);
  }
})();
