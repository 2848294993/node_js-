const path=require("path");
// path.join(path[,ext])
let str=path.join(__dirname,"./path.basename.js");
console.log(path.basename(str));
console.log(path.basename(str,".js"));