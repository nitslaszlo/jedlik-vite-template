<script setup>
// eslint-disable-next-line no-undef
defineProps({
    reviews: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br />
                "{{ review.review }}"
                <br />
                <!-- solution -->
                Recommended: {{ review.recommend }}
                <!-- solution -->
            </li>
        </ul>
    </div>
</template>

<style scoped>
h3 {
    font-size: 25px;
}

.review-container {
    width: 425px;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
    margin-left: 40px;
    border: 2px solid #d8d8d8;
}

.review-container li {
    margin-bottom: 30px;
}

ul {
  list-style-type: none;
}

li {
    font-size: 18px;
}
</style>
