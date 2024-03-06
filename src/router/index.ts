import { createRouter, createWebHistory } from 'vue-router'
import PlayerView from '../views/PlayerView.vue'
import PlayerViewNew from '../views/PlayerViewNew.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'player',
            component: PlayerView
        },
        {
            path: '/about',
            name: 'about',
            component: PlayerViewNew
        },
        // {
        //     path: '/home',
        //     name: 'home',
        //     component: HomeView
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
