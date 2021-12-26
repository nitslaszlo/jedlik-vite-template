<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const loggedIn = computed(() => store.getters.getLoggedIn);

function loginStudent001() {
    store.dispatch('loginUser');
}

function logOut() {
    store.dispatch('logOut');
}
</script>

<template>
    <v-container class="page text-center">
        <h1 class="text-h4">Account page</h1>
        <v-btn v-if="!loggedIn" color="green" class="mt-3" @click="loginStudent001()" >Login with students001</v-btn>
        <v-btn v-else color="red" class="mt-3" @click="logOut()" >Log out</v-btn>
        <h1>Logged in: {{ loggedIn }}</h1>
    </v-container>
</template>
