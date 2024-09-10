//同步loader
//1
// module.exports = function (content){
//     return content
// }
//2
module.exports = function(content,map,meta){
    /*
    第一个参数：err代表是否有错误
    第二个参数：content代表处理后的内容
    第三个参数 source-map 继续传递source-map
    第四个参数：meta给下一个loader传递参数
    
    */
   

   console.log('test1');
   this.callback(null, content,map,meta);

   //同步loader中不能使用异步loader
//    setTimeout(()=>{
//     this.callback(null, content,map,meta);
//    })
}