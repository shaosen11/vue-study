<template>
  <div id="app">

    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>


    <button @click="addStudent">addStudent</button>

    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>

    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from './store/mutations-types'

export default {
  name: 'App',
  components:{
    HelloVuex
  },
  computed: {
    // more20stu(){
    //   return this.$store.state.students.filter(s => {
    //     return s.age >= 20
    //   })
    // }
  },
  methods:{
    addition(){
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // this.$store.commit('incrementCount', count)
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 114, name: 'allen', age: 40}
      this.$store.commit('addStudent', stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '消息',
      //   success: () => {
      //     console.log('里面已经完成了')
      //   }
      // })

      this.$store
        .dispatch('aUpdateInfo', '我是携带信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res)
        })
    },
    updateName(){
      this.$store.commit('updateName', 'shaosen')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
