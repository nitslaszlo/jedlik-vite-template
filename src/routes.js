import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ExamplesView from './views/ExamplesView.vue';
import AccountView from './views/AccountView.vue';
import VTableView from './views/VTableView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/examples',
            component: ExamplesView,
        },
        {
            path: '/account',
            component: AccountView,
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
