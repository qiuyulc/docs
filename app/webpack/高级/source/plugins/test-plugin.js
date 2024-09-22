/**
 * 1.webpack家在webpack.config.js中所有配置，此时就会new TestPlugin(),执行插件的constructor
 * 2.webpack创建compiler对象
 * 3.遍历所有plugins中插件，调用插件的apply方法
 * 4.执行剩下编译流程（触发各个hooks事件）
 */

const { resolve } = require("path");

class TestPlugin {
  constructor() {
    console.log("TestPlugin constructor");
  }
  apply(compiler) {
    debugger;
    console.log(compiler, "compiler");
    console.log("TestPlugin apply");
    // 文档中可知，environment是同步的，所以用tap
    compiler.hooks.environment.tap("TestPlugin", () => {
      console.log("TestPlugin environment");
    });

    // emit是异步串行的，所以用tapAsync
    compiler.hooks.emit.tap("TestPlugin", (compilation) => {
      console.log(compilation, "compilation");
      console.log("TestPlugin emit 1111");
    });

    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin emit 2222");
        callback();
      }, 1000);
    });

    compiler.hooks.emit.tapPromise("TestPlugin", (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("TestPlugin emit 3333");
          resolve();
        }, 1000);
      });
    });

    // make是异步并行的，所以用tapAsync
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      //需要在compilation hooks触发前注册才能使用
      compilation.hooks.seal.tap("TestPlugin", () => {
        console.log("TestPlugin seal");
      });
      setTimeout(() => {
        console.log("TestPlugin make 1111");
        callback();
      }, 3000);
    });
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin make 2222");
        callback();
      }, 2000);
    });
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("TestPlugin make 3333");
        callback();
      }, 1000);
    });
  }
}

module.exports = TestPlugin;
