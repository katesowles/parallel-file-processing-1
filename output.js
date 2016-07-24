const results = require('./global').results;
let complete = require('./global').complete;

function output () {
  console.log('here are the results:\n', results);
  complete = true;
}

module.exports = output;
