const fs = require('fs');

function readFileContents (folder, files, callback) {
  var contentSet = [];
  var counter = 0;
  files.forEach ((name, index) => {
    fs.readFile(`${folder}/${name}`, {encoding:'utf-8'}, (err,contents) => {
      if (err) return callback(err);

      const parsedContents = JSON.parse(contents).description;
      const shortParsedContents = parsedContents.slice(0,20);
      contentSet[index] = shortParsedContents;

      counter++;
      if (counter === files.length) {
        callback(null, contentSet);
        // console.log('\n\nRESULTS: ', contentSet, '\n\n');
        // return contentSet;
      }
    });

  });
}

module.exports = readFileContents;
