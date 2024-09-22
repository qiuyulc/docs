const HtmlWebpackPlugin = require("safe-require")("html-webpack-plugin");
class InlineChunkWebpackPlugin {
  constructor(tests) {
    this.tests = tests;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "InlineChunkWebpackPlugin",
      (compilation) => {
        // 1.获取html-webpack-plugin 的hooks
        const hooks = HtmlWebpackPlugin.getHooks(compilation);
        // 2.注册html-webpack-plugin的hooks-》alterAssetTagGroups
        // 3.从里面讲script的runtime文件，变成inline script;
        hooks.alterAssetTagGroups.tap(
          "InlineChunkWebpackPlugin", // <-- Set a meaningful name here for stacktraces
          (assets) => {
            // Manipulate the content
            //   data.html += "The Magic Footer";

            // console.log(headTags, bodyTags);
            assets.headTags = this.getInlineChunk(
              assets.headTags,
              compilation.assets
            );
            assets.bodyTags = this.getInlineChunk(
              assets.bodyTags,
              compilation.assets
            );
          }
        );
        //删除runtime文件
        hooks.afterEmit.tap(
          "InlineChunkWebpackPlugin", // <-- Set a meaningful name here for stacktraces
          () => {
            Object.keys(compilation.assets).forEach((filepath) => {
              if (this.tests.some((test) => test.test(filepath))) {
                delete compilation.assets[filepath];
              }
            });
          }
        );
      }
    );
  }
  getInlineChunk(tags, assets) {
    /*
            目前
            [
{
tagName: 'script',
voidTag: false,
meta: { plugin: 'html-webpack-plugin' },
attributes: { defer: true, src: 'js/runtime~main.js.js' }
},
{
tagName: 'script',
voidTag: false,
meta: { plugin: 'html-webpack-plugin' },
attributes: { defer: true, src: 'js/main.js' }
}
] []
            修改为：
            [
                {
                    tagName:'script',
                    innerHTML:runtime文件的内容
                    closeTag:true
                }
            ]
            */

    return tags.map((tag) => {
      if (tag.tagName !== "script") return tag;
      const filepath = tag.attributes.src;
      //获取文件资源路径
      if (!filepath) return tag;

      if (!this.tests.some((test) => test.test(filepath))) return tag;

      return {
        tagName: "script",
        closeTag: true,
        innerHTML: assets[filepath].source(),
      };
    });
  }
}

module.exports = InlineChunkWebpackPlugin;
