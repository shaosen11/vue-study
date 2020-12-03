import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from '../store/mutations-types'

//1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload){
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context)
      setTimeout(() => {
        context.commit('updateName', 'sen')
      }, 1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222';
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  }
}



//2、创建对象
const store = new Vuex.Store({
  state: {
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
  },
  mutations,
  actions:{
    // context: 上下文
    aUpdateInfo(context, payload){
      return new Promise(((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateInfo')
          console.log(payload.message)

          resolve('11111')
        }, 1000)
      }))
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      return age => {
        return state.students.filter(s => s.age > age)
      }
    },

  },
  modules:{
    a: moduleA,
    b: {

    }
  }
})

//3.导出store
export default store
