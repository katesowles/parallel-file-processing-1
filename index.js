const accessDirectory = require('./lib/accessDirectory');
const pushFileNames = require('./lib/pushFileNames');

function start (folder, callback) {
  accessDirectory(folder, pushFileNames);
  if (callback != undefined) {
    callback();
  }
}

start(process.argv[2]);

exports.start = start;
