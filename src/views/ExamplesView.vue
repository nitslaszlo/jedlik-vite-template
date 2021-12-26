<script setup>
import Counter from '../components/Counter.vue';
import ColorChecker from '../components/ColorChecker.vue';
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
    <v-container fluid class="page">
        <counter />

        <color-checker class="mt-3" />

        <hello-world msg="alma" />

        <v-btn block flat color="info" class="mt-3" to="/about"> Go To About Us </v-btn>
    </v-container>
</template>
