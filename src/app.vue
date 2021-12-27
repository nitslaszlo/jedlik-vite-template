<script setup>
import { ref } from 'vue';

const drawer = ref(false);
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
const links = ref([
    {
        icon: 'mdi-github',
        text: 'GitHub repository',
        link: 'https://github.com/nitslaszlo/jedlik-vite-template',
    },
    {
        icon: 'mdi-vuetify',
        text: 'Vuetify 3 home',
        link: 'https://next.vuetifyjs.com/en/getting-started/installation',
    },
]);
</script>

<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <p class="text-center my-3">Routes</p>
            <v-list nav dense>
                <v-list-item
                    v-for="(item, i) in menuItems"
                    :key="i"
                    :prepend-icon="item.icon"
                    :title="item.text"
                    :to="item.route"
                    link
                    @click="drawer = !$isMobile()"
                ></v-list-item>
            </v-list>
            <p class="text-center my-3">Links</p>
            <v-list nav dense>
                <v-list-item
                    v-for="(item, i) in links"
                    :key="i"
                    :prepend-icon="item.icon"
                    :title="item.text"
                    :href="item.link"
                    target="_blank"
                    link
                    @click="drawer = !$isMobile()"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            Jedlik Vite Template
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>
