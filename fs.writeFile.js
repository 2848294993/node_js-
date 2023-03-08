const fs=require("fs");
const path=require("path");
fs.writeFile(path.join(__dirname,"./writeFile.txt"),"我是被写的文件","utf-8",(err)=>{
    if(err) return console.log("文件写入失败，"+err.message);
    console.log("写入文件成功");
})