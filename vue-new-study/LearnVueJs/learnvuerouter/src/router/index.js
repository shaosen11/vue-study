//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from "vue";

// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
const Blog = () => import('../components/Blog')
const Mavon = () => import('../components/mavonEditor')
//1.通过vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children:[
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: '新闻'
        }
      },
      {
        path: 'message',
        component: HomeMessage,
        meta: {
          title: '消息'
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  },
  {
    path: '/blog',
    component: Blog,
    meta: {
      title: '博客'
    }
  },
  {
    path: '/mavon',
    component: Mavon,
    meta: {
      title: 'Mavon'
    }
  }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置钩子
router.beforeEach((to, from, next) => {
  //从form跳转到to
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子
router.afterEach((to, from) => {

})


//3.将router对象传入到Vue实例
export default router
