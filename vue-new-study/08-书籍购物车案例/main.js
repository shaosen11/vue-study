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
        getFinalPrice(price){
            return '￥' + price.toFixed(2);
        },
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        removeHandle(index){
            this.books.splice(index, 1)
        }
    },
    computed:{
      totalPrice() {
          let totalPrice = 0;
          for (let i = 0; i < this.books.length; i++){
              totalPrice += this.books[i].price * this.books[i].count;
          }
          return totalPrice;
      }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    }
})