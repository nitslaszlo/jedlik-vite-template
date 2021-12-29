<script setup>
import { useDisplay } from 'vuetify';
const myColors = ["green-lighten-2", "yellow-lighten-2", "blue-lighten-2", "red-lighten-2"];

const lorem =
    'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.';
</script>

<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4" lg="3">
                <v-card :color="myColors[n % 4]" dark>
                    <v-card-title primary class="title">{{ 'Actual breakpoint: ' +  useDisplay().name.value }}</v-card-title>
                    <v-card-text>{{ lorem.slice(0, n * 23) }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
