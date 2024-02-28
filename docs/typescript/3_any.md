# any 类型、unknown 类型、never 类型

## 1.any 类型

### 1.1 基本含义

any 类型没有任何限制，该类型的变量可以赋值给任意类型的值。

```ts
let x: any;
x = 1;
x = "foo";
x = true;
```

变量类型一旦被设置为 `any` ，TypeScript 实际上会关闭这个变量的类型检测。即使有明显的类型错误，只要语法正确，都不会报错。

```ts
let x: any = "hello";
x(1); //不报错
x.foo = 100; //不报错
```

所以在实际开发中不要轻易使用`any`
适用场景：

1. 出于特殊原因，需要关闭某些变量的类型检查。
2. 适配老的 JavaScript 项目，让代码快速迁移到 TypeScript。

从集合论的角度来说，`any`类型可以看成是所有其他类型的全集，包含了一切可能得类型。TypeScript 讲这种类型称为"顶层类型" （top type）

### 1.2 类型推断问题

当开发者没有指定类型时，TypeScript 必须自己推断类型，如果无法推断出类型，TypeScript 就会认为该变量的类型是`any`。

```ts
function add(x, y) {
  return x + y;
}
add(1, [1, 2, 3]);
```

TypeScript 中提供了一个编译选项 `noImplictiAny`,打开该选项，只要推断出`any`类型就会报错。

```bash
tsc --noImplicitAny app.ts
```

有一种特殊情况，当你声明一个变量不过没有赋值时，即使 TypeScript 推断出是 `any` 也不会报错。

```ts
var x;
let y;
```

### 1.3 污染问题

`any` 类型除了关闭类型检查，还有一个很大的问题。它会污染其他变量。它可以赋值给其他任何类型的变量(因为没有类型检查)，导致其他变量出错。

```ts
let x: any = "hello";
let y: number;

y = x; //不报错

y * 123; //不报错

y.toFixed(); //不报错
```

## 2.unknown 类型

为了解决 `any` 类型污染其他变量的问题，TypeScript3.0 引入了`unknown` 类型。它和 `any` 含义相同，表示类型不确定，可能是任意类型，但是他的使用有一些限制，不想 `any`那么自由。

1. 相似之处：

所有类型的值都可以分配给 unknown 类型。

```ts
let x: unknown;
x = true;
x = 42;
x = "Hello World";
```

2. 不同

首先，`unknown`类型的变量，不能直接赋值给其他类型的变量(除了`any`类型和`unknown`类型)。

```ts
let v: unknown = 123;
let v1: boolean = v; //报错
let v2: number = v; //报错
```

其次不能直接调用 `unknown`类型变量的方法和属性。

```ts
let v1: unknown = { foo: 123 };
v1.foo; //报错

let v2: unknown = "hello";
v2.trim(); //报错

let v3: unknown = (n = 0) => n + 1;
v3(); //报错
```

再次， `unknown` 类型变量能够进行的运算是有限的，只能进行比较运算(运算符 == 、=== 、!= 、!== 、|| 、&&、?)、取反运算符 ! 、typeof 运算符和 instanceof 运算符这几种，其他运算都会报错。

```ts
let a: unknown = 1;
a + 1; //报错
a === 1; // 正确
```

何时使用？

只有经过"类型缩小"，`unknown` 类型变量才可以使用。所谓"类型缩小",就是缩小 `unknown` 变量的类型范围，确保不会出错。

```ts
let a: unknown = 1;
if (typeof a === "number") {
  let r = a + 10;
}
```

大概意思就是，你能清楚的知道变量的确定类型，这时候你就可以使用它来运算了。

从集合论来说，`unknown`也可以视为所有其他类型(除了`any`) 的全集，所以它和 `any` 一样，也属于 TypeScript 的顶层类型。

## 3.never 类型

空类型，即该类型为空，不包含任何值。

由于不存在任何属于"空类型"的值，所以该类型被称为`never`,即不可能有这样的值。

```ts
let x: nerver;
```

上面的示例中，变量 `x` 的类型是 `never` ，就不可能赋给它任何值，否则都会报错。

`never` 类型的使用场景，主要是在一些类型运算中，保证类型运算的完整性。另外，不可能返回值的函数，返回值的类型就可以写成 `never`
如果一个变量有多种类型(即联合类型)，通常需要使用分支处理每一种类型。这时，处理完所有可能得类型之后，剩余的情况就属于`never`类型。

```ts
function fn(x: string | number) {
  if (typeof x === "string") {
    // ...
  } else if (typeof x === "number") {
    // ...
  } else {
    x; // never 类型
  }
}
```

`never` 特点另一个特点就是，可以赋值给任意其他类型。

```ts
function f(): never {
  throw new Error("Error");
}
let v1: number = f(); // 不报错
let v2: string = f(); // 不报错
let v3: boolean = f(); // 不报错
```

为什么 `never` 类型可以赋值给任意其他类型呢？这也很集合论有关，空集是任何集合的子集。TypeScript 就相应规定，任何类型都包含了 `never` 类型。因此，`never` 类型是任何其他类型所共有的。

TypeScript 把这种情况称为 "底层类型"(bottom type);

顶层类型(`any`和`unknown`);
底层类型(`never`)
