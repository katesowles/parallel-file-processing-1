const fs = require('fs');
const getFileContents = require('./getFileContents');

function accessDirectory (folder, callback) {
  fs.readdir(`./test/test-dir/${folder}`, (err,files) => {
    if (err) {
      return console.error(err);
    }
    else {
      callback(folder, files, getFileContents);
      // callback(folder, files, callback2, callback3, callback4);
    }
  });
}

module.exports = accessDirectory;
