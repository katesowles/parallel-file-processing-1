![CF](http://i.imgur.com/7v5ASc8.png) Parallel File Processing
===

## Resources
* [Node fs docs](https://nodejs.org/api/fs.html)

##Description:
This assignment will have you create a json file persistence JavaScript 
module that takes an array of relative or absolute file paths and returns an array of javascript object deserliazed 
from each file in the directory.

This should happen _in parallel_, while still returning the results as an array in the same order
as the list of files that were provided. 

You need to have tests that verify the results.  Make sure you test with an diretly different 
file order than another test to ensure results are in correct order.

Standard repository artifacts should be influded.

##Bonus **2pts**
export CLI that wraps the above functionality by accepting two params:
* directory to list of json files
* output filename
And then writes serialized JSON of object array.

```sh
> node index.js ./files
file-01 4e3rek22
file-02 0dj4nsnc
file-03 999fdke3
```

##Rubric:

  * Proper Styling: 2pts
  * Proper Submission: 2pts
  * Files in parallel: 2pts
  * Preserve order: 2pts
  * Tests: 2pts
