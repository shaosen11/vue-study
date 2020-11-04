export default {
  aUpdateInfo(context, payload) {
    setTimeout(() => {
      // context.state.info.name = 'ss'
      context.commit('updateInfo')
      console.log(payload);
    }, 1000)
  }
}
