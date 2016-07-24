const fs = require('fs');
const getFileContents = require('./getFileContents');
const fileNames = require('./global').fileNames;
const names = require('./global').names;
let nameSet = require('./global').nameSet;

function getFileNames (folder) {

  fs.readdir(`./test/test-dir/${folder}`, (err,files) => {

    if (err) return console.error(err);

    else {
      files.forEach ((file, index) => {
        nameSet = [index, file];
        names.push(nameSet);
        fileNames[nameSet[0]] = nameSet[1];
      });
      console.log(names);
      getFileContents(folder);
      // pushToArray(folder, files, whichSet, whichArray);
    }
  });
}

module.exports = getFileNames;  // called from allOfType
