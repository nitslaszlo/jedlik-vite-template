import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ExamplesView from './views/ExamplesView.vue';
import AccountView from './views/AccountView.vue';
import VTableView from './views/VTableView.vue';
import AboutView from './views/AboutView.vue';
import GridView from './views/GridView.vue';
import Vue3TableLiteView from './views/Vue3TableLiteView.vue'
import VueMasterySocksView from './views/VueMasterySocksView.vue'

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
            path: '/v3table',
            component: Vue3TableLiteView,
        },
        {
            path: '/socks',
            component: VueMasterySocksView,
        },
        {
            path: '/grid',
            component: GridView,
        },
        {
            path: '/about',
            component: AboutView,
        },
    ],
});
