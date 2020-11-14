//1.使用commonjs的模块化
const {add, mul} = require('./mathUtils')

console.log(add(20, 30));
console.log(mul(20, 30));


//2.使用ES6的模块化
import {name, age} from "./info";

console.log(name);
console.log(age);