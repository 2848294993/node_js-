const fs=require("fs");
const { resolve } = require("path");
const path=require("path");

let style_reg=/<style>[\s\S]*<\/style>/;
let script_reg=/<script>[\s\S]*<\/script>/;
function resolveStyle(data){
    let style=style_reg.exec(data)[0].replace("<style>","").replace("</style>","");
    // console.log(style[0]);
    fs.writeFile(path.join(__dirname,"./clock/index.css"),style,"utf-8",(err)=>{
        if(err) return console.log("css文件写入失败："+ err.message);
    })
}

function resolveScript(data){
    let script=script_reg.exec(data)[0].replace("<script>","").replace("</script>","");
    // console.log(script[0]);
    fs.writeFile(path.join(__dirname,"./clock/index.js"),script,"utf-8",(err)=>{
        if(err) return console.log("js文件写入失败："+ err.message);
    })
}

function resolveHtml(data){
    let html=data.replace(style_reg,"<link rel='stylesheet' href='./index.css'>").replace(script_reg,"<script src='./index.js'></script>");
    fs.writeFile(path.join(__dirname,"./clock/index.html"),html,"utf-8",(err)=>{
        if(err) return console.log("html文件写入失败"+err.message);
    })
}

fs.readFile(path.join(__dirname,"./index.html"),"utf-8",(err,data)=>{
    if(err) return console.log("读取文件失败："+err.message);
    // console.log(data);
    resolveStyle(data);
    resolveScript(data);
    resolveHtml(data);
})
