<template>
  <div>
    <i class="el-icon-s-fold"></i>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
         <el-avatar :src="$store.state.loginUser.icon"></el-avatar>
        {{$store.state.loginUser.username}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="change">修改密码</el-dropdown-item>
        <el-dropdown-item command="quit">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import {api_logout} from "../network/api/admin";

  export default {
    name: "NavTop",
    methods: {
      handleCommand(command) {
        console.log(command);
        if (command === 'quit'){
          this.handleLogout()
        }
      },
      async handleLogout() {
        const res = await api_logout()
        if (res.code !== 200){
          this.$message.error(res.message)
          return
        }
        this.$message.success(res.message)
        //清除session
        window.sessionStorage.clear()
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-avatar {
    position: relative;
    top: 12px;
  }
</style>
