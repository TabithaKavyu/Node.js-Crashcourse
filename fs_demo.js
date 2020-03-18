const fs = require('fs');
const path = require('path');

//create folder   
 //fs.mkdir(path.join(__dirname, '/test'), {}, err=> {
     //if (err) throw err;
     //console.log('Folder created...');
 //});

 /*create and write file
 fs.writeFile(
     path.join(__dirname, '/test', 'hello.txt'),
     'The World is Yours!', err=> {
         if (err) throw err;
         console.log('Obinna just wrote to this file..');
        //file append
         fs.appendFile(
            path.join(__dirname, '/test', 'hello.txt'),
            'I love Node.js!', err=> {
                if (err) throw err;
                console.log('file written to..');
               }
           );
        }
    );
    */
   //Read File
   //fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    //if (err) throw err;
    //console.log(data);
   //});

    //Rename File
    //Read File
   fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt') , (err) => {
    if (err) throw err;
    console.log('File renamed...');
   });
