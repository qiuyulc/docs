# interface

## 简介

interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```

上面示例中，定义了一个接口`Person`，它指定一个对象模板，拥有三个属性`firstName`、`lastName`和`age`。任何实现这个接口的对象，都必须部署这三个属性，并且必须符合规定的类型。

实现：

```ts
const p: Person = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
};
```

上面示例中，变量 p 的类型就是接口 Person，所以必须符合 Person 指定的结构。

方括号运算符可以取出 interface 某个属性的类型。

```ts
interface Foo {
  a: string;
}

type A = Foo["a"]; // string
```

interface 可以表示对象的各种语法，它的成员有 5 种形式。

- 对象属性
- 对象的属性索引
- 对象方法
- 函数
- 构造函数

1. 可选属性

```ts
interface Foo {
  x?: string;
}
```

2. 只读属性

```ts
interface A {
  readonly a: string;
}
```

3. 对象的属性索引

```ts
interface A {
  [prop: string]: number;
}
```

属性索引共有 `string`、`number` 和 `symbol` 三种索引

```ts
interface MyObj {
  [prop: string]: number;

  a: boolean; // 编译错误
}
```

上面示例中，属性索引指定所有名称为字符串的属性，它们的属性值必须是数值（number）。属性 a 的值为布尔值就报错了

属性的数值索引，其实是指定数组的类型。

```ts
interface A {
  [prop: number]: string;
}

const obj: A = ["a", "b", "c"];
```

一个接口最多只能定义一个数值索引。数值索引会约束所有名为数值的属性。
如果一个 interface 同时定义了字符串索引和数值索引，那么数值索引必须服从于字符串索引。因为在 JavaScript 中，数值属性名最终是自动转换成字符串属性名。

```ts
interface A {
  [prop: string]: number;
  [prop: number]: string; // 报错
}

interface B {
  [prop: string]: number;
  [prop: number]: number; // 正确
}
```

上面示例中，数值索引的属性值类型与字符串索引不一致，就会报错。数值索引必须兼容字符串索引的类型声明。

4. 对象的方法

对象的方法共有三种写法。

```ts
// 写法一
interface A {
  f(x: boolean): string;
}

// 写法二
interface B {
  f: (x: boolean) => string;
}

// 写法三
interface C {
  f: { (x: boolean): string };
}
```
