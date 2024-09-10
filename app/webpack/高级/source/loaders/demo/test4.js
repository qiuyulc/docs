module.exports = function(content){
    console.log('loader1');
    return content;
}

//在loader执行前执行。
module.exports.pitch = function(){
    console.log('pitch1');
}