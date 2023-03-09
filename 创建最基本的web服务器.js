// 1.导入http模块
const http=require("http");

// 2.使用http.createServer()创建一个服务器实例
let server=http.createServer();

// 3.为服务器实例绑定request事件
server.on("request",(req,res)=>{
    // 解决中文乱码问题
    res.setHeader("Content-Type","text/html;charset=utf-8");
    // 只要有客户端来请求我们的自己的服务器，就会触发request事件，从而调用这个事件处理函数
    // req是请求对象，包含了与客户端相关的数据与属性：
    // req.url是客户端请求的url地址
    // req.method是客户端的请求类型（get/post）
    console.log(`您的请求地址为${req.url},您的请求方式为${req.method}`);
    // res是响应对象，包含了与服务器相关的数据和属性：
    // res.end()：向客户端发送指定的内容，并结束这次请求
    let str=`<h1>您的请求地址为${req.url},您的请求方式为${req.method}<\h1>`
    res.end(str)
    console.log("someone visit our server");
})

// 4.启动服务器
server.listen(8080,()=>{
    // 启动服务器成功时的回调函数
    console.log("http server run at http://127.0.0.1:8080");
})


