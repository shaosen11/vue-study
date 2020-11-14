var name = 'shaosen';
var age = 18;
var flag = true;
function sum(num1, num2) {
    return num1 + num2;
}

if (flag){
    console.log(sum(20, 30));
}

//1.导出方式一：
export {
    flag,
    sum
}

//2.导出方式二：
export var num1 = 1000;

//3.导出函数、类
export function mul(num1, num2) {
    return num1 * num2
}

//5.export default\
const address = '广州';
export default address;