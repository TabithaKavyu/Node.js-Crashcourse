const path = require('path');

//Basefilename
console.log(path.basename(__filename));

//Directoryname
console.log(path.dirname(__filename));

//Fileextension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//Concatenate paths
 console.log(path.join(__dirname, 'test','hello.html'))
