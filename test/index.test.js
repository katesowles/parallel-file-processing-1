const fs = require('fs');

const assert = require('chai').assert;
const start = require('../index').start;
const results = require('../global').results;
// const names = require('../global').names;
// const complete = require('../global').complete;


describe ('text folder', () => {
  it ('matching number of outputs and number of files', () => {
    start('text', assert.equal(results.length, 5));
  });
});

describe ('people folder', () => {
  it ('matching number of outputs and number of files', () => {
    start('people', assert.equal(results.length, 3));
  });
});

// function countFiles() {
//   return new Promise(function(resolve, reject) {
//     var temp = [];
//
//     fs.readdir('./test/test-dir/text', (err,files) => {
//       if (err) {
//         reject(err);
//       }
//
//       temp.push(files);
//     });
//
//     resolve(temp.length);
//   });
// }
