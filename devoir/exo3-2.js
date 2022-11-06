function repert(directory,String){
    const fs =require("fs");
    const dir = directory;
    const path = require('path');
    
    fs.readdir(dir, (err, folder) => {   
      if (err) {
        throw err
      }
      files.forEach(file => {
        var filePath = path.join(dir, file);
        fs.readFile(filePath, function (err, data) {
        if (err) throw err;
        if(data.includes(String)){
         return console.log(file);
        }else {
         return console.log('none'); 
        }
      });
      })
    })}
    console.log(repert("C:/Users/pc car/Desktop/folder","saidani"));