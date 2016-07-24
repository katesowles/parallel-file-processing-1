const fs = require('fs');
const getFileContents = require('./getFileContents');

function accessDirectory (folder, callback) {
  fs.readdir(__dirname + `/../test/test-dir/${folder}`, (err,files) => {
    if (err) {
      return console.error(err);
    }
    else {
      callback(folder, files, getFileContents);
    }
  });
}

module.exports = accessDirectory;
