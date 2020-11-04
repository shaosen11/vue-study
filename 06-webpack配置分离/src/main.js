/* 1.使用connonjs的模块规范 */
const {
	add,
	mul
} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

/* 2.使用ES6的模块化的模块 */
import {
	name,
	age,
	height
} from "./js/info.js"

console.log(name);
console.log(age);
console.log(height)

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

document.writeln('你好,hhhh')

//5.使用vue进行开发
import Vue from 'vue'
import App from './vue/App'

/* 创建Vue实例 */
new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})