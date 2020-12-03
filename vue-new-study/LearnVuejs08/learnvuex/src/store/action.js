export default {
  // context: 上下文
  aUpdateInfo(context, payload) {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload.message)

        resolve('11111')
      }, 1000)
    }))
  }
}
