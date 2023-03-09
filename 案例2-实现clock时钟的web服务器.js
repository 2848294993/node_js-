const http=require("http");
const path=require("path");
const fs=require("fs");

let server=http.createServer();
server.on("request",(req,res)=>{
    // res.setHeader("Content-Type","text/html;charset=utf-8");
    let url=path.join(__dirname,"/clock",req.url);
    fs.readFile(url,"utf-8",(err,data)=>{
        if(err) return console.log("读取文件失败："+err.message);
        res.end(data);
    })
})

server.listen(8080,()=>{
    console.log("http server run at http://127.0.0.1:8080");
})