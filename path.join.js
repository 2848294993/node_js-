const path=require("path");
console.log(__dirname);
// path.join([...paths])
let str=path.join(__dirname,"./path.join.js");
console.log(str);

let str1=path.join("/a","/b","/c/d","../","e");
console.log(str1);
let str2=path.join("/a","/b","/c/d","../../","e");
console.log(str2);
let str3=path.join("/a","/b","/c/d","./","e");
console.log(str3);