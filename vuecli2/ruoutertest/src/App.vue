<template>
  <div id="app">
    <!-- <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" tag="button" replace>about</router-link> -->
    <!--    <button @click="homeClick">home</button>-->
    <!--    <button @click="aboutClick">about</button>-->
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <!--动态录音绑定值-->
    <router-link :to="'/user/'+name">user</router-link>
    <router-link :to="{path: '/profile', query: {name: 'shaosen', age: 18}}">profile</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        name: 'shaosen'
      }
    },
    methods: {
      homeClick() {
        this.$router.push('/home')
      },
      aboutClick() {
        this.$router.push('/about')
      },
      profileClick(){
        this.$router.push({
          path: '/profile',
          query: {
            name: 'shaosen',
            age: 19
          }
        })

      }
    },
  }
</script>

<style>
  .active {
    color: #f00;
  }
</style>
