import count from './js/count.js';
import sum from './js/sum.js';
import './css/iconfont.css';
import "./css/index.css";
import "./less/index.less";
import './sass/index.sass';
import './sass/index.scss';
import './styl/index.styl'
console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
const result1 = count(2, 1);
const result2 = sum(1, 2, 3, 4);
console.log(result1, result2);
console.log(111)
console.log(module.hot)
// 判断是否支持HMR功能
if (module.hot) {
    module.hot.accept('./js/count.js', function (count) {
        console.log(count)//保存的是文件路径
    }, (errorHandler) => {
        console.log(errorHandler)
    })
    module.hot.accept('./js/sum.js', function (sum) {
        console.log(sum)
    }, (errorHandler) => {
        console.log(errorHandler)
    })
}