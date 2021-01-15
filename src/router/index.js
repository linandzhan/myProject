import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/index',
    component: () => import('../components/common/Home.vue'),
    meta: { title: '基础框架' },
    children:[
      {
        path:'/dashboard',
        component: () => import('../components/Dashboard.vue'),
        meta: { title: '首页' }
      },
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;

