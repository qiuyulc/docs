# 类

## 简介

类 (class) 是面向对象编程的基本构件，封装了属性和方法。

### 属性的类型

类的属性可以在顶层声明，也可以在构造方法内部声明。
对于顶层声明的属性，可以在声明时同时给出类型。

```ts
class Point{
    x:number,
    y:number
}
```

如果不给出类型，TypeScript 会认为 `x` 和 `y` 的类型都是 `any`

```ts
// 声明给出初值，可以不写类型，TypeScript 会自动推断属性的类型。
class Point {
  x = 0;
  y = 0;
}
```

TypeScript 有一配置项 `strictPropertyInitialization`,打开后 会检查属性是否设置了初值，没有就报错

```ts
// 打开 strictPropertyInitialization
class Point {
  x: number; // 报错
  y: number; // 报错
}
```

可以使用非空断言

```ts
class Point {
  x!: number;
  y!: number;
}
```

### readonly 修饰符

属性名前面加上 readonly 修饰符，局表示该属性是只读的。实例对象不能修改这个属性。

```ts
class A {
  readonly id = "foo";
}

const a = new A();
a.id = "bar"; //报错
```

readonly 属性的初始值，可以写在顶层属性，也可以写在构造方法里面。

```ts
class A {
  readonly id: string;
  constructor() {
    this.id = "bar";
  }
}
```

### 方法的类型

```ts
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}
```

上面示例中，构造方法 constructor()和普通方法 add()都注明了参数类型，但是省略了返回值类型，因为 TypeScript 可以自己推断出来。

类的方法跟普通函数一样，可以使用参数默认值，以及函数重载。

```ts
class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

上面示例中，如果新建实例时，不提供属性 x 和 y 的值，它们都等于默认值 0。

下面是函数重载的例子。

```ts
class Point {
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: number | string, y?: string) {
    // ...
  }
}
```

另外，构造方法不能声明返回值类型，否则报错，因为它总是返回实例对象。

```ts
class B {
  constructor(): object {
    // 报错
    // ...
  }
}
```

### 存取器方法

存取器(accessor) 是特殊的类方法包括取值器(getter) 和 存值器(setter) 两种方法。

它们用于读写某个属性，取值器用来读取属性，存值器用来写入属性。

```ts
class C {
  _name = "";
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```

ts 对存取器有以下规则。

1. 如果某个属性只有 `get`方法，没有`set`方法。那么该属性自动生成只读属性。

```ts
class C {
  _name = "foo";

  get name() {
    return this._name;
  }
}

const c = new C();
c.name = "bar"; // 报错
```

上面示例中，name 属性没有 set 方法，对该属性赋值就会报错。

2. TypeScript 5.1 版之前，set 方法的参数类型，必须兼容 get 方法的返回值类型，否则报错。

```ts
// TypeScript 5.1 版之前
class C {
  _name = "";
  get name(): string {
    // 报错
    return this._name;
  }
  set name(value: number) {
    this._name = String(value);
  }
}
```

上面示例中，get 方法的返回值类型是字符串，与 set 方法的参数类型 number 不兼容，导致报错。改成下面这样，就不会报错。

```ts
class C {
  _name = "";
  get name(): string {
    return this._name;
  }
  set name(value: number | string) {
    this._name = String(value);
  }
}
```

上面示例中，set 方法的参数类型（number|string）兼容 get 方法的返回值类型（string），这是允许的。

TypeScript 5.1 版做出了改变，现在两者可以不兼容

3. get 方法与 set 方法的可访问性必须一致，要么都为公开方法，要么都为私有方法。

### 属性索引

类允许定义属性索引。

```ts
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  get(s: string) {
    return this[s] as boolean;
  }
}
```

注意，由于类的方法是一种特殊属性(属性值为函数的属性),所以属性索引的类型定义也涵盖了方法。如果一个对象同时定义了属性索引和方法，那么前者必须包含后者的类型。

```ts
class MyClass {
  [s: string]: boolean;
  f() {
    // 报错
    return true;
  }
}
```

上面的实例中，属性索引的类型里面不包括方法，导致后面的方法`f()`定义直接报错。正确的写法是下面这样。

```ts
class MyClass {
  [s: string]: boolean | (() => boolean);
  f() {
    return true;
  }
}
```

属性存取器视同属性。

```ts
class MyClass {
  [s: string]: boolean;

  get isInstance() {
    return true;
  }
}
```

上面示例中，属性 inInstance 的读取器虽然是一个函数方法，但是视同属性，所以属性索引虽然没有涉及方法类型，但是不会报错。

## 类的 interface 接口

### implements 关键字
