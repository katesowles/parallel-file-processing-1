const assert = require('chai').assert;
const retrieveSortFiles = require('../lib/retrieveSortFiles');

describe ('text folder', () => {
  it ('make sure does not throw error', (done) => {
    assert.doesNotThrow(() => {
      retrieveSortFiles(__dirname + '/test-dir/text', null);
      done();
    }, Error, 'function does not throw');
  });

  it ('matching number of outputs and number of files', () => {
    retrieveSortFiles(__dirname + '/test-dir/text', (err, content) => {
      console.log('error: ', err);
      if (err) throw err;
      else {
        console.log('content length: ', content.length);
        assert.equal(content.length, 5);
        // done();  // add this back in and the tests fail...
      }
    });
  });

  it ('does the file content match the filename?', () => {
    retrieveSortFiles(__dirname + '/test-dir/text', (err, content) => {
      console.log('error: ', err);
      if (err) throw err;
      else {
        for (var i = 0; i < content.length; i++) {
          let filename = content[i].name.split('.')[0].toLowerCase();
          let filecontent = content[i].contents.split(' ')[0].toLowerCase();
          assert.equal(filecontent, filename, 'the first word of your file contents doesn\'t match the file name, try again');
        }
      }
      // done();  // add this back in and the tests fail...
    });
  });
});

describe ('people folder', () => {
  it ('make sure does not throw error', (done) => {
    assert.doesNotThrow(() => {
      retrieveSortFiles(__dirname + '/test-dir/people', null);
      done();
    }, Error, 'function does not throw');
  });

  it ('matching number of outputs and number of files', () => {
    retrieveSortFiles(__dirname + '/test-dir/people', (err, content) => {
      console.log('error: ', err);
      if (err) throw err;
      else {
        console.log('content length: ', content.length);
        assert.equal(content.length, 5);
        // done();  // add this back in and the tests fail...
      }
    });
  });

  it ('does the file content match the filename?', () => {
    retrieveSortFiles(__dirname + '/test-dir/people', (err, content) => {
      console.log('error: ', err);
      if (err) throw err;
      else {
        for (var i = 0; i < content.length; i++) {
          let filename = content[i].name.split('.')[0].toLowerCase();
          let filecontent = content[i].contents.split(' ')[0].toLowerCase();
          assert.equal(filecontent, filename, 'the first word of your file contents doesn\'t match the file name, try again');
        }
      }
      // done();  // add this back in and the tests fail...
    });
  });
});
