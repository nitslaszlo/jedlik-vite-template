<script setup>
import { ref } from 'vue';
const drawer = ref(false);
const group = ref(null);
// Search icons: https://materialdesignicons.com/
const menuItems = ref([
    {
        icon: 'mdi-home',
        text: 'Home',
        route: '/',
    },
    {
        icon: 'mdi-soccer',
        text: 'Examples',
        route: '/examples',
    },
    {
        icon: 'mdi-table',
        text: 'v-table',
        route: '/vtable',
    },
    {
        icon: 'mdi-account',
        text: 'Account',
        route: '/account',
    },
    {
        icon: 'mdi-information',
        text: 'About',
        route: '/about',
    },
]);
</script>

<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="text--accent-4">
                    <v-list-item
                        v-for="(item, i) in menuItems"
                        :key="i"
                        :prepend-icon="item.icon"
                        :title="item.text"
                        :to="item.route"
                        link
                    ></v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Jedlik Vite Template</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>
