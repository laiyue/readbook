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
import BookDetail from '@/views/BookDetail'
import tabLeft from '@/components/tabLeft'
import topic from '@/views/topic'
import ReadBookDetail from '@/views/ReadBookDetail'

Vue.use(Router)

export default new Router({
    routes: [{
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
        {
            path: "/SerializationList",
            name: "SerializationList",
            component: () =>
                import ("@/components/SerializationList")
        },
        { path: "/navBar", name: "NavBar", component: NavBar },
        { path: "/PersonalCenter", name: "PersonalCenter", component: PersonalCenter },
        { path: "/Shop", name: "Shop", component: Shop },
        { path: "/Bottom", name: "Bottom", component: Bottom },
        { path: "/Editinfo", name: "Editinfo", component: Editinfo },
        { path: "/BookDetail", name: "BookDetail", component: BookDetail },
        { path: "/TabLeft", name: "TabLeft", component: tabLeft },
        { path: "/topic", name: "topic", component: topic },
        { path: '/ReadBookDetail', name: 'ReadBookDetail', component: ReadBookDetail }
    ]
})