import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutation";
import actions from "./action";
import getters from "./getters";
import moduleA from "./modules/moduleA";

//1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students:[
    {id:110, name:"shaosen", age: 18},
    {id:111, name:"james", age: 30},
    {id:112, name:"curry", age: 10}
  ],
  info:{
    name: 'kobe',
    age: 40,
    height: 1.96
  }
}

//2、创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a: moduleA,
  }
})

//3.导出store
export default store
