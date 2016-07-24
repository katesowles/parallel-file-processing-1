const fs = require('fs');
const contentSet = require('./global').contentSet;
const output = require('./output');

function getFileContents (folder, files, callback) {
  files.forEach ((name, index) => {
    fs.readFile(`./test/test-dir/${folder}/${name}`, {encoding:'utf-8'}, (err,contents) => {
      if (err) {
        return console.error(err);
      }
      else {
        const parsedContents = JSON.parse(contents).description;
        const shortParsedContents = parsedContents.slice(0,20);
        contents = [index, `${shortParsedContents}...`];
        contentSet.push(contents);
      }
      callback(output);
      // callback3(callback4);
    });
  });
}

module.exports = getFileContents;
