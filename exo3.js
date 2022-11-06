const fs =require("fs");
const path = require('path')
const fileChecker = async (text,c,h,m) => {

const grp = [c,h,m];
 for(let i=0;i<grp.length;i++){
    const name =path.basename(grp[i]);
    fs.readFile(grp[i], function(err,data){
        if(err) throw err;
        if(data.includes(text)){
            return console.log(name);
        }else{
            return console.log('none')
        }
    });
}
}
    fileChecker('saidani','text1.txt','text2.txt')

