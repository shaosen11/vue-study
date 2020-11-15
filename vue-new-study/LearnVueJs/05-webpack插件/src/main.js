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

//4.依赖less文件
require('./css/special.less')

document.writeln('shaosen')


//5.使用bue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})