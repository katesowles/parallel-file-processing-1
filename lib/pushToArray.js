const getFileContents = require('./getFileContents');
const fileNames = require('./global').fileNames;
let firstTime = require('./global').firstTime;

function pushToArray (folder, files, whichSet, whichArray) {
  files.forEach ((file, index) => {
    whichSet = [index, file];
    whichArray.push(whichSet);
    fileNames[whichSet[0]] = whichSet[1];
  });

  if (firstTime) {
    getFileContents(folder);
    firstTime = false;
    console.log('first time through');
  }
  else {
    // output(folder, files);
    console.log('second time through');
  }
}

module.exports = pushToArray; // calls to getFileContents the first time, then output the second time.
