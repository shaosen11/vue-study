import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User';

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: '',
      redirect: 'news'
    },
    {
      path: 'news',
      component: HomeNews
    },
    {
      path: 'message',
      component: HomeMessage
    }
  ]
},
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    /*:name绑定动态路由的值*/
    path: '/user/:name',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach(((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
}))

export default router
