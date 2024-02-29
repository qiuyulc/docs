# 类型系统

## 1.基本类型

### 1.1 概述

JavaScript 语言将值分为 8 种类型

- boolean
- string
- number
- bigint
- symbol
- object
- undefined
- null

TypeScript 继承了 JavaScript 的类型设计，以上 8 种类型可以看做 TypeScript 的基本类型。

### 1.2 boolean 类型

`boolean`类型只包含 true 和 false 两个布尔值

```ts
const x: boolean = true;
const y: boolean = false;
```

上面示例中，变量 `x` 和 `y` 就属于 boolean 类型

### 1.3 string 类型

`string`类型包含所有字符串。

```ts
const x: string = "hello";
const y: string = `${x} world`;
```

### 1.4 number 类型

`number` 类型包含所有整数和浮点数

```ts
const x: number = 123;
const y: number = 3.14;
const z: number = 0xffff;
```

### 1.5 bigint 类型

`biging` 类型包含所有的整数。

```ts
const x: bigint = 123n;
const y: bigint = 0xffffn;
```

`bigint` 和 `number` 类型不兼容。bigint 类型赋值为整数和小数，都会报错

```ts
const x: bigint = 123; // 报错
const y: bigint = 3.14; // 报错
```

注意：bigint 类型是 ES2020 标准引入的。如果使用这个类型，TypeScript 编译的目标 JavaScript 版本不能低于 ES2020，即编译参数 target 不能低于 es2020

### 1.6 symbol 类型

`symbol` 类型包含所有的 Symbol 值

```ts
const x: symbol = Symbol();
```

### 1.7 object 类型

根据 JavaScript 的设计，object 类型包含了所有对象、数组和函数。

```ts
const x: object = { foo: 123 };
const y: object = [1, 2, 3];
const z: object = (n: number) => n + 1;
```

上面示例中，对象、数组、函数都属于 object 类型

### 1.8 undefined 类型，null 类型

`undefined` 和 `null` 是两个独立类型，它们各自都只有一个值。
undefined 类型只包含一个值`undefined`,表示未定义(即还未给出定义，以后可能会有定义)

```ts
let x: undefined = undefined;
```

上面示例中，变量 `x` 就属于 undefined 类型。两个 `undefined` 里面，第一个是类型，第二个是值。

null 类型也只包含一个值 `null`，表示为空(即此处没有值)。

```ts
const x: null = null;
```

上面示例中，变量`x` 就属于 null 类型。

注意：没有声明类型的变量，被赋值为 `undefined` 或 `null`，在关闭编译设置 `noImplicitAny` 和 `strictNullChecks`时，它们的类型会被推断为 `any`。

```ts
//关闭 noImplicitAny 和 strictNullChecks
let a = undefined; //any
const b = undefined; //any

let c = null; //any
const d = null; //any
```

如果希望避免这种情况，则需要打开编译选项 strictNullChecks

```ts
//打开 strictNullChecks
let a = undefined; //undefined
const b = undefined; //undefined

let c = null; //null
const d = null; //null
```

## 2.包装对象类型

### 2.1 包装对象的概念

JavaScript 的 8 种类型之中， `undefeind` 和 `null` 其实是两个特殊值，`object`属于复合类型，剩下的五种属于原始类型(primitive value)，代表最基本的、不可再分的值。

- boolean
- string
- number
- bigint
- symbol
  上面这五种原始类型得值，都有对应的包装对象（wrapper object）。
  所谓“包装对象”，指的是这些值在需要时，会自动产生的对象。

```js
"hello".charAt(1); //'e'
```

上面示例中，字符串`hello` 执行了`charAt`方法。但是在 JavaScript 语言中，只有对象才有方法，原始类型的值本身没有方法。在调用方法时，字符串会自动转为包装对象，`charAt`方法其实是定义在包装对象上。

五种包装对象中，symbol 类型和 bigint 类型无法直接获取他们的包装对象（Symbol()和 Bigint()不能作为构造函数使用），但是剩下的三种可以。

- Boolean()
- String()
- Number()

```js
const s = new String('hello');
typeOf s // 'object'
s.charAt(1) // 'e'
```

注意，`String()`只有当做构造函数使用时(即带有 `new` 命令调用),才会返回包装对象。如果当做普通函数使用，返回的就是一个普通字符串。

### 2.2 包装对象类型的字面量类型

由于包装对象的存在，导致每个原始类型的值都有包装对象和字面量两种情况。

```js
"hello";
new String("hello");
```

为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型。

- Boolean 和 boolean
- String 和 string
- Number 和 number
- Bigint 和 bigint
- Symbol 和 symbol
  其中大写可以包含字面量和包装对象两种情况，小写类型只包含字面量

```ts
const s: string = "hello"; //正确
const s1: String = new String("hello"); //正确

const s2: string = "hello"; //正确
const s3: string = new String("hello"); //报错
```

一般建议小写。

## 3. Object 类型与 object 类型

TypeScript 的对象类型也有大写`Object`和小写`object`两种。

### 3.1 Object 类型

大写的`Object`类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是`Object`类型，这囊括了几乎所有的值。你可以把它理解成 JavaScript 中原型链的顶级 Object

```ts
let obbj: Object;
obj = true;
obj = "hi";
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a: number) => a + 1;
```

注：`undefined`和`null`这两个值不能转为对象，其他任何值都可以赋值给`Object`类型

```ts
let obj: Object;
obj = undefined; //报错
obj = null; //报错
```

`Object`的简写是`{}`

```ts
let obj: {};

obj = true;
obj = "hi";
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a: number) => a + 1;
```

### 3.2 object 类型

小写的`object`类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。

```ts
let obj: object;

obj = { foo: 123 };
obj = [1, 2];
obj = (a: number) => a + 1;
obj = true; // 报错
obj = "hi"; // 报错
obj = 1; // 报错
```

注意：无论是大写的`Object`还是小写的`object`，都只能包含 JavaScript 内置对象原生属性和方法，用户自定义的属性和方法都不存在于这两个类型之中。

```ts
const o1: Object = { foo: 0 };
const o2: object = { foo: 0 };

o1.toString(); // 正确
o1.foo; // 报错

o2.toString(); // 正确
o2.foo; // 报错
```

## 4. undefined 和 null 的特殊性

`undefined` 和 `null` 既是值，又是类型。

作为值，他们有一个特殊的地方：任何其他类型的变量都可以赋值为`undefined`或`null`;

```ts
let age: number = 24;

age = null; // 正确
age = undefined; // 正确
```

这是故意这么设计的，目的是为了跟 JavaScript 保持一致。但是这也失去了类型系统的意义。

为了避免这个问题，可以将`strictNullChecks`设为 true，打开这个选项之后，`undefined`和`null`就不能赋值给其他类型的变量(除了`any`和`unknown`)

```ts
// tsc --strictNullChecks app.ts

let age: number = 24;

age = null; // 报错
age = undefined; // 报错
```

## 5. 值类型

TypeScript 规定，单个值也是一种类型，称为值类型。

```ts
let x: "hello";
x = "hello"; //正确
x = "world"; //报错
```

另外`const`命令声明的变量，如果代码中没有注明类型，就会推断该变量是值类型。

```ts
// x 的类型是 "https"
const x = "https";

// y 的类型是 string
const y: string = "https";
```

不过这种推断仅限于赋值为基本类型的时候，如果是对象那就不会推断为值类型

```ts
// x 的类型是 { foo: number }
const x = { foo: 1 };
```

## 6. 联合类型

联合类型(union types)指的是多个类型组成的一个新类型，使用符号`|`表示。

联合类型`A|B`表示，任何一个类型只要属于`A`或`B`，就属于联合类型`A|B`。

```ts
let x: string | number;
x = 123; //正确
x = "abc"; //正确
```

类型缩小：

在联合类型中可能会出现`string|number`的情况，这时候如果我们直接调用某一个类型的方法，那么就会报错。

```ts
function getPort(id: string | number) {
  console.log(id.toUpperCase()); //报错
}
```

因为 id 有可能是一个 number，所以我们需要进一步限制 id 的类型。

```ts
function getPort(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); //正确
  } else {
    console.log(id);
  }
}
```

## 7. 交叉类型

交叉类型(intersectionn types) 值得多个类型组成的一个新类型，使用符号`&`表示。

交叉类型`A&B`标识，任何一个类型必须同时属于`A`和`B`,才属于交叉类型`A&B`,即交叉类型同时满足`A`和`B`的特征。

```ts
let x: number & string;
```

上面的示例中，变量 `x` 同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为 `x` 的类型实际上是 `never`

主要用途：表示对象的合成。

```ts
let obj: { foo: string } & { bar: string };

obj = {
  foo: "hello",
  bar: "world",
};
```

交叉类型常常 用来为对象类型添加新属性。

```ts
type A = { foo: number };

type B = A & { bar: number };
```

上面示例中，类型 `B` 是一个交叉类型，用来在 `A` 的基础上增加了属性 `bar`

## 8. type 命令

`type` 命令用来定义一个类型的别名。

```ts
type Age = number;

let age: Age = 55;
```

别名不允许重名

```ts
type Color = "red";
type Color = "blue"; //报错
```

别名的作用域是块级作用域。这也意味着块内部定义的别名，影响不到外部。

```ts
type Color = "red";
if (Math.random() < 0.5) {
  type Color = "blue";
}
```

别名也支持表达式，可以在定义一个别名时，使用另一个别名。

```ts
type World = "world";
type Greeting = `hello ${World}`;
```

`type` 命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。

## 9. typeof 运算符

JavaScript 语言中，typrof 运算符是一个医院运算符，返回一个字符串，代表操作数的类型。

```js
typeof "foo"; //'string'
```

JavaScript 里面，`typeof` 运算符只可能返回八种结果，而且都是字符串。

```js
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n; // "bigint"
```

在 TypeScript 中将 `typeof`运算符移植到了类型运算，它的操作数依旧是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型

```ts
const a = { x: 0 };
type T0 = typeof a; //type T0 = {x: number;}
type T1 = typeof a.x; //type T1 = number
```

记住一句话就行，JavaScript 中的`typeof`返回的是变量的类型值，因为返回值是 string 的，TypeScript 的 `typeof` 返回的是变量的类型，参照上方代码。

## 10. 块级类型声明

TypeScript 支持块级类型声明，即类型可以声明在代码块(用大括号表示)里面，并且只在当前代码块有效。

```ts
if (true) {
  type T = number;
  let v: T = 5;
} else {
  type T = string;
  let v: T = "hello";
}
```

## 11. 类型的兼容

TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。

```ts
type T = number | string;
let a: number = 1;
let b: T = a;
```

上面示例中，变量 `a` 和 `b` 的类型是不一样的，但是变量 `a` 赋值给变量 `b` 并不会报错。这时，我们认为，`b` 的类型兼容 `a` 的类型。

TypeScript 为这种情况定义了一个专门术语。如果类型 `A` 的值可以赋值给类型 `B` 那么类型 `A` 就被称为类型 `B` 的子类型(subtype)。在上例中，类型 `number` 就是类型 `number|string`的子类型。

TypeScript 的一个规则是，凡是可以使用父类性的地方，都可以使用子类型，但是反过来不行。

```ts
let a: "hi" = "hi";
let b: string = "hello";

b = a; // 正确
a = b; // 报错
```
