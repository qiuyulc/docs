//完整引用
// import 'core-js'

//按需引入
// import 'core-js/es/promise'

import count from "./js/count.js";
// import { take } from './js/math.js'
import sum from "./js/sum.js";
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./styl/index.styl";
console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
const result1 = count(2, 1);
const result2 = sum(1, 2, 3, 4);
// console.log(take(1, 2), 1)
console.log(result1, result2);
console.log(111);
console.log(module.hot);

document.getElementById("btn").onclick = function () {
  // /*webpackChunkName:"math"*/ webpack魔法命名
  import(/*webpackChunkName:"math"*/ "./js/math.js").then(({ take }) => {
    console.log(take(1, 2));
  });
};

// 判断是否支持HMR功能
if (module.hot) {
  module.hot.accept(
    "./js/count.js",
    function (count) {
      console.log(count); //保存的是文件路径
    },
    (errorHandler) => {
      console.log(errorHandler);
    }
  );
  module.hot.accept(
    "./js/sum.js",
    function (sum) {
      console.log(sum);
    },
    (errorHandler) => {
      console.log(errorHandler);
    }
  );
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(1));
