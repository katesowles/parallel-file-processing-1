const contentSet = require('./global').contentSet;
const results = require('./global').results;

function matchFileContents (callback) {
  if (contentSet.length === results.length) {
    contentSet.forEach ((singleContent) => {
      const toMatch = singleContent[1].slice(0,3).toLowerCase();
      for (let i = 0; i < results.length; i++) {
        const toCheck = results[i][1].slice(0,3).toLowerCase();
        switch (toMatch.toLowerCase()) {
        case toCheck:
          results[i][2] = singleContent[1];
          break;
        }
      }
    });
    callback();
  }
}

module.exports = matchFileContents;
