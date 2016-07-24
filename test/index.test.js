const assert = require('chai').assert;
const start = require('../index').start;
const results = require('../global').results;
const names = require('../global').names;
const complete = require('../global').complete;

describe ('pause', () => {
  // this.timeout(5000);
  describe ('testing', () => {
    console.log('names sould be 5 but they\'re: ', names.length);
    console.log('results sould be 5 but they\'re: ', results.length);

    beforeEach( (done) => {
      start();
      done();
    });

    it ('matching number of outputs and number of files', () => {
      if (complete) {
        console.log('names sould be 5 but they\'re: ', names.length);
        console.log('results sould be 5 but they\'re: ', results.length);
        assert.equal(names.length, results.length * 2);
      }
    });

  });
});
// describe('a test', function(){
//   var foo = false;
//   beforeEach(function(done){
//     setTimeout(function(){
//       foo = true;
//       // complete the async beforeEach
//       done();
//     }, 50);
//   });
//   it('should pass', function(){
//     assert.equal(foo, true);
//   });
// });
