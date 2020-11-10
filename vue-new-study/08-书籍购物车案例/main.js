const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法导论',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 1,
                name: '《unix编程艺术》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 1,
                name: '《编程珠玑》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 1,
                name: '算法导论',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
        ]
    },
    methods: {
        getFinalPrice(price) {
            return '￥' + price.toFixed(2);
        },
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++){
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count;
            // }
            // return totalPrice;
            return this.books.reduce(function (pre, book) {
                return pre + book.price * book.count
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
})


//编程范式：命令编程/声明式编程
const nums = [10, 20, 111, 222, 444, 40, 50]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
console.log(total)

// let total = nums.filter(function (n) {
//     return n < 100;
// }).map(function (n) {
//     return n * 2;
// }).reduce(function (preVlalue, n) {
//     return preVlalue + n;
// }, 0)

// //1.filter函数使用
// let numNums = nums.filter(function (n) {
//     return n < 100;
// })
// console.log(numNums)
//
//
// //2.map函数的使用
// let new2Nums = numNums.map(function (n) {
//     return n * 2
// })
// console.log(new2Nums)
//
// //3.reduce函数使用
// let total = new2Nums.reduce(function (preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total)