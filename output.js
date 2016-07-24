const results = require('./global').results;
let complete = require('./global').complete;

function output () {
  console.log('here are the results:\n', results);
  complete = true;
  // console.log('one', results[3][1].split('.')[0].toLowerCase());
  // console.log('two', results[3][2].split(' ')[0].toLowerCase());
}

module.exports = output;
