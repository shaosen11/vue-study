import Vue from "vue";

export default  {
  add(state) {
    state.counter++
  },
  sub(state) {
    state.counter--
  },
  addCount(state, count) {
    // console.log(count);
    state.counter += count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    // state.info['address'] = 'maoming'
    Vue.set(state.info, 'address', 'maoming')
    Vue.delete(state.info, 'age')
  }
}
