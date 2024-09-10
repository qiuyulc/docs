module.exports = function(content){
    console.log('loader3');
    return content;
}

//在loader执行前执行。
module.exports.pitch = function(){
    console.log('pitch3');
}