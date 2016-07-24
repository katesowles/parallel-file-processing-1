const assert = require('chai').assert;
const start = require('../index').start;
const results = require('../lib/global').results;

describe ('text folder', () => {
  // process.argv[2] = 'text';
  it ('matching number of outputs and number of files', (done) => {
    assert.doesNotThrow(function() {
      start(function (err) {
        if (err) throw err;
        done();
      });
    });
    assert.equal(results.length, 6);
  });

  it.skip ('does the file content match the filename?', (done) => {
    // process.argv[2] = 'text';

    console.log(results[0][1].split('.'));
    console.log(results[0][2].split(' ') + 'abc');
    start('text', assert.equal(results[3][1].split('.')[0].toLowerCase(), results[3][2].split(' ')[0].toLowerCase()));
    done();
  });
});

describe ('people folder', () => {
  it.skip ('matching number of outputs and number of files', () => {
    start('people', assert.equal(results.length, 3));
  });

  it.skip ('does the file content match the filename?', () => {
    console.log(results[0][1].split('.'));
    console.log(results[0][2].split(' ') + 'abc');
    start('text', assert.equal(results[3][1].split('.')[0].toLowerCase(), results[3][2].split(' ')[0].toLowerCase()));
  });
});

// i cannot, for the life of me figure out how to have the tests wait until the function is done before they run. I've tried using hooks, the done() callback, working in promises instead of done() as well as a few other methods with no luck. I think I need to see it work in the context of this assignment (rather than an unrelated example) before it's going to cilck since I've spent so much time working on it (two days last week and all this weekend). epic waste of energy to get no closer to a resolution...
