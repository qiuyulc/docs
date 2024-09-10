module.exports = function(content){
    //清理文件内容中console.log(xxx)
    return content.replace(/console\.log\(.*\)?/g,"");
}