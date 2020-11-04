import Vue from 'vue'
import Vuex from 'vuex'
import {api_info} from "../network/api/admin";
Vue.use(Vuex)


const store = new Vuex.Store({
  /*类似date*/
  state: {
    activeMenu: '',
    loginUser: {
      username: '',
      icon: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    },
    menus: []
  },
  /*类似method，但必须是同步*/
  mutations: {
    selectMenu(index) {
      console.log(index);
      store.state.activeMenu = index;
      window.sessionStorage.setItem('activeMenu', index);
    },
    initActiveMenu(){
      store.state.activeMenu = window.sessionStorage.getItem('activeMenu')
      if (!store.state.activeMenu) {
        store.state.activeMenu = '/welcome'
      }
    }
  },
  actions: {

  },
  /*l类似compute*/
  getters: {
    async getInfo() {
      const res = await api_info();
      if (res) {
        store.state.loginUser.icon = res.data.icon
        store.state.loginUser.username = res.data.username
        store.state.menus = res.data.menus
      }
    },
    firstMenus(){
      return store.state.menus.filter(item => item.parentId === 0)
    },
    secondMenus(){
      return parentId => store.state.menus.filter(item => item.parentId === parentId)
    }
  },
  modules: {

  }
})

export default store
