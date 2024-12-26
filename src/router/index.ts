import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Support from "../pages/Support.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/support',
            component: Support
        }
    ]
})

export default router