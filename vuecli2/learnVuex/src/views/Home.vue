<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <nav-side></nav-side>
      </el-aside>
      <el-container>
        <el-header>
          <nav-top></nav-top>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavTop from '../components/NavTop'
  import NavSide from '../components/NavSide'

  export default {
    name: "Home",
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      NavTop: NavTop,
      NavSide: NavSide
    },
    watch: {
      $route(to) {
        this.$store.commit('selectMenu', to.path)
        // this.selectMenu(to.path)
      }
    },
    mounted() {
      this.$store.commit('initActiveMenu')
      this.$store.getters.getInfo
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #ffffff;
    text-align: center;
    line-height: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #d3dce6 solid 1px;
  }

  .el-aside {
    background-color: #304156;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
