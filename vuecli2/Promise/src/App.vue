<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Hello world')
      reject('Error Data')
    }, 1000)
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  })
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
