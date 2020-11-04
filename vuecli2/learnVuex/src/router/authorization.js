import router from './index'

const whileList = ['/login']

router.beforeEach((to, from, next) => {
  if (whileList.indexOf(to.path) !== -1) {
    next()
  } else {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/')
    }
  }
})
