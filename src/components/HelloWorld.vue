<script setup>
// eslint-disable-next-line no-undef
defineProps({
    msg: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <img src="./../assets/logo.png" class="my-3" height="200" />
            </v-col>
            <v-col class="mb-4">
                <h1>{{ msg }}</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: red;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
