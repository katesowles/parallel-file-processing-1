const results = require('./global').results;
let names = require('./global').names;
const matchFileContents = require('./matchFileContents');

function pushFileNames (folder, files, callback) {
  files.forEach ((file, index) => {
    names = [index, file];
    results.push(names);
  });
  callback(folder, files, matchFileContents);
  // callback2(folder, files, callback3, callback4);
}

module.exports = pushFileNames;
