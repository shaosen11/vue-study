<template>
  <div>
    <h2>user</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "user",
    computed: {
      name() {
        /*从this.$route.params获取动态路由的name*/
        return this.$route.params.name
      }
    }
  }
</script>

<style scoped>

</style>
