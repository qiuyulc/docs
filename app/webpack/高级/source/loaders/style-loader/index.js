module.exports = function(content){

    /**
     * 1. 直接使用style-loader，只能处理样式。
     * 不能处理样式中引入的其他资源
     * 
     * use:['./loaders/style-loader']
     * 
     * 2. 借助css-loader解决样式中引入的其他资源的问题
     * 
     * use:['./loaders/style-loader','css-loader']
     * 
     * 问题是css-loader爆漏的是js代码，style-loader需要执行js代码，得到返回值，再动态创建syule标签，插入到界面中
     * 
     * 3.style-loader使用pitch loader用法
    */

    // const script = `
    //     const styleEl = document.createElement('style');
    //     styleEl.innerHTML = ${JSON.stringify(content)};
    //     document.head.appendChild(styleEl);
    // `;
    // return script;
}

module.exports.pitch = function(remainingRequest){
    //remainingRequest剩余的还需要处理的loader
    // console.log(remainingRequest) // /Users/lsz/Desktop/cx/个人/react/blog/app/webpack/高级/source/node_modules/css-loader/dist/cjs.js!/Users/lsz/Desktop/cx/个人/react/blog/app/webpack/高级/source/src/css/index.css

    // 1.将remainingRequest中的绝对路径改成相对路径（因为后面只能使用相对路径操作）
    // 希望 ../../node_modules/css-loader/dist/cjs.js!../../src/css/index.css
    const relaticePath = remainingRequest.split('!').map(absolutePath=>{
        return this.utils.contextify(this.context,absolutePath); //以this.content为基准，将绝对路径absolutePath转换成相对路径
    }).join('!');
    // console.log(relaticePath,11111) // ../../node_modules/css-loader/dist/cjs.js!./index.css

    //2.引入css-loader处理后的资源
    //3.创建style，将内容插入页面生效
    const script = `
        import style from "!!${relaticePath}"; 
        const styleEl = document.createElement('style');
        styleEl.innerHTML = style;
        document.head.appendChild(styleEl);
    `;
    //终止后面loader执行
    return script;

}