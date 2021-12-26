<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
    console.log('account view is mounted!');
    store.dispatch('fetchPosts');
});
</script>

<template>
    <v-container class="page text-center">
        <h1 class="text-h4">Account page</h1>
    </v-container>
</template>
