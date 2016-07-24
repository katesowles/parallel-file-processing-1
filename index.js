const accessDirectory = require('./accessDirectory');
const pushFileNames = require('./pushFileNames');

function start (folder, callback) {
  accessDirectory(folder, pushFileNames);
  if (callback != undefined) {
    callback();
  }
}

start(process.argv[2]);

exports.start = start;
