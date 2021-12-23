<script setup>
import Counter from '../components/Counter.vue';
import ColorChecker from '../components/ColorChecker.vue';
</script>

<template>
    <v-container class="page">
        <counter />

        <color-checker class="mt-3" />

        <v-btn block flat color="info" class="mt-3" to="/about"> Go To About Us </v-btn>
    </v-container>
</template>
