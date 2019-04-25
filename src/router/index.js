import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import login from '@/views/login'
import BookList from '@/components/BookList'
import NavBar from '@/components/NavBar'
import PersonalCenter from '@/views/PersonalCenter'
import Shop from '@/views/Shop'

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
    { path: "/SerializationList", name: "SerializationList", component: () => import("@/components/SerializationList") },
    { path: "/navBar", name: "NavBar", component: NavBar },
    {path:"/PersonalCenter",name:"PersonalCenter",component:PersonalCenter},
    {path:"/Shop",name:"Shop",component:Shop}
  ]
})
