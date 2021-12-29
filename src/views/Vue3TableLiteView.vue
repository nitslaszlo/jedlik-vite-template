<script setup>
import VueTableLite from 'vue3-table-lite';
import { onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const posts = computed(() => store.getters['posts/getPosts']);
const numberOfPosts = computed(() => store.getters['posts/getNumberOfPosts']);

onMounted(() => {
    store.dispatch('posts/fetchPaginatedPosts', {
        offset: '0',
        limit: '10',
        order: 'title',
        sort: '1',
    });
});

const table = reactive({
    isLoading: false,
    columns: [
        {
            label: 'ID',
            field: '_id',
            width: '10%',
            sortable: true,
            isKey: true,
        },
        {
            label: 'Author',
            field: 'author',
            width: '20%',
            sortable: true,
        },
        {
            label: 'Title',
            field: 'title',
            width: '45%',
            sortable: true,
        },
    ],
    rows: posts,
    totalRecordCount: numberOfPosts,
    sortable: {
        order: 'title',
        sort: 'asc',
    },
});
const doSearch = (offset, limit, order, sort) => {
    table.isLoading = true;
    store.dispatch('posts/fetchPaginatedPosts', {
        offset: offset,
        limit: limit,
        order: order,
        sort: (sort == 'asc' ? '1' : '-1'),
    });
    table.totalRecordCount = numberOfPosts;
    table.sortable.order = order;
    table.sortable.sort = sort;
};

const tableLoadingFinish = () => {
    table.isLoading = false;
};
</script>

<template>
    <v-container class="page text-center">
        <h1 class="text-h4">vue3-table-light</h1>
        <vue-table-lite
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :sortable="table.sortable"
            @do-search="doSearch"
            @is-finished="tableLoadingFinish"
        ></vue-table-lite>
    </v-container>
</template>
