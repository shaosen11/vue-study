<template>
  <!-- 1.页面 -->
  <div>
    <h2 class="title">{{ message }}</h2>
    <br />
    <h2>{{ name }}</h2>
    <hr />
    <Cpn />
    <h2>shaosen</h2>
  </div>
</template>

<script>
// 2.脚本
// 2.1引入另外的Vue
import Cpn from "./Cpn";

// 导出默认组件
export default {
  name: "App",
  // 2.2注册导入组件
  components: {
    Cpn,
  },
  data() {
    return {
      message: "Hello Webpack",
      name: "shaosen",
    };
  },
};
</script>

<style scoped>
/* 3.样式 */
.title {
  color: aqua;
}
</style>
