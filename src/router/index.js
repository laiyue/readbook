import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import login from '@/views/login'
import BookList from '@/components/BookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },  
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/book',
      name: 'BookList',
      component: BookList
    },
    { path: "/SerializationList", name: "SerializationList", component: () => import("@/components/SerializationList") }
  ]
})
