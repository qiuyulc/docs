//raw loader 接受到的content是buffer类型。
// 一般用在处理图片字体图标等文件。
// module.exports = function(content){
//     console.log(content);
//     return content
// }

// module.exports.raw = true

// 方式二
function test3Loader(content){
    console.log(content)
    return content;
}

test3Loader.raw = true;

module.exports = test3Loader;