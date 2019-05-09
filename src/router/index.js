import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import login from '@/views/login'
import BookList from '@/components/BookList'
import NavBar from '@/components/NavBar'
import PersonalCenter from '@/views/PersonalCenter'
import Shop from '@/views/Shop'
import Bottom from '@/components/Bottom'
import Editinfo from '@/views/Editinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    {path:"/Shop",name:"Shop",component:Shop},
    {path:"/Bottom",name:"Bottom",component:Bottom},
    {path:"/Editinfo",name:"Editinfo",component:Editinfo}
  ]
})
