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

### 2.2 包装对象类型的字面量类型

## 3. Object 类型与 object 类型

### 3.1 Object 类型

### 3.2 object 类型

## 4. undefined 和 null 的特殊性

## 5. 值类型

## 6. 联合类型

## 7. 交叉类型

## 8. type 命令

## 9. typeof 运算符

## 10. 块级类型声明

## 11. 类型的兼容
