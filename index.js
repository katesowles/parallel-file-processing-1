const accessDirectory = require('./accessDirectory');
const pushFileNames = require('./pushFileNames');

function start () {
  accessDirectory('text', pushFileNames);
  // accessDirectory('text', pushFileNames, getFileContents, matchFileContents, output);
}

start();

exports.start = start;
