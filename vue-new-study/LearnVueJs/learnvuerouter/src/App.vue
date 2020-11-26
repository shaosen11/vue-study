<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--    <router-link :to="{path: '/profile', query: {name: 'shaosen', age: 18}}">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-link to="/blog">评论</router-link>
    <router-link to="/mavon">mavon</router-link>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'lisi'
    }
  },
  methods: {
    homeClick(){
      console.log('homeClick')
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('about')
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'shaosen',
          age: 18
        }
      }
    )
    }
  }
}
</script>

<style>
  .active{
    color: #ff0000;
  }
</style>
