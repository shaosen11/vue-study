<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick(){
      console.log('homeClick')
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('about')
    }
  }
}
</script>

<style>
  .active{
    color: #ff0000;
  }
</style>
