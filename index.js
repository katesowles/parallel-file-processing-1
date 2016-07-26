const retrieveSortFiles = require('./lib/retrieveSortFiles');

retrieveSortFiles(__dirname + process.argv[2], (err,content) => {
  if (err) console.error(err);
  else {
    console.log('ALL DONE', content);
  }
});
