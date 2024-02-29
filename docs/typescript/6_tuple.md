# 元组

## 1. 简介

元组(tuple) 是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。

格式：

```ts
const s: [string, string, boolean] = ["a", "b", true];
```

元组在声明时必须给定类型，否则 TypeScript 会自动推断为一个联合类型的数组。

元组成员的类型可以添加问号后缀(?) ，表示该成员可选。

```ts
let a: [number, number?] = [1];
```

注意可选类型只能用于元组的尾部成员。

```ts
type myTuple = [number, number, number?, string?];
```

元组类型一般是有成员限制的，但是可以通过扩展运算符(`...`)来设置不限成员数量的元组。

```ts
type NameNums = [string, ...number[]];
const a: NamedNums = ["A", 1, 2, 3];
const b: NamedNums = ["B", 1, 2, 3];
```

（`...`）可以出现在元组的任意位置。

```ts
type t1 = [string, number, ...boolean[]];
type t2 = [string, ...boolean[], number];
type t3 = [...boolean[], string, number];
```

元组的成员可以添加成员名，这个成员名是说明性的，可以任意取名，没有实际作用

```ts
type Color = [red: number, green: number, blue: number];

const c: Color = [255, 255, 255];
```

元组可以通过方括号，读取成员类型

```ts
type Tuple = [string, number];

type Age = Tuple[1]; //number
```

也可以通过 number 来提取元组的类型成一个联合类型

```ts
type Tuple = [string, number, Date];
type TupleEl = Tuple[number]; // string|number|Date
```

## 2. 只读元组

元组也可以只读，不允许修改，有两种写法。

```ts
// 写法一
type t = readonly [number, string];

// 写法二
type t = Readonly<[number, string]>;
```

跟数组一样，只读元组可以被元组赋值，元组不能被只读元组赋值

```ts
type t1 = readonly [number, number];
type t2 = [number, number];

let x: t2 = [1, 2];
let y: t1 = x; // 正确

x = y; // 报错
```

由于只读元组不能代替元组，所以会产生一些令人困惑的报错。

```ts
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

let point = [3, 4] as const;

distanceFromOrigin(point); // 报错
```

这时候就需要使用类型断言来解决这个问题

```ts
distanceFromOrigin(point as [number, number]);
```

## 3. 成员数量的推断

成员推断需要结合元组的情况来进行判断

```ts
function f(point: [number, number]) {
  if (point.length === 3) {
    // 报错
    // ...
  }
}
```

```ts
function f(point: [number, number?, number?]) {
  if (point.length === 4) {
    // 报错
    // ...
  }
}
```

当然如果使用了`...`运算符，那么 TypeScript 就无法推断出成员数量。

```ts
const myTuple: [...string[]] = ["a", "b", "c"];

if (myTuple.length === 4) {
  // 正确
  // ...
}
```

由此可以看出，它的推断只根据类型。而不是根据实际的赋予的值。

## 4. 扩展运算符与成员数量

扩展运算符(`...`)将数组(注意，不是元组)转换为一个逗号分割的序列，这时 TypeScript 会认为这个序列的成员数量是不确定的，因为数组的成员数量是不确定的。

这导致如果函数调用时，使用扩展运算符传入函数参数，可能发生参数数量与数组长度不匹配的报错。

```ts
const arr = [1, 2];

function add(x: number, y: number) {
  // ...
}

add(...arr); // 报错
```

上面示例会报错，原因是函数 add()只能接受两个参数，但是传入的是...arr，TypeScript 认为转换后的参数个数是不确定的。

有些函数可以接受任意数量的参数，这时使用扩展运算符就不会报错

```ts
const arr = [1, 2, 3];
console.log(...arr); // 正确
```

上面示例中，`console.log()`可以接受任意数量的参数吗，所以传入`...arr`就不会报错。

解决这个问题的一个方法，就是把成员数量不确定的数组，写成成员数量确定的元组，在使用扩展运算符。

```ts
const arr: [number, number] = [1, 2];

function add(x: number, y: number) {
  // ...
}

add(...arr); // 正确
```

另一种做法就是使用 `as const`断言

```ts
const arr = [1, 2] as const;
```

上面这种写法也可以，因为 TypeScript 会认为 arr 的类型是 readonly [1, 2]，这是一个只读的值类型，可以当作数组，也可以当作元组。
