<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
    console.log('about view is mounted!');
    store.dispatch('fetchPosts');
});
</script>

<template>
    <v-container class="page text-center">
        <h1 class="text-h4">This is about us!</h1>

        <v-btn color="primary" to="/" class="mt-3"> Back to home </v-btn>
    </v-container>
</template>
