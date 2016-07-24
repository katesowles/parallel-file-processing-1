const sets = require('./global').sets;

const output = () => {
  console.log( 'RESULTS\n', sets);
};

module.exports = output;  // called from allOfType
