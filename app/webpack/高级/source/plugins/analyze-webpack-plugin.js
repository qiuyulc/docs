class AnalyzeWebpackPlugin {
  constructor() {}
  apply(compiler) {
    compiler.hooks.emit.tap("AnalyzeWebpackPlugin", (compilation) => {
      // 遍历所有即将输出文件，得到其大小

      //将一个对象变成二维数组
      /*
            对象
            {
            key1:value1,
            key2:value2
            }
            二维数组
            [
                [key1,value1],
                [key2,value2]
            ]
            
            */
      const assets = Object.entries(compilation.assets);

      /*
            md中表格语法
                | 资源名称 ｜ 资源大小 |
                | --- | --- |
                | index.html | 123 |
            */
      let content = `| 文件名 | 大小 |
| --- | --- |`;

      assets.forEach(([filename, file]) => {
        content += `\n| ${filename} | ${Math.ceil(file.size()/1024)}kb |`;
      });
      //生成一个md文件
      compilation.assets["analyze.md"] = {
        source: () => content,
        size: () => content.length,
      };
    });
  }
}

module.exports = AnalyzeWebpackPlugin;
