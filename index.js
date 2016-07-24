const accessDirectory = require('./accessDirectory');
const pushFileNames = require('./pushFileNames');

function start (folder, callback) {
  console.log('folder', folder);
  accessDirectory(folder, pushFileNames);
  // accessDirectory('text', pushFileNames, getFileContents, matchFileContents, output);
  if (callback != undefined) {
    callback();
  }
}

start(process.argv[2]);

exports.start = start;
