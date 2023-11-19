const fs=require('fs');
const readStream=fs.createReadStream('D:/TRAINING - CODE/10. Node practice/text.txt','utf8');
const writeStream=fs.createWriteStream('D:/TRAINING - CODE/10. Node practice/captaltext.txt','utf8')

readStream.pipe(writeStream);
readStream.on('data',(chunk)=>{
    console.log('Data chunk received:',chunk);
});
readStream.on('end',()=>{
    console.log('Read stream ended');
});
readStream.on('error',(err)=>{
    console.log('Read stream error:',err);
});
writeStream.on('finish',()=>{
    console.log("Write stream finished writing to capitaltext.txt");
});
writeStream.on('error',()=>{
    console.log("Write stream error:",err);
})