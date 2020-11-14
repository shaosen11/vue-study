//1.导入{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag){
    console.log('小明是天才，哈哈哈');
    console.log(sum(20, 30));
}

//2.直接导入export定义的变量
import {num1} from "./aaa.js";
console.log(num1)

//3.导入export的function
import {mul} from './aaa.js';

console.log(mul(30, 50));

//4.导入 export  default中的内容
import addr from "./aaa.js";
console.log(addr)

//5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);