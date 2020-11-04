<template>
  <div>
    <el-menu
      :default-active="'$store.state.activeMenu'"
      router

      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#9fcbd9"
      active-text-color="#409eff">
      <el-menu-item index="/welcome">首页</el-menu-item>
      <el-submenu :index="formatPath(null, item.name)" v-for="item in $store.getters.firstMenus" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item
          class="menu-second"
          :index="formatPath(item.name, subItem.name)"
          :key="subItem.Id"
          v-for="subItem in $store.getters.secondMenus(item.id)">
          {{subItem.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>


  export default {
    name: "NavSide",
    methods: {
      formatPath(folder, name) {
        name = '/' + name
        if (folder) {
          name = '/' + folder + name
        }
        return name
      }
    },
  }
</script>

<style>
  .menu-second {
    background-color: #1f2d3d !important;
  }

  .menu-second:hover {
    background-color: #001528 !important;
  }

  .el-menu {
    border: none;
  }

  .el-menu > .el-menu-item,
  .el-submenu > .el-submenu__title {
    text-align: left;
  }

</style>
