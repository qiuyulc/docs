# 基本用法

## 1.类型声明

TypeScript 代码最明显的特征，就是为 JavaScript 变量加上了类型声明

```ts
let foo: string;

//函数
function toString(num: number): string {
  return String(num);
}
```

注意：变量的值应该和声明的类型一致，如果不一致，TypeScript 就会报错

```ts
let foo: string = 123; //报错
```

另外，TypeScript 规定，变量只有赋值后才能使用，否则就会报错。

```ts
let x: number;
console.log(x); //报错
```

## 2.类型推断

类型声明不是必需的，如果没有，TypeScript 会自己推断类型。

```ts
let foo = 123;
// ts会自动推导它的类型为number

foo = "hello"; //报错
```

## 3.TypeScript 编译

JavaScript 的运行环境(浏览器和 Node.js)不认识 TypeScript 代码。所以 TypeScript 项目想要运行，必须先转为 JavaScript 代码，这个代码转换的过程就叫做编译(compile)。

TypeScript 官方没有运行环境，只提供了编译器。编译时会将类型声明和类型相关的代码全部删除，只留下能于宁的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。
所以 TypeScript 的类型检查只存在于编译时。运行时不存在类型检查。

## 4.值与类型

学习 TypeScript 需要分清楚“值”(value) 和 “类型”(type)。

“类型”是针对“值”的，可以视为是后者的一个元属性。每一个值在 TypeScript 里面都是有类型的。比如，3 是一个值，它的类型是 number。

TypeScript 代码只涉及类型，不涉及值。所有跟“值”相关的处理，都有 JavaScript 完成。

TypeScript 编译过程，实际上就是把“类型代码”全部拿掉，只保留“值代码”

## 5.TypeScript Playground

最简单的 TypeScript 使用方法，就是使用官网的在线编译页面，叫做 [TypeScript Playground](http://www.typescriptlang.org/play/)。

只要打开这个网页，把 TypeScript 代码贴进文本框，它就会在当前页面自动编译出 JavaScript 代码，还可以在浏览器执行编译产物。如果编译报错，它也会给出详细的报错信息。

这个页面还具有支持完整的 IDE 支持，可以自动语法提示。此外，它支持把代码片段和编译器设置保存成 URL，分享给他人。

## 6.tsc 编译器

TypeScript 官方提供的编译器叫做 tsc,可以将 TypeScript 脚本编译成 JavaScript 脚本。本机想要编译 TypeScript 代码，必须安装 tsc。
根据约定，TypeScript 脚本文件使用.ts 和后缀名，JavaScript 脚本文件使用.js 后缀。tsc 的作用就是把.ts 脚本转变成.js 脚本。

### 6.1 安装

tsc 是一个 npm 模块，安装使用一下命令

```bash
npm install -g typescript
```

上面命令是全局安装 tsc，也可以在项目中将 tsc 安装为一个依赖模块。

安装完成后，检查一下是否安装成功。

```bash
# 或者tsc --version
tsc -v
Version 5.1.6

```

### 6.2 帮助信息

`-h` 或 `--help` 参数输出帮助信息

```bash
tsc -h
```

也可以使用`--all`展示完整的帮助信息

```bash
tsc --all
```

### 6.3 编译脚本

使用 `tsc` 编译脚本

```bash
tsc app.ts
```

会在当前目录下，生成一个 app.js 文件。

`tsc` 也可以一次编译多个脚本

```bash
tsc file1.ts file2.ts
```

tsc 有很多参数，可以调整编译行为

1. --outFile
   可以将多个脚本编译为一个 JavaScript 文件

```bash
tsc file1.ts file2.ts --outFile app.js
```

2. --outDir
   编译结果默认都保存在当前目录， `--outDir`参数可以指定保存到其他目录。

```bash
tsc app.ts --outDir dist
```

上面命令会在 dist 子目录下生成 app.js

3. --target
   为了保证编译结果能在各种 JavaScript 引擎运行，tsc 默认会将 TypeScript 代码编译成很低版本的 JavaScript，即 3.0 版本。这通常不是我们想要的结果。
   这时可以使用 `--target` 参数，指定编译后的 JavaScript 版本。建议使用 es2015，或者更新的版本。

```bash
tsc --target es2015 app.ts
```

### 6.4 编译错误的处理

编译过程中，如果没有报错， `tsc`命令不会有任何显示。
如果编译报错，`tsc` 命令就会显示报错信息，但是依旧会生成 JavaScript 脚本。

```ts
app.ts;
let foo: number = 123;
foo = "abc";
```

上面代码明显有错误，但是 ts 编译是可以的，不过在终端中会提示错误

```bash
app.ts:2:1 - error TS2322: Type 'string' is not assignable to type 'number'.

2 foo = "abc";
  ~~~


Found 1 error in app.ts:2
```

这是因为 TypeScript 团队认为，编译器的作用只是给出编译错误，至于怎么处理，是开发者需要判断的。

如果希望出现错误就停止编译，不生成编译产物，可以使用 `--noEmitOnError` 参数

```bash
tsc --noEmitOnError app.ts
```

还有一个参数，`--noEmit`，只检查类型是否正确，不生成 JavaScript 文件。

```bash
tsc --noEmit app.ts
```

上面命令只检查是否有错误，不会生成 js 文件

### 6.5 tsconfig.json

TypeScript 允许将 `tsc` 的编译参数，写在配置文件 tsconfig.json 中，只要当前目录中有这个文件，`tsc` 就会自动读取，所以运行时可以不写参数。

```bash
tsc file1.ts file2.ts --outFile dist/app.js
```

上面这个命令写成 tsconfig.json，就是下面这样。

```json
{
  "files": ["file1.ts", "file2.ts"],
  "compilerOptions": {
    "outFile": "dist/app.js"
  }
}
```

当有这个文件，编译时直接调用 tsc 命令就可以了。

## 7.ts-node 模块

[ts-node](https://github.com/TypeStrong/ts-node)是一个非官方的 npm 模块，可以直接运行 TypeScript 代码，使用时，可以先全局安装它。

```bash
npm i -g ts-node
```

安装后，就可以直接运行 TypeScript 脚本。

```bash
ts-node script.ts
```

如果不安装也可以直接通过 `npx` 直接运行

```bash
npx ts-node script.ts
```
