# 函数

## 简介

函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型

```ts
function hello(txt: string): void {
  console.log("hello" + txt);
}
```

上面的示例中，函数`hello()`在声明时，需要给出参数`txt`的类型(string),以及返回值的类型(`void`),`void`类型表示没有返回值.

如果不指定参数类型(比如上例不写`txt`的类型),TypeScript 就会推断参数类型，如果缺乏足够信息，就会推断该参数的类型为`any`。

```ts
function hello(txt: string) {
  console.log("hello" + txt);
}
```

上面的示例中，由于没有`return`语句，TypeScript 会推断出函数`hello()`没有返回值。

如果变量被赋值为一个函数，变量的类型有两种写法。

```ts
//方法一
const hello = function (txt: string) {
  console.log("hello" + txt);
};

//方法二
const hello: (txt: string) => void = function (txt) {
  console.log("hello" + txt);
};
```

方法二类型声明也可以使用`type`做一个别名。

```ts
type MyFunc = (txt: string) => void;
const hello: MyFunc = function (txt) {
  console.log("hello" + txt);
};
```

函数的实参个数，可以少于类型指定的参数个数，但是不能多于，即 TypeScript 允许省略参数。

```ts
let myFunc: (a: number, b: number) => number;

myFunc = (a: number) => a; //正确

myFunc = (a: numebr, b: number, c: number) => a + b + c; //报错
```

不同参数数量的函数相互赋值

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; //正确
x = y; //错误
//需要注意的是，如果a和b的类型不相同，也是不可以的。

let x = (a: string) => 0;
let y = (b: number, s: string) => 0;

y = x; //报错
x = y; //报错
```

如果一个变量要套用另一个函数雷星星，有一个小技巧，就是使用`typeof`运算符。

```ts
function add(x: number, y: number) {
  return x + y;
}

const myAdd: typeof add = function (x, y) {
  return x + y;
};
```

函数类型还可以采用对象的写法。

```ts
let add: {
  (x: number, y: number): number;
};

add = function (x, y) {
  return x + y;
};
```

函数类型的对象写法如下

```
{
    (参数列表)：返回值
}
```

这种方式比较少见，但是有一个非常合适的场景：函数本身存在属性。

```ts
function f(x: number) {
  console.log(x);
}

f.version = "1.0";
```

函数`f()`本身还有一个属性`version`。这时，`f`完全就是一个对象，类型就要使用对象的写法。

```ts
let foo: {
  (x: number): void;
  version: string;
} = f;
```

函数类型也可以使用 Interface 来声明，这种写法就是对象写法的翻版，详见(Interface)。

```ts
interface myfn {
  (a: number, b: number): number;
}

var add: myfn = (a, b) => a + b;
```

## Function 类型

TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型。

```ts
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

上面示例中，参数`f`的类型就是`Function`,代表这是一个函数。

Function 类型的值都可以直接执行。

Function 类型的函数可以接受任意数量的参数，每个参数的类型都是 `any` ，返回值的类型也是 `any`，代表没有任何约束，所以不建议使用这个类型，给出函数详细的类型声明会更好。

## 箭头函数

箭头函数式普通函数的一种简化写法，它的类型写法与普通函数类似

```ts
const repeat = (str: string, times: number): string => str.repeat(times);
```

参数为函数

```ts
function greet(fn: (a: string) => void) {
  fn("world");
}
```

## 可选参数

```ts
function f(x?: number) {
  //....
}
f(); //ok
f(10); //ok
```

参数名带有问号，表示改参数的类型实际上是`原始类型|undefined`，它有可能为`undefined`。

```ts
function f(x?: number) {
  return x;
}

f(undefined); //正确
```

但是，如果显式设为`undefined`的参数，就不能省略。

```ts
function f(x: number | undefined) {
  return x;
}

f(); //报错
```

函数的可选参数只能在参数列表的尾部，跟在必选参数的后面。

```ts
let myFunc: (a?: number, b: number) => number; //报错
```

如果前部参数可能为空，这时只能显式注明该参数类型可能为`undefined`

```ts
let myFunc: (a: number | undefined, b: number) => number;
```

函数体内部用到可选参数时，需要判断该参数是否为`undefined`。

```ts
let myFunc: (a: number, b?: number) => number;

myFunc = function (x, y) {
  if (y === undefined) {
    return x;
  }
  return x + y;
};
```

## 参数默认值

一般格式：

```ts
function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y];
}

createPoint(); // [0, 0]
```

上面是将 x 和 y 的默认值设置为 0。
其实也可以不设置类型，当你设置默认值时，TypeScript 可以推导出你想要的格式

```ts
function cratePoint(x = 0, y = 0) {
  return [x, y];
}
```

可选参数不能和默认值同时使用

```ts
function f(x?: number = 0) {
  // ...
}
```

设置默认值后，传入参数为`undefined`也会触发默认值。

```ts
function f(x = 456) {
  return x;
}
f(undefined);
```

具有默认值的参数如果部位与参数列表的末尾，调用时不能省略，如果要触发默认值，必须显式传入`undefined`。

```ts
function add(x: number = 0, y: number) {
  return x + y;
}
add(1); //报错
add(undefined, 1); //正确
```

## 参数解构

格式：

```ts
function f([x, y]: [number, number]) {
  //...
}

function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

参数解构可以结合类型别名（type 命令）一起使用。

```ts
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

## rest 参数

剩余参数：可以是数组，也可能是元祖

```ts
//rest参数为数组
function joinNumbers(...nums:number[]){
  //...
}

//rest参数为元组

function (...args:[boolean,number]){
  //...
}

//rest参数为元组
function f(...args:[boolean, number]) {
  // ...
}
```

注意：元组需要声明每一个剩余参数的类型，如果元组里面的参数是可选的，则要使用可选参数

```ts
function f(...args: [boolean, string?]) {}
```

例子：

```ts
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
```

rest 参数甚至可以嵌套。

```ts
function f(...args: [boolean, string[]]) {
  //...
}
```

rest 参数可以与变量解构结合使用。

```ts
function repeat(...[str, times]: [string, number]): string {
  return str.repeat(times);
}

//等同于
function repeat(str: string, times: number): string {
  return str.repeat(times);
}
```

## readonly 只读参数

如果函数内部不能修改某个参数，可以在函数定义时，在参数类型前加上`readonly`关键字，表示这是只读参数。

```ts
function arraySum(arr: readonly number[]) {
  arr[0] = 0; //报错
}
```

## void 类型

void 表示函数没有返回值

```ts
function f(): void {
  console.log("hello");
}
```

上面示例中，函数`f`没有返回值，类型就要写成`void`。

如果返回其他值，就会报错。

```ts
function f(): void {
  return 123; //报错
}
```

void 类型允许返回`undefined`或`null`

```ts
function f(): void {
  return undefined; //正确
}

function f(): void {
  return null; //正确
}
```

如果打开了`stricNullChecks` 编译选项，那么 void 类型只允许返回`undefined`。如果返回`null`,就会报错。这是因为 JavaScript 规定，如果函数没有返回值，就等同于返回`undefined`。

当函数被赋值给变量时，如果函数的值没有被使用，那么函数的返回值类型也可以设置为 void，但是一旦返回的值被使用，那么返回值就必须规定返回的类型，如下。

```ts
type voidFunc = () => void;

const f: voidFunc = () => {
  return 123;
};

f() * 2; //报错
```

## never 类型

表示肯定不会出现的值，它用在函数的返回值，就表示某个函数肯定不会返回值，即函数不会正常执行结束。

一般有以下这两种情况。

- 抛出错误的函数。

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

需要注意的是，如果你是`return`一个错误对象，那返回值就不是 never 类型

```ts
function fail(): Error {
  return new Error("Something failed");
}
```

- 无限执行的函数。

```ts
const sing = function (): never {
  while (true) {
    console.log("sing");
  }
};
```

## 局部类型

函数内部允许声明其他类型，该类型只在函数内部有效，称为局部类型。

```ts
function hello(txt: string) {
  type message = string;
  let newTxt: message = "hello" + txt;
  return newTxt;
}

const newTxt: message = hello("world"); //报错
```

函数内部声明的类型只能在函数内部使用，外部使用就会报错。

## 高阶函数

一个函数的返回值还是一个函数，那么前一个函数就被称为高阶函数。
如下：

```ts
(someValue: number) => (multiplier: number) => someValue * multiplier;
```

## 函数重载

有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。这种根据参数类型不同，执行不同逻辑的行为，称为函数重载。

```ts
reverse("abc"); //'cba'
reverse([1, 2, 3]); //[3,2,1]
```

如上，reverse 在处理不同的参数时，会出现不同的逻辑。

TypeScript 对于“函数重载”的类型声明方法是，逐一定义每一种情况的类型。

```ts
function reverse(str: string): string;
function reverse(arr: any[]): any[];
```

上面的示例中，分别对函数`reverse()`的两种参数情况，给予了类型声明。但是，到这里还没有结束，后面还必须对函数`reverse()`给予完整的类型声明。

```ts
function reverse(str: string): string;
function reverse(arr: any[]): any[];
function reverse(stringOrArray: string | any[]): string | any[] {
  if (typeof stringOrArray === "string")
    return stringOrArray.split("").reverse().join("");
  else return stringOrArray.slice().reverse();
}
```

JavaScript 函数只能有一个实现，必须在这个实现当中，处理不同的参数。因此函数内部就需要判断参数的类型和个数，并根据判断结果执行不同的操作。

```ts
function add(x: number, y: number): number;
function add(x: any[], y: any[]): any[];
function add(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return [...x, ...y];
  }

  throw new Error("wrong parameters");
}
```

注意在重载的各个类型描述与函数的具体实现之间，不能有其他代码，否则报错。
另外，虽然函数的具体实现里面，有完整的类型声明。但是，函数实际调用的类型，以前面的类型声明为准。比如，上例的函数实现，参数类型和返回值类型都是 number|any[]，但不意味着参数类型为 number 时返回值类型为 any[]。

函数重载的每个类型声明之间，以及类型声明与函数实现的类型之间，不能有冲突。

```ts
// 报错
function fn(x: boolean): void;
function fn(x: string): void;
function fn(x: number | string) {
  console.log(x);
}
```

函数重载的类型声明与函数实现是冲突的，会导致报错。

重载声明的排序很重要，因为 TypeScript 是按照顺序进行检查的，一旦发现符合某个类型声明，就不再往下检查了，所以类型最宽的声明要放在最后面，防止覆盖其他类型声明。

```ts
function f(x: any): number;
function f(x: string): 0 | 1;
function f(x: any): any {
  // ...
}

const a: 0 | 1 = f("hi"); // 报错
```

上面声明中，第一行类型声明 x:any 范围最宽，导致函数 f()的调用都会匹配这行声明，无法匹配第二行类型声明，所以最后一行调用就报错了，因为等号两侧类型不匹配，左侧类型是 0|1，右侧类型是 number。这个函数重载的正确顺序是，第二行类型声明放到第一行的位置。

对象的方法也可以使用重载

```ts
class StringBuilder {
  #data = "";
  add(num: number): this;
  add(bool: boolean): this;
  add(str: string): this;
  add(value: any): this {
    this.#data += String(value);
    return this;
  }

  toString() {
    return this.#data;
  }
}
```

函数重载也可以用来精确描述函数参数与返回值之间的对应关系

```ts
function createElement(tag: "a"): HTMLAnchorElement;
function createElement(tag: "canvas"): HTMLCanvasElement;
function createElement(tag: "table"): HTMLTableElement;
function createElement(tag: string): HTMLElement {
  // ...
}
```

上面示例中，函数重载精确描述了参数`tag`的三个值，所对应的不同的函数返回值。

这个示例的函数重载，也可以用对象表示。

```ts
type CreateElement = {
  (tag: "a"): HTMLAnchorElement;
  (tag: "canvas"): HTMLCanvasElement;
  (tag: "table"): HTMLTableElement;
  (tag: string): HTMLElement;
};
```

由于重载是一种比较复杂的类型声明方法，为了降低复杂性，一般来说，如果可以的话，应该优先使用联合类型替代函数重载，除非多个参数之间、或者某个参数与返回值之间，存在对应关系。

```ts
// 写法一
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any): number {
  return x.length;
}

// 写法二
function len(x: any[] | string): number {
  return x.length;
}
```

## 构造函数

JavaScript 语言使用构造函数，生成对象的实例。
构造函数的最大特点，就必须使用`new`命令调用。

```ts
const d = new Date();
```

上面示例中，Date()就是一个构造函数，使用 new 命令调用，返回 Date 对象的实例。

构造函数的类型写法，就是在参数列表前面加上`new`命令。

```ts
class Animal {
  numLegs: number = 4;
}

type AnimalConstructor = new () => Animal;

function create(c: AnimalConstructor): Animal {
  return new c();
}

const a = create(Animal);
```

上面示例中，类型`AnimalConstructor`就是一个构造函数，而函数`create()`需要传入一个构造函数。在 JavaScript 中，类(class)本质上是构造函数，所以`Animal`这个类可以传入`create()`。

构造函数还有另一种类型写法，就是采用对象形式。

```ts
type F = {
  new (s: string): object;
};
```

上面示例中，类型 F 就是一个构造函数。类型写成一个可执行对象的形式，并且在参数列表前面要加上 new 命令。

某些函数既是构造函数，又可以当作普通函数使用，比如 Date()。这时，类型声明可以写成下面这样。

```ts
type F = {
  new (s: string): object;
  (n?: number): number;
};
```

上面示例中，F 既可以当做普通函数执行，也可以当做构造函数使用。
