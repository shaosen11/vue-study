<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components:{
    HelloVuex
  }
}
</script>

<style>

</style>
