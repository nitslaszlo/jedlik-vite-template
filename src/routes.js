import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import VTableView from './views/VTableView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/vtable',
            component: VTableView,
        },
        {
            path: '/about',
            component: () => import('./views/AboutView.vue'),
        },
    ],
});
