# JS 编程语言

## JavaScript 基础知识

### Hello, world!

#### script 标签

```html
<!DOCTYPE html>
<html>
  <body>
    <p>script 标签之前...</p>

    <script>
      alert("Hello, world!");
    </script>

    <p>...script 标签之后</p>
  </body>
</html>
```

#### 外部标签

```html
<script src="/path/to/script.js"></script>
```

**注意：** 设置 src 特性，script 标签内容会被忽略。

### 代码结构

#### 语句

语句是执行行为(action) 的语法结构和命令。

```js
alert("Hello");
alert("World");
```

#### 分号

当存在换行符（line break）时，在大多数情况下可以省略分号。

```js
// 编辑器自带的格式化 其实 两个分号可以省略
alert("Hello");
alert("World");
```

在这，JavaScript 将换行符理解成“隐式”的分号。这也被称为 [自动分号插入](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)。

虽然 js 有自动处理的情况，但是不要过度依赖，因为在实际情况下。会出现问题

```js
alert("Hello")[(1, 2)].forEach(alert);
//Hello
// Uncaught TypeError: Cannot read properties of undefined (reading '2')
// at <anonymous>:1:15
```

#### 注释

单行注释
单行注释以两个正斜杠字符 // 开始。

```js
// 这行注释独占一行
alert("Hello");

alert("World"); // 这行注释跟随在语句后面
```

多行注释
多行注释以一个正斜杠和星号开始 “/\*” 并以一个星号和正斜杠结束 “/\*”

```js
/* 两个消息的例子。
这是一个多行注释。
*/
alert("Hello");
alert("World");
```

### 现代模式，"use strict"

ES5 推出，用来开启新特性，不兼容旧特性。

启用方式：

1. use strict 需要出现在脚本的最顶端

```js
"use strict";

// 代码以现代模式工作
...
```

除了这种方式，放在其他位置设置不会生效。

2. 无法取消，你只有开启和不开启两种选项。无法部分生效。

3. class module 会自动开启 use strict

### 变量

变量是用来存储信息的。

变量 是数据的“命名存储”。

声明方式：

1. var

```js
var a = 1;
```

2. let

```js
let a = 1;
let b = "b";

// 或者

let a = 1,
  b = 2,
  c = 3;
```

3. const

```js
const ab = "ab";
```

#### 变量命名

限制：

1. 必须仅包含字母、数字、符号 $ 和 \_
2. 首字母不能是数字
3. 区分大小写

如果命名包含多个单词，一般使用驼峰式命名法。除第一个单词外，其余拼接单词首字母为大写。
`myVeryLongName`

**注意** 变量的命名允许非英文字母，但是不推荐。

```js
let имя = "...";
let 我 = "...";
```

[保留字](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords): 比如 let、class、return、function。这些命名是 js 为了留给自己使用，或者准备使用的关键字。不可以使用它们命名。

```js
/*在let、const没有出来之前，可以使用下面这种方式命名， 这是因为变量被挂载到了window对象上*/

num = 100;
console.log(num === window.num); //true

// 这种方式在 use strict模式下会报错
```

#### 常量

声明一个常量(不变)变量，可以使用`const`

```js
const myBirthday = "18.04.1982";
```

const 声明的变量不能被修改(其实不是被修改，变量的存储分为基础类型和引用类型。基础类型存在栈中，引用类型存储在堆中。栈中存储引用地址，const 不能被修改的其实是地址)。

#### 大写的常量

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
```

这是一种保存一些基础属性的方式。存储一些不会被修改，但是又有特殊意义的值。

#### 正确命名方式

规则很简单，易读、简洁。

### 数据类型

1. Number
   取值范围: 2 的 53 次方 - 1 或小于 -2 的 53 次方的整数。

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

```js
let a = 1;

// 特殊值
console.log(Infinity); //无穷大
console.log(NaN); //非数 计算错误的数  与任何值进行数学运算都会返回NaN 有一个例外 NaN ** 0 = 1

/**
 * NaN 只能通过isNaN 来判断是不是NaN
 *
 */
```

2. BigInt

```js
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

3. String
4. Boolean
5. null
6. undefined
7. Object 和 Symbol

#### typeof 运算符
