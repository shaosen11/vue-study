import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)
const state = {
  counter: 1000,
  students: [
    {id: 100, name: 'shaosen', age: 18},
    {id: 111, name: 'kobe', age: 24}
  ],
  info: {
    name: 'shaosen',
    age: 22,
    height: 176.5
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
