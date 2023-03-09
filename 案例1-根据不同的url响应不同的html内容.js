const http=require("http");
let server=http.createServer();
server.on("request",(req,res)=>{
    res.setHeader("Content-Type","text/html;charset=utf-8");
    let url=req.url;
    if(url==="/" || url==="/index.html"){
        res.end("<h1>这是首页</h1>");
    }else if(url === "/about.html"){
        res.end("<h1>这是一个关于页面</h1>");
    }
})
server.listen(8080,()=>{
    console.log("http server run at http://127.0.0.1:8080");
})