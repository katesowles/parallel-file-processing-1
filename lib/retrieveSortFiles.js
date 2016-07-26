const fs = require('fs');
const readFileContents = require('./readFileContents');

function retrieveSortFiles (folder, callback) {
  fs.readdir(folder, (err,files) => {
    if (err) {
      callback(err);
    }
    else {
      readFileContents(folder, files, (err, contents) => {
        if (err) return callback (err);
        var results = contents.map((eachFile, index) => {
          return {
            name : files[index],
            contents : eachFile + '...'
          };
        });
        callback(null,results);
        // console.log('\n\nRESULTS: ', results, '\n\n');
        return results;
      });
    }
  });
}

module.exports = retrieveSortFiles;
