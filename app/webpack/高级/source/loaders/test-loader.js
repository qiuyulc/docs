
/**
 * loader 就是一个函数
 * 当webpack解析资源是会调用相应的loader去处理。
 * loader接受到文件内容作为参数，返回内容出去。
 * map SourceMap 是一个源码映射文件，它帮助开发者在调试的时候可以映射到源码，而不是编译后的代码。
 * meta 是一个元数据，可以传递给下一个loader
 */


module.exports = function(content,map,meta){
    console.log(content,map,meta);
    return content;
}