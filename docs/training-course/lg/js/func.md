# 函数式编程范式

## 为什么要学习函数式编程

函数式编程是一个非常古老的概念，遭遇第一台计算机的诞生。

为什么要学习函数式编程？

- 函数式编程是随着 React 的流行收到越来越多的关注。
- Vue3 也开始拥抱函数式编程
- 函数式编程可以抛弃 this
- 打包过程中可以更好的利用 tree shaking 过滤无用代码
- 方便测试，方便并行处理
- 有很多库可以帮助我们进行函数式开发：lodash、underscore、ramda

## 什么是函数式编程

函数式编程(Functional Programming,FP) FP 是编程范式之一，我们常听所得编程范式还有面向过程编程，面相对象编程。

- 面相对象编程的思维方式：把现实世界中的事物抽象层程序世界中的类和对象，通过封装、继承和多态来演示事物事件的联系。
- 函数式编程的思维方式：把现实世界中的事物与事物之间的联系抽象到程序世界（对运算过程进行抽象）
  - 程序的本质：根据输入通过某种运算获得相应的输出，程序开发过程中会涉及到很多有输入和输出的函数。
  - x->f(联系、映射) -> y,y=f(x)
  - "函数式编程中的函数指的不是程序中的函数(方法)"，而是数学中的函数即映射关系，例如：y = sin(x),x 和 y 的关系。
  - 相同的输入始终得到相同的输出(纯函数)
  - 函数式编程用来描述数据(函数)之间的映射。

```js
//非函数式
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
console.log(sum);

// 函数式
function add(n1, n2) {
  return n1 + n2;
}
let sum = add(2, 3);
console.log(sum);
```

## 函数式一等公民

- 函数可以存储在变量中。
- 函数作为参数
- 函数作为返回值

在 JavaScript 中函数就是一个普通对象(可以通过`new Function()`),我们可以把函数存储到变量/数组中，他可以作为另一个函数的参数和返回值，甚至可以在程序运行时通过 `new Function('alert(1)')`来构造一个新的函数。

- 把函数赋值给变量

```js
let fn = function () {
  console.log("Hello First-class Function");
};
fn();

// 一个示例
const BlogController = {
  index(posts) {
    return Viewsindex(posts);
  },
  show(post) {
    return Views.show(post);
  },
  create(attrs) {
    return Db.create(attrs);
  },
  update(post, attrs) {
    return Db.update(post, attrs);
  },
  destroy(post) {
    return Db.destroy(post);
  },
};

//优化
const BlogController = {
  index: Viewsindex,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy,
};
```

- 函数是一等公民是我们后面学习的高阶函数、柯里化的基础。

## 高阶函数

什么是高阶函数

- 高阶函数(Higher-order function)
  - 可以把函数作为参数传递给另一个函数
  - 可以把函数作为另一个函数的返回结果。
- 函数作为参数

```js
//forEach
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

function filter(array, fn) {
  let resuls = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      results.push(array[i]);
    }
  }

  return results;
}
```
