var fs = require('fs');
fs.readFile('D:/TRAINING - CODE/10. Node practice/text.txt',function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Next Activities");