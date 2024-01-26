import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/HomeVue'
import Single from '@/views/SingleVue'

Vue.use(VueRouter)

const routes = [
   { path: '/', component: Home },
   { path: '/single/:id', component: Single },
]

const router = new VueRouter({
   mode: 'history',
   routes
})

export default router