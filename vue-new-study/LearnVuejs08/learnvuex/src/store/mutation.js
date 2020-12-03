import {INCREMENT} from "./mutations-types";

export default {
  //方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    // console.log(count)
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    // setTimeout(() => {
    //   state.info.name = 'shaosen'
    // }, 1000)


    state.info.name = 'shaosen'
    // Vue.set(state.info, 'address', '洛杉矶')
    // delete state.info.age
    // Vue.delete(state.info, 'age')
  }
}