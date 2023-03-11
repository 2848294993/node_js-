function dateFormat(date){
    let date1=new Date(date);
    let YY=date1.getFullYear();
    let MM=padZero(date1.getMonth()+1);
    let DD=padZero(date1.getDate());
    let hh=padZero(date1.getHours());
    let mm=padZero(date1.getMinutes());
    let ss=padZero(date1.getSeconds());
    return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

// 定义补零函数
function padZero(x){
    return x>9 ? x : "0"+ x;
}

module.exports={
    dateFormat
}