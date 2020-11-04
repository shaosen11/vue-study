<template>
    <div>
      <h2>profile</h2>
      <!--等同this.$route.params.name-->
      <!--
          $router为VueRouter实例，想要导航到不同的URL,者使用$router.push
          $route为当前router跳转对象里面可以获得name,path
      -->
      <h2>{{$route.query.name}}</h2>
      <h2>{{$route.query.age}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
