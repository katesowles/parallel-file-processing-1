const fs = require('fs');

const fileNames = [];
const fileContents = [];
const sets = [];
const checks = [];

const getFileNames = function (folder, callback) {
  fs.readdir(`./test/test-dir/${folder}`, (err,files) => {
    if (err) return console.error(err);
    else {
      files.forEach ((file, index) => {
        const set = [index, file];
        sets.push(set);
        fileNames[set[0]] = set[1];
      });
      callback(folder, files, printArrays);
    }
  });
};

const getFileContents = function (folder, files, callback) {

  // console.log(sets);

  fileNames.forEach ((name, index) => {
    fs.readFile(`./test/test-dir/${folder}/${name}`, {encoding:'utf-8'}, (err,contents) => {
      if (err) return console.error(err);
      else {
        const parsedContents = JSON.parse(contents).description;
        const shortParsedContents = parsedContents.slice(0,20);
        const check = [shortParsedContents + '...', index];
        checks.push(check);

        switch(check[1]) {
        case sets[0][0]:
          sets[0][2] = check[0];
          console.log('NEW AND IMPROVED: ',sets[0]);
          break;
        case sets[1][0]:
          sets[1][2] = check[0];
          console.log('NEW AND IMPROVED: ',sets[1]);
          break;
        case sets[2][0]:
          sets[2][2] = check[0];
          console.log('NEW AND IMPROVED: ',sets[2]);
          break;
        case sets[3][0]:
          sets[3][2] = check[0];
          console.log('NEW AND IMPROVED: ',sets[3]);
          break;
        case sets[4][0]:
          sets[4][2] = check[0];
          console.log('NEW AND IMPROVED: ',sets[4]);
          break;
        default:
        }



        // if (check[1] == sets[1]) {
        //   console.log('hello', 'index: ', check[1]);
        // } else if {
        //   console.log('nah');
        // }

        // sets.push(check);

        // fileContents[set[1]] = set[0];

        // const length = fileContents.push(shortParsedContents + '...');
        // if (sets2 === files.length) callback(fileNames, fileContents);
      }

    });

  });

};

const printArrays = function (fileNames, fileContents) {
  // console.log('sets', sets);
  console.log('sets2', sets2);
  // console.log(`NAMES : \n`, fileNames);
  // console.log(`CONTENTS : \n`, fileContents);
  console.log('done');
};

getFileNames('text', getFileContents);  // prints out a list of filenames from the given folder






//   fs.readFile(`./test/test-dir/${folder}`, {encoding:'utf-8'}, (err,files) => {
//     if (err) return console.error(err);
//     else {
//       files .forEach(file => {
//         console.log(fi);
//       })
//
//
//       console.log(files);
//     }
//   });
//   // console.log('done');
// };
