/* 1.使用connonjs的模块规范 */
const {
	add,
	mul
} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

/* 2.使用ES6的模块化的模块 */
import {
	name,
	age,
	height
} from "./info.js"

console.log(name);
console.log(age);
console.log(height)
