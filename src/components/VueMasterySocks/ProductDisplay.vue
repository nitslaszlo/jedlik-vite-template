<script setup>
import ReviewForm from './ReviewForm.vue';
import ReviewList from './ReviewList.vue';
import { computed, reactive } from 'vue';
import sockBlue from "./../../assets/socks_blue.jpg";
import sockGreen from "./../../assets/socks_green.jpg";

// defineProps is compiler macro, only usable inside <script setup>, do not need to be imported
// eslint-disable-next-line no-undef
const props = defineProps({
    premium: {
        type: Boolean,
        required: true,
    },
});

// defineEmits is compiler macro, only usable inside <script setup>, do not need to be imported
// eslint-disable-next-line no-undef
const emits = defineEmits(['add-to-cart']);

const r = reactive({
    product: 'Socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    details: ['50% cotton', '30% wool', '20% polyester'],
    variants: [
        {
            id: 2234,
            color: 'green',
            image: sockGreen,
            quantity: 10,
        },
        {
            id: 2235,
            color: 'blue',
            image: sockBlue,
            quantity: 5,
        },
    ],
    reviews: [],
});
const title = computed(() => r.brand + ' ' + r.product);
const image = computed(() => r.variants[r.selectedVariant].image);
const inStock = computed(() => r.variants[r.selectedVariant].quantity);
const shipping = computed(() => {
    if (props.premium) {
        return 'Free';
    }
    return 2.99;
});

function addToCart() {
    emits('add-to-cart', r.variants[r.selectedVariant].id);
    r.variants[r.selectedVariant].quantity -= 1; // It was not in +L11-End" branch
}

function updateVariant(index) {
    r.selectedVariant = index;
}

function addReview(review) {
    r.reviews.push(review);
}

</script>

<template>
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" />
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>

                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in r.details" :key="detail">{{ detail }}</li>
                </ul>

                <div
                    v-for="(variant, index) in r.variants"
                    :key="variant.id"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"
                    @mouseover="updateVariant(index)"
                ></div>

                <button
                    class="button"
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                    @click="addToCart"
                >
                    Add to Cart
                </button>
            </div>
        </div>
        <review-list v-if="r.reviews.length" :reviews="r.reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>
</template>

<style scoped>
h1 {
    font-size: 50px;
}

img {
    border: 2px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    padding: 15px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

p {
    font-size: 22px;
}

ul {
    margin-left: 20px;
  list-style-type: none;
}

li {
    font-size: 18px;
}

.button {
    margin: 30px;
    background-color: #39495c;
    border-radius: 5px;
    font-size: 18px;
    width: 160px;
    height: 60px;
    color: white;
    padding: 20px;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
        inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    cursor: pointer;
}

.disabledButton {
    background-color: #d8d8d8;
    cursor: not-allowed;
}
.color-circle {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    border: 2px solid #d8d8d8;
    border-radius: 50%;
}

.product-display {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.product-image,
.product-info {
    width: 50%;
}

@media only screen and (max-width: 600px) {
  .product-display {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}
</style>
