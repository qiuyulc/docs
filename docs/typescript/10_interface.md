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

属性名可以采用表达式，所以下面的写法也可以。

```ts
const f = "f";
interface A {
  [f](x: boolean): string;
}
```

类型方法可以重载。

```ts
interface A {
  f(): number;
  f(x: boolean): boolean;
  f(x: string, y: string): string;
}
```

interface 里面的函数重载，不需要给出实现。但是由于对象内部定义方法时，无法使用函数重载的语法，所以需要额外在对象外部给出函数方法的实现。

```ts
interface A {
  f(): number;
  f(x: boolean): boolean;
  f(x: string, y: string): string;
}

function MyFunc(): number;
function MyFunc(x: boolean): boolean;
function MyFunc(x: string, y: string): string;
function MyFunc(x?: boolean | string, y?: string): number | boolean | string {
  if (x === undefined && y === undefined) return 1;
  if (typeof x === "boolean" && y === undefined) return true;
  if (typeof x === "string" && typeof y === "string") return "hello";
  throw new Error("wrong parameters");
}

const a: A = {
  f: MyFunc,
};
```

5. 函数
   interface 也可以用来声明独立的函数。

```ts
interface Add {
  (x: number, y: number): number;
}

const myAdd: Add = (x, y) => x + y;
```

6. 构造函数

interface 内部可以使用 `new` 关键字，表示构造函数。

```ts
interface ErrorConstructor {
  new (message?: string): Error;
}
```

## interface 的继承

### interface 继承 interface

interface 可以使用`extends` 关键字，继承其他 interface

```ts
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}
```

多重继承

```ts
interface Style {
  color: string;
}

interface Shape {
  name: string;
}

interface Circle extends Style, Shape {
  radius: number;
}
```

多重接口继承，实际上相当于多个父接口的合并。

注意，子接口与父接口的同名属性必须是类型兼容的。不能有冲突，否则会报错

```ts
interface Foo {
  id: string;
}

interface Bar extends Foo {
  id: number; //报错
}
```

多重继承时，如果多个父接口存咋同名属性，那么这些同名属性也不能有类型冲突，否则也会报错。

```ts
interface Foo {
  id: string;
}

interface Bar {
  id: number;
}

// 报错
interface Baz extends Foo, Bar {
  type: string;
}
```

### interface 继承 type

interface 可以继承 `type`命令定义的对象类型。

```ts
type Country = {
  name: string;
  capital: string;
};

interface CountryWithPop extends Country {
  population: number;
}
```

需要注意的是，如果 type 命令定义的类型不是对象，interface 就无法继承。

### interface 继承 class

```ts
class A {
  x: string = "";

  y(): boolean {
    return true;
  }
}

interface B extends A {
  z: number;
}
```

实现 B 接口的对象就需要实现这些属性

```ts
const b: B = {
  x: "",
  y: function () {
    return true;
  },
  z: 123,
};
```

## 接口合并

多个同名接口会合并成一个接口。

```ts
interface Box {
  height: number;
  width: number;
}

interface Box {
  length: number;
}
```

这样的设计主要是为了兼容 JavaScript 的行为。当你像全局对象或者外部库中添加自己的属性和方法。那么，只要使用 interface 就自动合并到原始类型中。

举例说明，比如 window 对象中的的 document 对象添加自定义属性，但是 typescript 会报错。因为在原始定义中没有这些属性。解决方法就是把自定义属性写成 interface，合并进原始定义。

```ts
interface Document {
  foo: string;
}

document.foo = "hello";
```

注意：同名接口合并时，同一个属性不能有类型冲突。

```ts
interface A {
  a: number;
}

interface A {
  a: string; //报错
}
```

同名接口合并时，如果是同名方法有不同的类型声明，那么会发生函数重载。而且，后面的定义比前面的定义具有更高的优先级。

```ts
interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Sheep): Sheep;
}

interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}

// 等同于
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}
```

实现

```ts
interface Cloner {
  clone(animal: number): number;
  clone(animal: string): string;
}

class ClonerImpl implements Cloner {
  clone(animal: number): number;
  clone(animal: string): string;
  clone(animal: any): any {
    if (typeof animal === "string") {
      return animal.toString();
    } else {
      return Number(animal);
    }
  }
}

const fn = new ClonerImpl();
```

如果两个 interface 组成的联合类型存在同名属性，那么该属性的类型也是联合类型。

```ts
interface Circle {
  area: bigint;
}

interface Rectangle {
  area: number;
}

declare const s: Circle | Rectangle;

s.area; // bigint | number
```

## interface 与 type 的异同

interface 命令和 type 命令作用类型，都可以表示对象类型。

相似之处、都可以为对象类型起名:

```ts
type Country = {
  name: string;
  capital: string;
};

interface Country {
  name: string;
  capital: string;
}
```

区别：

1. type 能够表示非对象类型，而 interface 只能表示对象类型(数组、函数)
2. interface 可以继承其他类型，type 不支持继承。

继承的主要作用是添加属性，type 定义的对象如果想添加属性，只能使用 & 运算符，重新定义一个类型。

```ts
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
```

3. 同名的`interface`会自动合并，同名`type` 则会报错。

```ts
type A = { foo: number }; // 报错
type A = { bar: number }; // 报错
```

4. `interface` 不能包含属性映射(mapping)，`type` 可以，详见<映射>一章。

```ts
interface Point {
  x: number;
  y: number;
}

// 正确
type PointCopy1 = {
  [Key in keyof Point]: Point[Key];
};

// 报错
interface PointCopy2 {
  [Key in keyof Point]: Point[Key];
};
```

5. `this` 关键字只能用于 `interface`

```ts
// 正确
interface Foo {
  add(num: number): this;
}

// 报错
type Foo = {
  add(num: number): this;
};
```

实际例子

```ts
class Calculator implements Foo {
  return = 0;
  add(num: number) {
    this.result += num;
    return this;
  }
}
```

6. type 可以扩展原始数据类型，interface 不行。

```ts
// 正确
type MyStr = string & {
  type: "new";
};

// 报错
interface MyStr extends string {
  type: "new";
}
```

7. `interface` 无法表达某些复杂类型(比如交叉类型和联合类型),但是`type` 可以。

```ts
type A = {
  /* ... */
};
type B = {
  /* ... */
};

type AorB = A | B;
type AorBwithName = AorB & {
  name: string;
};
```
