<script setup>
import ProductDisplay from '../components/VueMasterySocks/ProductDisplay.vue';
import { reactive } from 'vue';
const r = reactive({ cart: [], premium: true });

function updateCart(id) {
    r.cart.push(id);
    console.log(r.cart);
}
</script>

<template>
    <div class="page">
        <div class="nav-bar"></div>
        <div class="cart">Cart({{ r.cart.length }})</div>
        <product-display :premium="r.premium" @add-to-cart="updateCart"></product-display>
    </div>
</template>

<style scoped>
.page {
    background-color: #f2f2f2;
    margin: 0px;
    font-family: tahoma;
    color: #282828;
}

.cart {
    margin: 25px 100px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 30px 30px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.nav-bar {
    background: linear-gradient(-90deg, #84cf6a, #16c0b0);
    height: 60px;
    margin-bottom: 25px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}
</style>
