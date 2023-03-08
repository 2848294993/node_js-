const fs=require('fs');
const path=require('path');
// fs.readFile(path[,编码格式],callback)
fs.readFile(path.join(__dirname,"./readFile.txt"),"utf-8",(err,data)=>{
    if(err) return console.log("读取文件失败"+err.message);
    console.log("读取文件成功"+data);
})
        

