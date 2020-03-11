import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import About from '@/views/About'
import Skills from '@/views/Skills'
import Portfolio from '@/views/Portfolio'
import Contacts from '@/views/Contacts'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/about",
            component: About,
        },
        {
            path: "/skills",
            component: Skills,
        },
        {
            path: "/portfolio",
            component: Portfolio,
        },
        {
            path: "/contacts",
            component: Contacts,
        },
    ],
})