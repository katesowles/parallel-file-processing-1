const fs = require('fs');
const pushToArray = require('./pushToArray');
const fileNames = require('./global').fileNames;
const contents = require('./global').contents;
const contentSet = require('./global').contentSet;
const names = require('./global').names;
// let nameSet = require('./global').nameSet;
const sets = require('./global').sets;


function getFileContents (folder) {
  const whichSet = contentSet;
  const whichArray = contents;

  // const content = [];

  fileNames.forEach((name, index) => {
    fs.readFile(`./test/test-dir/${folder}/${name}`, {encoding:'utf-8'}, (err, files) => {

      if (err) return console.error(err);

      else {
        const parsedContents = JSON.parse(files).description;
        const shortParsedContents = parsedContents.slice(0,20);
        const contentSet = [shortParsedContents + '...', index];

        contents.push(contentSet);
        for ( var i = 0; i < names.length; i++ ) {
          if (contentSet[1] === names[i][0]) {
            sets[i] = [];
            sets[i][0] = names[i][0]; // set index
            sets[i][1] = names[i][1]; // set name
            sets[i][2] = contentSet[0];  // set content
          }
        }
        if (sets.length === files.length) {
          console.log('got here');
          console.log(typeof pushToArray);
          // pushToArray(folder, files, whichSet, whichArray);
          output();
        }
      }
    });
  });
}

module.exports = getFileContents;  // called from allOfType
