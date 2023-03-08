const path=require("path");
const fs=require("fs");

function dealData(data){
    
    return data.replace(/=/g,"：").replace(/\s+/g,"\r\n");

}
fs.readFile(path.join(__dirname,"./grade.txt"),"utf-8",(err,data)=>{
    if(err) return console.log("读取文件失败："+err.message);
    // 用一个函数处理得到的字符串
    let data1=dealData(data);
    fs.writeFile(path.join(__dirname,"./grade1.txt"),data1,"utf-8",(err)=>{
        if(err) return console.log("写入文件失败："+err.message);
    })
    console.log("写入成功");
})