import './css/index.css'

console.log('hello world');
console.log('22222');
console.log('33333');


const sum = (...arge)=>{
    return arge.reduce((prev, next) => prev + next, 0);
}