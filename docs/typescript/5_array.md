# 数组

## 1.简介

TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。

格式：

1. 数组成员类型后面，加上一对方括号。

```ts
let arr: number[] = [1, 2, 3];
```

如果数组成员的类型比较复杂，可以写在圆括号里面

```ts
let arr: (number | string)[];
```

2. 使用 TypeScript 内置的 Array 接口

```ts
let arr: Array<number> = [1, 2, 3];
```

复杂类型

```ts
let arr: Array<number | string>;
```

TypeScript 允许使用方括号读取数组成员的类型。

```ts
type Names = string[];
type Name = Names[0]; //string
```

## 2.数组的类型推断

如果数组变量没有声明类型，TypeScript 就会推断数组成员的类型。这时，推断行为会因为值得不同，而有所不同。

如果变量的初始值是空数组，那么 TypeScript 会推断数组类型是`any[]`。

```ts
//推断为any[]

const arr = [];
```

后面，为这个数组赋值时，TypeScript 会自动更新类型推断

```ts
const arr = [];
arr; // 推断为 any[]

arr.push(123);
arr; // 推断类型为 number[]

arr.push("abc");
arr; // 推断类型为 (string|number)[]
```

如果数组的初始值为空数组，那么就会触发 TypeScript 的类型推断。

## 3.只读数组,const 断言

JavaScript 规定，`const` 命令声明的数组变量是可以改变成员的。

```js
const arr = [0, 1];
arr[0] = 2;
```

但是确实有声明为只读数组的需求，即不允许变动数组成员。

TypeScript 允许声明只读数组，方法是在数组类型前面加上 `readonly`;

```ts
const arr: readonly number[] = [0, 1];
arr[1] = 2; //报错
arr.push(3); //报错
delete arr[0]; //报错
```

TypeScript 将 `readonlay number[]` 与 `number[]` 视为两种不一样的类型，后者是前者的子类型。

`number[]` 比 `readonlay number[]`多了很多操作数组的方法，所以 `readonlay number[]`是父，`number[]`是子。

所以

```ts
let a1:number[] = [1,2];
let a2:readonlay number[] = a1;//正确

a1 = a2 //报错
```

注：`readonlay` 不能和数组的泛型写法一起使用。

```ts
//报错
const arr: readonly Array<number> = [0, 1];
```

实际上，TypeScript 提供了两个专门的泛型，用来生成只读数组的类型。

```ts
const a1: ReadonlayArray<number> = [0, 1];
const a2: Readonly<number[]> = [0, 1];
```

只读数组还有一种声明方法，就是使用"const 断言"。

```ts
const arr = [0, 1] as const;
arr[0] = [2]; //报错
```

## 4.多维数组

TypeScript 使用`T[][]`的形式，表示二维数组，`T`是最低层数组成员的类型。

```ts
var multi: number[][] = [
  [1, 2, 3],
  [23, 24, 25],
];
```
