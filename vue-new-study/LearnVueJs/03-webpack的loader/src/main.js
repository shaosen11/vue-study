//1.使用commonjs的模块化
const {add, mul} = require('./js/mathUtils')

console.log(add(20, 30));
console.log(mul(20, 30));


//2.使用ES6的模块化
import {name, age} from "./js/info";

console.log(name);
console.log(age);

//3.依赖CSS文件
require('./css/normal.css')