module.exports = function(content){
    console.log('loader2');
    return content;
}

//在loader执行前执行。
//如果有return 的话，那么他往后的paitch都不会执行了，如果当前有loader 就执行当前的，其他的loader是不执行的。
module.exports.pitch = function(){
    console.log('pitch2');
    return 'result';
}