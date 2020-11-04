<template>
  <div>
    <h2>
      {{$store.state.counter}}
    </h2>

    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>getters</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(10)}}</h2>
    <h2>mutation</h2>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>modules</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    methods: {
      add() {
        this.$store.commit('add')
      },
      sub() {
        this.$store.commit('sub')
      },
      addCount(count) {
        /*1.普通提交*/
        this.$store.commit('addCount', count)
        /*2.特殊提交*/
        // this.$store.commit({
        //   type: 'addCount',
        //   count
        // })
      },
      addStudent() {
        const stu = {id: 114, name: 'alan', age: 35}
        this.$store.commit('addStudent', stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        this.$store.dispatch('aUpdateInfo', '我是payload')
      },
      updateName() {
        this.$store.commit('updateName', 'lisi')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      },
    }
  }
</script>

<style scoped>

</style>
