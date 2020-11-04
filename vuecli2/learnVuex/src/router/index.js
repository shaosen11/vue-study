import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login';
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('../views/Welcome')
        },
        {
          path: '/pms/product',
          name: 'Product',
          component: () => import('../views/pms/Product')
        }
      ]
    }
  ]
})
