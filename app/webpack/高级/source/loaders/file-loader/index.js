const loaderUtils = require('loader-utils');
module.exports = function(content){
    //1. 根据文件内容生成带hash值文件名
    let internalFileName = loaderUtils.interpolateName(this, '[hash].[ext]', {content: content});
    internalFileName = `images/${internalFileName}`
    //2. 将文件输出出去
    //3. 返回 module.exports = "文件路径（文件名）"
    this.emitFile(internalFileName,content);
    return `module.exports = "${internalFileName}"`
}

//需要处理的是图片、字体等文件，他们都是buffer数据
//需要使用raw loader才能处理

module.exports.raw = true;